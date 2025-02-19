import React from 'react';
import { BookOpen, BarChart, Receipt, Clock } from 'lucide-react';

function BookkeepingServices() {
  return (
    <div className="py-12">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <BookOpen className="h-12 w-12 text-teal-600 mx-auto" />
          <h1 className="mt-2 text-4xl font-bold text-gray-900">Bookkeeping Services</h1>
          <p className="mt-4 text-xl text-gray-500">
            Comprehensive bookkeeping solutions to keep your finances organized
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Monthly Bookkeeping */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Clock className="h-8 w-8 text-teal-600" />
            <h3 className="mt-4 text-xl font-semibold">Monthly Bookkeeping</h3>
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

          {/* Financial Reporting */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <BarChart className="h-8 w-8 text-teal-600" />
            <h3 className="mt-4 text-xl font-semibold">Financial Reporting</h3>
            <p className="mt-2 text-gray-600">
              Detailed financial reports to help you make informed business decisions.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center">
                <span className="text-teal-600 mr-2">•</span>
                Income statements
              </li>
              <li className="flex items-center">
                <span className="text-teal-600 mr-2">•</span>
                Balance sheets
              </li>
              <li className="flex items-center">
                <span className="text-teal-600 mr-2">•</span>
                Cash flow analysis
              </li>
            </ul>
          </div>

          {/* Accounts Management */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Receipt className="h-8 w-8 text-teal-600" />
            <h3 className="mt-4 text-xl font-semibold">Accounts Management</h3>
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

      {/* Features Section */}
      <div className="mt-16 bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Our Bookkeeping Services?</h2>
            <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-teal-600">Accuracy Guaranteed</h3>
                <p className="mt-2 text-gray-600">
                  Our experienced bookkeepers ensure your financial records are always accurate and up-to-date.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-teal-600">Time-Saving</h3>
                <p className="mt-2 text-gray-600">
                  Focus on growing your business while we handle the financial paperwork.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-16 bg-teal-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">Ready to get started?</h2>
            <p className="mt-4 text-xl text-teal-100">
              Let us help you keep your finances in order
            </p>
            <button className="mt-8 bg-white text-teal-700 px-6 py-3 rounded-md font-semibold hover:bg-teal-50 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookkeepingServices;