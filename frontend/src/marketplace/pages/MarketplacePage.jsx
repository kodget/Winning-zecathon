import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import StatsCards from '../components/StatsCards';
import SMECard from '../components/SMECard';
import Pagination from '../components/Pagination';
import SMEProfile from '../components/SMEProfile';
import { useMarketplace } from '../hooks/useMarketplace';

const MarketplacePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedSME, setSelectedSME] = useState(null);
  const [showProfile, setShowProfile] = useState(false);
  const { smes, stats, loading, filters, updateFilters } = useMarketplace();

  const handleSearch = (query) => {
    // Search functionality would be implemented here
    console.log('Searching for:', query);
  };

  const handleFiltersChange = (newFilters) => {
    updateFilters(newFilters);
  };

  const handleViewDetails = (sme) => {
    setSelectedSME(sme);
    setShowProfile(true);
  };

  const handleCloseProfile = () => {
    setShowProfile(false);
    setSelectedSME(null);
  };

  const handleInvestment = (sme) => {
    console.log('Investment confirmed for:', sme.name);
    // Here you would integrate with payment processing
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Here you would typically fetch new data for the page
    console.log('Page changed to:', page);
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col font-display bg-pulse-neutral-light dark:bg-pulse-dark text-pulse-dark dark:text-pulse-light">
      <Header onSearch={handleSearch} />
      
      <div className="flex flex-1">
        <Sidebar filters={filters} onFiltersChange={handleFiltersChange} />
        
        <motion.main 
          className="flex-1 p-6 lg:p-8 bg-pulse-neutral-light dark:bg-pulse-navy"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <StatsCards stats={stats} />
          
          <AnimatePresence mode="wait">
            {loading ? (
              <motion.div 
                className="flex items-center justify-center py-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div 
                  className="w-12 h-12 border-4 border-pulse-cyan border-t-transparent rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>
            ) : (
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, staggerChildren: 0.1 }}
              >
                {smes.map((sme, index) => (
                  <motion.div
                    key={sme.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <SMECard 
                      sme={sme} 
                      onViewDetails={handleViewDetails}
                    />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
          
          {!loading && smes.length > 0 && (
            <Pagination 
              currentPage={currentPage}
              totalPages={Math.ceil(smes.length / 8)}
              onPageChange={handlePageChange}
            />
          )}
        </motion.main>
      </div>
      
      {/* SME Profile Modal */}
      <AnimatePresence>
        {showProfile && selectedSME && (
          <SMEProfile 
            sme={selectedSME}
            onClose={handleCloseProfile}
            onInvest={handleInvestment}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default MarketplacePage;