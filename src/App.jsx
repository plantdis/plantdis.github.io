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
              <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-3">
                {/* PlantDis Icon */}
                <img src="/plantdis_logo_white.jpeg" alt="PlantDis" className="w-8" />
              </div>
              <span className="text-xl font-bold" style={{ color: 'var(--color-primary)' }}>PlantDis</span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#overview" className="nav-link">Overview</a>
            <a href="#features" className="nav-link">Features</a>
            <a href="#demo" className="nav-link">Demo</a>
            <a href="#faq" className="nav-link">FAQ</a>
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
              <a href="#faq" className="block nav-link py-2">FAQ</a>
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
    <section className="pt-32 pb-4 px-4" style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="container-custom">
        <div className="flex align-middle items-center">
          <div className="lg:basis-2/3 lg:space-y-14 lg:pr-5 space-y-8">
            <div className="md:text-left md:items-start flex flex-col items-center text-center">
              <h1 className="text-3xl lg:text-5xl leading-[34px] lg:leading-[56px] mt-4 text-primary font-bold" style={{ color: 'var(--color-primary)' }}>
                The Plant Doctor in Your Pocket
              </h1>
              <h2 className="font-bold text-xl md:text-2xl leading-7 mt-4 text-gray-500">
                Using advanced machine learning, instantly and accurately identify plant diseases and get expert advice with just a single photo.
              </h2>
            </div>
            <div className="mt-4 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
              <button className="focus:outline-none focus:ring-4 focus:ring-light flex justify-center rounded bg-primary text-white hover:bg-primary px-4 py-3 font-semibold text-base leading-5 text-center transition-colors duration-300" style={{ backgroundColor: 'var(--color-mid-green)', color: 'white' }} onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--color-primary)'} onMouseLeave={(e) => e.target.style.backgroundColor = 'var(--color-mid-green)'}>
                Explore Features
              </button>
              <button className="focus:outline-none focus:ring-4 focus:ring-light flex justify-center rounded text-primary hover:bg-primary hover:text-white outline outline-1 outline-solid outline-primary px-4 py-3 font-semibold text-base leading-5 text-center transition-colors duration-300" style={{ color: 'var(--color-primary)', border: '1px solid var(--color-primary)' }} onMouseEnter={(e) => { e.target.style.backgroundColor = 'var(--color-primary)'; e.target.style.color = 'white'; }} onMouseLeave={(e) => { e.target.style.backgroundColor = 'transparent'; e.target.style.color = 'var(--color-primary)'; }}>
                Download App
              </button>
            </div>
          </div>
          <div className="lg:pl-5 hidden lg:block lg:basis-1/2 relative w-fit ml-auto">
            <div className="relative w-fit bg-no-repeat bg-center bg-contain my-auto overflow-hidden">
              <img src="/iphone13.DBCMK4Rs.png" alt="iPhone 13" style={{ width: '40rem', height: 'auto', display: 'block', maxWidth: 'none' }} />
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
              Overview
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
  const painPoints = [
    {
      title: "Unknown Diseases",
      description: "Your crops are showing symptoms, but you don't know what the disease is?"
    },
    {
      title: "Time-Consuming Diagnosis",
      description: "Are traditional diagnostic methods slow, laborious, and not always accurate?"
    },
    {
      title: "Information Overload",
      description: "Are online searches cluttered with information, making it difficult to find a reliable treatment plan?"
    }
  ];

  return (
    <section id="features" className="pt-8 pb-8 px-4" style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="container-custom">
        <div className="bg-white rounded-2xl shadow-lg p-12 relative overflow-hidden">
          {/* Main title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold p-8 inline-block"
              style={{ color: 'var(--color-primary)' }}>
              Are you facing these challenges?
            </h1>
          </div>

          {/* Pain Points Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {painPoints.map((point, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-bold mb-4 uppercase tracking-wide"
                  style={{ color: 'var(--color-orange)' }}>
                  {point.title}
                </h3>
                <p className="text-lg text-black leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>

          {/* Solution Banner */}
          <div className="relative -mx-12 -mb-12 mt-8">
            <div className="rounded-t-none rounded-b-2xl p-8 text-center text-white shadow-lg"
              style={{ backgroundColor: 'var(--color-primary)' }}>
              <p className="text-xl italic leading-relaxed">
                PLANTDIS IS HERE FOR YOU. <br />
                Designed specifically for farmers, gardeners, and agricultural researchers,<br />
                Our mission is to provide a fast and reliable tool for plant disease diagnosis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- New Feature Sections ---
const FeatureSection1 = () => {
  return (
    <section className="pt-4 pb-4 px-4" style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="container-custom">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            {/* Left side - Text */}
            <div className="lg:basis-1/2">
              <div className="inline-flex items-center rounded-md px-2 py-1 text-sm font-semibold bg-gray-500 text-white mb-4">
                Desktop
              </div>
              <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--color-primary-dark)' }}>
                Batch Desktop Analysis
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Upload hundreds of leaf images, and receive automated summaries (e.g. disease prevalence, confidence scores).
              </p>
            </div>

            {/* Right side - iPhone */}
            <div className="lg:basis-1/2 flex justify-center">
              <img src="/iphone13.DBCMK4Rs.png" alt="iPhone 13" style={{ width: '40rem', height: 'auto', display: 'block', maxWidth: 'none' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureSection2 = () => {
  return (
    <section className="pt-4 pb-4 px-4" style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="container-custom">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            {/* Left side - Text */}
            <div className="lg:basis-1/2">
              <div className="inline-flex items-center rounded-md px-2 py-1 text-sm font-semibold bg-gray-500 text-white mb-4">
                Desktop
              </div>
              <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--color-primary-dark)' }}>
                Batch Desktop Analysis
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Upload hundreds of leaf images, and receive automated summaries (e.g. disease prevalence, confidence scores).
              </p>
            </div>

            {/* Right side - iPhone */}
            <div className="lg:basis-1/2 flex justify-center">
              <img src="/iphone13.DBCMK4Rs.png" alt="iPhone 13" style={{ width: '40rem', height: 'auto', display: 'block', maxWidth: 'none' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureSection3 = () => {
  return (
    <section className="pt-4 pb-4 px-4" style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="container-custom">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            {/* Left side - iPhone */}
            <div className="lg:basis-1/2 flex justify-center">
              <img src="/iphone13.DBCMK4Rs.png" alt="iPhone 13" style={{ width: '40rem', height: 'auto', display: 'block', maxWidth: 'none' }} />
            </div>

            {/* Right side - Text */}
            <div className="lg:basis-1/2">
              <div className="inline-flex items-center rounded-md px-2 py-1 text-sm font-semibold bg-gray-500 text-white mb-4">
                Accuracy
              </div>
              <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--color-primary-dark)' }}>
                High Accuracy Models
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Enhanced MobileNetV2 and Mask R‑CNN models, trained on visible, UV & hyperspectral data, detect diseases with {'>'}95% accuracy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureSection4 = () => {
  return (
    <section className="pt-4 pb-4 px-4" style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="container-custom">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            {/* Left side - Text */}
            <div className="lg:basis-1/2">
              <div className="inline-flex items-center rounded-md px-2 py-1 text-sm font-semibold bg-gray-500 text-white mb-4">
                Local
              </div>
              <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--color-primary-dark)' }}>
                Australian‑Trained
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Built with local data (e.g., Septoria blotch in wheat), ensuring robust performance under Australian conditions.
              </p>
            </div>

            {/* Right side - iPhone */}
            <div className="lg:basis-1/2 flex justify-center">
              <img src="/iphone13.DBCMK4Rs.png" alt="iPhone 13" style={{ width: '40rem', height: 'auto', display: 'block', maxWidth: 'none' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureSection5 = () => {
  return (
    <section className="pt-4 pb-4 px-4" style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="container-custom">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            {/* Left side - iPhone */}
            <div className="lg:basis-1/2 flex justify-center">
              <img src="/iphone13.DBCMK4Rs.png" alt="iPhone 13" style={{ width: '40rem', height: 'auto', display: 'block', maxWidth: 'none' }} />
            </div>

            {/* Right side - Text */}
            <div className="lg:basis-1/2">
              <div className="inline-flex items-center rounded-md px-2 py-1 text-sm font-semibold bg-gray-500 text-white mb-4">
                Offline
              </div>
              <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--color-primary-dark)' }}>
                Offline & FAIR Data
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Fully offline capable for remote farms; all datasets and models are published under FAIR principles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureSection6 = () => {
  return (
    <section className="pt-4 pb-4 px-4" style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="container-custom">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            {/* Left side - Text */}
            <div className="lg:basis-1/2">
              <div className="inline-flex items-center rounded-md px-2 py-1 text-sm font-semibold bg-gray-500 text-white mb-4">
                AI Advisory
              </div>
              <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--color-primary-dark)' }}>
                AI‑Driven Advisory
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Context‑aware treatment suggestions powered by an upgraded LLM with local protocols and seasonal insights.
              </p>
            </div>

            {/* Right side - iPhone */}
            <div className="lg:basis-1/2 flex justify-center">
              <img src="/iphone13.DBCMK4Rs.png" alt="iPhone 13" style={{ width: '40rem', height: 'auto', display: 'block', maxWidth: 'none' }} />
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
            <div className="bg-white rounded-lg p-8 border border-gray-200 flex justify-center">
              <img src="/output_compressed.gif" alt="PlantDis App Demo" style={{ width: '100%', maxWidth: '300px', height: 'auto', borderRadius: '8px' }} />
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

// --- FAQ Section ---
const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      question: "How should I take photos for the best disease detection results?",
      answer: "For optimal results, take clear, well-lit photos of affected leaves showing symptoms clearly. Avoid blurry images, extreme close-ups, or photos with heavy shadows. Natural daylight works best, and try to fill the frame with the leaf while showing the disease symptoms. The app works with both individual leaves and plant sections."
    },
    {
      question: "What makes PlantDis different from other plant disease apps?",
      answer: "PlantDis is specifically trained on Australian agricultural data and uses cutting-edge MobileNetV2 and Mask R-CNN models with visible, UV, and hyperspectral imaging data. Unlike generic plant apps, we focus exclusively on crop diseases with >95% accuracy and provide localized treatment recommendations based on Australian farming conditions and protocols."
    },
    {
      question: "Which crops and diseases does PlantDis detect?",
      answer: "PlantDis can identify 39 different plant conditions across 14 high-value crops including wheat, corn, potato, tomato, apple, grape, and more. The system covers common diseases like blight, rust, powdery mildew, and various fungal infections."
    },
    {
      question: "Do I need an account to use the app?",
      answer: "No account is required for basic disease detection features. However, creating an optional account allows you to save your diagnosis history, access advanced analytics, and sync data across multiple devices."
    },
    {
      question: "How accurate is the disease detection?",
      answer: "Our AI models achieve over 95% accuracy in disease detection. The system uses advanced machine learning (MobileNetV2) and computer vision (Mask R-CNN) trained on extensive datasets including visible, UV, and hyperspectral imaging data."
    },
    {
      question: "Can I use PlantDis on multiple devices?",
      answer: "Yes! PlantDis is available on both mobile (iOS and Android) and desktop platforms. You can install it on multiple devices and optionally sync your data across them with an account."
    },
    {
      question: "What are the exciting new features of this app?",
      answer: "After users upload images and complete disease detection, if they need more detailed professional advice or have other related questions, we have a dedicated Q&A interface powered by advanced AI models including Gemini. Users can also use filter buttons to choose whether they want to receive plant disease-related responses, ensuring they get the most relevant and targeted assistance for their specific needs."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="faq" className="pt-4 pb-8 px-4" style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="container-custom">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--color-primary-dark)' }}>
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Can't find the answer you're looking for?{' '}
              <a href="#contact" className="hover:underline" style={{ color: 'var(--color-primary)' }}>
                Contact our support team
              </a>.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex justify-between items-center"
                >
                  <h3 className="text-lg font-semibold pr-4" style={{ color: 'var(--color-primary-dark)' }}>
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-6 h-6 transform transition-transform duration-200 ${openFAQ === index ? 'rotate-180' : ''
                      }`}
                    style={{ color: 'var(--color-primary)' }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {openFAQ === index && (
                  <div className="p-6 bg-white border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
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
              <div className="w-20 h-20 mx-auto mb-4">
                <img
                  src="https://github.com/spsaswat.png"
                  alt="Saswat Panda"
                  className="w-full h-full rounded-full object-cover border-2 border-gray-200 hover:border-4 transition-all duration-300"
                  style={{ borderColor: 'var(--color-primary)' }}
                />
              </div>
            </div>

            <div className="text-lg text-gray-700 space-y-2">
              <p>
                <strong className="font-semibold" style={{ color: 'var(--color-primary)' }}>Lead Developer:</strong> Saswat Panda, APPN‑ANU
              </p>
              <p>
                <strong className="font-semibold" style={{ color: 'var(--color-primary)' }}>Email:</strong>{' '}
                <a href="mailto:saswat.panda@anu.edu.au" className="hover:underline">
                  saswat.panda@anu.edu.au
                </a>
              </p>
              <p>
                <strong className="font-semibold" style={{ color: 'var(--color-primary)' }}>GitHub:</strong>{' '}
                <a href="https://github.com/plantdis/plantdis.github.io" target="_blank" rel="noopener noreferrer" className="hover:underline">
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
          <img src="/plantdis_logo_white.jpeg" alt="PlantDis" className="w-10 h-10 mr-2" />
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
      <FeatureSection1 />
      <FeatureSection2 />
      <FeatureSection3 />
      <FeatureSection4 />
      <FeatureSection5 />
      <FeatureSection6 />
      <DemoSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;
