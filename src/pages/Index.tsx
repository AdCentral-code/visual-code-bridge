
import React from 'react';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import Navigation from '@/components/Navigation';
import TicketTools from '@/components/TicketTools';
import TicketTable from '@/components/TicketTable';

const Index = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        <Navigation />
        
        <main className="flex-1 overflow-y-auto p-4">
          <TicketTools />
          <TicketTable />
        </main>
      </div>
    </div>
  );
};

export default Index;
