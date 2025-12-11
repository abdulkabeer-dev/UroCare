import React from 'react';
import { BLOG_POSTS } from '../content';
import SEO from '../components/SEO';
import { Calendar, User } from 'lucide-react';

const Blog: React.FC = () => {
  return (
    <>
      <SEO 
        title="Urology Health Blog" 
        description="Read the latest articles and tips on kidney health, prostate care, and urological wellness from Dr. Sharma."
      />

      <div className="bg-slate-50 min-h-screen py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Health Blog</h1>
            <p className="text-xl text-slate-600">
              Expert insights and advice for a healthier life.
            </p>
          </div>

          <div className="space-y-8">
            {BLOG_POSTS.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition">
                <div className="p-8">
                  <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium text-xs">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={14} /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                       <User size={14} /> Dr. Sharma
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3 hover:text-blue-600 cursor-pointer">
                    {post.title}
                  </h2>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <p className="text-slate-800 text-sm leading-relaxed border-l-4 border-blue-500 pl-4 bg-slate-50 py-2">
                     {post.content}
                  </p>
                  <div className="mt-6">
                     <span className="text-blue-600 font-semibold cursor-pointer hover:underline">Read Full Article &rarr;</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;