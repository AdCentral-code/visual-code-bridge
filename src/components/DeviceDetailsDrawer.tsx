
import React from 'react';
import { Battery, CheckCircle, MapPin, X } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from '@/components/ui/tooltip';

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

interface DeviceDetailsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  devices: Device[];
}

const DeviceStatusBadge: React.FC<{ status?: string }> = ({ status }) => {
  if (!status) return null;
  
  const statusColors = {
    'pending': 'bg-yellow-100 text-yellow-700',
    'in-progress': 'bg-blue-100 text-blue-700',
    'completed': 'bg-green-100 text-green-700',
    'waiting': 'bg-gray-100 text-gray-700'
  };
  
  const color = statusColors[status as keyof typeof statusColors] || 'bg-gray-100 text-gray-700';
  
  return (
    <Badge variant="outline" className={`${color} rounded-full px-2 py-0.5 text-xs font-medium`}>
      {status.charAt(0).toUpperCase() + status.slice(1).replace('-', ' ')}
    </Badge>
  );
};

const DeviceDetailsDrawer: React.FC<DeviceDetailsDrawerProps> = ({ isOpen, onClose, devices }) => {
  // Calculate total number of devices
  const totalDevices = devices.reduce((total, device) => {
    return total + (device.count ? device.count : 1);
  }, 0);

  return (
    <Drawer open={isOpen} onOpenChange={onClose}>
      <DrawerContent className="p-4">
        <div className="mx-auto w-full max-w-4xl">
          <DrawerHeader className="flex justify-between items-center">
            <DrawerTitle className="text-xl">
              {totalDevices} {totalDevices === 1 ? 'Device' : 'Devices'}
            </DrawerTitle>
            <DrawerClose asChild>
              <button className="rounded-full p-2 hover:bg-gray-100" onClick={onClose}>
                <X className="h-4 w-4" />
              </button>
            </DrawerClose>
          </DrawerHeader>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {devices.map((device, idx) => (
              <div key={idx} className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center">
                    <Badge variant="outline" className="bg-gray-100 text-gray-700 rounded-full px-2 py-1 text-sm">
                      {device.brand || 'Unknown'} {device.name}
                    </Badge>
                    {device.count && <span className="text-xs bg-gray-200 px-2 py-0.5 rounded ml-2">x{device.count}</span>}
                  </div>
                  <DeviceStatusBadge status={device.status} />
                </div>
                
                <div className="grid grid-cols-1 gap-2">
                  {device.imei && (
                    <div className="flex items-center border-b border-gray-100 pb-2">
                      <span className="text-gray-500 mr-1 w-24">IMEI:</span>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <span className="font-mono bg-gray-100 px-1 rounded truncate">{device.imei}</span>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="font-mono">{device.imei}</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  )}
                  
                  {device.batteryHealth && (
                    <div className="flex items-center border-b border-gray-100 pb-2">
                      <div className="flex items-center w-24">
                        <Battery className="h-4 w-4 mr-1 text-gray-500" />
                        <span className="text-gray-500">Battery:</span>
                      </div>
                      <span className="text-gray-700">{device.batteryHealth}</span>
                    </div>
                  )}
                  
                  {device.checkInNumber && (
                    <div className="flex items-center border-b border-gray-100 pb-2">
                      <div className="flex items-center w-24">
                        <CheckCircle className="h-4 w-4 mr-1 text-gray-500" />
                        <span className="text-gray-500">Check-in:</span>
                      </div>
                      <span className="text-gray-700">{device.checkInNumber}</span>
                    </div>
                  )}
                  
                  {device.location && (
                    <div className="flex items-center">
                      <div className="flex items-center w-24">
                        <MapPin className="h-4 w-4 mr-1 text-gray-500" />
                        <span className="text-gray-500">Location:</span>
                      </div>
                      <span className="text-gray-700">{device.location}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default DeviceDetailsDrawer;
