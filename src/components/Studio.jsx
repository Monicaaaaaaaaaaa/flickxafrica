import thirdPicture from '../assets/3rd-picture.png';
import fourthPic from '../assets/4th-pic.png';
import fifthPic from '../assets/5th-pic.png';

export default function Studio() {
  const studioItems = [
    {
      image: thirdPicture,
      subtitle: "Check our Short Movie on Youtube",
      link: "#",
      actionText: "Watch Now",
      youtubeIcon: false
    },
    {
      image: fourthPic,
      subtitle: "Check Our Music Video on Youtube",
      link: "#", 
      actionText: "Watch Now",
      youtubeIcon: true
    },
    {
      image: fifthPic,
      subtitle: "Check Our Urban Oasis on Youtube",
      link: "#", 
      actionText: "Review",
      youtubeIcon: false
    }
  ];

  return (
    <section id="studio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            FlickX Studio
          </h2>
          <p className="text-lg text-gray-600">
            World Class Production Services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {studioItems.map((item, index) => (
            <div key={index} className="text-center">
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl shadow-lg mb-4">
                  <img 
                    src={item.image} 
                    alt={item.subtitle}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex flex-col items-center justify-center">
                    <span className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center">
                      {item.actionText} 
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </span>
                  </div>
                </div>
              </a>
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-sky-600 text-base font-medium hover:text-sky-700 transition-colors">
                {item.subtitle}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
