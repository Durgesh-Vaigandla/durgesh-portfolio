import React from 'react';
import { Metadata } from 'next';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CustomCursor from '../../components/CustomCursor';

export const metadata: Metadata = {
  title: 'Durgesh Vaigandla | Visual Gallery & Appearances',
  description: 'Events, hackathons, speaking engagements, and timeline proof from Durgesh Vaigandla.',
  keywords: ['Durgesh', 'Durgesh Gallery', 'Durgesh Vaigandla Photos', 'Speaking Engagements']
};

const IMAGES = [
  {
    src: '/Durgesh@Microsoft-GitHub-Copilot-Event.png',
    title: 'Microsoft GitHub Copilot Event',
    type: 'Community & Ecosystem'
  },
  {
    src: '/Durgesh@SHF2K26-Mentoring-on-stage.png',
    title: 'Mentoring On Stage (v2)',
    type: 'Public Speaking'
  },
  {
    src: '/Durgesh@SHF2K25-TeachingParticipants.png',
    title: 'Hackfest 2K25',
    type: 'Mentoring Developers'
  },
  {
    src: '/Durgesh@Ai-skills-summit-servicesnow.png',
    title: 'AI Skills Summit (ServiceNow)',
    type: 'Enterprise Scale'
  },
  {
    src: '/Durgesh@Google.jpeg',
    title: 'Google Event',
    type: 'Tech Community'
  },
  {
    src: '/Durgesh@SHF2K25-LightningLamp.png',
    title: 'Hackfest 2K25 Inauguration',
    type: 'Igniting Innovation'
  }
];

export default function GalleryPage() {
  return (
    <div className="bg-space min-h-screen text-white font-sans selection:bg-accent/30 selection:text-white relative">
        <CustomCursor />
        <Navbar />

        <main className="pt-32 pb-24 px-6 md:px-16">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20">
                    <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-6 leading-none">
                        Visual <span className="text-transparent" style={{ WebkitTextStroke: '2px #00f0ff' }}>Log.</span>
                    </h1>
                    <p className="text-gray-400 font-mono text-sm md:text-base max-w-2xl border-l-2 border-[#00f0ff] pl-6 py-2">
                        A collection of moments from hackathons, speaking events, and community building. Proof of active momentum in the global tech ecosystem.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {IMAGES.map((img, i) => (
                        <div key={i} className="group relative w-full aspect-[4/5] bg-[#0a0a0a] border border-white/10 overflow-hidden rounded-xl">
                            <img 
                                src={img.src} 
                                alt={img.title + ' - Durgesh Vaigandla'} 
                                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
                            
                            <div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <span className="text-[10px] font-mono text-[#00f0ff] uppercase tracking-[0.2em] block mb-2 drop-shadow-md">
                                    {img.type}
                                </span>
                                <h3 className="text-2xl font-black uppercase tracking-tighter text-white drop-shadow-md">
                                    {img.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="mt-32 p-16 border border-white/5 bg-white/5 backdrop-blur-sm text-center rounded-2xl relative overflow-hidden group">
                    <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                    <span className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.3em] block mb-6">End of Records</span>
                    <p className="text-gray-300 text-lg font-light max-w-lg mx-auto leading-relaxed">
                        More records will be appended as new systems are shipped and new milestones are hit in the pursuit of engineering excellence.
                    </p>
                </div>
            </div>
        </main>

        <Footer />
    </div>
  );
}
