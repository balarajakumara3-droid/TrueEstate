import React, { useState, useEffect, useRef } from 'react';
import { Download, CheckCircle, ArrowRight, Smartphone, Star, Globe, Shield } from 'lucide-react';
import PhoneMockup from './components/PhoneMockup';
import LoginScreen from './components/screens/LoginScreen';
import HomeScreen from './components/screens/HomeScreen';
import DetailScreen from './components/screens/DetailScreen';
import ChatScreen from './components/screens/ChatScreen';
import ProfileScreen from './components/screens/ProfileScreen';
import { AppScreen } from './types';
import logo from './assets/logo.png';
import { TESTIMONIALS } from './constants';

function App() {
  const [activeScreen, setActiveScreen] = useState<AppScreen>(AppScreen.LOGIN);

  // Refs for scroll sections
  const heroRef = useRef<HTMLDivElement>(null);
  const loginRef = useRef<HTMLDivElement>(null);
  const homeRef = useRef<HTMLDivElement>(null);
  const detailRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  // Intersection Observer to trigger screen changes
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px', // Trigger when section is in middle of viewport
      threshold: 0.2
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.id === 'section-hero') setActiveScreen(AppScreen.HOME);
          if (entry.target.id === 'section-login') setActiveScreen(AppScreen.LOGIN);
          if (entry.target.id === 'section-home') setActiveScreen(AppScreen.HOME);
          if (entry.target.id === 'section-details') setActiveScreen(AppScreen.DETAILS);
          if (entry.target.id === 'section-chat') setActiveScreen(AppScreen.CHAT);
          if (entry.target.id === 'section-profile') setActiveScreen(AppScreen.PROFILE);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    [heroRef, loginRef, homeRef, detailRef, chatRef, profileRef].forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  const renderScreen = () => {
    switch (activeScreen) {
      case AppScreen.LOGIN: return <LoginScreen />;
      case AppScreen.HOME: return <HomeScreen />;
      case AppScreen.DETAILS: return <DetailScreen />;
      case AppScreen.CHAT: return <ChatScreen />;
      case AppScreen.PROFILE: return <ProfileScreen />;
      default: return <HomeScreen />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={logo} alt="TrueEstate Logo" className="w-8 h-8 object-contain" />
            <span className="font-heading font-bold text-xl text-neutral-900">TrueEstate</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-neutral-600">
            <a href="#section-home" className="hover:text-primary transition">Features</a>
            <a href="#section-details" className="hover:text-primary transition">Properties</a>
            <a href="#section-chat" className="hover:text-primary transition">Connect</a>
          </div>
          <button className="bg-neutral-900 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-neutral-800 transition">
            Download App
          </button>
        </div>
      </nav>

      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-12 relative">

          {/* Scrollable Content Left Side */}
          <div className="lg:w-1/2 py-12 lg:py-24 space-y-32">

            {/* Hero Section */}
            <div id="section-hero" ref={heroRef} className="min-h-[60vh] flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 text-primary rounded-full text-sm font-bold mb-6 w-fit">
                <Star size={16} className="fill-primary" /> #1 Real Estate App 2024
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold font-heading text-neutral-900 leading-[1.1] mb-6">
                Discover a place you'll love <span className="text-primary">to live.</span>
              </h1>
              <p className="text-xl text-neutral-500 mb-8 max-w-lg leading-relaxed">
                Experience the future of real estate. Immerse yourself in premium listings, connect with top-tier agents, and find your perfect home with TrueEstate.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex items-center justify-center gap-3 bg-neutral-900 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-neutral-900/20 transition hover:-translate-y-1">
                  <Download size={24} /> Download for iOS
                </button>
                <button className="flex items-center justify-center gap-3 bg-white border-2 border-neutral-100 text-neutral-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-neutral-50 transition hover:-translate-y-1">
                  Google Play
                </button>
              </div>
              <div className="mt-8 flex items-center gap-4 text-sm text-neutral-500">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map(i => (
                    <img key={i} src={`https://picsum.photos/id/${i + 50}/50/50`} className="w-8 h-8 rounded-full border-2 border-white" alt="user" />
                  ))}
                </div>
                <p>Trusted by <strong>50k+</strong> happy users</p>
              </div>
            </div>

            {/* Login Feature */}
            <div id="section-login" ref={loginRef} className="min-h-[50vh] flex flex-col justify-center">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                <Shield size={24} />
              </div>
              <h2 className="text-4xl font-bold font-heading mb-4">Secure & Simple Onboarding</h2>
              <p className="text-lg text-neutral-500 mb-6 leading-relaxed">
                Get started in seconds with our secure authentication options. Use your email or social accounts to sync your preferences instantly.
              </p>
              <ul className="space-y-4">
                {['Biometric Login', 'Social Authentication', 'Data Encryption'].map((item) => (
                  <li key={item} className="flex items-center gap-3 font-medium text-neutral-700">
                    <CheckCircle className="text-primary" size={20} /> {item}
                  </li>
                ))}
              </ul>

              {/* Mobile Preview */}
              <div className="block lg:hidden mt-12 border-4 border-neutral-900 rounded-[2.5rem] overflow-hidden shadow-2xl h-[500px] relative bg-neutral-900 mx-auto max-w-sm">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-neutral-900 rounded-b-xl z-20"></div>
                <div className="w-full h-full bg-white overflow-hidden rounded-[2.3rem]">
                  <LoginScreen />
                </div>
              </div>
            </div>

            {/* Discovery Feature */}
            <div id="section-home" ref={homeRef} className="min-h-[50vh] flex flex-col justify-center">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 mb-6">
                <Globe size={24} />
              </div>
              <h2 className="text-4xl font-bold font-heading mb-4">Explore Without Limits</h2>
              <p className="text-lg text-neutral-500 mb-6 leading-relaxed">
                Our powerful search engine lets you filter by location, price, property type, and amenities.
                Find exactly what you're looking for with zero hassle.
              </p>

              <ul className="space-y-3 mb-8">
                {['Smart Filters', 'Interactive Map View', 'Saved Searches'].map((item) => (
                  <li key={item} className="flex items-center gap-3 font-medium text-neutral-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div> {item}
                  </li>
                ))}
              </ul>

              <button className="text-primary font-bold flex items-center gap-2 group">
                Try the search demo <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Mobile Preview */}
              <div className="block lg:hidden mt-12 border-4 border-neutral-900 rounded-[2.5rem] overflow-hidden shadow-2xl h-[500px] relative bg-neutral-900 mx-auto max-w-sm">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-neutral-900 rounded-b-xl z-20"></div>
                <div className="w-full h-full bg-white overflow-hidden rounded-[2.3rem]">
                  <HomeScreen />
                </div>
              </div>
            </div>

            {/* Details Feature */}
            <div id="section-details" ref={detailRef} className="min-h-[50vh] flex flex-col justify-center">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 mb-6">
                <Smartphone size={24} />
              </div>
              <h2 className="text-4xl font-bold font-heading mb-4">Immersive Details</h2>
              <p className="text-lg text-neutral-500 mb-6 leading-relaxed">
                High-resolution galleries, detailed floor plans, and comprehensive amenity lists give you the full picture before you even visit.
              </p>
              <ul className="space-y-3 mb-8">
                {['Virtual Tours', 'Neighborhood Insights', 'Mortgage Calculator'].map((item) => (
                  <li key={item} className="flex items-center gap-3 font-medium text-neutral-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div> {item}
                  </li>
                ))}
              </ul>

              {/* Mobile Preview */}
              <div className="block lg:hidden mt-12 border-4 border-neutral-900 rounded-[2.5rem] overflow-hidden shadow-2xl h-[500px] relative bg-neutral-900 mx-auto max-w-sm">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-neutral-900 rounded-b-xl z-20"></div>
                <div className="w-full h-full bg-white overflow-hidden rounded-[2.3rem]">
                  <DetailScreen />
                </div>
              </div>
            </div>

            {/* Chat Feature */}
            <div id="section-chat" ref={chatRef} className="min-h-[50vh] flex flex-col justify-center">
              <h2 className="text-4xl font-bold font-heading mb-4">Connect Instantly</h2>
              <p className="text-lg text-neutral-500 mb-6 leading-relaxed">
                Chat directly with agents, schedule video tours, or book in-person visits. Our integrated communication hub keeps all your conversations in one place.
              </p>               <ul className="space-y-3 mb-8">
                {['Instant Notifications', 'Secure File Sharing', 'HD Video Calls'].map((item) => (
                  <li key={item} className="flex items-center gap-3 font-medium text-neutral-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div> {item}
                  </li>
                ))}
              </ul>

              {/* Mobile Preview */}
              <div className="block lg:hidden mt-12 border-4 border-neutral-900 rounded-[2.5rem] overflow-hidden shadow-2xl h-[500px] relative bg-neutral-900 mx-auto max-w-sm">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-neutral-900 rounded-b-xl z-20"></div>
                <div className="w-full h-full bg-white overflow-hidden rounded-[2.3rem]">
                  <ChatScreen />
                </div>
              </div>
            </div>

            {/* Profile Feature */}
            <div id="section-profile" ref={profileRef} className="min-h-[50vh] flex flex-col justify-center">
              <h2 className="text-4xl font-bold font-heading mb-4">Your Personal Hub</h2>
              <p className="text-lg text-neutral-500 mb-6 leading-relaxed">
                Track your favorite properties, manage your viewing calendar, and customize your app experience all from your profile.
              </p>
              <ul className="space-y-3 mb-8">
                {['Smart Favorites', 'Search History', 'Personalized Preferences'].map((item) => (
                  <li key={item} className="flex items-center gap-3 font-medium text-neutral-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div> {item}
                  </li>
                ))}
              </ul>

              {/* Mobile Preview */}
              <div className="block lg:hidden mt-12 border-4 border-neutral-900 rounded-[2.5rem] overflow-hidden shadow-2xl h-[500px] relative bg-neutral-900 mx-auto max-w-sm">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-neutral-900 rounded-b-xl z-20"></div>
                <div className="w-full h-full bg-white overflow-hidden rounded-[2.3rem]">
                  <ProfileScreen />
                </div>
              </div>
            </div>

            {/* Testimonials Section */}
            <div className="py-12">
              <h2 className="text-4xl font-bold font-heading mb-8">Trusted by Thousands</h2>
              <div className="grid gap-6">
                {TESTIMONIALS.map(testimonial => (
                  <div key={testimonial.id} className="bg-neutral-50 p-6 rounded-2xl border border-neutral-100">
                    <div className="flex items-center gap-4 mb-4">
                      <img src={testimonial.image} className="w-12 h-12 rounded-full object-cover" alt={testimonial.name} />
                      <div>
                        <p className="font-bold text-neutral-900">{testimonial.name}</p>
                        <p className="text-sm text-neutral-500">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-neutral-600 italic">"{testimonial.text}"</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sticky Phone Mockup Right Side */}
          <div className="hidden lg:block lg:w-1/2 relative">
            <div className="sticky top-24 h-[800px] flex items-center justify-center">
              {/* Background Blobs */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] -z-10 animate-pulse"></div>

              <PhoneMockup className="transform transition-all duration-500">
                <div className="h-full w-full animate-fade-in">
                  {renderScreen()}
                </div>
              </PhoneMockup>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white py-24 mt-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 border-b border-neutral-800 pb-12 mb-12">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <img src={logo} alt="TrueEstate Logo" className="w-8 h-8 object-contain" />
                <span className="font-heading font-bold text-xl">TrueEstate</span>
              </div>
              <p className="text-neutral-400 max-w-sm mb-8">
                Elevating the real estate experience through technology and design. Join the community of homeowners who found their sanctuary with TrueEstate.
              </p>
              <div className="flex gap-4">
                {/* Fake Store Badges */}
                <div className="h-12 w-36 bg-neutral-800 rounded-lg flex items-center justify-center cursor-pointer hover:bg-neutral-700 transition">
                  <span className="text-xs font-bold text-neutral-300">App Store</span>
                </div>
                <div className="h-12 w-36 bg-neutral-800 rounded-lg flex items-center justify-center cursor-pointer hover:bg-neutral-700 transition">
                  <span className="text-xs font-bold text-neutral-300">Google Play</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6">Company</h4>
              <ul className="space-y-4 text-neutral-400 text-sm">
                <li className="hover:text-primary cursor-pointer">About Us</li>
                <li className="hover:text-primary cursor-pointer">Careers</li>
                <li className="hover:text-primary cursor-pointer">Press</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">Support</h4>
              <ul className="space-y-4 text-neutral-400 text-sm">
                <li className="hover:text-primary cursor-pointer">Help Center</li>
                <li className="hover:text-primary cursor-pointer">Terms of Service</li>
                <li className="hover:text-primary cursor-pointer">Privacy Policy</li>
              </ul>
            </div>
          </div>
          <div className="flex justify-between text-xs text-neutral-500">
            <p>© 2026 TrueEstate Inc. All rights reserved.</p>
            <div className="flex gap-6">
              <span>Twitter</span>
              <span>Instagram</span>
              <span>LinkedIn</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;