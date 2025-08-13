import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../Components/Navbar";
import Logo from "../assets/logo.png"
import '../index.css';

import {
  ArrowRight,
  Award,
  Stethoscope,
  BookOpen,
  Heart,
  Shield,
  Users,
} from 'lucide-react';

const Home = () => {
  const Cards = [
    {
      id: 1,
      icon: <Stethoscope />,
      title: 'Expert Consultation',
      desc: 'Professional healthcare consultancy services from certified experts with years of experience.',
      bgColor: '#d1fae5',
    },
    {
      id: 2,
      icon: <BookOpen />,
      title: 'Knowledge Resources',
      desc: 'Access comprehensive study materials, articles, and exam preparation resources.',
      bgColor: '#dbeafe',
    },
    {
      id: 3,
      icon: <Award />,
      title: 'Professional Development',
      desc: 'Enhance your healthcare career with our professional development programs and certifications.',
      bgColor: '#ffedd5',
    },
  ];

  const Services = [
    {
      id: 1,
      icon: <Shield />,
      title: 'Healthcare Strategy',
      desc: 'Strategic planning and implementation for healthcare organizations.',
    },
    {
      id: 2,
      icon: <Heart />,
      title: 'Clinical Excellence',
      desc: 'Quality improvement and clinical best practices consultation.',
    },
    {
      id: 3,
      icon: <Users />,
      title: 'Team Development',
      desc: 'Professional development and team building for healthcare staff.',
    },
  ];

  return (
    <div className="bg-[#f8fafc]">
      <Navbar />
      <div className="pt-20 ">
        <div className="container mx-auto text-center">
          {/* Tagline */}
          <p className="mb-5 text-[12px] inline-block bg-[#d1fae5] text-[#075f46] hover:bg-emerald-100 font-medium px-4 py-[2px] rounded-full">
            Professional Health Consultancy
          </p>

          {/* Heading */}
          <h1 className="font-bold text-6xl mb-6">
            Your Health, <span className="text-[#059669]">Our Expertise</span>
          </h1>

          {/* Subheading */}
          <div className="mb-7 text-xl text-slate-600 max-w-3xl mx-auto">
            <p>
              Nova Health Consultancy provides comprehensive healthcare solutions,
              expert guidance, and professional development resources for healthcare
              professionals and organizations.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex justify-center items-center space-x-5 mb-[140px]">
            <button className="bg-[#059669] text-sm text-white font-semibold border rounded-md px-7 py-2 flex items-center hover:bg-emerald-700">
              Explore Services
              <ArrowRight className="ml-2 w-4 pt-1" />
            </button>
            <button className="border rounded-md px-5 py-2 flex items-center hover:bg-gray-200">
              Learn more
              <ArrowRight className="ml-2 w-4 pt-1" />
            </button>
          </div>

          {/* Why Choose Section */}
          <section className="px-4 bg-slate-50 py-16">
            <div className="mb-12 text-center">
              <h2 className="text-slate-900 text-3xl mb-4 font-bold">
                Why Choose Nova Health Consultancy?
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                We combine years of healthcare expertise with innovative solutions to
                deliver exceptional results.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left px-5">
              {Cards.map((item) => (
                <div
                  key={item.id}
                  className="space-y-4 p-6 rounded-md shadow-lg bg-white"
                >
                  <div
                    style={{ backgroundColor: item.bgColor }}
                    className="w-12 h-12 rounded-lg flex justify-center items-center mb-4 text-emerald-500"
                  >
                    {item.icon}
                  </div>
                  <p className="text-2xl font-bold">{item.title}</p>
                  <p className="text-[#737187]">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Services Section */}
          <div className="mt-[50px]">
            <p className="text-3xl font-bold mb-2">Our Services</p>
            <p className="text-slate-600 mb-8">
              Comprehensive healthcare consultancy services tailored to your needs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left px-5">
              {Services.map((item) => (
                <div
                  key={item.id}
                  className="space-y-4 p-6 rounded-md shadow-lg bg-white"
                >
                  <div className="w-12 h-12 rounded-lg flex justify-center items-center mb-4 text-emerald-500 bg-emerald-100">
                    {item.icon}
                  </div>
                  <p className="text-2xl font-bold">{item.title}</p>
                  <p className="text-[#737187]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <section className="py-16 bg-emerald-600 mt-16">
            <div className="  text-center">
              <h2 className="font-bold text-3xl text-white mb-4">
                Ready to Transform Your Healthcare Journey?
              </h2>
              <p className="text-emerald-100 mb-8 ">
                Join healthcare professionals who trust Nova Health
                Consultancy for their growth and success.
              </p>
              <div className="flex justify-center space-x-4">
                <button className="px-5 py-2 rounded-md hover:bg-emerald-50 text-black bg-white">
                  Get Started Today
                </button>
                <button className="px-5 py-2 rounded-md hover:bg-emerald-50 text-black bg-white">
                  Contact
                </button>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-slate-900 text-white py-12 px-4  ">
            <div className="container mx-8">
              <div className="grid md:grid-cols-4 gap-8">
                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <img
                      src={Logo}
                      alt="Nova Health Consultancy"
                      width={40}
                      height={40}
                      className="h-8 w-auto"
                    />
                    <span className="text-lg font-bold">NOVA</span>
                  </div>
                  <p className="text-slate-400">
                    Professional healthcare consultancy services for a healthier
                    tomorrow.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-4">Services</h3>
                  <ul className="space-y-2 text-slate-400">
                    <li>
                      <a href="/services" className="hover:text-white transition-colors">
                        Healthcare Strategy
                      </a>
                    </li>
                    <li>
                      <a href="/services" className="hover:text-white transition-colors">
                        Clinical Excellence
                      </a>
                    </li>
                    <li>
                      <a href="/services" className="hover:text-white transition-colors">
                        Team Development
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-4">Resources</h3>
                  <ul className="space-y-2 text-slate-400">
                    <li>
                      <a
                        href="/knowledge-hub"
                        className="hover:text-white transition-colors"
                      >
                        Knowledge Hub
                      </a>
                    </li>
                    <li>
                      <a href="/news" className="hover:text-white transition-colors">
                        News & Updates
                      </a>
                    </li>
                    <li>
                      <a href="/gallery" className="hover:text-white transition-colors">
                        Gallery
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-4">Company</h3>
                  <ul className="space-y-2 text-slate-400">
                    <li>
                      <a href="/about" className="hover:text-white transition-colors">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href="/contact" className="hover:text-white transition-colors">
                        Contact
                      </a>
                    </li>
                    <li>
                      <a href="/support" className="hover:text-white transition-colors">
                        Support
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
                <p>&copy; 2024 Nova Health Consultancy. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Home;
