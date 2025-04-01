
import React from 'react';
import { Button } from '@/components/ui/button';
import { Plus, RefreshCw, Download, MoreVertical } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const TicketTools: React.FC = () => {
  return (
    <div className="flex justify-between items-center pb-4">
      <div className="flex space-x-2">
        <Button className="bg-cresco-blue text-white hover:bg-blue-600">
          <Plus className="mr-2 h-4 w-4" />
          Start New Ticket
        </Button>
        <Button variant="ghost" size="icon">
          <RefreshCw className="h-5 w-5 text-gray-500" />
        </Button>
        <Button variant="ghost" size="icon">
          <Download className="h-5 w-5 text-gray-500" />
        </Button>
        <Button variant="ghost" size="icon">
          <MoreVertical className="h-5 w-5 text-gray-500" />
        </Button>
      </div>

      <div className="flex items-center space-x-2">
        <div className="flex items-center">
          <span className="text-sm text-gray-500 mr-2">Time Range:</span>
          <Select defaultValue="any-time">
            <SelectTrigger className="w-36 border-gray-300">
              <SelectValue placeholder="Any Time" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any-time">Any Time</SelectItem>
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="this-week">This Week</SelectItem>
              <SelectItem value="this-month">This Month</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="flex items-center">
          <span className="text-sm text-gray-500 mr-2">Check-In Status:</span>
          <Select defaultValue="any-status">
            <SelectTrigger className="w-36 border-gray-300">
              <SelectValue placeholder="Any Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any-status">Any Status</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="in-progress">In Progress</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="flex items-center">
          <span className="text-sm text-gray-500 mr-2">Payment Status:</span>
          <Select defaultValue="any-status">
            <SelectTrigger className="w-36 border-gray-300">
              <SelectValue placeholder="Any Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any-status">Any Status</SelectItem>
              <SelectItem value="paid">Paid</SelectItem>
              <SelectItem value="unpaid">Unpaid</SelectItem>
              <SelectItem value="partial">Partial</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default TicketTools;
