export default function AboutUs() {
  return (
    <section id="about-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About Us and Email
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="mb-8">
              <img 
                src="/src/assets/imagination-bro 1.png" 
                alt="Our Vision Illustration" 
                className="w-80 h-64 mx-auto lg:mx-0 object-contain rounded-lg bg-white p-4"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed">
              A brief paragraph about the team's commitment to building a vibrant creative industry.
            </p>
          </div>

          <div className="bg-white border border-blue-200 rounded-2xl p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
              Email Us
            </h3>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-400 transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-400 transition-colors"
                />
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-400 resize-none transition-colors"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-deep-blue text-white py-4 px-6 rounded-full font-semibold hover:bg-sky-blue transition-colors shadow-md"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
