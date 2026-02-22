import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Studio() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Studio
              </h1>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
