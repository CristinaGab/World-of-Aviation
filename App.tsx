import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { SearchHero } from './components/SearchHero';
import { Deals } from './components/Deals';
import { Footer } from './components/Footer';
import { ResultsView } from './components/ResultsView';
import { CareersView } from './components/CareersView';
import { searchFlights } from './services/api';
import { SearchParams, SearchResult, AppState } from './types';
import { AlertCircle } from 'lucide-react';

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>(AppState.IDLE);
  const [searchResult, setSearchResult] = useState<SearchResult | null>(null);
  const [errorMsg, setErrorMsg] = useState<string>('');

  const handleSearch = async (params: SearchParams) => {
    setAppState(AppState.SEARCHING);
    setErrorMsg('');
    try {
      const result = await searchFlights(params);
      setSearchResult(result);
      setAppState(AppState.RESULTS);
    } catch (err) {
      console.error(err);
      setErrorMsg("We encountered an issue connecting to the flight database. Please try again.");
      setAppState(AppState.ERROR);
    }
  };

  const resetSearch = () => {
    setAppState(AppState.IDLE);
    setSearchResult(null);
  };
  
  const goToHome = () => {
    setAppState(AppState.IDLE);
    window.scrollTo(0, 0);
  };

  const goToCareers = () => {
    setAppState(AppState.CAREERS);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Navbar onHomeClick={goToHome} />
      
      <main className="flex-grow">
        {/* State: IDLE or SEARCHING or ERROR */}
        {(appState === AppState.IDLE || appState === AppState.SEARCHING || appState === AppState.ERROR) && (
          <>
            <SearchHero onSearch={handleSearch} isLoading={appState === AppState.SEARCHING} />
            
            {appState === AppState.ERROR && (
              <div className="max-w-7xl mx-auto px-4 mt-8">
                <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-xl flex items-center gap-3">
                  <AlertCircle className="w-6 h-6" />
                  <p>{errorMsg}</p>
                </div>
              </div>
            )}
            
            <Deals />
            
            {/* Features Section */}
            <section className="py-20 bg-gray-900 text-white">
               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="text-center max-w-3xl mx-auto mb-16">
                   <h2 className="text-3xl font-bold mb-4">Why fly with VoloVista?</h2>
                   <p className="text-gray-400 text-lg">We combine cutting-edge AI technology with real-time global flight data to bring you the smoothest booking experience.</p>
                 </div>
                 
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                   <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-primary-500 transition-colors">
                     <div className="bg-primary-900/50 w-14 h-14 rounded-xl flex items-center justify-center text-primary-400 mb-6">
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                     </div>
                     <h3 className="text-xl font-bold mb-3">Real-Time Precision</h3>
                     <p className="text-gray-400">Our AI scans thousands of routes instantly to find the most up-to-date schedules and pricing.</p>
                   </div>
                   <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-primary-500 transition-colors">
                     <div className="bg-primary-900/50 w-14 h-14 rounded-xl flex items-center justify-center text-primary-400 mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                     </div>
                     <h3 className="text-xl font-bold mb-3">Best Price Guarantee</h3>
                     <p className="text-gray-400">We compare options across hundreds of airlines and agencies to ensure you never overpay.</p>
                   </div>
                   <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-primary-500 transition-colors">
                     <div className="bg-primary-900/50 w-14 h-14 rounded-xl flex items-center justify-center text-primary-400 mb-6">
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                     </div>
                     <h3 className="text-xl font-bold mb-3">Secure Booking</h3>
                     <p className="text-gray-400">We link you directly to verified airlines and trusted booking partners for a safe transaction.</p>
                   </div>
                 </div>
               </div>
            </section>
          </>
        )}

        {/* State: RESULTS */}
        {appState === AppState.RESULTS && searchResult && (
          <ResultsView result={searchResult} onReset={resetSearch} />
        )}

        {/* State: CAREERS */}
        {appState === AppState.CAREERS && (
          <CareersView />
        )}
      </main>

      <Footer onCareersClick={goToCareers} />
    </div>
  );
};

export default App;