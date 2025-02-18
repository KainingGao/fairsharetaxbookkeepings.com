import React from 'react';
import { Link } from 'react-router-dom';
import { FileText } from 'lucide-react';

const posts = [
    {
    id: 7,
    title: "Why We Support Low-Income Households and Small Business Owners",
    excerpt: "I volunteer to help low income families and seniors with their tax returns for free over VAT/TCE. For those ineligible for free service...",
    date: "Feb 15, 2025",
    category: "Special Programs"
  },
  {
    id: 6,
    title: "Our Small Business Discounted Tax Preparation Program",
    excerpt: "Learn about our special program designed to help small businesses with affordable tax preparation services and maximize their deductions.",
    date: "March 20, 2024",
    category: "Special Programs"
  },
  {
    id: 1,
    title: "2024 Tax Season Updates: What You Need to Know",
    excerpt: "Important changes to tax laws and deadlines for the 2024 tax season that affect individual and business filers.",
    date: "March 15, 2024",
    category: "Tax Updates"
  },
  {
    id: 2,
    title: "Small Business Bookkeeping: Best Practices for Success",
    excerpt: "Essential bookkeeping tips and strategies to help small businesses maintain accurate financial records.",
    date: "March 10, 2024",
    category: "Bookkeeping"
  },
  {
    id: 3,
    title: "Understanding Tax Deductions for Remote Workers",
    excerpt: "A comprehensive guide to tax deductions available for employees working from home.",
    date: "March 5, 2024",
    category: "Tax Tips"
  },
  {
    id: 4,
    title: "Financial Planning for Small Business Owners",
    excerpt: "Strategic approaches to managing business finances and planning for future growth.",
    date: "February 28, 2024",
    category: "Business Planning"
  },
  {
    id: 5,
    title: "Maximizing Your Tax Refund: Expert Tips",
    excerpt: "Professional advice on how to ensure you're claiming all eligible deductions and credits.",
    date: "February 20, 2024",
    category: "Tax Tips"
  }
];

function Posts() {
  return (
    <div className="py-12">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <FileText className="h-12 w-12 text-teal-600 mx-auto" />
          <h1 className="mt-2 text-4xl font-bold text-gray-900">Financial Insights</h1>
          <p className="mt-4 text-xl text-gray-500">
            Expert advice and updates on taxes, bookkeeping, and financial management
          </p>
        </div>
      </div>

      {/* Posts Grid */}
      <div className="mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8">
          {posts.map((post) => (
            <Link 
              key={post.id}
              to={`/posts/${post.id}`}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full text-sm font-semibold text-teal-700 bg-teal-100">
                      {post.category}
                    </span>
                    <h2 className="mt-3 text-2xl font-bold text-gray-900">{post.title}</h2>
                    <p className="mt-2 text-gray-600">{post.excerpt}</p>
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm text-gray-500">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>Read more →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Posts;