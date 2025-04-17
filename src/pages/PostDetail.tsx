import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Loader } from 'lucide-react';

interface Post {
  _id: string;
  title: string;
  content: string;
  category: string;
  date: string;
  rank: number;
}

function PostDetail() {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPostDetail = async () => {
      try {
        setLoading(true);
        
        // First, we need to fetch all posts because the API doesn't have a specific endpoint for a single post
        const response = await fetch('https://fairshare-backend-sean.onrender.com/api/blogs');
        
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        
        const posts = await response.json();
        const foundPost = posts.find((p: Post) => p._id === id);
        
        if (foundPost) {
          setPost(foundPost);
        } else {
          setError('Post not found');
        }
      } catch (err) {
        console.error('Error fetching post details:', err);
        setError('Failed to load post. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchPostDetail();
    }
  }, [id]);

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
        <Link to="/posts" className="inline-flex items-center text-teal-600 hover:text-teal-700 mt-4">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Return to Posts
        </Link>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="py-12 text-center">
        <p>Post not found</p>
        <Link to="/posts" className="text-teal-600 hover:text-teal-700">
          Return to Posts
        </Link>
      </div>
    );
  }

  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/posts" className="inline-flex items-center text-teal-600 hover:text-teal-700 mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Posts
        </Link>
        
        <article className="bg-white rounded-lg shadow-md p-8">
          <header className="mb-8">
            <span className="inline-block px-3 py-1 rounded-full text-sm font-semibold text-teal-700 bg-teal-100">
              {post.category}
            </span>
            <h1 className="mt-4 text-4xl font-bold text-gray-900">{post.title}</h1>
            <time className="block mt-4 text-gray-500">{formatDate(post.date)}</time>
          </header>

          <div 
            className="prose prose-lg max-w-none prose-headings:mb-4 prose-p:mb-4 prose-ul:mb-4"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </div>
    </div>
  );
}

export default PostDetail;