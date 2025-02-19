import React from 'react';
import { PiggyBank, Heart, Users, Wallet } from 'lucide-react';

function SpecialPrograms() {
  return (
    <div className="py-12">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <PiggyBank className="h-12 w-12 text-teal-600 mx-auto" />
          <h1 className="mt-2 text-4xl font-bold text-gray-900">Special Programs</h1>
          <p className="mt-4 text-xl text-gray-500">
            Making professional financial services accessible to everyone
          </p>
        </div>
      </div>

      {/* Programs Grid */}
      <div className="mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Low Income Program */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Heart className="h-8 w-8 text-teal-600" />
            <h3 className="mt-4 text-xl font-semibold">Low Income Assistance</h3>
            <p className="mt-2 text-gray-600">
              Special rates and payment plans for individuals and families who meet income requirements.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center">
                <span className="text-teal-600 mr-2">•</span>
                Reduced service fees
              </li>
              <li className="flex items-center">
                <span className="text-teal-600 mr-2">•</span>
                Flexible payment plans
              </li>
              <li className="flex items-center">
                <span className="text-teal-600 mr-2">•</span>
                Free initial consultation
              </li>
            </ul>
          </div>

          {/* Nonprofit Organizations */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Users className="h-8 w-8 text-teal-600" />
            <h3 className="mt-4 text-xl font-semibold">Nonprofit Support</h3>
            <p className="mt-2 text-gray-600">
              Specialized services for nonprofit organizations with discounted rates.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center">
                <span className="text-teal-600 mr-2">•</span>
                Form 990 preparation
              </li>
              <li className="flex items-center">
                <span className="text-teal-600 mr-2">•</span>
                Compliance assistance
              </li>
              <li className="flex items-center">
                <span className="text-teal-600 mr-2">•</span>
                Grant reporting support
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Eligibility Section */}
      <div className="mt-16 bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Wallet className="h-12 w-12 text-teal-600 mx-auto" />
            <h2 className="mt-4 text-3xl font-bold text-gray-900">Program Eligibility</h2>
            <div className="mt-8 max-w-3xl mx-auto">
              <p className="text-lg text-gray-600">
                Our special programs are designed to help those who need it most. Eligibility is based on factors such as:
              </p>
              <ul className="mt-6 text-left space-y-4">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">•</span>
                  Household income below specified thresholds
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">•</span>
                  Number of dependents
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">•</span>
                  Special circumstances (medical expenses, job loss, etc.)
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">•</span>
                  Nonprofit status and annual budget size
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-16 bg-teal-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">See if you qualify</h2>
            <p className="mt-4 text-xl text-teal-100">
              Contact us for a free eligibility assessment
            </p>
            <button className="mt-8 bg-white text-teal-700 px-6 py-3 rounded-md font-semibold hover:bg-teal-50 transition-colors">
              Check Eligibility
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpecialPrograms;