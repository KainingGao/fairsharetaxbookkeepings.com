import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Home from './pages/Home';
import TaxServices from './pages/TaxServices';
import BookkeepingServices from './pages/BookkeepingServices';
import SpecialPrograms from './pages/SpecialPrograms';
import Posts from './pages/Posts';
import PostDetail from './pages/PostDetail';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Navigation */}
        <nav className="bg-teal-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <Link to="/">
                  <img 
                    src="https://s3.us-east-1.amazonaws.com/kngao.online/logo.png" 
                    alt="FairShare Logo" 
                    className="h-12 w-auto object-contain"
                  />
                </Link>
                <Link to="/" className="ml-2 text-xl font-semibold">FairShare</Link>
              </div>
              
              {/* Desktop Navigation */}
              <div className="hidden md:block">
                <div className="flex space-x-8">
                  <Link to="/" className="hover:bg-teal-600 px-3 py-2 rounded-md">Home</Link>
                  <Link to="/tax-services" className="hover:bg-teal-600 px-3 py-2 rounded-md">Tax Services</Link>
                  <Link to="/bookkeeping-services" className="hover:bg-teal-600 px-3 py-2 rounded-md">Bookkeeping</Link>
                  <Link to="/special-programs" className="hover:bg-teal-600 px-3 py-2 rounded-md">Special Programs</Link>
                  <Link to="/posts" className="hover:bg-teal-600 px-3 py-2 rounded-md">Posts</Link>
                </div>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 rounded-md hover:bg-teal-600"
                >
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link to="/" className="block hover:bg-teal-600 px-3 py-2 rounded-md">Home</Link>
                <Link to="/tax-services" className="block hover:bg-teal-600 px-3 py-2 rounded-md">Tax Services</Link>
                <Link to="/bookkeeping-services" className="block hover:bg-teal-600 px-3 py-2 rounded-md">Bookkeeping</Link>
                <Link to="/special-programs" className="block hover:bg-teal-600 px-3 py-2 rounded-md">Special Programs</Link>
                <Link to="/posts" className="block hover:bg-teal-600 px-3 py-2 rounded-md">Posts</Link>
              </div>
            </div>
          )}
        </nav>

        {/* Main Content */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tax-services" element={<TaxServices />} />
          <Route path="/bookkeeping-services" element={<BookkeepingServices />} />
          <Route path="/special-programs" element={<SpecialPrograms />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:id" element={<PostDetail />} />
        </Routes>

        {/* Footer */}
        <footer className="bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold">Contact Us</h3>
                <p className="mt-4">FairShare Tax & Bookkeeping Services LLC</p>
                <p>315 E 5th St. STE 202</p>
                <p>BLACK HAWK COUNTY</p>
                <p>Waterloo, IA, 50703, USA</p>
                <p>+1 (515) 337-9289</p>
                <p className="mt-2">
                  <a href="mailto:info@fairsharetaxbookkeepings.com" className="text-teal-400 hover:text-teal-300">
                    info@fairsharetaxbookkeepings.com
                  </a>
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Hours</h3>
                <p className="mt-4">Monday - Friday: 9am - 6pm</p>
                <p>Saturday: 10am - 2pm</p>
                <p>Sunday: Closed</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Follow Us</h3>
                <div className="mt-4 space-x-4">
                  <a href="#" className="hover:text-teal-400">LinkedIn</a>
                  <a href="#" className="hover:text-teal-400">Facebook</a>
                  <a href="#" className="hover:text-teal-400">Twitter</a>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-700 text-center">
              <p>&copy; 2024 FairShare Tax & Bookkeeping Services. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;