import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const HomePage = () => (
  <div className="container mx-auto p-4">
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Welcome to Pet Heaven</CardTitle>
        <CardDescription>A safe haven for abandoned pets seeking loving homes</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="mb-4">
          Pet Heaven is dedicated to providing care and finding loving homes for abandoned cats and dogs. 
          Our mission is to ensure every pet gets a second chance at happiness.
        </p>
        <h3 className="text-lg font-semibold mb-2">Our Facilities</h3>
        <ul className="list-disc pl-5 mb-4">
          <li>Modern, clean shelter spaces</li>
          <li>Veterinary care services</li>
          <li>Grooming facilities</li>
          <li>Exercise and play areas</li>
          <li>Training programs</li>
        </ul>
      </CardContent>
    </Card>
  </div>
);

export default HomePage;