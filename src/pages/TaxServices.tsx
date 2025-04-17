import React from 'react';
import { Calculator, FileCheck, DollarSign, ClipboardCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function TaxServices() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Calculator className="h-12 w-12 text-teal-600 mx-auto" />
          <h1 className="mt-2 text-4xl font-bold bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
            Tax Services
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Professional tax preparation services tailored to your needs
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Individual Tax Returns */}
          <div className="group">
            <div className="relative transform transition-all duration-300 group-hover:scale-105">
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition-all duration-300"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-xl">
                <FileCheck className="h-8 w-8 text-teal-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900">Individual Tax Returns</h3>
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
            </div>
          </div>

          {/* Business Tax Services */}
          <div className="group">
            <div className="relative transform transition-all duration-300 group-hover:scale-105">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition-all duration-300"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-xl">
                <DollarSign className="h-8 w-8 text-emerald-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900">Business Tax Services</h3>
                <p className="mt-2 text-gray-600">
                  Expert tax services for small businesses, partnerships, and corporations.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center">
                    <span className="text-emerald-600 mr-2">•</span>
                    Business tax returns
                  </li>
                  <li className="flex items-center">
                    <span className="text-emerald-600 mr-2">•</span>
                    Quarterly estimates
                  </li>
                  <li className="flex items-center">
                    <span className="text-emerald-600 mr-2">•</span>
                    Tax compliance
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Tax Planning */}
          <div className="group">
            <div className="relative transform transition-all duration-300 group-hover:scale-105">
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition-all duration-300"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-xl">
                <ClipboardCheck className="h-8 w-8 text-teal-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900">Tax Planning</h3>
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
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-16 bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
              Why Choose Our Tax Services?
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="group">
              <div className="relative transform transition-all duration-300 group-hover:scale-105">
                <div className="absolute -inset-1 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition-all duration-300"></div>
                <div className="relative bg-white p-6 rounded-2xl shadow-xl">
                  <h3 className="text-xl font-semibold text-teal-600">Expert Advisors</h3>
                  <p className="mt-2 text-gray-600">
                    Our team has years of experience navigating complex tax laws to maximize your benefits.
                  </p>
                </div>
              </div>
            </div>
            <div className="group">
              <div className="relative transform transition-all duration-300 group-hover:scale-105">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition-all duration-300"></div>
                <div className="relative bg-white p-6 rounded-2xl shadow-xl">
                  <h3 className="text-xl font-semibold text-emerald-600">Affordable Rates</h3>
                  <p className="mt-2 text-gray-600">
                    Quality tax services shouldn't break the bank. We offer competitive rates for all clients.
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
              Contact us today for a free consultation
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

export default TaxServices;