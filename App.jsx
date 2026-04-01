const GeneratedWebsite = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('All');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      title: "Digital Strategy",
      description: "Data-driven roadmaps designed to scale your business and outpace competition.",
      icon: <LucideIcons.BarChart3 className="w-8 h-8 text-indigo-500" />,
    },
    {
      title: "Brand Identity",
      description: "Crafting memorable brands that resonate with your audience and tell your story.",
      icon: <LucideIcons.Palette className="w-8 h-8 text-pink-500" />,
    },
    {
      title: "Social Growth",
      description: "Strategic content and community management to build loyal digital tribes.",
      icon: <LucideIcons.Share2 className="w-8 h-8 text-cyan-500" />,
    },
    {
      title: "SEO Mastery",
      description: "Boosting your search rankings to ensure your brand is seen by those who matter.",
      icon: <LucideIcons.Search className="w-8 h-8 text-orange-500" />,
    },
    {
      title: "PPC Campaigns",
      description: "High-conversion paid advertising across Google, Meta, and LinkedIn.",
      icon: <LucideIcons.Zap className="w-8 h-8 text-yellow-500" />,
    },
    {
      title: "Web Development",
      description: "High-performance websites designed for maximum conversion and speed.",
      icon: <LucideIcons.Code2 className="w-8 h-8 text-green-500" />,
    },
  ];

  const projects = [
    { title: "Neo Finance", category: "Digital Strategy", img: "https://picsum.photos/seed/neo/600/400" },
    { title: "Eco Glow", category: "Brand Identity", img: "https://picsum.photos/seed/eco/600/400" },
    { title: "Velocity Sports", category: "Social Growth", img: "https://picsum.photos/seed/sports/600/400" },
    { title: "Lumina Apps", category: "Web Development", img: "https://picsum.photos/seed/app/600/400" },
    { title: "Skyline Realty", category: "SEO Mastery", img: "https://picsum.photos/seed/skyline/600/400" },
    { title: "Zenith Tech", category: "PPC Campaigns", img: "https://picsum.photos/seed/zenith/600/400" },
  ];

  const filteredProjects = activeTab === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  const stats = [
    { label: "Client Growth", value: "250%" },
    { label: "Successful Projects", value: "1.2k+" },
    { label: "Active Clients", value: "180+" },
    { label: "Awards Won", value: "42" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 overflow-x-hidden">
      {/* Navigation */}
      <nav className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 px-6 py-4",
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-indigo-600 p-2 rounded-lg">
              <LucideIcons.Flame className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">
              IGNITE.
            </span>
          </div>

          <div className="hidden md:flex gap-8 items-center font-medium">
            <a href="#" className="hover:text-indigo-600 transition-colors">Services</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">Portfolio</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">About</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">Testimonials</a>
            <button className="bg-slate-900 text-white px-6 py-2 rounded-full hover:bg-indigo-600 transition-all">
              Start Project
            </button>
          </div>

          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <LucideIcons.X /> : <LucideIcons.Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed inset-0 z-40 bg-white p-8 flex flex-col gap-6 pt-24"
          >
            <a href="#" className="text-2xl font-bold">Services</a>
            <a href="#" className="text-2xl font-bold">Portfolio</a>
            <a href="#" className="text-2xl font-bold">About</a>
            <a href="#" className="text-2xl font-bold">Contact</a>
            <button className="bg-indigo-600 text-white p-4 rounded-xl mt-4">Start Project</button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 opacity-10">
          <div className="w-[800px] h-[800px] bg-indigo-500 rounded-full blur-3xl -mr-96 -mt-96" />
        </div>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              Top Rated Digital Agency
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight mb-6">
              Elevate Your <span className="text-indigo-600">Digital</span> Presence.
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
              We help ambitious brands reach their full potential through creative strategy, 
              cutting-edge tech, and data-driven marketing results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg hover:shadow-indigo-200 transition-all flex items-center justify-center gap-2 group">
                Work With Us
                <LucideIcons.ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white border border-slate-200 text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all">
                Our Work
              </button>
            </div>
          </motion.div>
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-indigo-200">
              <img src="https://picsum.photos/seed/agency/800/600" alt="Team working" className="w-full h-auto" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 hidden lg:block border border-slate-100">
              <div className="flex items-center gap-4 mb-2">
                <div className="bg-green-100 p-2 rounded-full text-green-600">
                  <LucideIcons.TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase font-bold tracking-widest">Revenue Growth</div>
                  <div className="text-2xl font-bold">+184%</div>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 bg-indigo-600 p-6 rounded-2xl shadow-xl z-20 hidden lg:block text-white">
              <LucideIcons.Users className="w-10 h-10 mb-2" />
              <div className="text-2xl font-bold">12k+</div>
              <div className="text-xs opacity-80 uppercase tracking-widest font-semibold">Leads Generated</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-indigo-400 font-medium uppercase text-sm tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-indigo-600 font-bold tracking-widest uppercase text-sm mb-3">Our Expertise</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900">What We Bring To The Table</h3>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="p-8 bg-white rounded-2xl border border-slate-100 hover:border-indigo-100 hover:shadow-xl transition-all group"
            >
              <div className="bg-slate-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-50 transition-colors">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold mb-3">{service.title}</h4>
              <p className="text-slate-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-24 bg-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-indigo-600 font-bold tracking-widest uppercase text-sm mb-3">Selected Projects</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-slate-900">Delivering Excellence</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {['All', 'Digital Strategy', 'Brand Identity', 'Web Development'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={cn(
                    "px-6 py-2 rounded-full font-medium transition-all text-sm",
                    activeTab === tab ? "bg-indigo-600 text-white" : "bg-white text-slate-600 hover:bg-slate-200"
                  )}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <motion.div 
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => (
                <motion.div
                  layout
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer"
                >
                  <img 
                    src={project.img} 
                    alt={project.title} 
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                    <span className="text-indigo-400 text-sm font-bold uppercase tracking-widest mb-2">{project.category}</span>
                    <h4 className="text-white text-2xl font-bold">{project.title}</h4>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 max-w-7xl mx-auto px-6 overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-indigo-600 font-bold tracking-widest uppercase text-sm mb-3">Client Love</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">Trusted by over 500+ global brands and creators.</h3>
            <div className="bg-indigo-50 p-8 rounded-3xl border border-indigo-100 relative">
              <LucideIcons.Quote className="absolute top-8 right-8 w-12 h-12 text-indigo-200" />
              <p className="text-xl text-slate-700 italic leading-relaxed mb-8">
                "The team at Ignite completely transformed our digital strategy. Our conversion rates tripled within the first three months of collaboration. They are not just an agency; they are strategic partners."
              </p>
              <div className="flex items-center gap-4">
                <img src="https://picsum.photos/seed/ceo/100/100" className="w-14 h-14 rounded-full border-2 border-white" alt="Avatar" />
                <div>
                  <div className="font-bold text-slate-900">Sarah Jenkins</div>
                  <div className="text-slate-500 text-sm">CEO, InnovateX Corp</div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-12">
              <img src="https://picsum.photos/seed/p1/300/300" className="rounded-2xl w-full" alt="Project" />
              <img src="https://picsum.photos/seed/p2/300/400" className="rounded-2xl w-full" alt="Project" />
            </div>
            <div className="space-y-4">
              <img src="https://picsum.photos/seed/p3/300/400" className="rounded-2xl w-full" alt="Project" />
              <img src="https://picsum.photos/seed/p4/300/300" className="rounded-2xl w-full" alt="Project" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-indigo-600 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-indigo-300">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute -top-10 -left-10 w-40 h-40 border-8 border-white rounded-full" />
            <div className="absolute top-40 right-20 w-20 h-20 bg-white rounded-full" />
            <div className="absolute -bottom-20 left-1/2 w-60 h-60 border-[20px] border-white rounded-full" />
          </div>
          <h3 className="text-4xl md:text-6xl font-extrabold mb-8 relative z-10">Ready to ignite your brand's growth?</h3>
          <p className="text-indigo-100 text-lg md:text-xl mb-12 max-w-2xl mx-auto relative z-10">
            Let's build something extraordinary together. Our team is ready to help you scale and dominate your market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <button className="bg-white text-indigo-600 px-10 py-5 rounded-2xl font-bold hover:bg-slate-50 transition-all text-lg">
              Book a Strategy Call
            </button>
            <button className="bg-indigo-700/50 backdrop-blur-sm border border-indigo-400 text-white px-10 py-5 rounded-2xl font-bold hover:bg-indigo-700 transition-all text-lg">
              Check Our Pricing
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 pt-20 pb-10 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 text-white mb-6">
              <div className="bg-indigo-600 p-2 rounded-lg">
                <LucideIcons.Flame className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-bold tracking-tight">IGNITE.</span>
            </div>
            <p className="mb-6 leading-relaxed">
              We design and build digital products for brands that want to make an impact.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all">
                <LucideIcons.Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all">
                <LucideIcons.Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all">
                <LucideIcons.Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Services</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-white transition-colors">Growth Marketing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Content Strategy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">UI/UX Design</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Web3 Solutions</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Our Team</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Newsletter</h4>
            <p className="mb-4 text-sm">Get the latest marketing insights delivered to your inbox.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-slate-800 border-none rounded-lg px-4 py-3 flex-1 text-white focus:ring-2 focus:ring-indigo-600"
              />
              <button className="bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700 transition-colors">
                <LucideIcons.Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© 2024 Ignite Agency. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GeneratedWebsite;