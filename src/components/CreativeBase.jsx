import africaImage from '../assets/africa-image.png';

export default function CreativeBase({ onAuthClick }) {
  return (
    <section id="creative-base" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Creative Base
          </h2>
          <p className="text-lg text-gray-600">
            Your Source For Intelligence and Data
          </p>
        </div>

        <div className="space-y-16">
          <div className="flex flex-col md:flex-row items-start gap-12">
            <div className="md:w-2/5">
              <img 
                src={africaImage} 
                alt="The State Of Africa Film Report 2024" 
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="md:w-3/5 md:pt-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                The State Of Africa Film Report 2024
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                A deep dive into the trends, challenges, and opportunities shaping the industry.
              </p>
              <button 
                onClick={onAuthClick} 
                className="inline-flex items-center text-red-600 hover:text-red-700 font-medium transition-colors"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download
              </button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start gap-12">
            <div className="md:w-2/5">
              <img 
                src={africaImage} 
                alt="Policy Watch: New Regulations in Nigeria's Creative Sector" 
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="md:w-3/5 md:pt-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Policy Watch: New Regulations in Nigeria's Creative Sector
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Stay informed on the latest government policies
              </p>
              <button 
                onClick={onAuthClick} 
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                Read More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
