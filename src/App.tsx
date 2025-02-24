import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Home from './pages/Home';
import TaxServices from './pages/TaxServices';
import BookkeepingServices from './pages/BookkeepingServices';
import Posts from './pages/Posts';
import PostDetail from './pages/PostDetail';
import Contact from './pages/Contact';
import ChatWidget from './components/ChatWidget';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Navigation */}
        <nav className="bg-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              <div className="flex items-center">
                <Link 
                  to="/" 
                  className="flex items-center space-x-3 group"
                >
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-full blur opacity-25 group-hover:opacity-75 transition-all duration-300"></div>
                    <img
                      src="https://s3.us-east-1.amazonaws.com/kngao.online/logo.png"
                      alt="FairShare Logo"
                      className="relative h-12 w-12 object-contain rounded-full"
                    />
                  </div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
                    FairShare
                  </span>
                </Link>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <Link
                  to="/"
                  className="text-gray-600 hover:text-teal-600 transition-colors font-medium"
                >
                  Home
                </Link>
                <Link
                  to="/tax-services"
                  className="text-gray-600 hover:text-teal-600 transition-colors font-medium"
                >
                  Tax Services
                </Link>
                <Link
                  to="/bookkeeping-services"
                  className="text-gray-600 hover:text-teal-600 transition-colors font-medium"
                >
                  Bookkeeping
                </Link>
                <Link
                  to="/posts/6"
                  className="relative px-4 py-2 rounded-full overflow-hidden group"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-teal-400 to-emerald-400 opacity-75 group-hover:opacity-100 transition-opacity"></span>
                  <span className="relative text-white font-medium">Special Programs</span>
                </Link>
                <Link
                  to="/posts"
                  className="text-gray-600 hover:text-teal-600 transition-colors font-medium"
                >
                  Posts
                </Link>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 rounded-md text-gray-600 hover:text-teal-600 hover:bg-gray-100 transition-colors"
                >
                  {isMenuOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-100">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link
                  to="/"
                  className="block px-3 py-2 rounded-md text-gray-600 hover:text-teal-600 hover:bg-gray-50 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/tax-services"
                  className="block px-3 py-2 rounded-md text-gray-600 hover:text-teal-600 hover:bg-gray-50 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Tax Services
                </Link>
                <Link
                  to="/bookkeeping-services"
                  className="block px-3 py-2 rounded-md text-gray-600 hover:text-teal-600 hover:bg-gray-50 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Bookkeeping
                </Link>
                <Link
                  to="/posts/6"
                  className="block px-3 py-2 rounded-md bg-gradient-to-r from-teal-400 to-emerald-400 text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Special Programs
                </Link>
                <Link
                  to="/posts"
                  className="block px-3 py-2 rounded-md text-gray-600 hover:text-teal-600 hover:bg-gray-50 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Posts
                </Link>
              </div>
            </div>
          )}
        </nav>

        {/* Main Content */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tax-services" element={<TaxServices />} />
            <Route path="/bookkeeping-services" element={<BookkeepingServices />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/posts/:id" element={<PostDetail />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Chatbot Widget */}
        <ChatWidget />

        {/* Footer */}
        <footer className="bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold">Contact Us</h3>
                <p className="mt-4">FairShare Tax & Bookkeeping Services LLC</p>
                <p>315 E 5th St. STE 202</p>
                <p>BLACK HAWK COUNTY</p>
                <p>Waterloo, IA, 50703, USA</p>
                <p>+1 (515) 337-9289</p>
                <p className="mt-2">
                  <a
                    href="mailto:info@fairsharetaxbookkeepings.com"
                    className="text-teal-400 hover:text-teal-300"
                  >
                    info@fairsharetaxbookkeepings.com
                  </a>
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Hours</h3>
                <p className="mt-4">Tuesday - Sunday: 9am - 6pm</p>
                <p>Monday: Closed</p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-700 text-center">
              <p>
                &copy; 2025 FairShare Tax & Bookkeeping Services. All rights
                reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;