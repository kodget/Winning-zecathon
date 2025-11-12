import { useState, useEffect } from 'react';

// Mock API service
const mockAPI = {
  async fetchSMEs(filters = {}) {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const allSMEs = [
      {
        id: 1,
        name: 'Naija Agri-Tech',
        industry: 'Agriculture',
        location: 'Lagos, NG',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD7oScqIP3pOSUpe8YZN-e33E6G1dMN7QPLznaRiTLi4eVaOJ0VW3UR-ebypeNCHN9CTS-_uedqbjUnTIDfzmge84lzTWKMBd9fdPBlYVCbNfHvQsux0VR6qDObZ2bnMlIBIzIUvTBm6WmyDwpMdblHciWUmz_VO7KgKdrBc6B4_Dmf9LhqDsgtb62v4yGX6iOcdRgf3dzWarL-0TXdn4hlJf2IR3-lrGkI5No-IyOh1-2cbN_gYMFtztOBxkcQXag8zNLeLnXMXWM',
        pulseScore: 92,
        profitScore: 88,
        isVerified: true,
        description: 'Innovative agricultural technology solutions for sustainable farming in Nigeria.'
      },
      {
        id: 2,
        name: 'Kobo Retail',
        industry: 'Retail',
        location: 'Abuja, NG',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHFwBFGRJi77Cx9oHhNUczkwFqDSJE4JyNNVEyrJBrdJMI4WM62ETYwlRpXc8ANFeyngm-S2S419q9d9cMccwGy_KOuuLVDG6lYrbpo3ARZ3fRAUc1duoeOrGVoflYAyYzRFBLniNq7gJhX-ID2TO3lw1MMW6lL69qzY0BgfcAzYlTIe5SHHRA3GHTdAIdSxnMyOEFZMg8xL0unb9cxCUQsqDSqEF0zaCT4AUoQOIxq43f3O8cNO2-Y7tWerVQXoDtHjPuvVWb5NA',
        pulseScore: 85,
        profitScore: 75,
        isVerified: true,
        description: 'Modern retail solutions connecting local businesses with customers across Nigeria.'
      },
      {
        id: 3,
        name: 'HealthBridge',
        industry: 'Healthcare',
        location: 'Port Harcourt, NG',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPVA9D3goH7g0HWgHjCVeWbR4cZBO4WF_psX0gvHaM0EbivnXmulylLorIOOSn-W0t-z2V7d4Ngbo6EvWe56cvQ4Uno3Jy9rXXptDH1NsSHbpr8S4JXZvxOUG6xzVesGhi6Q28UsLRa1ozWhgL-2vqrnUqJiPduzg9ir9rDRX-ShC0FOxdYvicXx_25ig3k29WAfG3ezBpXeLaOZlpE5d_Fa3LOisBxT7QHxiRi32mLHLqQBxX0YS6BKaFvJovAg1mFf5Arl_zYRM',
        pulseScore: 78,
        profitScore: 65,
        isVerified: true,
        description: 'Bridging healthcare gaps with innovative medical technology and telemedicine solutions.'
      },
      {
        id: 4,
        name: 'BuildRight Ltd',
        industry: 'Construction',
        location: 'Kano, NG',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuClSGkAbHjJGSyL_QG3eJzsHuZUiUnJYdsTFgcdC2BzvOVLF6d1ISqFAnbcnIxJPMi8CjYvI28GwWcE7q_y6xN_t5R33bpl2sCrjzGOuGjAq0iXFuvESAWITBrWQiKsKa4u6TNLFDyDwOaSJE8piBL-wqjZ2p1fWg1OqfODfg_0O-vjurpK18ZaCri04k6WKaYecgZ9_7Ie6KkNveuCvgqVTRcaZ0SAVvVZEwNq4abQ2MFasrnZOSjmA1RK0tax-9vteP2mmVHnolk',
        pulseScore: 81,
        profitScore: 80,
        isVerified: true,
        description: 'Sustainable construction solutions with focus on affordable housing and infrastructure.'
      },
      {
        id: 5,
        name: 'EduTech Nigeria',
        industry: 'Technology',
        location: 'Lagos, NG',
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400',
        pulseScore: 89,
        profitScore: 82,
        isVerified: true,
        description: 'Educational technology platform revolutionizing learning across Nigerian schools.'
      },
      {
        id: 6,
        name: 'GreenEnergy Solutions',
        industry: 'Manufacturing',
        location: 'Abuja, NG',
        image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400',
        pulseScore: 76,
        profitScore: 71,
        isVerified: true,
        description: 'Renewable energy solutions and solar panel manufacturing for sustainable power.'
      }
    ];

    // Apply filters
    let filteredSMEs = allSMEs;
    
    if (filters.industry && filters.industry !== 'All Industries') {
      filteredSMEs = filteredSMEs.filter(sme => sme.industry === filters.industry);
    }
    
    if (filters.location && filters.location !== 'All Locations (Nigeria)') {
      filteredSMEs = filteredSMEs.filter(sme => sme.location.includes(filters.location));
    }
    
    if (filters.profitScore) {
      filteredSMEs = filteredSMEs.filter(sme => sme.profitScore >= filters.profitScore);
    }

    // Apply sorting
    if (filters.sortBy === 'Highest Pulse Score') {
      filteredSMEs.sort((a, b) => b.pulseScore - a.pulseScore);
    } else if (filters.sortBy === 'Highest Profit Score') {
      filteredSMEs.sort((a, b) => b.profitScore - a.profitScore);
    }

    return {
      data: filteredSMEs,
      total: filteredSMEs.length,
      stats: {
        totalSMEs: allSMEs.length.toLocaleString(),
        avgPulseScore: Math.round(allSMEs.reduce((sum, sme) => sum + sme.pulseScore, 0) / allSMEs.length),
        avgProfitScore: Math.round(allSMEs.reduce((sum, sme) => sum + sme.profitScore, 0) / allSMEs.length),
        topIndustries: 'AgriTech, FinTech'
      }
    };
  }
};

export const useMarketplace = () => {
  const [smes, setSMEs] = useState([]);
  const [stats, setStats] = useState({});
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    industry: 'All Industries',
    location: 'All Locations (Nigeria)',
    profitScore: 0,
    sortBy: 'Highest Pulse Score'
  });

  const fetchData = async (newFilters = filters) => {
    setLoading(true);
    
    try {
      const result = await mockAPI.fetchSMEs(newFilters);
      setSMEs(result.data);
      setStats(result.stats);
    } catch (err) {
      console.error('Marketplace error:', err);
    } finally {
      setLoading(false);
    }
  };

  const updateFilters = (newFilters) => {
    const updatedFilters = { ...filters, ...newFilters };
    setFilters(updatedFilters);
    fetchData(updatedFilters);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    smes,
    stats,
    loading,
    filters,
    updateFilters
  };
};