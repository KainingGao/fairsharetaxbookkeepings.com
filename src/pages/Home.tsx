import React from 'react';
import { Calculator, BookOpen, PiggyBank, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-emerald-500/10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtMi4yMDkgMC00IDEuNzkxLTQgNHY0aC00YTQgNCAwIDEgMCAwIDhoNHY0YzAgMi4yMDkgMS43OTEgNCA0IDRzNC0xLjc5MSA0LTR2LTRoNGE0IDQgMCAxIDAgMC04aC00di00YzAtMi4yMDktMS43OTEtNC00LTR6bTAgMmMyLjIwOSAwIDQgMS43OTEgNCA0djRoNGE0IDQgMCAxIDEgMCA4aC00djRjMCAyLjIwOS0xLjc5MSA0LTQgNHMtNC0xLjc5MSA0LTR2LTRoLTRhNCA0IDAgMSAxIDAtOGg0di00YzAtMi4yMDkgMS43OTEtNCA0LTR6IiBmaWxsPSIjMDBhMzlmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz48L2c+PC9zdmc+')] opacity-30"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight md:leading-tight bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
              FairShare Tax & Bookkeeping Services
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We believe everyone deserves access to professional financial services. Our mission is to make tax and bookkeeping services affordable without compromising on quality.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <Link to="/contact" className="px-8 py-4 bg-gradient-to-r from-teal-600 to-emerald-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200">
                Get Started
              </Link>
              <Link to="/contact" className="px-8 py-4 bg-white text-teal-600 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 border border-teal-100">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Tax Services Card */}
            <div className="group">
              <div className="relative h-full transform transition-all duration-300 group-hover:scale-105">
                <div className="absolute -inset-1 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition-all duration-300"></div>
                <div className="relative h-full bg-white p-8 rounded-2xl shadow-xl">
                  <Calculator className="h-12 w-12 text-teal-600 mb-6" />
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Tax Services</h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Professional tax preparation services for individuals and small businesses. We ensure maximum returns while staying compliant with tax laws.
                  </p>
                  <Link to="/tax-services" className="inline-flex items-center text-teal-600 font-semibold hover:text-teal-700 transition-colors">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Bookkeeping Services Card */}
            <div className="group">
              <div className="relative h-full transform transition-all duration-300 group-hover:scale-105">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition-all duration-300"></div>
                <div className="relative h-full bg-white p-8 rounded-2xl shadow-xl">
                  <BookOpen className="h-12 w-12 text-emerald-600 mb-6" />
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Bookkeeping Services</h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Comprehensive bookkeeping solutions to keep your finances organized. We handle everything from daily transactions to financial statements.
                  </p>
                  <Link to="/bookkeeping-services" className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700 transition-colors">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Special Programs Card */}
            <div className="group">
              <div className="relative h-full transform transition-all duration-300 group-hover:scale-105">
                <div className="absolute -inset-1 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition-all duration-300"></div>
                <div className="relative h-full bg-white p-8 rounded-2xl shadow-xl">
                  <PiggyBank className="h-12 w-12 text-teal-600 mb-6" />
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Special Programs</h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Special rates and payment plans available for low-income individuals, families and small business owners. We believe everyone deserves professional financial guidance.
                  </p>
                  <Link to="/posts/6800ab4d4e58189b0389601c" className="inline-flex items-center text-teal-600 font-semibold hover:text-teal-700 transition-colors">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-teal-50 mb-10 max-w-2xl mx-auto">
            Join thousands of satisfied clients who trust us with their financial needs.
          </p>
          <Link to="/contact" className="px-8 py-4 bg-white text-teal-600 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200">
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;