import React, { useState } from 'react';
import { 
  ShoppingCart, 
  Box, 
  Mail, 
  MapPin, 
  ChevronRight, 
  ArrowRight,
  Github
} from 'lucide-react';
import CookieConsent from './components/CookieConsent';
import NewsletterSignup from './components/NewsletterSignup';
import ContactForm from './components/ContactForm';

function App() {
  const [showCookieConsent, setShowCookieConsent] = useState(true);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
            Mothersound
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-4 max-w-2xl mx-auto">
            Helping people harness AI to simplify life, spark creativity, and achieve what matters most to them.
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            A boutique software development agency focused on solving unique problems for users of Apple platforms
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors duration-300 flex items-center mx-auto gap-2">
            Explore Our Products
            <ChevronRight size={20} />
          </button>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 bg-white dark:bg-gray-900" id="products">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">Our Products</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Cart Copilot */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 relative group hover:shadow-lg transition-shadow duration-300">
              <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                Coming Soon
              </div>
              <ShoppingCart className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Cart Copilot</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">Your intelligent shopping companion</p>
              <p className="text-gray-500 dark:text-gray-400">
                Track expenses and manage shopping trips effortlessly with AI assistance
              </p>
            </div>

            {/* MovingBox */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 relative group hover:shadow-lg transition-shadow duration-300">
              <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                Coming Soon
              </div>
              <Box className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">MovingBox</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">Smart home inventory management</p>
              <p className="text-gray-500 dark:text-gray-400">
                Catalog your belongings instantly with AI-powered image recognition
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800" id="about">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">About Mothersound</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              At Mothersound, we combine cutting-edge AI technology with intuitive iOS development to create solutions that make a real difference in people's lives. Our expertise in artificial intelligence and deep understanding of Apple platforms allows us to build tools that feel natural and powerful.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              We're committed to delivering high-quality, user-centric applications that enhance productivity and creativity. Every product we develop undergoes rigorous testing and refinement to ensure it meets our exacting standards for performance, security, and user experience.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white dark:bg-gray-900" id="contact">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">Get in Touch</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white">Email</h3>
                      <a href="mailto:contact@mothersound.dev" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                        contact@mothersound.dev
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white">Address</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        119 S Western Ave<br />
                        Unit 1 #291<br />
                        Chicago, IL 60612
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <NewsletterSignup />

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-bold mb-4">Mothersound</h3>
              <p className="text-sm">
                Empowering users through AI-driven solutions on Apple platforms.
              </p>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Products</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Cart Copilot</a></li>
                <li><a href="#" className="hover:text-white transition-colors">MovingBox</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Connect</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">GitHub</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
            <p>&copy; {new Date().getFullYear()} Mothersound. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {showCookieConsent && (
        <CookieConsent onAccept={() => setShowCookieConsent(false)} />
      )}
    </div>
  );
}

export default App;