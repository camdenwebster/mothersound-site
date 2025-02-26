import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
  };

  return (
    <section className="bg-blue-600 dark:bg-blue-800 py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-blue-100 mb-8">
            Subscribe to our newsletter for the latest updates on our products and AI innovations.
          </p>
          <form onSubmit={handleSubmit} className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
              required
            />
            <button
              type="submit"
              className="bg-white dark:bg-gray-900 text-blue-600 dark:text-white px-6 py-2 rounded-md hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors duration-300 flex items-center gap-2"
            >
              Subscribe
              <ArrowRight size={20} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;