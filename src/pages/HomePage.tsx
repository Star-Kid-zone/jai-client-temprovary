import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Award, TrendingUp, Star } from 'lucide-react';

const HomePage = () => {
  const features = [
    {
      icon: <CheckCircle className="h-8 w-8 text-gray-700" />,
      title: "Comprehensive Audit Services",
      description: "Internal and statutory audits with meticulous attention to detail"
    },
    {
      icon: <Users className="h-8 w-8 text-gray-700" />,
      title: "Expert Team",
      description: "Led by semi-qualified CA with 8+ years of industry experience"
    },
    {
      icon: <Award className="h-8 w-8 text-gray-700" />,
      title: "Full Compliance",
      description: "GST, TDS, Income Tax, ROC, and PF/ESI management"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-gray-700" />,
      title: "Financial Excellence",
      description: "MIS preparation and financial statement expertise"
    }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "TechCorp Solutions",
      rating: 5,
      text: "Wyvern Audit transformed our financial processes. Their attention to detail and professional approach is unmatched."
    },
    {
      name: "Priya Sharma",
      company: "Global Industries",
      rating: 5,
      text: "Outstanding service! Their team helped us achieve full compliance and improved our financial reporting significantly."
    },
    {
      name: "Amit Patel",
      company: "StartupHub Inc.",
      rating: 5,
      text: "Professional, reliable, and efficient. Wyvern Audit has been our trusted partner for over 3 years."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-8">
          <Link 
            to="/" 
            className="flex items-center space-x-3 group transition-transform duration-200 hover:scale-105"
          >
            <img 
              src="/wyvern-logo.png" 
              alt="Wyvern Audit - Professional Audit & Financial Services" 
              className="h-10 w-auto object-contain"
              style={{ minWidth: '120px' }}
            />
          </Link>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
                  Professional Audit & Financial Services
                </h2>
              </div>
              <p className="text-xl text-gray-100 mb-8 leading-relaxed">
                Trusted by businesses for comprehensive audit solutions, financial management, 
                and compliance services. Over 8 years of industry excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-white text-gray-800 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/services"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-800 transition-colors inline-flex items-center justify-center"
                >
                  Our Services
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <img 
                src="https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Professional audit services" 
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 pointer-events-none"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-gray-800">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mission Statement</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                At Wyvern Audit, our mission is to deliver accurate, transparent, and strategic auditing 
                services that empower businesses to make informed financial decisions. We are committed to 
                upholding the highest standards of integrity, compliance, and excellence, ensuring that our 
                clients gain clarity, confidence, and control over their finances.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-gray-800">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Vision Statement</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our vision is to become a trusted global leader in audit and assurance services, known for 
                innovative approaches, unwavering ethics, and lasting partnerships. We envision a future 
                where businesses thrive on insight, accountability, and sound financial governance — and 
                Wyvern Audit is the name they trust to guide them there.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Wyvern Audit?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine professional expertise with personalized service to deliver exceptional results for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive financial and audit solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-gray-700">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Audit Services</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-gray-700 mr-3" />
                  Internal Audit
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-gray-700 mr-3" />
                  Statutory Audit
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-gray-700 mr-3" />
                  Risk Assessment
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-gray-700">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Financial Services</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-gray-700 mr-3" />
                  Finance & Accounting
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-gray-700 mr-3" />
                  MIS Preparation
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-gray-700 mr-3" />
                  Financial Statements
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-gray-700">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Compliance Services</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-gray-700 mr-3" />
                  GST Filing
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-gray-700 mr-3" />
                  Income Tax
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-gray-700 mr-3" />
                  ROC Compliance
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-900 transition-colors inline-flex items-center"
            >
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Trusted by businesses across industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-700">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our professional audit and financial services can help your business achieve its goals.
          </p>
          <Link
            to="/contact"
            className="bg-white text-gray-800 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
          >
            Start Your Journey Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
