import { useNavigate } from 'react-router-dom';
import { BookOpen, Users, Award, Globe } from 'lucide-react';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <BookOpen className="text-indigo-600" size={32} />
              <span className="ml-2 text-xl font-bold cursor-pointer"   onClick={() => navigate('/')}>EduAccess</span>
            </div>
            <div className="flex items-center gap-4">
              <button 
                onClick={() => navigate('/AuthPage')}
                className="px-4 py-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition"
              >
                Sign In
              </button>
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Quality Education for <span className="text-indigo-600">Rural India</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Breaking barriers in rural education through innovative digital learning solutions. Access quality education anytime, anywhere.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/dashboard')}
              className="px-8 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition text-lg"
            >
              Start Learning
            </button>
            <button className="px-8 py-4 border-2 border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition text-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose EduAccess?</h2>
            <p className="text-xl text-gray-600">Empowering rural communities through accessible education</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6">
                <div className="inline-flex p-4 rounded-lg bg-indigo-100 mb-4">
                  <feature.icon className="text-indigo-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-indigo-600 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-indigo-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <BookOpen size={24} />
                <span className="ml-2 text-xl font-bold">EduAccess</span>
              </div>
              <p className="text-gray-400">Empowering rural communities through quality education.</p>
            </div>
            {footerLinks.map((section, index) => (
              <div key={index}>
                <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href="#" className="text-gray-400 hover:text-white transition">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 EduAccess. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const features = [
  {
    icon: Globe,
    title: "Offline Access",
    description: "Access course content anytime, anywhere, even without internet connection."
  },
  {
    icon: Users,
    title: "Expert Teachers",
    description: "Learn from qualified educators with years of teaching experience."
  },
  {
    icon: Award,
    title: "Certified Courses",
    description: "Earn recognized certificates upon course completion."
  }
];

const stats = [
  { value: "50,000+", label: "Students" },
  { value: "1,000+", label: "Teachers" },
  { value: "200+", label: "Courses" },
  { value: "95%", label: "Success Rate" }
];

const footerLinks = [
  {
    title: "Company",
    links: ["About Us", "Careers", "Partners", "Contact"]
  },
  {
    title: "Resources",
    links: ["Blog", "Newsletter", "Events", "Help Center"]
  },
  {
    title: "Legal",
    links: ["Terms", "Privacy", "Cookies", "Licenses"]
  }
];

export default LandingPage;

