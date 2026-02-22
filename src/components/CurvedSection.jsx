import React, { useState } from 'react';
import t1Image from '../assets/t1.png';
import t2Image from '../assets/t2.png';
import t3Image from '../assets/t3.png';
import t4Image from '../assets/t4.png';
import t5Image from '../assets/t5.png';
import t6Image from '../assets/t6.png';

const CurvedSection = ({ heading = "Real Stories, Real Impact" }) => {
  const profiles = [
    { 
      id: 1, 
      name: 'Fatima Diallo', 
      role: 'Filmmaker, Senegal',
      image: t2Image,
      comment: 'FlickX Learn transformed my passion into a profession. The courses are comprehensive and community support is incredible.'
    },
    { 
      id: 2, 
      name: 'Kwame Asante', 
      role: 'Editor, Ghana',
      image: t4Image,
      comment: 'The editing techniques I learned here took my career to the next level. I now work on major productions.'
    },
    { 
      id: 3, 
      name: 'Ngozi Okeke', 
      role: 'Director, Nigeria',
      image: t6Image,
      comment: 'From beginner to professional director in just 6 months. FlickX Learn gave me the confidence and skills I needed.'
    },
    { 
      id: 4, 
      name: 'Amara Okafor', 
      role: 'Editor, Lagos State',
      image: t1Image,
      comment: 'FlickX Learn gave me the skills to transition from accounting to film-making.'
    },
    { 
      id: 5, 
      name: 'Joseph Mwangi', 
      role: 'Cinematographer, Kenya',
      image: t3Image,
      comment: 'The cinematography masterclass opened doors I never imagined. Now I shoot for international clients.'
    },
    { 
      id: 6, 
      name: 'Aisha Bah', 
      role: 'Producer, Tanzania',
      image: t5Image,
      comment: 'FlickX Learn connected me with mentors who helped me produce my first feature film.'
    },
    { 
      id: 7, 
      name: 'Tunde Adekambi', 
      role: 'Sound Engineer, South Africa',
      image: t3Image,
      comment: 'The sound engineering program at FlickX gave me the technical expertise to work on major film productions across Africa.'
    }
  ];

  const [selectedProfile, setSelectedProfile] = useState(profiles[3]);

  const currentProfile = selectedProfile;

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          {heading}
        </h2>
      </div>

      <section className="relative bg-deep-blue text-white overflow-hidden">
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 z-30">
          <div className="flex items-center space-x-14">
            {profiles.map((profile) => (
              <div
                key={profile.id}
                onClick={() => setSelectedProfile(profile)}
                className={`${profile.id === 4 ? 'w-16 h-16' : 'w-16 h-16'} rounded-full border-4 ${selectedProfile?.id === profile.id ? 'border-sky-blue' : 'border-white'} flex items-center justify-center shadow-lg overflow-hidden transform ${profile.id === 1 || profile.id === 7 ? '-translate-y-5' : profile.id === 2 || profile.id === 6 ? '-translate-y-2' : profile.id === 3 || profile.id === 5 ? '-translate-y-1' : profile.id === 4 ? 'translate-y-0' : '-translate-y-5'} cursor-pointer hover:scale-110 transition-transform`}
              >
                <img 
                  src={profile.image}
                  alt={profile.name}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
          <svg 
            className="absolute top-0 left-0 w-full h-32"
            viewBox="0 0 1440 128"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 C360,160 1080,160 1440,0 L1440,0 L0,0 Z"
              fill="white"
            />
          </svg>

          <svg 
            className="absolute -bottom-1 left-0 w-full h-24 block"
            viewBox="0 0 1440 96"
            preserveAspectRatio="none"
          >
            <path
              d="M0,96 C360,0 1080,0 1440,96 L1440,96 L0,96 Z"
              fill="white"
            />
          </svg>

          <div className="relative z-10 pt-48 pb-48">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-xl mx-auto">
                <div className="bg-white rounded-2xl p-4 shadow-2xl text-gray-900 relative z-10">
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-sky-blue rounded-full"></div>
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 w-8 h-8 bg-sky-blue rounded-full"></div>
                  <p className="text-gray-700 text-lg italic leading-relaxed mb-6 text-center">
                    "{currentProfile.comment}"
                  </p>
                  
                  <div className="flex flex-col items-center justify-center">
                    <div className="font-semibold text-lg text-center">{currentProfile.name}</div>
                    <div className="text-gray-600 text-center">{currentProfile.role}</div>
                  </div>
                </div>
              </div>

              <div className="absolute top-1/2 left-10 w-32 h-32 bg-sky-blue/20 rounded-full blur-xl"></div>
              <div className="absolute top-1/2 right-10 w-32 h-32 bg-sky-blue/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </section>
    </div>
  );
};

export default CurvedSection;
