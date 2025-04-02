
import React, { useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Info, Smartphone } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { 
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover';

interface Device {
  name: string;
  count?: number;
}

interface TicketData {
  id: string;
  customer: string;
  devices: Device[];
  date: string;
  amount: string;
}

const DeviceDisplay: React.FC<{devices: Device[]}> = ({ devices }) => {
  // Calculate total number of devices
  const totalDevices = devices.reduce((total, device) => {
    return total + (device.count ? device.count : 1);
  }, 0);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="flex items-center cursor-pointer hover:bg-gray-100 px-2 py-1 rounded">
          <Smartphone className="h-4 w-4 mr-1 text-gray-500" />
          <span className="text-sm font-medium">{totalDevices} {totalDevices === 1 ? 'Device' : 'Devices'}</span>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-60 p-3">
        <h3 className="font-medium mb-2">Device Details</h3>
        <div className="space-y-1">
          {devices.map((device, idx) => (
            <div key={idx} className="flex justify-between items-center">
              <Badge variant="outline" className="bg-gray-100 text-gray-700 rounded-full px-2 py-1 text-xs">
                {device.name}
              </Badge>
              {device.count && <span className="text-xs bg-gray-200 px-2 py-0.5 rounded">x{device.count}</span>}
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};

const TicketRow: React.FC<TicketData> = ({ id, customer, devices, date, amount }) => {
  return (
    <tr className="border-b border-gray-200 hover:bg-gray-50">
      <td className="py-3 px-4">
        <Checkbox />
      </td>
      <td className="py-3 px-4 text-sm">{customer}</td>
      <td className="py-3 px-4 text-sm text-gray-500">{id}</td>
      <td className="py-3 px-4">
        <DeviceDisplay devices={devices} />
      </td>
      <td className="py-3 px-4 text-sm text-gray-500">{date}</td>
      <td className="py-3 px-4 text-sm">${amount}</td>
      <td className="py-3 px-4">
        <Badge className="bg-blue-100 text-blue-600 hover:bg-blue-200 rounded-md border-none">Order</Badge>
      </td>
      <td className="py-3 px-4 text-center">
        <Info className="inline text-gray-400 w-5 h-5" />
      </td>
    </tr>
  );
};

const TicketTable: React.FC = () => {
  const ticketData: TicketData[] = [
    {
      id: "#2EE1FF666083",
      customer: "Adrian Machaca",
      devices: [{name: "iPhone 14"}, {name: "Samsung Galaxy 12"}],
      date: "Sept 17, 2024 - 08:28 AM (188 days ago)",
      amount: "0.00"
    },
    {
      id: "#2EE1FF666083",
      customer: "Adrian Machaca",
      devices: [{name: "iPhone 14"}],
      date: "Sept 17, 2024 - 08:28 AM (188 days ago)",
      amount: "0.00"
    },
    {
      id: "#2EE1FF666083",
      customer: "Adrian Machaca",
      devices: [{name: "Motorola Z2"}],
      date: "Sept 17, 2024 - 08:28 AM (188 days ago)",
      amount: "0.00"
    },
    {
      id: "#2EE1FF666083",
      customer: "Adrian Machaca",
      devices: [{name: "iPhone 16e"}, {name: "Poco Phone Gen 3"}],
      date: "Sept 17, 2024 - 08:28 AM (188 days ago)",
      amount: "0.00"
    },
    {
      id: "#2EE1FF666083",
      customer: "Karymee Morales",
      devices: [{name: "iPhone 14"}, {name: "Motorola Z2"}, {name: "Samsung Galaxy 12"}, {name: "Other", count: 2}],
      date: "Sept 17, 2024 - 08:28 AM (188 days ago)",
      amount: "0.00"
    },
    {
      id: "#2EE1FF666083",
      customer: "Adrian Machaca",
      devices: [{name: "Samsung Galaxy 12"}],
      date: "Sept 17, 2024 - 08:28 AM (188 days ago)",
      amount: "0.00"
    },
    {
      id: "#2EE1FF666083",
      customer: "Adrian Machaca",
      devices: [{name: "iPhone 15 Pro"}, {name: "Samsung Galaxy 16"}],
      date: "Sept 17, 2024 - 08:28 AM (188 days ago)",
      amount: "0.00"
    },
    {
      id: "#2EE1FF666083",
      customer: "Adrian Machaca",
      devices: [{name: "iPhone 15 Pro Max"}],
      date: "Sept 17, 2024 - 08:28 AM (188 days ago)",
      amount: "0.00"
    },
    {
      id: "#2EE1FF666083",
      customer: "Adrian Machaca",
      devices: [{name: "iPhone 14"}, {name: "Motorola Z2"}, {name: "Samsung Galaxy 12"}, {name: "Other", count: 3}],
      date: "Sept 17, 2024 - 08:28 AM (188 days ago)",
      amount: "0.00"
    }
  ];

  return (
    <div className="overflow-x-auto border rounded-md bg-white shadow-sm">
      <div className="text-sm text-gray-500 py-3 px-4 border-b border-gray-200">
        1-16 of 16
      </div>
      <table className="w-full">
        <thead className="bg-gray-50 text-left text-sm text-gray-500 border-b border-gray-200">
          <tr>
            <th className="py-3 px-4"><Checkbox /></th>
            <th className="py-3 px-4">Customer</th>
            <th className="py-3 px-4">ID</th>
            <th className="py-3 px-4">Check-Ins</th>
            <th className="py-3 px-4">Date</th>
            <th className="py-3 px-4">Amount</th>
            <th className="py-3 px-4">Status</th>
            <th className="py-3 px-4">Details</th>
          </tr>
        </thead>
        <tbody>
          {ticketData.map((ticket, idx) => (
            <TicketRow
              key={idx}
              id={ticket.id}
              customer={ticket.customer}
              devices={ticket.devices}
              date={ticket.date}
              amount={ticket.amount}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TicketTable;
