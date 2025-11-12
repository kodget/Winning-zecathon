import { motion } from 'framer-motion';
import { useState } from 'react';

const SMECard = ({ sme, onViewDetails }) => {
  const [isHovered, setIsHovered] = useState(false);
  const {
    id,
    name,
    industry,
    location,
    image,
    pulseScore,
    profitScore,
    isVerified = true
  } = sme;

  const handleViewDetails = () => {
    onViewDetails?.(sme);
  };

  return (
    <motion.div 
      className="flex flex-col rounded-xl bg-white dark:bg-pulse-dark shadow-soft overflow-hidden cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ 
        y: -8, 
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
      transition={{ duration: 0.3 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative h-32 bg-gray-200 dark:bg-gray-700 overflow-hidden">
        <motion.img 
          alt={`${name} business image`} 
          className="object-cover w-full h-full" 
          src={image}
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.3 }}
        />
        <motion.div 
          className="absolute inset-0 bg-pulse-cyan/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>
      
      <div className="p-4 flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h4 className="text-base font-bold text-pulse-navy dark:text-white pr-2">
            {name}
          </h4>
          {isVerified && (
            <div className="flex-shrink-0 flex items-center gap-1.5 text-pulse-green bg-pulse-green/10 px-2 py-0.5 rounded-full">
              <span className="material-symbols-outlined text-sm">verified</span>
              <span className="text-xs font-semibold">Verified</span>
            </div>
          )}
        </div>
        
        <p className="text-xs text-gray-500 dark:text-gray-400">
          {industry} • {location}
        </p>
        
        <div className="mt-4 flex items-center justify-around gap-4">
          <motion.div 
            className="text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <p className="text-[11px] text-gray-500 dark:text-gray-400">Pulse Score</p>
            <motion.p 
              className="text-2xl font-bold text-pulse-cyan"
              animate={{ 
                scale: isHovered ? [1, 1.1, 1] : 1,
                color: isHovered ? "#00D1C5" : "#00C4B4"
              }}
              transition={{ duration: 0.5 }}
            >
              {pulseScore}
            </motion.p>
          </motion.div>
          <motion.div 
            className="text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <p className="text-[11px] text-gray-500 dark:text-gray-400">Profit Score</p>
            <motion.p 
              className="text-2xl font-bold text-pulse-green"
              animate={{ 
                scale: isHovered ? [1, 1.1, 1] : 1
              }}
              transition={{ duration: 0.5 }}
            >
              {profitScore}
            </motion.p>
          </motion.div>
        </div>
      </div>
      
      <motion.button 
        className="block w-full text-center bg-pulse-neutral-light dark:bg-pulse-dark/50 px-4 py-2.5 text-sm font-semibold text-pulse-navy dark:text-pulse-cyan transition-colors"
        onClick={handleViewDetails}
        whileHover={{ 
          backgroundColor: "rgba(0, 196, 180, 0.1)",
          color: "#00C4B4"
        }}
        whileTap={{ scale: 0.98 }}
        animate={{ 
          backgroundColor: isHovered ? "rgba(0, 196, 180, 0.05)" : "transparent"
        }}
        transition={{ duration: 0.2 }}
      >
        <motion.span
          animate={{ x: isHovered ? 4 : 0 }}
          transition={{ duration: 0.2 }}
        >
          View Details
        </motion.span>
      </motion.button>
    </motion.div>
  );
};

export default SMECard;