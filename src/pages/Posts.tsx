import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FileText, Loader, Clock, Tag, ArrowRight } from 'lucide-react';

interface Post {
  _id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  rank: number;
}

function Posts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        // Fetch from backend API
        const response = await fetch('https://fairshare-backend-sean.onrender.com/api/blogs');
        
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Sort posts by rank (highest to lowest)
        const sortedPosts = [...data].sort((a, b) => (b.rank || 0) - (a.rank || 0));
        setPosts(sortedPosts);
      } catch (err) {
        console.error('Error fetching posts:', err);
        setError('Failed to load posts. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Function to format date from MongoDB ISO string to readable format
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 flex justify-center items-center">
        <div className="text-center">
          <Loader className="h-12 w-12 text-teal-600 animate-spin mx-auto" />
          <p className="mt-4 text-gray-600">Loading posts...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl blur opacity-25"></div>
              <div className="relative bg-white p-6 rounded-xl">
                <p className="text-red-500 text-lg font-semibold">{error}</p>
                <button 
                  onClick={() => window.location.reload()}
                  className="mt-6 px-6 py-2 bg-gradient-to-r from-teal-600 to-emerald-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                >
                  Retry
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <FileText className="h-12 w-12 text-teal-600 mx-auto" />
          <h1 className="mt-2 text-4xl font-bold bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
            Financial Insights
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Expert advice and updates on taxes, bookkeeping, and financial management
          </p>
        </div>
      </div>

      {/* Posts Grid */}
      <div className="mt-12 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {posts.length === 0 ? (
          <div className="bg-white p-8 rounded-2xl shadow-xl text-center">
            <p className="text-gray-600">No posts available at the moment.</p>
          </div>
        ) : (
          <div className="space-y-8">
            {posts.map((post) => (
              <div key={post._id} className="group">
                <div className="relative transform transition-all duration-300 group-hover:scale-102">
                  <div className="absolute -inset-1 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition-all duration-300"></div>
                  <Link 
                    to={`/posts/${post._id}`}
                    className="relative block bg-white rounded-2xl shadow-xl overflow-hidden"
                  >
                    <div className="p-8">
                      <div className="flex items-center space-x-2 mb-4">
                        <Tag className="h-4 w-4 text-teal-600" />
                        <span className="text-sm font-semibold text-teal-600">
                          {post.category}
                        </span>
                      </div>
                      
                      <h2 className="text-2xl font-bold text-gray-900 mb-3">{post.title}</h2>
                      <p className="text-gray-600 mb-6">{post.excerpt}</p>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{formatDate(post.date)}</span>
                        </div>
                        <div className="flex items-center text-sm font-medium text-teal-600 group-hover:text-teal-700 transition-colors">
                          <span>Read more</span>
                          <ArrowRight className="h-4 w-4 ml-1 group-hover:ml-2 transition-all duration-200" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Posts;