import React from 'react';
import { Building, Users, Award, TrendingUp, CheckCircle } from 'lucide-react';

const ClientsPage = () => {
  const industries = [
    {
      name: "Technology",
      icon: <TrendingUp className="h-8 w-8 text-gray-700" />,
      description: "Software companies, IT services, and tech startups",
      clients: ["TechCorp Solutions", "InnovateTech Ltd", "DevStudio Inc"]
    },
    {
      name: "Manufacturing",
      icon: <Building className="h-8 w-8 text-gray-700" />,
      description: "Industrial manufacturing and production companies",
      clients: ["Global Industries", "Precision Manufacturing", "Industrial Solutions"]
    },
    {
      name: "Financial Services",
      icon: <Award className="h-8 w-8 text-gray-700" />,
      description: "Banks, insurance companies, and financial institutions",
      clients: ["SecureBank Ltd", "Finance Plus", "Investment Partners"]
    },
    {
      name: "Healthcare",
      icon: <Users className="h-8 w-8 text-gray-700" />,
      description: "Hospitals, clinics, and healthcare service providers",
      clients: ["HealthCare Systems", "MediCorp", "Wellness Solutions"]
    },
    {
      name: "Retail & E-commerce",
      icon: <Building className="h-8 w-8 text-gray-700" />,
      description: "Retail chains, online stores, and consumer goods",
      clients: ["RetailMax", "E-Commerce Hub", "Consumer Goods Co"]
    },
    {
      name: "Real Estate",
      icon: <Building className="h-8 w-8 text-gray-700" />,
      description: "Property development and real estate companies",
      clients: ["Property Developers", "Real Estate Plus", "Urban Solutions"]
    }
  ];

  const testimonials = [
    {
      company: "TechCorp Solutions",
      industry: "Technology",
      testimonial: "Wyvern Audit has been instrumental in streamlining our financial processes. Their expertise in technology sector compliance is exceptional.",
      contact: "Rajesh Kumar, CFO",
      results: ["40% reduction in compliance time", "Improved financial reporting accuracy", "Enhanced risk management"]
    },
    {
      company: "Global Industries",
      industry: "Manufacturing",
      testimonial: "The team's thorough understanding of manufacturing compliance requirements has saved us significant time and resources.",
      contact: "Priya Sharma, Finance Director",
      results: ["100% compliance achievement", "Streamlined audit processes", "Cost optimization of 25%"]
    },
    {
      company: "HealthCare Systems",
      industry: "Healthcare",
      testimonial: "Professional, reliable, and efficient. Their healthcare sector expertise is evident in every interaction.",
      contact: "Dr. Amit Patel, Administrator",
      results: ["Enhanced regulatory compliance", "Improved financial controls", "Reduced audit preparation time"]
    }
  ];

  const clientLogos = [
    "TechCorp Solutions", "Global Industries", "SecureBank Ltd", "HealthCare Systems",
    "RetailMax", "Property Developers", "InnovateTech Ltd", "Finance Plus",
    "MediCorp", "E-Commerce Hub", "Industrial Solutions", "Investment Partners"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Clients</h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Trusted by leading businesses across diverse industries for exceptional 
              audit and financial services.
            </p>
          </div>
        </div>
      </section>

      {/* Client Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">200+</div>
              <div className="text-gray-600 font-medium">Satisfied Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">15+</div>
              <div className="text-gray-600 font-medium">Industries Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">99%</div>
              <div className="text-gray-600 font-medium">Client Retention</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">8+</div>
              <div className="text-gray-600 font-medium">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600">
              Specialized expertise across diverse business sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  {industry.icon}
                  <h3 className="text-xl font-semibold text-gray-900 ml-3">{industry.name}</h3>
                </div>
                <p className="text-gray-600 mb-4">{industry.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Notable Clients:</h4>
                  {industry.clients.map((client, clientIndex) => (
                    <div key={clientIndex} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-gray-700 mr-2" />
                      <span className="text-gray-700">{client}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Leading Companies
            </h2>
            <p className="text-xl text-gray-600">
              Our client portfolio spans across various industries and company sizes
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {clientLogos.map((logo, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg text-center hover:bg-gray-100 transition-colors">
                <div className="h-16 flex items-center justify-center">
                  <span className="text-lg font-semibold text-gray-700">{logo}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Real results from our valued clients
            </p>
          </div>

          <div className="space-y-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                      {testimonial.company}
                    </h3>
                    <p className="text-gray-700 font-medium mb-4">{testimonial.industry}</p>
                    <blockquote className="text-gray-700 italic mb-4">
                      "{testimonial.testimonial}"
                    </blockquote>
                    <p className="font-semibold text-gray-900">{testimonial.contact}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Results:</h4>
                    <ul className="space-y-2">
                      {testimonial.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                          <span className="text-gray-700">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Approach */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Partnership Approach
            </h2>
            <p className="text-xl text-gray-600">
              How we work with clients to achieve exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gray-100 p-4 rounded-full inline-block mb-4">
                <Users className="h-12 w-12 text-gray-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Understanding</h3>
              <p className="text-gray-600">
                We take time to understand your business, challenges, and goals before 
                proposing solutions.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-gray-100 p-4 rounded-full inline-block mb-4">
                <Award className="h-12 w-12 text-gray-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Customization</h3>
              <p className="text-gray-600">
                Every solution is tailored to your specific industry requirements and 
                business objectives.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-gray-100 p-4 rounded-full inline-block mb-4">
                <TrendingUp className="h-12 w-12 text-gray-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Growth</h3>
              <p className="text-gray-600">
                We focus on solutions that not only solve current challenges but also 
                support future growth.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClientsPage;