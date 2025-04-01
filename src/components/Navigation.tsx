
import React from 'react';
import { TicketIcon, CurrencyDollarIcon, UserGroupIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation: React.FC = () => {
  return (
    <div className="flex border-b border-gray-200 px-4 py-2">
      <Button variant="ghost" className="text-gray-500 font-normal flex items-center mr-4">
        <TicketIcon className="h-4 w-4 mr-2" />
        Tickets
      </Button>
      <Button variant="ghost" className="text-gray-500 font-normal flex items-center mr-4">
        <CurrencyDollarIcon className="h-4 w-4 mr-2" />
        Till Management
      </Button>
      <Button variant="ghost" className="text-gray-500 font-normal flex items-center">
        <UserGroupIcon className="h-4 w-4 mr-2" />
        Customers
      </Button>
    </div>
  );
};

export default Navigation;
