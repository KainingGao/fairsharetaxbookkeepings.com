import React from 'react';
import { Calculator, FileCheck, DollarSign, ClipboardCheck } from 'lucide-react';

function TaxServices() {
  return (
    <div className="py-12">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Calculator className="h-12 w-12 text-teal-600 mx-auto" />
          <h1 className="mt-2 text-4xl font-bold text-gray-900">Tax Services</h1>
          <p className="mt-4 text-xl text-gray-500">
            Professional tax preparation services tailored to your needs
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Individual Tax Returns */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <FileCheck className="h-8 w-8 text-teal-600" />
            <h3 className="mt-4 text-xl font-semibold">Individual Tax Returns</h3>
            <p className="mt-2 text-gray-600">
              Comprehensive personal tax return preparation with maximum deductions and credits.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center">
                <span className="text-teal-600 mr-2">•</span>
                Federal and State returns
              </li>
              <li className="flex items-center">
                <span className="text-teal-600 mr-2">•</span>
                Electronic filing
              </li>
              <li className="flex items-center">
                <span className="text-teal-600 mr-2">•</span>
                Tax planning advice
              </li>
            </ul>
          </div>

          {/* Business Tax Services */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <DollarSign className="h-8 w-8 text-teal-600" />
            <h3 className="mt-4 text-xl font-semibold">Business Tax Services</h3>
            <p className="mt-2 text-gray-600">
              Expert tax services for small businesses, partnerships, and corporations.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center">
                <span className="text-teal-600 mr-2">•</span>
                Business tax returns
              </li>
              <li className="flex items-center">
                <span className="text-teal-600 mr-2">•</span>
                Quarterly estimates
              </li>
              <li className="flex items-center">
                <span className="text-teal-600 mr-2">•</span>
                Tax compliance
              </li>
            </ul>
          </div>

          {/* Tax Planning */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <ClipboardCheck className="h-8 w-8 text-teal-600" />
            <h3 className="mt-4 text-xl font-semibold">Tax Planning</h3>
            <p className="mt-2 text-gray-600">
              Strategic tax planning to minimize your tax liability and maximize savings.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center">
                <span className="text-teal-600 mr-2">•</span>
                Year-round planning
              </li>
              <li className="flex items-center">
                <span className="text-teal-600 mr-2">•</span>
                Investment strategies
              </li>
              <li className="flex items-center">
                <span className="text-teal-600 mr-2">•</span>
                Retirement planning
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-16 bg-teal-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">Ready to get started?</h2>
            <p className="mt-4 text-xl text-teal-100">
              Contact us today for a free consultation
            </p>
            <button className="mt-8 bg-white text-teal-700 px-6 py-3 rounded-md font-semibold hover:bg-teal-50 transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaxServices;