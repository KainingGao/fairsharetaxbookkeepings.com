import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FileText, Loader } from 'lucide-react';

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
      <div className="py-12 flex justify-center items-center">
        <Loader className="h-12 w-12 text-teal-600 animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-12 text-center">
        <p className="text-red-500">{error}</p>
        <button 
          onClick={() => window.location.reload()}
          className="mt-4 bg-teal-600 text-white px-4 py-2 rounded-md"
        >
          Retry
        </button>
      </div>
    );
  }

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
        {posts.length === 0 ? (
          <p className="text-center text-gray-500">No posts available at the moment.</p>
        ) : (
          <div className="grid gap-8">
            {posts.map((post) => (
              <Link 
                key={post._id}
                to={`/posts/${post._id}`}
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
                    <span>{formatDate(post.date)}</span>
                    <span className="mx-2">•</span>
                    <span>Read more →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Posts;