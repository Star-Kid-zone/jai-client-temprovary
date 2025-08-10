import React from 'react';
import { CheckCircle, FileText, Calculator, Shield, Users, TrendingUp } from 'lucide-react';

const ServicesPage = () => {
  const auditServices = [
    {
      title: "Internal Audit",
      description: "Comprehensive internal audit services to identify risks and improve operational efficiency.",
      features: [
        "Risk assessment and management",
        "Process improvement recommendations",
        "Internal control evaluation",
        "Compliance testing",
        "Operational efficiency analysis"
      ]
    },
    {
      title: "Statutory Audit",
      description: "Professional statutory audit services ensuring compliance with regulatory requirements.",
      features: [
        "Financial statement audit",
        "Regulatory compliance verification",
        "Audit report preparation",
        "Management letter issuance",
        "Board presentation of findings"
      ]
    }
  ];

  const financialServices = [
    {
      title: "Finance and Accounting",
      description: "Complete finance and accounting solutions to streamline your financial operations.",
      features: [
        "Bookkeeping and accounting",
        "Financial reporting",
        "Cash flow management",
        "Budget preparation",
        "Cost analysis"
      ]
    },
    {
      title: "MIS Preparation",
      description: "Management Information Systems to support informed business decisions.",
      features: [
        "Custom MIS design",
        "Performance dashboards",
        "KPI tracking",
        "Variance analysis",
        "Trend analysis"
      ]
    },
    {
      title: "Financial Statement Preparation",
      description: "Professional preparation of financial statements in compliance with accounting standards.",
      features: [
        "Balance sheet preparation",
        "Profit & loss statements",
        "Cash flow statements",
        "Notes to accounts",
        "Annual report compilation"
      ]
    }
  ];

  const complianceServices = [
    {
      title: "GST Filing",
      description: "Complete GST compliance services to ensure timely and accurate filing.",
      features: [
        "GST registration",
        "Monthly/quarterly returns",
        "Input tax credit reconciliation",
        "GST audit and assessment",
        "Refund processing"
      ]
    },
    {
      title: "TDS Returns",
      description: "Comprehensive TDS compliance and return filing services.",
      features: [
        "TDS calculation and deduction",
        "Quarterly TDS returns",
        "TDS certificate issuance",
        "Lower deduction certificates",
        "TDS reconciliation"
      ]
    },
    {
      title: "Income Tax",
      description: "Expert income tax planning and compliance services.",
      features: [
        "Income tax return filing",
        "Tax planning strategies",
        "Assessment proceedings",
        "Tax optimization",
        "Refund processing"
      ]
    },
    {
      title: "ROC Compliance",
      description: "Complete ROC compliance services for companies.",
      features: [
        "Annual filing (AOC-4, MGT-7)",
        "Board resolution drafting",
        "Director appointment/resignation",
        "Share allotment procedures",
        "Compliance monitoring"
      ]
    },
    {
      title: "PF/ESI Management",
      description: "Complete provident fund and ESI compliance management.",
      features: [
        "PF registration and compliance",
        "ESI registration and filing",
        "Monthly return submissions",
        "Employee onboarding",
        "Compliance monitoring"
      ]
    }
  ];

  const ServiceCard = ({ title, description, features, icon }: {
    title: string;
    description: string;
    features: string[];
    icon: React.ReactNode;
  }) => (
    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="text-2xl font-semibold text-gray-900 ml-3">{title}</h3>
      </div>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <CheckCircle className="h-4 w-4 text-gray-700 mr-3 flex-shrink-0" />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Comprehensive audit, financial, and compliance services tailored to your business needs
            </p>
          </div>
        </div>
      </section>

      {/* Audit Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Audit Services
            </h2>
            <p className="text-xl text-gray-600">
              Professional audit services to ensure compliance and identify opportunities for improvement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {auditServices.map((service, index) => (
              <ServiceCard 
                key={index}
                title={service.title}
                description={service.description}
                features={service.features}
                icon={<Shield className="h-8 w-8 text-gray-700" />}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Financial Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Financial Services
            </h2>
            <p className="text-xl text-gray-600">
              Complete financial management solutions to optimize your business performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {financialServices.map((service, index) => (
              <ServiceCard 
                key={index}
                title={service.title}
                description={service.description}
                features={service.features}
                icon={<TrendingUp className="h-8 w-8 text-gray-700" />}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Compliance Services
            </h2>
            <p className="text-xl text-gray-600">
              Stay compliant with all regulatory requirements through our expert compliance services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {complianceServices.map((service, index) => (
              <ServiceCard 
                key={index}
                title={service.title}
                description={service.description}
                features={service.features}
                icon={<FileText className="h-8 w-8 text-gray-700" />}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              We combine expertise, technology, and personalized service to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Users className="h-12 w-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Expert Team</h3>
              <p className="text-gray-100">
                Qualified professionals with extensive industry experience
              </p>
            </div>
            
            <div className="text-center">
              <Calculator className="h-12 w-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Technology-Driven</h3>
              <p className="text-gray-100">
                Latest tools and software for efficient and accurate service delivery
              </p>
            </div>
            
            <div className="text-center">
              <Shield className="h-12 w-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Confidentiality</h3>
              <p className="text-gray-100">
                Strict data security and confidentiality protocols
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;