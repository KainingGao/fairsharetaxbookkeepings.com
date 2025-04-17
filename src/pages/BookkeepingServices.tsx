import React from 'react';
import { BookOpen, BarChart, Receipt, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function BookkeepingServices() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <BookOpen className="h-12 w-12 text-teal-600 mx-auto" />
          <h1 className="mt-2 text-4xl font-bold bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
            Bookkeeping Services
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive bookkeeping solutions to keep your finances organized
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Monthly Bookkeeping */}
          <div className="group">
            <div className="relative transform transition-all duration-300 group-hover:scale-105">
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition-all duration-300"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-xl">
                <Clock className="h-8 w-8 text-teal-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900">Monthly Bookkeeping</h3>
                <p className="mt-2 text-gray-600">
                  Regular maintenance of your financial records with monthly reporting.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center">
                    <span className="text-teal-600 mr-2">•</span>
                    Transaction categorization
                  </li>
                  <li className="flex items-center">
                    <span className="text-teal-600 mr-2">•</span>
                    Bank reconciliation
                  </li>
                  <li className="flex items-center">
                    <span className="text-teal-600 mr-2">•</span>
                    Monthly statements
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Financial Reporting */}
          <div className="group">
            <div className="relative transform transition-all duration-300 group-hover:scale-105">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition-all duration-300"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-xl">
                <BarChart className="h-8 w-8 text-emerald-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900">Financial Reporting</h3>
                <p className="mt-2 text-gray-600">
                  Detailed financial reports to help you make informed business decisions.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center">
                    <span className="text-emerald-600 mr-2">•</span>
                    Income statements
                  </li>
                  <li className="flex items-center">
                    <span className="text-emerald-600 mr-2">•</span>
                    Balance sheets
                  </li>
                  <li className="flex items-center">
                    <span className="text-emerald-600 mr-2">•</span>
                    Cash flow analysis
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Accounts Management */}
          <div className="group">
            <div className="relative transform transition-all duration-300 group-hover:scale-105">
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition-all duration-300"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-xl">
                <Receipt className="h-8 w-8 text-teal-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900">Accounts Management</h3>
                <p className="mt-2 text-gray-600">
                  Complete management of accounts payable and receivable.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center">
                    <span className="text-teal-600 mr-2">•</span>
                    Invoice processing
                  </li>
                  <li className="flex items-center">
                    <span className="text-teal-600 mr-2">•</span>
                    Bill payment
                  </li>
                  <li className="flex items-center">
                    <span className="text-teal-600 mr-2">•</span>
                    Payment tracking
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-16 bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
              Why Choose Our Bookkeeping Services?
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="group">
              <div className="relative transform transition-all duration-300 group-hover:scale-105">
                <div className="absolute -inset-1 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition-all duration-300"></div>
                <div className="relative bg-white p-6 rounded-2xl shadow-xl">
                  <h3 className="text-xl font-semibold text-teal-600">Accuracy Guaranteed</h3>
                  <p className="mt-2 text-gray-600">
                    Our experienced bookkeepers ensure your financial records are always accurate and up-to-date.
                  </p>
                </div>
              </div>
            </div>
            <div className="group">
              <div className="relative transform transition-all duration-300 group-hover:scale-105">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition-all duration-300"></div>
                <div className="relative bg-white p-6 rounded-2xl shadow-xl">
                  <h3 className="text-xl font-semibold text-emerald-600">Time-Saving</h3>
                  <p className="mt-2 text-gray-600">
                    Focus on growing your business while we handle the financial paperwork.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-16 bg-gradient-to-br from-teal-600 to-emerald-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">Ready to get started?</h2>
            <p className="mt-4 text-xl text-teal-100">
              Let us help you keep your finances in order
            </p>
            <Link 
              to="/contact" 
              className="mt-8 inline-flex items-center px-8 py-4 bg-white text-teal-600 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookkeepingServices;