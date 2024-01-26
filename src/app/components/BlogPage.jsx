// components/BlogPage.js

import React from 'react';

const BlogPage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="container mx-auto p-8 text-center">
        {/* Responsive Blog Image */}
        <div className="max-w-full overflow-hidden mb-6">
          <img
            src="https://img.youtube.com/vi/MgcVQPcf5II/maxresdefault.jpg"  // Replace with the path to your blog image
            alt="Blog Image"
            className="w-full h-auto sm:w-full md:w-2/3 lg:w-1/2 xl:w-2/3 rounded-lg object-cover mx-auto"
          />
        </div>

        {/* Author and Date Information */}
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4 text-center">
          <div>
            <span>By John Doe</span>
            <span className="mx-2">|</span>
            <span>Published on January 1, 2024</span>
          </div>
        </div>

        {/* Blog Heading */}
        <h1 className="text-4xl font-bold mb-4 sm:text-5xl md:text-6xl">
          Title of the Blog
        </h1>

        {/* Blog Content */}
        <div className="text-lg leading-relaxed">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...
          </p>
          {/* Add more paragraphs or content as needed */}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
