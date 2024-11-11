import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ReleasePetPage = () => (
  <div className="container mx-auto p-4">
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Release a Pet</CardTitle>
        <CardDescription>Please provide details about the pet you wish to release</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div>
            <label className="block mb-1">Pet Name</label>
            <input type="text" className="w-full p-2 border rounded" />
          </div>
          <div>
            <label className="block mb-1">Pet Type</label>
            <select className="w-full p-2 border rounded">
              <option>Dog</option>
              <option>Cat</option>
            </select>
          </div>
          <div>
            <label className="block mb-1">Age</label>
            <input type="number" className="w-full p-2 border rounded" />
          </div>
          <div>
            <label className="block mb-1">Reason for Release</label>
            <textarea className="w-full p-2 border rounded h-32"></textarea>
          </div>
          <button 
            className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
            onClick={(e) => {
              e.preventDefault();
              alert('Release form would be submitted here');
            }}
          >
            Submit Request
          </button>
        </form>
      </CardContent>
    </Card>
  </div>
);

export default ReleasePetPage;