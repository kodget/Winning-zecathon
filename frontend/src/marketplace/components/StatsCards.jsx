import { motion } from 'framer-motion';

const StatsCards = ({ stats }) => {
  const defaultStats = {
    totalSMEs: '1,245',
    avgPulseScore: '82',
    avgProfitScore: '78',
    topIndustries: 'AgriTech, FinTech',
    ...stats
  };

  const statsData = [
    {
      icon: 'storefront',
      label: 'Total Verified SMEs',
      value: defaultStats.totalSMEs,
      color: 'pulse-cyan'
    },
    {
      icon: 'trending_up',
      label: 'Avg Pulse Score',
      value: defaultStats.avgPulseScore,
      color: 'pulse-cyan'
    },
    {
      icon: 'monitoring',
      label: 'Avg Profit Score',
      value: defaultStats.avgProfitScore,
      color: 'pulse-green'
    },
    {
      icon: 'category',
      label: 'Top Industries',
      value: defaultStats.topIndustries,
      color: 'pulse-pink',
      isText: true
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {statsData.map((stat, index) => (
        <motion.div 
          key={index} 
          className="flex items-start gap-4 rounded-xl p-5 bg-white dark:bg-pulse-dark shadow-soft"
          variants={cardVariants}
          whileHover={{ 
            y: -4,
            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
          }}
          transition={{ duration: 0.2 }}
        >
          <motion.div 
            className={`flex items-center justify-center size-10 rounded-lg bg-${stat.color}/10 text-${stat.color}`}
            whileHover={{ 
              scale: 1.1,
              rotate: [0, -5, 5, 0]
            }}
            transition={{ duration: 0.3 }}
          >
            <span className="material-symbols-outlined">{stat.icon}</span>
          </motion.div>
          <div>
            <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">{stat.label}</p>
            <motion.p 
              className={`text-pulse-navy dark:text-white ${stat.isText ? 'text-base' : 'text-2xl'} font-bold`}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
            >
              {stat.value}
            </motion.p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default StatsCards;