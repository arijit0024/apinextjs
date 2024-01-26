// BlogPost.js
import React from 'react';

const BlogPost = () => {
  return (
    <div className="max-w-6xl lg:max-w-6xl mx-auto mt-8 bg-white p-8 rounded-lg shadow-md justify-center mb-8">
      {/* Blog Post Image */}
      <div className="flex items-center justify-center">
      
      <img className=" rounded-lg" src="https://mcdn.wallpapersafari.com/medium/78/24/nJdXbU.jpg" alt="Your Image"></img>
      </div>
      {/* Author and Date */}
      <div className="flex items-center text-gray-600">
        <p className="mr-4">Arijit Rana </p>
        <p>January 13, 2024</p>
      </div>

      {/* Blog Post Title */}
      <h2 className="text-3xl font-bold text-gray-800 my-2">A Simple Blog PostCC</h2>

      {/* Blog Post Content */}
      <p className="text-gray-700 leading-relaxed">HI GUYS</p>
    </div>
  );
};

export default BlogPost;
