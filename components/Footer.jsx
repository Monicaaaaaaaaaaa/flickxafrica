export default function Footer() {
  return (
    <footer className="bg-deep-blue text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2">
            <div className="mb-8">
              <img 
                src="/src/assets/Flickx Logo.png" 
                alt="FlickX Africa" 
                className="h-16 w-auto brightness-0 invert"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <p className="text-soft-white mb-6">Contact Us: +0998674352</p>
                <p className="text-soft-white mb-6">Email: info@gmail.com</p>
              </div>
              <div>
                <p className="text-soft-white mb-6">Location - yaba, Lagos, Nigeria</p>
                <button className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="bg-deep-blue rounded-2xl p-6 border border-sky-blue">
            <h4 className="text-xl font-semibold mb-6 text-white">Get the Latest News and Insights</h4>
            <form className="space-y-4">
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 bg-deep-blue border border-sky-blue rounded-lg text-white placeholder-white/70 focus:ring-2 focus:ring-sky-blue focus:border-transparent"
                />
              </div>
              <div className="relative">
                <textarea
                  placeholder="Message"
                  rows={3}
                  className="w-full px-4 py-3 bg-deep-blue border border-sky-blue rounded-lg text-white placeholder-white/70 focus:ring-2 focus:ring-sky-blue focus:border-transparent resize-none pr-12"
                ></textarea>
                <button
                  type="submit"
                  className="absolute bottom-3 right-3 w-8 h-8 bg-deep-blue rounded-full flex items-center justify-center hover:bg-sky-blue transition-colors shadow-sm"
                >
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}
