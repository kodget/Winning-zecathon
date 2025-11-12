import { useState } from 'react';

const Sidebar = ({ filters, onFiltersChange }) => {
  const [localFilters, setLocalFilters] = useState({
    industry: 'All Industries',
    location: 'All Locations (Nigeria)',
    profitScore: 50,
    sortBy: 'Highest Pulse Score',
    ...filters
  });

  const handleFilterChange = (key, value) => {
    const newFilters = { ...localFilters, [key]: value };
    setLocalFilters(newFilters);
    onFiltersChange?.(newFilters);
  };

  return (
    <aside className="w-72 flex-shrink-0 bg-white dark:bg-pulse-dark border-r border-gray-200 dark:border-gray-800 p-6 hidden md:block">
      <h3 className="text-lg font-semibold mb-6 text-pulse-navy dark:text-white">Filters</h3>
      
      <div className="space-y-8">
        <div>
          <label className="block text-sm font-medium text-gray-600 dark:text-gray-400" htmlFor="industry">
            Industry
          </label>
          <select 
            className="mt-1.5 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-pulse-cyan focus:ring-pulse-cyan dark:bg-gray-700 dark:text-white sm:text-sm" 
            id="industry"
            value={localFilters.industry}
            onChange={(e) => handleFilterChange('industry', e.target.value)}
          >
            <option>All Industries</option>
            <option>Technology</option>
            <option>Agriculture</option>
            <option>Retail</option>
            <option>Healthcare</option>
            <option>Manufacturing</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-600 dark:text-gray-400" htmlFor="location">
            Location
          </label>
          <select 
            className="mt-1.5 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-pulse-cyan focus:ring-pulse-cyan dark:bg-gray-700 dark:text-white sm:text-sm" 
            id="location"
            value={localFilters.location}
            onChange={(e) => handleFilterChange('location', e.target.value)}
          >
            <option>All Locations (Nigeria)</option>
            <option>Lagos</option>
            <option>Abuja</option>
            <option>Port Harcourt</option>
            <option>Kano</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-600 dark:text-gray-400" htmlFor="profit-score">
            Profit Score Range
          </label>
          <input 
            className="mt-3 w-full h-1.5 bg-pulse-neutral-dark dark:bg-gray-700 rounded-full appearance-none cursor-pointer accent-pulse-cyan" 
            id="profit-score" 
            max="100" 
            min="0" 
            type="range" 
            value={localFilters.profitScore}
            onChange={(e) => handleFilterChange('profitScore', parseInt(e.target.value))}
          />
          <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-2">
            <span>0</span>
            <span>{localFilters.profitScore}</span>
            <span>100</span>
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-600 dark:text-gray-400">
            Sort by
          </label>
          <select 
            className="mt-1.5 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-pulse-cyan focus:ring-pulse-cyan dark:bg-gray-700 dark:text-white sm:text-sm" 
            id="sort-by"
            value={localFilters.sortBy}
            onChange={(e) => handleFilterChange('sortBy', e.target.value)}
          >
            <option>Highest Pulse Score</option>
            <option>Highest Profit Score</option>
            <option>Newest</option>
          </select>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;