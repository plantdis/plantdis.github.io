import React, { useState } from 'react';

// --- Navigation Component ---
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-3" style={{ backgroundColor: 'var(--color-primary)' }}>
                {/* PlantDis Icon */}
                <img src="/plantdis_icon.svg" alt="PlantDis" className="w-5 h-5" style={{ filter: 'brightness(0) invert(1)' }} />
              </div>
              <span className="text-xl font-bold" style={{ color: 'var(--color-primary)' }}>PlantDis</span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#overview" className="nav-link">Overview</a>
            <a href="#features" className="nav-link">Features</a>
            <a href="#demo" className="nav-link">Demo</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#overview" className="block nav-link py-2">Overview</a>
              <a href="#features" className="block nav-link py-2">Features</a>
              <a href="#demo" className="block nav-link py-2">Demo</a>
              <a href="#contact" className="block nav-link py-2">Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

// --- Hero Section ---
const HeroSection = () => {
  return (
    <section className="pt-16 pb-16 px-4" style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="container-custom">
        <div className="flex align-middle items-center">
          <div className="lg:basis-1/2 lg:space-y-14 lg:pr-5 space-y-8">
            <div className="md:text-left md:items-start flex flex-col items-center text-center">
              <span className="inline-flex items-center rounded-md px-2 py-1 text-sm md:text-base md:leading-5 font-semibold bg-gray-500 text-white">
                PlantDis
              </span>
              <h1 className="text-3xl lg:text-5xl leading-[34px] lg:leading-[56px] mt-4 text-primary font-bold" style={{ color: 'var(--color-primary-dark)' }}>
                Better information, better decisions.
              </h1>
              <h2 className="font-bold text-xl md:text-2xl leading-7 mt-4 text-gray-500">
                The tool for the farming professional. Record and organise your field observations to make better decisions. Save time by identifying problems in seconds and digitalise your crop walking.
              </h2>
            </div>
            <div className="mt-4 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
              <button className="focus:outline-none focus:ring-4 focus:ring-light flex justify-center rounded bg-primary-light text-white hover:bg-primary px-4 py-3 font-semibold text-base leading-5 text-center" style={{ backgroundColor: 'var(--color-primary-light)', color: 'white' }}>
                Explore Features
              </button>
              <button className="focus:outline-none focus:ring-4 focus:ring-light flex justify-center rounded text-primary hover:bg-primary hover:text-white outline outline-1 outline-solid outline-primary px-4 py-3 font-semibold text-base leading-5 text-center" style={{ color: 'var(--color-primary)', border: '1px solid var(--color-primary)' }}>
                Download App
              </button>
            </div>
          </div>
          <div className="lg:pl-5 hidden lg:block lg:basis-1/2 relative w-fit ml-auto">
            <div className="relative w-fit bg-no-repeat bg-center bg-contain my-auto overflow-hidden">
              <div className="bg-white rounded-2xl shadow-xl p-8 max-w-sm">
                <div className="text-center mb-4">
                  <h3 className="font-semibold text-gray-800">PlantDis</h3>
                  <div className="flex justify-center mt-2">
                    <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
                      <img src="/plantdis_icon.svg" alt="PlantDis" className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-2">WHAT WOULD YOU LIKE TO DETECT?</h4>
                    <div className="grid grid-cols-3 gap-2">
                      {['Weeds', 'Diseases', 'Pests'].map((item) => (
                        <div key={item} className="bg-gray-50 rounded-lg p-2 text-center">
                          <div className="w-8 h-8 bg-green-100 rounded-full mx-auto mb-1 flex items-center justify-center">
                            <img src="/plantdis_icon.svg" alt={item} className="w-4 h-4" />
                          </div>
                          <span className="text-xs text-gray-600">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Your Fields</h4>
                    <div className="space-y-2">
                      {['Field #1', 'Field #2'].map((field) => (
                        <div key={field} className="bg-gray-50 rounded-lg p-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">{field}</span>
                            <span className="text-xs text-gray-500">2.5 HA</span>
                          </div>
                          <div className="flex items-center mt-1">
                            <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                            <span className="text-xs text-gray-500">NEWTON VILLAGE</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex justify-around mt-6 pt-4 border-t border-gray-200">
                  {['Home', 'Map', 'Camera', 'Weather', 'Profile'].map((item) => (
                    <div key={item} className="text-center">
                      <div className="w-6 h-6 bg-gray-200 rounded-full mx-auto mb-1"></div>
                      <span className="text-xs text-gray-500">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Overview Section ---
const OverviewSection = () => {
  return (
    <section id="overview" className="pt-8 pb-4 px-4" style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="container-custom">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--color-primary-dark)' }}>
              Ready to go in 2 minutes.
            </h2>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            <strong className="font-semibold" style={{ color: 'var(--color-primary)' }}>PlantDis</strong> is a cross‑platform application (mobile & desktop) that leverages advanced machine learning (MobileNetV2) and computer vision (Mask R‑CNN) to diagnose plant diseases from leaf images. It supports <strong>39 conditions across 14 high‑value crops</strong> and is tailored for Australian environments—including offline use in rural fields.
          </p>
        </div>
      </div>
    </section>
  );
};

// --- Features Section ---
const FeaturesSection = () => {
  const features = [
    {
      title: "Identify problems",
      description: "Let the integrated image recognition identify and document weeds, diseases and pests for you.",
      icon: "🦗"
    },
    {
      title: "Field specific weather",
      description: "Get localised weather to better understand crop development, field conditions and when you should react.",
      icon: "☁️"
    },
    {
      title: "Build up field records",
      description: "PlantDis saves a clear field profile for you. This means you have all the important information available at any time and in any place.",
      icon: "📋"
    },
    {
      title: "Automate crop walking",
      description: "Do you want to monitor your crops remotely? With the PlantDis, you can be in the field at any time without being in the field.",
      icon: "📦"
    }
  ];

  return (
    <section id="features" className="pt-4 pb-4 px-4" style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="container-custom">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left side - Title */}
            <div className="lg:basis-1/2 flex items-center">
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight" style={{ color: 'var(--color-primary-dark)' }}>
                Ready to go in 2 minutes.
              </h1>
            </div>

            {/* Right side - Features */}
            <div className="lg:basis-1/2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="p-6 rounded-xl border border-gray-100 hover:border-gray-200 transition-all duration-300">
                    <div className="flex items-center mb-3">
                      <div className="text-2xl mr-3">{feature.icon}</div>
                      <h3 className="text-lg font-semibold" style={{ color: 'var(--color-primary-dark)' }}>
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Demo Section ---
const DemoSection = () => {
  return (
    <section id="demo" className="pt-4 pb-16 px-4" style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="container-custom">
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--color-primary-dark)' }}>
            Try PlantDis Today
          </h2>
          <p className="text-gray-700 text-lg mb-8">
            Experience the power of AI-driven plant disease detection. Download the app and start monitoring your crops with precision.
          </p>

          <div className="bg-gray-50 rounded-xl p-8 mb-8">
            <div className="text-gray-500 text-sm mb-4">PlantDis App Interface</div>
            <div className="bg-white rounded-lg p-12 border border-gray-200">
              <div className="text-6xl mb-4">🌿</div>
              <div className="text-gray-400">Interactive demo coming soon</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">Download for iOS</button>
            <button className="btn-primary">Download for Android</button>
            <button className="btn-secondary">Try Desktop Version</button>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Contact Section ---
const ContactSection = () => {
  return (
    <section id="contact" className="pt-4 pb-16 px-4" style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="container-custom">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--color-primary-dark)' }}>
              Get in Touch
            </h2>
            <div className="mb-6">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--color-primary)' }}>
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
            </div>

            <div className="text-lg text-gray-700 space-y-2">
              <p>
                <strong className="font-semibold" style={{ color: 'var(--color-primary)' }}>Lead Developer:</strong> Saswat Panda, APPN‑ANU
              </p>
              <p>
                <strong className="font-semibold" style={{ color: 'var(--color-primary)' }}>Email:</strong>{' '}
                <a href="mailto:saswat.panda@anu.edu.au" className="hover:underline" style={{ color: 'var(--color-primary)' }}>
                  saswat.panda@anu.edu.au
                </a>
              </p>
              <p>
                <strong className="font-semibold" style={{ color: 'var(--color-primary)' }}>GitHub:</strong>{' '}
                <a href="https://github.com/plantdis/plantdis.github.io" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: 'var(--color-primary)' }}>
                  plantdis.github.io
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Footer ---
const Footer = () => {
  return (
    <footer className="bg-white py-8 border-t border-gray-200">
      <div className="container-custom text-center">
        <div className="flex items-center justify-center mb-4">
          <img src="/plantdis_icon.svg" alt="PlantDis" className="w-6 h-6 mr-2" />
          <span className="text-xl font-bold" style={{ color: 'var(--color-primary-dark)' }}>PlantDis</span>
        </div>
        <p className="text-lg text-gray-600">
          © 2025 Australian Plant Phenomics Network – ANU node
        </p>
      </div>
    </footer>
  );
};

// --- Main App Component ---
const App = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-background)' }}>
      <Navigation />
      <HeroSection />
      <OverviewSection />
      <FeaturesSection />
      <DemoSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;
