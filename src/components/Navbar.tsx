
import React from 'react';
import { Search, Menu, SlidersHorizontal, Download, RefreshCw, MoreVertical } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Navbar: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200 p-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-medium text-gray-400">Cresco</div>
        
        {/* Search bar */}
        <div className="flex-1 max-w-xl mx-8 relative">
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <Search size={18} />
          </div>
          <Input 
            type="text"
            placeholder="Search for ticket ID, check-in ID, or customer..."
            className="w-full pl-10 pr-4 py-2 border rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-cresco-blue"
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <SlidersHorizontal size={18} />
          </div>
        </div>
        
        {/* Right side controls */}
        <div>
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
