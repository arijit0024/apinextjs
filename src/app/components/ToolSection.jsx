// components/ToolSection.js

import React from 'react';

const ToolSection = () => {
  const tools = [
    { id: 1, title: 'Tool 1', imageSrc: 'https://img.youtube.com/vi/MgcVQPcf5II/maxresdefault.jpg', link: '#' },
    { id: 2, title: 'Tool 2', imageSrc: 'https://img.youtube.com/vi/MgcVQPcf5II/maxresdefault.jpg', link: '#' },
    { id: 3, title: 'Tool 3', imageSrc: 'https://img.youtube.com/vi/MgcVQPcf5II/maxresdefault.jpg', link: '#' },
    { id: 4, title: 'Tool 4', imageSrc: 'https://img.youtube.com/vi/MgcVQPcf5II/maxresdefault.jpg', link: '#' },
    
    // Add more tools as needed
  ];

  return (
   

    <section className="bg-gray-800 text-white p-8 ">
         <div className="container mx-auto">
      {/* Premium Title */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold bg-gray-700 text-yellow-500 rounded-md inline-block p-4">
          Premium Tools
        </h2>
      </div>
    </div>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {tools.map((tool) => (
            <div key={tool.id} className="cursor-pointer">
              <a href={tool.link} className="block rounded-lg overflow-hidden">
                <div className="rounded-t-lg">
                  <img
                    src={tool.imageSrc}
                    alt={tool.title}
                    className="w-full h-40 object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-4 bg-yellow-400 rounded-b-lg">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{tool.title}</h3>
                  {/* Add more details as needed */}
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolSection;
