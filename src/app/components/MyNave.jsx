import React from 'react'

const MyNave = () => {
  return (
    <header className="header p-4 bg-gray-800">
  {/* Logo */}
  <div className="flex items-center">
    <img
      src="https://fastly.picsum.photos/id/1077/200/300.jpg?hmac=BqQneQETTwZkHqmZmg4VxHsD-Lia-Qxp6nXv0c2eaac"  // Replace with the path to your logo image
      alt="Logo"
      className="w-10 h-10 mr-2"  // Adjust width and height as needed
    />
    <div className="text-2xl font-bold text-yellow-500">Your Company Name</div>
  </div>

  {/* Navigation links */}
  <nav className="ml-auto space-x-4">
    <a href="https://sabkasath.in" className="text-white hover:text-yellow-500">Home</a>
    <a href="#" className="text-white hover:text-yellow-500">Blog</a>
    <a href="#" className="text-white hover:text-yellow-500">Tools</a>
    <a href="#" className="text-white hover:text-yellow-500">About Us</a>
    <a href="#" className="text-white hover:text-yellow-500">Contact</a>
  </nav>
</header>

  )
}

export default MyNave