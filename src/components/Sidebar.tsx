
import React from 'react';
import { ShoppingBasket, ClipboardList, Users, DollarSign, BarChart2, Star, Ticket } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
  to: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, isActive = false, to }) => {
  return (
    <Link to={to}>
      <div className={`flex flex-col items-center justify-center py-4 text-xs ${isActive ? 'text-cresco-blue font-semibold' : 'text-gray-500'}`}>
        {icon}
        <span className="mt-1">{label}</span>
      </div>
    </Link>
  );
};

const Sidebar: React.FC = () => {
  return (
    <div className="bg-white border-r border-gray-200 w-16 flex flex-col items-center">
      <div className="p-3 border-b border-gray-200 w-full flex justify-center">
        <ShoppingBasket className="text-cresco-blue" />
        <div className="text-xs text-center mt-1">
          <div>Point</div>
          <div>of Sale</div>
        </div>
      </div>
      
      <div className="flex flex-col w-full">
        <SidebarItem 
          icon={<ClipboardList size={20} />} 
          label="Inventory" 
          to="/inventory" 
        />
        <SidebarItem 
          icon={<BarChart2 size={20} />} 
          label="Reports" 
          to="/reports" 
        />
        <SidebarItem 
          icon={<DollarSign size={20} />} 
          label="Expenses" 
          to="/expenses" 
        />
        <SidebarItem 
          icon={<ShoppingBasket size={20} />} 
          label="Trade-Ins" 
          to="/trade-ins" 
        />
        <SidebarItem 
          icon={<Star size={20} />} 
          label="Reviews" 
          to="/reviews" 
        />
        <SidebarItem 
          icon={<Ticket size={20} />} 
          label="Tickets" 
          to="/tickets"
          isActive={true} 
        />
      </div>
    </div>
  );
};

export default Sidebar;
