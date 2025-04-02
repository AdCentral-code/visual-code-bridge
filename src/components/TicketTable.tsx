import React, { useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Info, Smartphone } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import DeviceDetailsDrawer from './DeviceDetailsDrawer';

interface Device {
  name: string;
  count?: number;
  imei?: string;
  batteryHealth?: string;
  checkInNumber?: string;
  brand?: string;
  location?: string;
  status?: 'pending' | 'in-progress' | 'completed' | 'waiting';
}

interface TicketData {
  id: string;
  customer: string;
  devices: Device[];
  date: string;
  amount: string;
}

const DeviceDisplay: React.FC<{devices: Device[]}> = ({ devices }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  
  // Calculate total number of devices
  const totalDevices = devices.reduce((total, device) => {
    return total + (device.count ? device.count : 1);
  }, 0);

  return (
    <>
      <div 
        onClick={() => setIsDrawerOpen(true)} 
        className="flex items-center cursor-pointer hover:bg-gray-100 px-2 py-1 rounded"
      >
        <Smartphone className="h-4 w-4 mr-1 text-gray-500" />
        <span className="text-sm font-medium">{totalDevices} {totalDevices === 1 ? 'Device' : 'Devices'}</span>
      </div>
      
      <DeviceDetailsDrawer 
        isOpen={isDrawerOpen} 
        onClose={() => setIsDrawerOpen(false)}
        devices={devices}
      />
    </>
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
      devices: [
        {
          name: "iPhone 14", 
          brand: "Apple",
          imei: "359281067314356",
          batteryHealth: "87%",
          checkInNumber: "CHK-001",
          location: "Front Counter",
          status: "in-progress"
        }, 
        {
          name: "Galaxy S22", 
          brand: "Samsung",
          imei: "490173826401837",
          batteryHealth: "92%",
          checkInNumber: "CHK-002",
          location: "Back Room",
          status: "pending"
        }
      ],
      date: "Sept 17, 2024 - 08:28 AM (188 days ago)",
      amount: "0.00"
    },
    {
      id: "#2EE1FF666083",
      customer: "Adrian Machaca",
      devices: [
        {
          name: "iPhone 14", 
          brand: "Apple",
          imei: "359281067319876",
          batteryHealth: "65%",
          checkInNumber: "CHK-003",
          location: "Repair Desk",
          status: "in-progress"
        }
      ],
      date: "Sept 17, 2024 - 08:28 AM (188 days ago)",
      amount: "0.00"
    },
    {
      id: "#2EE1FF666083",
      customer: "Adrian Machaca",
      devices: [
        {
          name: "Moto Z2", 
          brand: "Motorola",
          imei: "389175026374918",
          batteryHealth: "75%",
          checkInNumber: "CHK-004",
          location: "Storage",
          status: "waiting"
        }
      ],
      date: "Sept 17, 2024 - 08:28 AM (188 days ago)",
      amount: "0.00"
    },
    {
      id: "#2EE1FF666083",
      customer: "Adrian Machaca",
      devices: [
        {
          name: "iPhone 16e", 
          brand: "Apple",
          imei: "351927604815273",
          batteryHealth: "98%",
          checkInNumber: "CHK-005",
          location: "Repair Desk",
          status: "pending"
        }, 
        {
          name: "Poco Phone Gen 3", 
          brand: "Xiaomi",
          imei: "490172356014789",
          batteryHealth: "80%",
          checkInNumber: "CHK-006",
          location: "Front Counter",
          status: "waiting"
        }
      ],
      date: "Sept 17, 2024 - 08:28 AM (188 days ago)",
      amount: "0.00"
    },
    {
      id: "#2EE1FF666083",
      customer: "Karymee Morales",
      devices: [
        {
          name: "iPhone 14", 
          brand: "Apple",
          imei: "359281067372541",
          batteryHealth: "91%",
          checkInNumber: "CHK-007",
          location: "Back Room",
          status: "completed"
        }, 
        {
          name: "Moto Z2", 
          brand: "Motorola",
          imei: "391742058163498",
          batteryHealth: "63%",
          checkInNumber: "CHK-008",
          location: "Front Counter",
          status: "in-progress"
        }, 
        {
          name: "Galaxy S22", 
          brand: "Samsung",
          imei: "490182735601489",
          batteryHealth: "88%",
          checkInNumber: "CHK-009",
          location: "Repair Desk",
          status: "pending"
        }, 
        {
          name: "Other", 
          count: 2,
          location: "Storage",
          status: "waiting"
        }
      ],
      date: "Sept 17, 2024 - 08:28 AM (188 days ago)",
      amount: "0.00"
    },
    {
      id: "#2EE1FF666083",
      customer: "Adrian Machaca",
      devices: [
        {
          name: "Galaxy S22", 
          brand: "Samsung",
          imei: "490182735694321",
          batteryHealth: "82%",
          checkInNumber: "CHK-010",
          location: "Front Counter",
          status: "in-progress"
        }
      ],
      date: "Sept 17, 2024 - 08:28 AM (188 days ago)",
      amount: "0.00"
    },
    {
      id: "#2EE1FF666083",
      customer: "Adrian Machaca",
      devices: [
        {
          name: "iPhone 15 Pro", 
          brand: "Apple",
          imei: "352918706437154",
          batteryHealth: "99%",
          checkInNumber: "CHK-011",
          location: "Repair Desk",
          status: "pending"
        }, 
        {
          name: "Galaxy S16", 
          brand: "Samsung",
          imei: "490182735612345",
          batteryHealth: "85%",
          checkInNumber: "CHK-012",
          location: "Back Room",
          status: "waiting"
        }
      ],
      date: "Sept 17, 2024 - 08:28 AM (188 days ago)",
      amount: "0.00"
    },
    {
      id: "#2EE1FF666083",
      customer: "Adrian Machaca",
      devices: [
        {
          name: "iPhone 15 Pro Max", 
          brand: "Apple",
          imei: "352918706437199",
          batteryHealth: "100%",
          checkInNumber: "CHK-013",
          location: "Front Counter",
          status: "completed"
        }
      ],
      date: "Sept 17, 2024 - 08:28 AM (188 days ago)",
      amount: "0.00"
    },
    {
      id: "#2EE1FF666083",
      customer: "Adrian Machaca",
      devices: [
        {
          name: "iPhone 14", 
          brand: "Apple",
          imei: "359281067314387",
          batteryHealth: "76%",
          checkInNumber: "CHK-014",
          location: "Repair Desk",
          status: "in-progress"
        }, 
        {
          name: "Moto Z2", 
          brand: "Motorola",
          imei: "389175026374123",
          batteryHealth: "79%",
          checkInNumber: "CHK-015",
          location: "Back Room",
          status: "waiting"
        }, 
        {
          name: "Galaxy S22", 
          brand: "Samsung",
          imei: "490182735601765",
          batteryHealth: "94%",
          checkInNumber: "CHK-016",
          location: "Storage",
          status: "pending"
        }, 
        {
          name: "Other", 
          count: 3,
          location: "Front Counter",
          status: "waiting"
        }
      ],
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
