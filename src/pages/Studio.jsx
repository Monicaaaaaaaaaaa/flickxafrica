import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ArrowRight, Camera, Lightbulb, Film, Scissors, Palette, Globe, CheckCircle } from 'lucide-react';
import studioImage from '../assets/studio.jpg';
import whattoexpectImage from '../assets/whattoexpect.jpg';
import filmProductionImage from '../assets/film-production.jpg';
import futureImage from '../assets/future.jpg';
import bgImgImage from '../assets/bgImg.jpg';
import hydrogenImage from '../assets/hydrogen.jpg';
import windImage from '../assets/wind.jpg';

export default function Studio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      icon: Camera,
      title: "Film & Video Production",
      description: "Professional video production services from concept to final delivery"
    },
    {
      icon: Lightbulb,
      title: "Creative Strategy",
      description: "Strategic creative solutions that align with your brand vision"
    },
    {
      icon: Film,
      title: "Studio Shoots",
      description: "State-of-the-art studio facilities for professional photography and videography"
    },
    {
      icon: Scissors,
      title: "Post-Production",
      description: "Expert editing, color grading, and visual effects services"
    },
    {
      icon: Palette,
      title: "Creative Direction",
      description: "Artistic direction and creative oversight for your projects"
    }
  ];

  const whyFlickX = [
    {
      title: "Human-Centered Storytelling",
      description: "World-class quality in everything from courses to facilities, mentors to support."
    },
    {
      title: "African Excellence",
      description: "Showcasing the best of African talent and creativity to the world"
    },
    {
      title: "Global Reach",
      description: "Connecting local stories with global audiences through strategic distribution"
    },
    {
      title: "Innovation-Driven",
      description: "Leveraging cutting-edge technology and creative techniques"
    }
  ];

  const stats = [
    { number: "2,000+", label: "Active Creatives" },
    { number: "100+", label: "Completed Project" },
    { number: "500+", label: "Jobs Created" },
    { number: "$500+", label: "Earnings Generated" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <section className="relative py-32 px-4 bg-white overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-16 left-1/4 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-purple-400 via-purple-500 to-purple-700 opacity-80 rounded-full shadow-lg"></div>
            <div className="absolute top-12 right-1/3 transform translate-x-1/2 w-12 h-12 bg-gradient-to-br from-rose-300 to-rose-400 rounded-full shadow-lg"></div>
            <div className="absolute top-0 -right-48 w-64 h-64 bg-gradient-to-tl from-yellow-500 via-yellow-200 to-yellow-100 opacity-90 rounded-full shadow-xl"></div>
            <div className="absolute bottom-0 -left-24 w-56 h-56 bg-gradient-to-br from-blue-300 to-blue-500 rounded-full shadow-xl"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-blue-200 to-blue-400 rounded-full shadow-lg"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center z-10">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight relative">
                <span className="text-deep-blue block">Create Stories That <span className="relative inline-block">
                  <span style={{color: '#F4B400'}}>Travel</span>
                  <svg 
                    className="absolute -bottom-2 left-0 w-full"
                    height="20"
                    viewBox="0 0 180 20"
                    fill="none"
                  >
                    <path 
                      d="M2 15 C50 8, 90 2, 130 8, 178 12" 
                      stroke="#0057A0" 
                      strokeWidth="2"
                      fill="none"
                    />
                    <path 
                      d="M8 18 C55 10, 95 4, 135 10, 172 15" 
                      stroke="#0057A0" 
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                </span> Beyond Africa</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Craft-first storytelling for brands and creators who value depth over gimmicks. Stories that resonate in Lagos, London, Nairobi—anywhere in the world.
              </p>
              <div className="flex gap-4">
                <button className="bg-deep-blue hover:bg-sky-blue text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center">
                  Learn More
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
                <button className="bg-white border-2 border-deep-blue text-deep-blue hover:bg-gray-50 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  Contact Us
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="w-[477px] h-[477px] mx-auto bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center overflow-hidden">
                <img 
                  src={studioImage}
                  alt="Professional with camera" 
                  className="w-full h-full object-cover rounded-full object-[50%_20%]" 
                />
              </div>
              </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-px bg-sky-blue h-20 mr-4 opacity-50"></div>
                  <div>
                    <div className="text-4xl lg:text-5xl font-bold text-deep-blue mb-2">{stat.number}</div>
                    <div className="text-gray-600 text-lg">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-center text-black mb-16">What We Offer</h2>
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-300" style={{width: '382px', height: '527px'}}>
                <div className="pt-6">
                  <div className="overflow-hidden rounded-xl mx-auto" style={{width: '324px', height: '256px'}}>
                    <img 
                      src={filmProductionImage} 
                      alt="Film & Video Production" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-black mb-4">Film & Video Production</h3>
                  <p className="text-black">
                    Commercials, branded content, and documentaries that resonate and endure.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-300" style={{width: '382px', height: '527px'}}>
                <div className="pt-6">
                  <div className="overflow-hidden rounded-xl mx-auto" style={{width: '324px', height: '256px'}}>
                    <img 
                      src={futureImage} 
                      alt="Creative Strategy" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-black mb-4">Creative Strategy</h3>
                  <p className="text-black">
                    Content development and narrative consulting for stories worth telling.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-300" style={{width: '382px', height: '527px'}}>
                <div className="pt-6">
                  <div className="overflow-hidden rounded-xl mx-auto" style={{width: '324px', height: '256px'}}>
                    <img 
                      src={bgImgImage} 
                      alt="Studio Shoots" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-black mb-4">Studio Shoots</h3>
                  <p className="text-black">
                    Professional photo, video, interviews, and podcasts in a controlled environment.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-300" style={{width: '382px', height: '527px'}}>
                <div className="pt-6">
                  <div className="overflow-hidden rounded-xl mx-auto" style={{width: '324px', height: '256px'}}>
                    <img 
                      src={hydrogenImage} 
                      alt="Post-Production" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-black mb-4">Post-Production</h3>
                  <p className="text-black">
                    Editing, color grading, and sound design that elevates your footage.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-300" style={{width: '382px', height: '527px'}}>
                <div className="pt-6">
                  <div className="overflow-hidden rounded-xl mx-auto" style={{width: '324px', height: '256px'}}>
                    <img 
                      src={windImage} 
                      alt="Creative Direction" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-black mb-4">Creative Direction</h3>
                  <p className="text-black">
                    Artistic direction and creative oversight for your projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Why FlickX Studio
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We don't exoticize Africa, and we don't dilute it either. We tell stories that feel real, wherever they're watched.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {whyFlickX.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div style={{width: '0.5px', height: '80px', backgroundColor: 'black', marginTop: '4px'}}></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-deep-blue rounded-3xl p-12 shadow-2xl relative overflow-hidden">

            <div className="absolute inset-0 opacity-10">
              <div className="w-full h-full" style={{
                backgroundImage: `
                  linear-gradient(to right, white 1px, transparent 1px),
                  linear-gradient(to bottom, white 1px, transparent 1px)
                `,
                backgroundSize: 'calc(100% / 9) calc(100% / 4)'
              }}></div>
            </div>
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12 leading-tight">
                  Ready to tell stories that matter?
                </h2>

                <button className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors duration-200">
                  Start Now
                </button>
              </div>
              
              <div className="relative">
                <div className="relative">
                  <div className="w-80 h-80 mx-auto bg-sky-blue rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20 relative">

                    <div className="absolute top-16 left-1/2 transform -translate-x-1/2">
                      <div className="w-24 h-24 relative blur-md">
                        <div className="absolute inset-0 bg-yellow-400 rounded-full blur-xl opacity-60 animate-pulse"></div>
                        <div className="absolute inset-2 bg-yellow-300 rounded-full blur-lg opacity-80"></div>
                        <div className="absolute inset-4 bg-yellow-200 rounded-full"></div>
                      </div>
                    </div>
                    
                    <div className="absolute right-12 top-1/2 transform -translate-y-1/2 text-7xl text-white blur-md">⚡</div>
                    
                    <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-5xl blur-md">
                      <div className="relative">
                        <span className="text-red-500">◆</span>
                        <div className="absolute inset-0 flex items-center justify-center text-sm text-white">
                          🤲
                        </div>
                      </div>
                    </div>

                    <div className="absolute left-12 top-1/2 transform -translate-y-1/2 text-5xl text-white blur-md">
                      ⭐
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </main>

      <Footer />
    </div>
  );
}
