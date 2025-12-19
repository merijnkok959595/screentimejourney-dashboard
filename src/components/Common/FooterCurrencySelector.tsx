'use client';
import React, { useState, useEffect, useRef } from 'react';
import { COUNTRIES, REGIONS, getCountryByCode, getCountriesBySearch, formatPrice, detectUserCountry, Country } from '@/lib/countries';

interface FooterCurrencySelectorProps {
  className?: string;
}

const FooterCurrencySelector: React.FC<FooterCurrencySelectorProps> = ({ 
  className = '' 
}) => {
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Initialize country on component mount
  useEffect(() => {
    const initCountry = async () => {
      try {
        // Try to get saved country first (browser only)
        const savedCode = typeof window !== 'undefined' ? localStorage.getItem('selected_country') : null;
        if (savedCode) {
          const country = getCountryByCode(savedCode);
          if (country) {
            setSelectedCountry(country);
            setIsLoading(false);
            return;
          }
        }

        // Auto-detect if no saved preference
        const detectedCode = await detectUserCountry();
        const country = getCountryByCode(detectedCode);
        if (country) {
          setSelectedCountry(country);
          if (typeof window !== 'undefined') {
            localStorage.setItem('selected_country', detectedCode);
          }
        }
      } catch (error) {
        console.log('Footer selector fallback - setting Germany as default');
        // Fallback to Germany (EUR)
        const defaultCountry = getCountryByCode('DE');
        if (defaultCountry) {
          setSelectedCountry(defaultCountry);
        } else {
          // Ultimate fallback - set first country from list
          console.log('No Germany found, setting first country:', COUNTRIES[0]);
          setSelectedCountry(COUNTRIES[0] || null);
        }
      } finally {
        setIsLoading(false);
      }
    };

    initCountry();
  }, []);

  // Focus search input when dropdown opens
  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      setTimeout(() => searchInputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSearchTerm('');
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleCountrySelect = (country: Country) => {
    setSelectedCountry(country);
    if (typeof window !== 'undefined') {
      localStorage.setItem('selected_country', country.code);
    }
    setIsOpen(false);
    setSearchTerm('');
    
    // Trigger a custom event to update other components
    window.dispatchEvent(new CustomEvent('countryChange', { 
      detail: { 
        country: country.code,
        currency: country.currency,
        price: country.price,
        symbol: country.symbol
      } 
    }));
  };

  const filteredCountries = searchTerm 
    ? getCountriesBySearch(searchTerm)
    : COUNTRIES;

  console.log('FooterCurrencySelector render:', {
    isOpen,
    countriesLength: COUNTRIES.length,
    filteredLength: filteredCountries.length,
    selectedCountry,
    isLoading
  });

  // Group countries by region for better UX
  const groupedCountries = Object.entries(REGIONS).reduce((acc, [region, codes]) => {
    const regionCountries = codes
      .map(code => getCountryByCode(code))
      .filter((country): country is Country => country !== undefined)
      .filter(country => 
        !searchTerm || 
        country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        country.currency.toLowerCase().includes(searchTerm.toLowerCase())
      );
    
    if (regionCountries.length > 0) {
      acc[region] = regionCountries;
    }
    
    return acc;
  }, {} as Record<string, Country[]>);

  if (isLoading || !selectedCountry) {
    return (
      <div className={`disclosure relative ${className}`}>
        <div className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md bg-transparent text-gray-700">
          <span>Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="disclosure relative" ref={dropdownRef}>
      <button
        type="button"
        className={`disclosure__button footer-currency-selector flex items-center gap-2 px-4 py-2 border-2 border-white rounded-md bg-transparent text-white transition-all duration-300 text-sm font-medium relative overflow-hidden ${className}`}
        style={{ 
          textAlign: 'left', 
          justifyContent: 'flex-start',
          backgroundImage: 'linear-gradient(to right, transparent 100%, white 0%)',
          backgroundSize: '200% 100%',
          backgroundPosition: '100% 0',
          backgroundRepeat: 'no-repeat',
          transition: 'all 0.3s ease-out'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundImage = 'linear-gradient(to right, white 100%, white 0%)';
          e.currentTarget.style.color = '#111827';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundImage = 'linear-gradient(to right, transparent 100%, white 0%)';
          e.currentTarget.style.color = 'white';
        }}
        aria-expanded={isOpen}
        onClick={() => {
          console.log('Footer currency selector clicked, isOpen:', !isOpen);
          setIsOpen(!isOpen);
        }}
      >
        <span className="flex items-center gap-2">
          <span className="whitespace-nowrap">{selectedCountry.name} | {selectedCountry.currency}</span>
        </span>
        <svg
          className={`icon icon-caret w-3 h-3 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          viewBox="0 0 10 6"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M9.354.646a.5.5 0 0 0-.708 0L5 4.293 1.354.646a.5.5 0 0 0-.708.708l4 4a.5.5 0 0 0 .708 0l4-4a.5.5 0 0 0 0-.708"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <>
          <div 
            className="disclosure__list-wrapper country-selector fixed bottom-20 left-4 right-4 bg-[#2E0456] rounded-lg shadow-2xl border-2 border-purple-300 max-w-sm max-h-[400px] overflow-hidden" 
            style={{ 
              zIndex: 99999,
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 2px rgba(147, 51, 234, 0.3)'
            }}
          >
            {/* Search Input */}
            <div className="p-3 border-b border-purple-400">
              <div className="relative">
                <svg 
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-300"
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search countries or currencies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all font-medium"
                />
              </div>
            </div>
            
            {/* Countries List */}
            <div className="disclosure__list country-selector__list max-h-[300px] overflow-y-auto">
              {searchTerm ? (
                // Show search results
                <div className="py-1">
                  {filteredCountries.length > 0 ? (
                    <ul role="list" className="list-unstyled">
                      {filteredCountries.map((country) => (
                        <li key={country.code} className="disclosure__item">
                          <button
                            className={`w-full text-left disclosure__link grid grid-cols-[auto_1fr_auto] gap-3 px-4 py-2.5 text-sm hover:bg-purple-400 hover:text-white transition-colors ${
                              selectedCountry.code === country.code
                                ? "bg-purple-400 text-white font-medium"
                                : "text-white"
                            }`}
                            onClick={() => handleCountrySelect(country)}
                          >
                            <span
                              className={`icon-checkmark w-4 h-4 ${
                                selectedCountry.code === country.code ? "block" : "invisible"
                              }`}
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 12 9" className="w-full h-full text-white">
                                <path fillRule="evenodd" d="M11.35.643a.5.5 0 0 1 .006.707l-6.77 6.886a.5.5 0 0 1-.719-.006L0.638 4.845a.5.5 0 1 1 .724-.69l2.872 3.011 6.41-6.517a.5.5 0 0 1 .707-.006z" clipRule="evenodd" />
                              </svg>
                            </span>
                            <span className="country text-white text-sm font-bold">{country.name}</span>
                            <span className="localization-form__currency text-gray-200 text-xs whitespace-nowrap font-semibold">
                              {country.currency} {formatPrice(country)}
                            </span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="px-4 py-3 text-white text-sm text-center bg-purple-400 font-medium">
                      No countries found for "{searchTerm}"
                    </div>
                  )}
                </div>
              ) : (
                // Show grouped by region
                <div className="py-1">
                  {Object.entries(groupedCountries).map(([region, countries]) => (
                    <div key={region}>
                        <div className="px-4 py-2 text-white text-xs font-bold uppercase tracking-wider border-t border-purple-400 first:border-t-0 bg-purple-400">
                          {region}
                        </div>
                      <ul role="list" className="list-unstyled">
                        {countries.map((country) => (
                          <li key={country.code} className="disclosure__item">
                            <button
                              className={`w-full text-left disclosure__link grid grid-cols-[auto_1fr_auto] gap-3 px-4 py-2.5 text-sm hover:bg-purple-400 hover:text-white transition-colors ${
                                selectedCountry.code === country.code
                                  ? "bg-purple-400 text-white font-bold"
                                  : "text-white hover:font-medium"
                              }`}
                              onClick={() => handleCountrySelect(country)}
                            >
                              <span
                                className={`icon-checkmark w-4 h-4 ${
                                  selectedCountry.code === country.code ? "block" : "invisible"
                                }`}
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 12 9" className="w-full h-full text-white">
                                  <path fillRule="evenodd" d="M11.35.643a.5.5 0 0 1 .006.707l-6.77 6.886a.5.5 0 0 1-.719-.006L0.638 4.845a.5.5 0 1 1 .724-.69l2.872 3.011 6.41-6.517a.5.5 0 0 1 .707-.006z" clipRule="evenodd" />
                                </svg>
                              </span>
                              <span className="country text-white text-sm font-bold">{country.name}</span>
                              <span className="localization-form__currency text-gray-200 text-xs whitespace-nowrap font-semibold">
                                {country.currency} {formatPrice(country)}
                              </span>
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="country-selector__overlay fixed inset-0" style={{ zIndex: 99998 }} onClick={() => setIsOpen(false)} />
        </>
      )}
    </div>
  );
};

export default FooterCurrencySelector;