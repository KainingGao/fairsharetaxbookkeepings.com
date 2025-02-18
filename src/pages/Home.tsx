import React from 'react';
import { Calculator, BookOpen, PiggyBank } from 'lucide-react';

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80"
            alt="Office background"
          />
          <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            FairShare Tax & Bookkeeping Services
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl">
            We believe everyone deserves access to professional financial services. Our mission is to make tax and bookkeeping services affordable without compromising on quality.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <Calculator className="h-12 w-12 text-teal-600 mx-auto" />
            <h2 className="mt-2 text-3xl font-bold text-gray-900">Tax Services</h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Professional tax preparation services for individuals and small businesses. We ensure maximum returns while staying compliant with tax laws.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <BookOpen className="h-12 w-12 text-teal-600 mx-auto" />
            <h2 className="mt-2 text-3xl font-bold text-gray-900">Bookkeeping Services</h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Comprehensive bookkeeping solutions to keep your finances organized. We handle everything from daily transactions to financial statements.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <PiggyBank className="h-12 w-12 text-teal-600 mx-auto" />
            <h2 className="mt-2 text-3xl font-bold text-gray-900">Special Programs</h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Special rates and payment plans available for low-income individuals, families and small business owners. We believe everyone deserves professional financial guidance.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;