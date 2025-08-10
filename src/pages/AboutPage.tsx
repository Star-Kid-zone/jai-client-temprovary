import React from 'react';
import { Award, BookOpen, Users, Target, CheckCircle, Globe, TrendingUp, Building } from 'lucide-react';

const AboutPage = () => {
  const achievements = [
    { number: "8+", label: "Years Experience" },
    { number: "200+", label: "Clients Served" },
    { number: "99%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" }
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8 text-gray-700" />,
      title: "Excellence",
      description: "We strive for excellence in every audit and financial service we provide."
    },
    {
      icon: <Users className="h-8 w-8 text-gray-700" />,
      title: "Integrity",
      description: "Trust and transparency form the foundation of all our client relationships."
    },
    {
      icon: <BookOpen className="h-8 w-8 text-gray-700" />,
      title: "Expertise",
      description: "Continuous learning and professional development ensure cutting-edge service."
    },
    {
      icon: <Award className="h-8 w-8 text-gray-700" />,
      title: "Quality",
      description: "Rigorous quality standards and attention to detail in every engagement."
    }
  ];

  const sectors = [
    {
      icon: <Building className="h-6 w-6 text-gray-700" />,
      name: "Manufacturing",
      description: "Complex production and inventory management"
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-gray-700" />,
      name: "Trading",
      description: "Multi-location trading operations and supply chain"
    },
    {
      icon: <Users className="h-6 w-6 text-gray-700" />,
      name: "Services",
      description: "Professional and consulting service businesses"
    },
    {
      icon: <Globe className="h-6 w-6 text-gray-700" />,
      name: "SaaS",
      description: "Technology and software-as-a-service companies"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Wyvern Audit</h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Your trusted partner for comprehensive audit and financial services, 
              committed to excellence and professional integrity across diverse industries.
            </p>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
                  {achievement.number}
                </div>
                <div className="text-gray-600 font-medium">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Profile */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-center">
                <img 
                  src="/1P0A8876 less 1mb.jpg" 
                  alt="Jaikumar Sekar - Founder" 
                  className="w-48 h-48 mx-auto mb-6 rounded-full object-cover shadow-lg"
                />
                <div className="text-2xl font-bold text-gray-700 mb-2">Jaikumar Sekar</div>
                <div className="text-lg text-gray-600 mb-4">Founder & Managing Director</div>
                <div className="text-sm text-gray-500 italic">Leading with expertise and vision</div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Meet Our Founder
              </h2>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Jaikumar Sekar
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                With 8-9 years of distinguished professional experience, Jaikumar brings exceptional 
                expertise and strategic vision to every client engagement. As a Chartered Accountant-Intermediate 
                (pursuing) with an MBA in International Business, he combines deep technical proficiency 
                with global business acumen to deliver comprehensive financial solutions.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-gray-700" />
                  <span className="text-gray-700">Chartered Accountant-Intermediate (Pursuing)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-gray-700" />
                  <span className="text-gray-700">MBA in International Business</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-gray-700" />
                  <span className="text-gray-700">8-9 Years Professional Experience</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-gray-700" />
                  <span className="text-gray-700">US GAAP Financial Statements Specialist</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-gray-700" />
                  <span className="text-gray-700">Multi-Sector Industry Expertise</span>
                </div>
              </div>

              <blockquote className="border-l-4 border-gray-700 pl-6 italic text-gray-700">
                "Our mission is to provide exceptional audit and financial services that empower 
                businesses across all sectors to achieve their goals with confidence, compliance, 
                and strategic clarity."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Sector Expertise */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Sector Specialization
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deep industry expertise across diverse business sectors, delivering tailored 
              solutions that address unique challenges and opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sectors.map((sector, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">{sector.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{sector.name}</h3>
                <p className="text-gray-600 text-sm">{sector.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
              US GAAP Expertise
            </h3>
            <p className="text-gray-700 text-center max-w-4xl mx-auto leading-relaxed">
              Specialized proficiency in preparing financial statements according to US Generally 
              Accepted Accounting Principles (US GAAP), ensuring international compliance and 
              facilitating global business operations for our clients seeking to expand or 
              operate in international markets.
            </p>
          </div>
        </div>
      </section>

      {/* Company Mission */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Mission & Vision
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Committed to delivering excellence in audit and financial services while building 
              lasting partnerships with our clients across all business sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To provide comprehensive, reliable, and professional audit and financial services 
                that enable businesses across Manufacturing, Trading, Services, and SaaS sectors 
                to achieve sustainable growth, regulatory compliance, and operational excellence. 
                We are committed to delivering value through expertise, integrity, and personalized 
                service tailored to each industry's unique requirements.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To be the most trusted and respected audit and financial services firm, recognized 
                for our professional excellence, innovative solutions, and unwavering commitment 
                to client success across diverse business sectors. We aim to set new standards 
                in the industry through continuous improvement, technological advancement, and 
                global best practices including US GAAP expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Approach */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Professional Approach
            </h2>
            <p className="text-xl text-gray-600">
              How we deliver exceptional results across all business sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <BookOpen className="h-12 w-12 text-gray-700 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Industry-Specific Expertise</h3>
              <p className="text-gray-600">
                Deep understanding of Manufacturing, Trading, Services, and SaaS sectors with 
                tailored solutions for each industry's unique challenges.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <Globe className="h-12 w-12 text-gray-700 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Standards</h3>
              <p className="text-gray-600">
                Proficiency in US GAAP and international accounting standards, enabling 
                seamless global business operations and compliance.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <Award className="h-12 w-12 text-gray-700 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Continuous Excellence</h3>
              <p className="text-gray-600">
                Ongoing professional development and staying current with evolving 
                regulations and best practices across all sectors we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Professional Credentials & Expertise
            </h2>
            <p className="text-xl text-gray-600">
              Recognized qualifications and specialized knowledge that ensure quality and compliance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <Award className="h-12 w-12 text-gray-700 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">CA Intermediate</h3>
              <p className="text-gray-600">Chartered Accountant-Intermediate (Pursuing) with comprehensive accounting expertise</p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <Globe className="h-12 w-12 text-gray-700 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">MBA International Business</h3>
              <p className="text-gray-600">Advanced business education with global perspective and strategic insight</p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <BookOpen className="h-12 w-12 text-gray-700 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">US GAAP Specialist</h3>
              <p className="text-gray-600">Expert proficiency in US Generally Accepted Accounting Principles</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;