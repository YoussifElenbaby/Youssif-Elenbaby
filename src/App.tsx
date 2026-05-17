import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Play, Mail, Instagram, ArrowRight, Video, PenTool, Sparkles, MonitorPlay, 
  Smartphone, Clapperboard, Palette, FileVideo, Briefcase, Zap, CheckCircle, Menu, X, MessageCircle, Layers
} from 'lucide-react';

// --- DATA ---

const services = [
  { id: 1, title: 'Creative Script Writing', icon: PenTool, description: 'Crafting compelling narratives that capture attention and drive emotion from the first second.' },
  { id: 2, title: 'Video Editing', icon: FileVideo, description: 'Seamless cuts, pacing, and color grading to transform raw footage into cinematic stories.' },
  { id: 3, title: 'Motion Graphics', icon: Layers, description: 'Dynamic animations and visual effects that bring static concepts to life.' },
  { id: 4, title: 'AI Image & Video Gen', icon: Sparkles, description: 'Leveraging cutting-edge AI tools to conceptualize and generate mind-bending visuals.' },
  { id: 5, title: 'Social Media Content', icon: Smartphone, description: 'High-retention, platform-native content designed for maximum engagement and reach.' },
  { id: 6, title: 'Brand Storytelling', icon: Clapperboard, description: 'Translating brand identity into visual narratives that resonate with target audiences.' },
  { id: 7, title: 'Reels, Ads & Shorts', icon: Video, description: 'Punchy, fast-paced short-form content optimized for modern attention spans.' },
  { id: 8, title: 'Visual Concepts & Direction', icon: Palette, description: 'Guiding the aesthetic and artistic vision of projects from ideation to delivery.' },
];

const categories = ['All', 'AI Visuals & Video Experiments', 'Motion Graphics', 'Video Editing', 'Social Media / Reels', 'Brand & Commercial Content'];

const portfolioItems = Array.from({ length: 15 }).map((_, i) => {
  const catInt = i % 5;
  const categoryMap = categories.slice(1);
  const category = categoryMap[catInt];
  
  // Cinematic placeholder images
  const images = [
    'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop', // Abstract AI
    'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop', // Retro Tech/Motion
    'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2670&auto=format&fit=crop', // Video Editing Setup
    'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2574&auto=format&fit=crop', // Social Media
    'https://images.unsplash.com/photo-1600508774634-4e11d34730e2?q=80&w=2670&auto=format&fit=crop', // Brand Cinematic
  ];

  const titles = [
    'Neon Cyberpunk Dreamscape',
    'Kinetic Typography Promo',
    'Cinematic Travel Reel',
    'Viral Product TikTok',
    'Luxury Car Commercial',
  ];

  const specificVideos = [
    { 
      id: 'dcT_WoGmPoQ', 
      title: 'Cinematic Editing & Storytelling Reel', 
      description: 'A comprehensive showcase of my best editing, motion graphics, and narrative pacing techniques.',
      type: 'youtube' as const, 
      thumbnail: 'https://img.youtube.com/vi/dcT_WoGmPoQ/maxresdefault.jpg', 
      url: 'https://www.youtube.com/embed/dcT_WoGmPoQ', 
      orientation: 'horizontal' as const 
    },
    { 
      id: '9iyooGwzq-s', 
      title: 'Dynamic Commercial Video', 
      description: 'High-impact commercial editing focusing on sound design, dynamic cuts, and engaging brand visuals.',
      type: 'youtube' as const, 
      thumbnail: 'https://img.youtube.com/vi/9iyooGwzq-s/hqdefault.jpg', 
      url: 'https://www.youtube.com/embed/9iyooGwzq-s', 
      orientation: 'horizontal' as const 
    },
    { 
      id: 'imsf1JLeP0U', 
      title: 'Motion Graphics & Visual Effects', 
      description: 'Clean animations and visual effects that seamlessly integrate with cinematic footage to elevate the story.',
      type: 'youtube' as const, 
      thumbnail: 'https://img.youtube.com/vi/imsf1JLeP0U/maxresdefault.jpg', 
      url: 'https://www.youtube.com/embed/imsf1JLeP0U', 
      orientation: 'horizontal' as const 
    },
    { 
      id: 'z-Lz0bGh3no', 
      title: 'Professional Brand Campaign', 
      description: 'A polished promotional video combining professional color grading, interviews, and B-roll for corporate branding.',
      type: 'youtube' as const, 
      thumbnail: 'https://img.youtube.com/vi/z-Lz0bGh3no/hqdefault.jpg', 
      url: 'https://www.youtube.com/embed/z-Lz0bGh3no', 
      orientation: 'horizontal' as const 
    },
  ];

  const spec = i < specificVideos.length ? specificVideos[i] : null;

  return {
    id: i + 1,
    title: spec ? spec.title : `${titles[catInt]} 0${Math.floor(i / 5) + 1}`,
    category: category,
    description: spec ? spec.description : `A showcase of ${category.toLowerCase()} demonstrating high-end visual techniques and storytelling workflow.`,
    image: spec ? spec.thumbnail : images[catInt],
    videoUrl: spec ? spec.url : '', 
    videoType: spec ? spec.type : 'local' as 'youtube' | 'local' | 'instagram',
    orientation: spec ? spec.orientation : 'horizontal' as 'horizontal' | 'vertical',
  };
});

const tools = [
  'After Effects', 'Premiere Pro', 'Photoshop', 'Adobe Animate', 'CapCut', 'AI Image Tools', 'AI Video Tools'
];

// --- COMPONENTS ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#portfolio' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        <a href="#" className="text-xl font-display font-bold tracking-tight text-white flex items-center gap-2">
          <span>Youssif<span className="text-white/50">Elenbaby</span></span>
        </a>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
              {link.name}
            </a>
          ))}
          <a href="#contact" className="px-5 py-2 text-sm font-medium bg-white text-black rounded-full hover:bg-gray-200 transition-colors">
            Let's Talk
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 py-6 px-6 flex flex-col gap-4 md:hidden"
          >
            {links.map(link => (
              <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-lg font-medium text-gray-300 hover:text-white">
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-atmosphere pb-20">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8 border border-white/10">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            <span className="text-xs font-medium uppercase tracking-wider text-gray-300">Available for Freelance & Full-time</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-medium leading-[1.05] tracking-tight mb-6">
            Cinematic storytelling <br className="hidden md:block"/>
            powered by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">creativity & AI.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            I help brands, creators, and agencies turn ideas into cinematic videos, motion graphics, and AI-powered visual experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#portfolio" className="ai-glow w-full sm:w-auto">
              <span className="relative flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-colors w-full">
                View My Work
              </span>
            </a>
            <a href="#contact" className="flex items-center justify-center gap-2 glass-panel text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-colors w-full sm:w-auto">
              Let's Collaborate <ArrowRight size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-display mb-8">About Me</h2>
            <div className="space-y-6 text-lg text-gray-400 font-light leading-relaxed">
              <p>
                <strong className="text-white font-normal">Youssif Elenbaby</strong> is a Creative Specialist blending storytelling, video editing, motion design, and AI-powered visuals to craft cinematic content for brands, creators, and agencies. 
              </p>
              <p>
                With 7 years of experience as a freelancer and content creator, and 2 years in full-time creative roles, he transforms ideas from concept to final cut with a strong focus on visual impact, emotion, and innovation.
              </p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-square md:aspect-[4/5] lg:aspect-square rounded-[2rem] overflow-hidden ai-glow group shadow-2xl"
          >
            <div className="absolute inset-0 bg-zinc-900">
              <img 
                src="/profile.jpeg?t=1" 
                alt="Youssif Elenbaby" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
              <div className="absolute inset-4 border border-white/10 rounded-[1.5rem] pointer-events-none"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-zinc-950/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display mb-4">My Arsenal</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Concept to completion. I handle every aspect of the visual pipeline.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass-panel p-8 rounded-2xl hover:bg-white/5 transition-colors group cursor-default"
            >
              <service.icon className="w-10 h-10 text-gray-500 group-hover:text-blue-400 transition-colors mb-6" strokeWidth={1} />
              <h3 className="text-xl font-medium mb-3 text-white">{service.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedVideo, setSelectedVideo] = useState<typeof portfolioItems[0] | null>(null);
  
  const filteredItems = activeCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  // Helper to safely format youtube URLs into embed URLs
  const getEmbedUrl = (url: string) => {
    if (url.includes('youtube.com/watch?v=')) {
      return url.replace('watch?v=', 'embed/');
    }
    if (url.includes('youtu.be/')) {
      return url.replace('youtu.be/', 'youtube.com/embed/');
    }
    return url;
  };

  return (
    <section id="portfolio" className="py-24 lg:py-32 relative">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-4xl md:text-6xl font-display mb-4">Selected Works</h2>
            <p className="text-gray-400">A showcase of cinematic experiments, commercial editing, and AI-driven concepts.</p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide border transition-all ${
                  activeCategory === cat 
                    ? 'border-white/40 bg-white/10 text-white' 
                    : 'border-white/10 text-gray-500 hover:text-white hover:border-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                onClick={() => setSelectedVideo(item)}
                className="group relative aspect-video bg-zinc-900 rounded-xl overflow-hidden cursor-pointer"
              >
                {/* Thumbnail */}
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700 blur-[2px] group-hover:blur-0"
                />
                
                {/* Overlay details */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-6 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-2 py-1 text-[10px] uppercase tracking-wider bg-white/10 backdrop-blur-md rounded border border-white/10 text-white/80">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-display font-medium text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {item.description}
                  </p>
                </div>

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform duration-500">
                    <Play className="w-6 h-6 text-white ml-1" fill="white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        <div className="mt-16 text-center">
             <p className="text-xs uppercase tracking-widest font-mono text-white/30">Note: These are placeholders pending final showreel.</p>
        </div>
      </div>

      {/* Video Modal Overview */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-8"
            onClick={() => setSelectedVideo(null)}
          >
            <button className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors">
              <X size={32} />
            </button>
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className={`w-full bg-zinc-900 rounded-2xl overflow-hidden shadow-2xl border border-white/10 relative ${
                selectedVideo.orientation === 'vertical' ? 'max-w-md aspect-[9/16]' : 'max-w-6xl aspect-video'
              }`}
            >
              {selectedVideo.videoUrl ? (
                selectedVideo.videoType === 'youtube' ? (
                  <iframe 
                    src={getEmbedUrl(selectedVideo.videoUrl)} 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="w-full h-full border-0"
                  ></iframe>
                ) : selectedVideo.videoType === 'instagram' ? (
                  <iframe 
                    src={selectedVideo.videoUrl} 
                    allowFullScreen
                    className="w-full h-full border-0 bg-zinc-950"
                  ></iframe>
                ) : (
                  <video 
                    src={selectedVideo.videoUrl} 
                    controls 
                    autoPlay 
                    className="w-full h-full object-contain bg-black"
                  ></video>
                )
              ) : (
                <div className="w-full h-full flex items-center justify-center flex-col gap-4 text-center p-6 bg-zinc-900">
                  <MonitorPlay size={48} className="text-gray-600 mb-2" />
                  <h3 className="text-2xl font-display text-white">{selectedVideo.title}</h3>
                  <p className="text-gray-400">Video placeholder. Replace with actual video URL.</p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const ExperienceAndTools = () => {
  return (
    <section id="experience" className="py-24 bg-zinc-950/50 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Experience */}
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
          >
            <h2 className="text-3xl font-display mb-10 text-white">Experience</h2>
            <div className="space-y-12 border-l border-white/10 ml-3 md:ml-0 pl-8 md:pl-10 relative">
              
              <div className="relative">
                <span className="absolute -left-[41px] md:-left-[49px] top-1 w-5 h-5 rounded-full bg-black border-2 border-primary flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                </span>
                <h3 className="text-xl font-medium text-white mb-1">Andalusia Hospital, Maadi</h3>
                <p className="text-blue-400 text-sm mb-4">Current Role</p>
                <p className="text-gray-400 text-sm leading-relaxed">Working across creative storytelling, high-end commercial editing, motion design, and implementing AI-enhanced production workflows to elevate the brand's visual identity.</p>
              </div>

              <div className="relative">
                <span className="absolute -left-[41px] md:-left-[49px] top-1 w-5 h-5 rounded-full bg-black border-2 border-white/20"></span>
                <h3 className="text-xl font-medium text-white mb-1">Full-Time Creative Roles</h3>
                <p className="text-white/50 text-sm mb-4">2 Years Experience</p>
                <p className="text-gray-400 text-sm leading-relaxed">Dedicated agency and in-house roles focusing on end-to-end video production, creative direction, and social media campaigns.</p>
              </div>

              <div className="relative">
                <span className="absolute -left-[41px] md:-left-[49px] top-1 w-5 h-5 rounded-full bg-black border-2 border-white/20"></span>
                <h3 className="text-xl font-medium text-white mb-1">Freelance & Content Creator</h3>
                <p className="text-white/50 text-sm mb-4">7 Years Experience</p>
                <p className="text-gray-400 text-sm leading-relaxed">Independent creator working directly with clients to deliver bespoke motion graphics, video editing, and conceptual storytelling.</p>
              </div>

            </div>
          </motion.div>

          {/* Tools & Why Me */}
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
          >
            <div className="mb-16">
                <h2 className="text-3xl font-display mb-8 text-white">Software & Stack</h2>
                <div className="flex flex-wrap gap-3">
                {tools.map(tool => (
                    <span key={tool} className="px-5 py-3 rounded-xl glass-panel text-sm text-gray-300 font-medium hover:text-white hover:bg-white/10 transition-colors">
                    {tool}
                    </span>
                ))}
                </div>
            </div>

            <div>
                <h2 className="text-3xl font-display mb-8 text-white">Why Work With Me?</h2>
                <ul className="space-y-6">
                    {[
                        "I combine creative side conceptual thinking with highly technical backend execution.",
                        "End-to-end pipeline: develop the idea, write the script, edit, motion graphics, and AI enhancement.",
                        "My AI workflow allows for faster iteration, more unique concepts, and cinematic results that traditional methods can't match quickly.",
                        "Deep understanding of the algorithmic landscape—creating content that looks premium but performs exceptionally on social platforms."
                    ].map((point, i) => (
                        <li key={i} className="flex items-start gap-4 text-gray-400">
                            <CheckCircle className="w-6 h-6 text-blue-500 shrink-0 mt-0.5" strokeWidth={1.5} />
                            <span className="leading-relaxed text-sm">{point}</span>
                        </li>
                    ))}
                </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-atmosphere opacity-50"></div>
      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
        
        <h2 className="text-6xl md:text-8xl font-display font-medium tracking-tight mb-8">
          Let’s create something <span className="italic text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">cinematic.</span>
        </h2>
        
        <p className="text-xl text-gray-400 mb-16 font-light">
          Have a project, campaign, video, or content idea? Let’s talk.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <a 
            href="https://wa.me/201015635673" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-200 transition-colors w-full sm:w-auto justify-center"
          >
            <MessageCircle size={20} /> Contact on WhatsApp
          </a>
          
          <a 
            href="mailto:youssifmelenbaby@gmail.com"
            className="flex items-center gap-3 glass-panel text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-colors w-full sm:w-auto justify-center"
          >
            <Mail size={20} /> Send Email
          </a>

          <a 
            href="https://instagram.com/ynelenbaby" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 glass-panel text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-colors w-full sm:w-auto justify-center"
          >
            <Instagram size={20} /> View Instagram
          </a>
        </div>
        
      </div>
    </section>
  );
};

const Footer = () => {
    return (
        <footer className="py-8 border-t border-white/5 bg-black text-center text-gray-600 text-sm flex flex-col sm:flex-row justify-center items-center gap-2">
            <p>&copy; {new Date().getFullYear()} Youssif Elenbaby.</p> 
            <p className="hidden sm:block">•</p>
            <p>Creative Specialist & AI Filmmaker</p>
        </footer>
    );
}

// --- APP ---

export default function App() {
  return (
    <div className="min-h-screen selection:bg-blue-500/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <ExperienceAndTools />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
