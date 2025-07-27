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
                {/* Leaf SVG Icon */}
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="M256 0C156.7 0 87.4 38.1 61.1 98.2c-3.3 8.1 1.8 16.8 10 20.2 8.1 3.4 16.8-1.8 20.2-9.9C107.8 68 176.8 32 256 32c52.9 0 102.4 18 137.4 50.7l29.4-29.4C416.6 29.4 338.4 0 256 0z" />
                </svg>
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
    <section className="pt-16" style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-primary-light))' }}>
      <div className="container-custom section-padding text-center text-white">
        <div className="fade-in">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M256 0C156.7 0 87.4 38.1 61.1 98.2c-3.3 8.1 1.8 16.8 10 20.2 8.1 3.4 16.8-1.8 20.2-9.9C107.8 68 176.8 32 256 32c52.9 0 102.4 18 137.4 50.7l29.4-29.4C416.6 29.4 338.4 0 256 0z" />
              </svg>
            </div>
          </div>
          <h1 className="text-responsive-xl font-bold mb-6">
            PlantDis
          </h1>
          <p className="text-responsive-lg mb-8 max-w-4xl mx-auto font-light">
            Real‑Time & Scalable Disease Detection for the Future of Agriculture
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">Download App</button>
            <button className="btn-secondary bg-white/10 border-white text-white hover:bg-white hover:text-gray-900">
              Try Desktop Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Overview Section ---
const OverviewSection = () => {
  return (
    <section id="overview" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-responsive-lg font-bold mb-4 flex items-center justify-center">
            <svg className="w-8 h-8 mr-3" fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" style={{ color: 'var(--color-primary)' }}>
              <path d="M256 0C156.7 0 87.4 38.1 61.1 98.2c-3.3 8.1 1.8 16.8 10 20.2 8.1 3.4 16.8-1.8 20.2-9.9C107.8 68 176.8 32 256 32c52.9 0 102.4 18 137.4 50.7l29.4-29.4C416.6 29.4 338.4 0 256 0z" />
            </svg>
            <span style={{ color: 'var(--color-primary)' }}>Overview</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="card p-8">
            <p className="text-gray-700 text-lg leading-relaxed">
              <strong className="font-semibold" style={{ color: 'var(--color-primary)' }}>PlantDis</strong> is a cross‑platform application (mobile & desktop) that leverages advanced machine learning (MobileNetV2) and computer vision (Mask R‑CNN) to diagnose plant diseases from leaf images. It supports <strong>39 conditions across 14 high‑value crops</strong> and is tailored for Australian environments—including offline use in rural fields.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Features Section ---
const FeaturesSection = () => {
  const features = [
    {
      title: "Real‑Time Mobile Diagnosis",
      description: "Snap a photo on your smartphone and get instant disease identification—even without internet access.",
      icon: "📱"
    },
    {
      title: "Batch Desktop Analysis",
      description: "Upload hundreds of leaf images, and receive automated summaries (e.g. disease prevalence, confidence scores).",
      icon: "💻"
    },
    {
      title: "High Accuracy Models",
      description: "Enhanced MobileNetV2 and Mask R‑CNN models, trained on visible, UV & hyperspectral data, detect diseases with >95% accuracy.",
      icon: "🎯"
    },
    {
      title: "Australian‑Trained",
      description: "Built with local data (e.g., Septoria blotch in wheat), ensuring robust performance under Australian conditions.",
      icon: "🇦🇺"
    },
    {
      title: "Offline & FAIR Data",
      description: "Fully offline capable for remote farms; all datasets and models are published under FAIR principles.",
      icon: "📶"
    },
    {
      title: "AI‑Driven Advisory",
      description: "Context‑aware treatment suggestions powered by an upgraded LLM with local protocols and seasonal insights.",
      icon: "🤖"
    }
  ];

  return (
    <section id="features" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-responsive-lg font-bold mb-4 flex items-center justify-center">
            <svg className="w-8 h-8 mr-3" fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" style={{ color: 'var(--color-primary)' }}>
              <path d="M256 0C156.7 0 87.4 38.1 61.1 98.2c-3.3 8.1 1.8 16.8 10 20.2 8.1 3.4 16.8-1.8 20.2-9.9C107.8 68 176.8 32 256 32c52.9 0 102.4 18 137.4 50.7l29.4-29.4C416.6 29.4 338.4 0 256 0z" />
            </svg>
            <span style={{ color: 'var(--color-primary)' }}>Key Features</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card p-6">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 flex items-center" style={{ color: 'var(--color-primary)' }}>
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="M256 0C156.7 0 87.4 38.1 61.1 98.2c-3.3 8.1 1.8 16.8 10 20.2 8.1 3.4 16.8-1.8 20.2-9.9C107.8 68 176.8 32 256 32c52.9 0 102.4 18 137.4 50.7l29.4-29.4C416.6 29.4 338.4 0 256 0z" />
                </svg>
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Demo Section ---
const DemoSection = () => {
  return (
    <section id="demo" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-responsive-lg font-bold mb-4 flex items-center justify-center">
            <svg className="w-8 h-8 mr-3" fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" style={{ color: 'var(--color-primary)' }}>
              <path d="M256 0C156.7 0 87.4 38.1 61.1 98.2c-3.3 8.1 1.8 16.8 10 20.2 8.1 3.4 16.8-1.8 20.2-9.9C107.8 68 176.8 32 256 32c52.9 0 102.4 18 137.4 50.7l29.4-29.4C416.6 29.4 338.4 0 256 0z" />
            </svg>
            <span style={{ color: 'var(--color-primary)' }}>Live Demo</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="card p-8 text-center">
            <p className="text-gray-700 text-lg mb-8">
              Try it now on your device! Download from the{' '}
              <a href="#" className="font-semibold hover:underline" style={{ color: 'var(--color-primary)' }}>App Store</a>{' '}
              or{' '}
              <a href="#" className="font-semibold hover:underline" style={{ color: 'var(--color-primary)' }}>Google Play</a>,
              or run our{' '}
              <a href="#" className="font-semibold hover:underline" style={{ color: 'var(--color-primary)' }}>desktop demo</a>.
            </p>

            <div className="bg-gray-100 rounded-lg p-8 mb-8">
              <div className="text-gray-500 text-sm mb-4">PlantDis App Screenshot</div>
              <div className="bg-white rounded-lg p-16 border border-gray-200">
                <div className="text-6xl mb-4">🌿</div>
                <div className="text-gray-400">Demo interface placeholder</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">Download for iOS</button>
              <button className="btn-primary">Download for Android</button>
              <button className="btn-secondary">Try Desktop Version</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Contact Section ---
const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-responsive-lg font-bold mb-4 flex items-center justify-center">
            <svg className="w-8 h-8 mr-3" fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" style={{ color: 'var(--color-primary)' }}>
              <path d="M256 0C156.7 0 87.4 38.1 61.1 98.2c-3.3 8.1 1.8 16.8 10 20.2 8.1 3.4 16.8-1.8 20.2-9.9C107.8 68 176.8 32 256 32c52.9 0 102.4 18 137.4 50.7l29.4-29.4C416.6 29.4 338.4 0 256 0z" />
            </svg>
            <span style={{ color: 'var(--color-primary)' }}>Contact & Contributions</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="card p-8">
            <div className="text-center">
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
      </div>
    </section>
  );
};

// --- Footer ---
const Footer = () => {
  return (
    <footer className="text-white py-8" style={{ backgroundColor: 'var(--color-primary)' }}>
      <div className="container-custom text-center">
        <div className="flex items-center justify-center mb-4">
          <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
            <path d="M256 0C156.7 0 87.4 38.1 61.1 98.2c-3.3 8.1 1.8 16.8 10 20.2 8.1 3.4 16.8-1.8 20.2-9.9C107.8 68 176.8 32 256 32c52.9 0 102.4 18 137.4 50.7l29.4-29.4C416.6 29.4 338.4 0 256 0z" />
          </svg>
          <span className="text-xl font-bold">PlantDis</span>
        </div>
        <p className="text-lg opacity-90">
          © 2025 Australian Plant Phenomics Network – ANU node
        </p>
      </div>
    </footer>
  );
};

// --- Main App Component ---
const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
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
