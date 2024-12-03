import React from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Coffee, MapPin, Star } from 'lucide-react';

const MOCK_DATA = [
  {
    id: '1',
    name: 'Three Ships Coffee',
    type: 'Roaster & Café',
    location: 'Virginia Beach',
    rating: 4.8,
    description: 'Award-winning roaster with café, known for unique complex flavors',
    address: '607 19th St, Virginia Beach, VA',
  },
  {
    id: '2',
    name: 'Fathom Coffee',
    type: 'Roaster',
    location: 'Virginia Beach',
    rating: 4.7,
    description: 'Veteran-owned, small-batch nano roaster specializing in premium coffees',
    address: '1682 Baltic Ave, Virginia Beach, VA',
  },
];

export const CoffeeDirectory = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="space-y-8">
        <Card className="p-6">
          <h1 className="text-2xl font-bold text-center mb-6">Hampton Roads Coffee Directory</h1>
          <div className="space-y-4">
            <Input
              placeholder="Search coffee shops and roasters..."
              className="w-full"
            />
            
            <div className="flex flex-wrap gap-2">
              <select className="p-2 border rounded">
                <option>All Types</option>
                <option>Coffee Shops</option>
                <option>Roasters</option>
              </select>
              
              <select className="p-2 border rounded">
                <option>All Locations</option>
                <option>Virginia Beach</option>
                <option>Norfolk</option>
              </select>
            </div>
          </div>
        </Card>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {MOCK_DATA.map((shop) => (
            <Card key={shop.id} className="p-4">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold">{shop.name}</h3>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    <span>{shop.rating}</span>
                  </div>
                </div>

                <div className="flex items-center text-gray-600">
                  <Coffee className="w-4 h-4 mr-2" />
                  <span>{shop.type}</span>
                </div>

                <div className="flex items-center text-gray-600">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{shop.address}</span>
                </div>

                <p className="text-sm">{shop.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};