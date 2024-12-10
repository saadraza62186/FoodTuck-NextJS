import React from "react";
import Image from "next/image"; // Import the Image component

const Items = () => {
  // Client data for dynamic rendering
  const clients = [
    { id: 1, src: "/client1.png", alt: "Client 1" },
    { id: 2, src: "/client2.png", alt: "Client 2" },
    { id: 3, src: "/client3.png", alt: "Client 3" },
    { id: 4, src: "/client4.png", alt: "Client 4" },
    { id: 5, src: "/client5.png", alt: "Client 5" },
    { id: 6, src: "/client6.png", alt: "Client 6" },
  ];

  return (
    <div className="py-16">
      {/* Heading Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">Partners & Clients</h2>
        <p className="text-lg text-gray-600 mt-2">We work with the best people</p>
      </div>

      {/* Partners/Clients Row */}
      <div className="flex justify-center items-center space-x-8 px-6 max-w-7xl mx-auto overflow-x-auto">
        {clients.map((client) => (
          <div
            key={client.id}
            className="flex justify-center items-center flex-shrink-0"
          >
            <Image
              src={client.src}
              alt={client.alt}
              width={120} // Reduced image size
              height={80} // Reduced image size
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Items;
