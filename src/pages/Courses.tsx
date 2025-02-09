
import { useNavigate } from 'react-router-dom';
import { Search, Filter, BookOpen } from 'lucide-react';
import DashboardLayout from '../components/DashboardLayout';

function Courses() {
  const navigate = useNavigate();

  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <h1 className="text-2xl font-bold">Available Courses</h1>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <div className="relative flex-1 sm:w-80">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search courses..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
              <Filter size={20} />
              <span>Filter</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition cursor-pointer"
              onClick={() => navigate(`/courses/${course.id}`)}
            >
              <img 
                src={course.image} 
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${course.levelColor}`}>
                    {course.level}
                  </div>
                  <div className="text-sm text-gray-500">{course.duration}</div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{course.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img 
                      src={course.instructor.avatar} 
                      alt={course.instructor.name}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-sm font-medium">{course.instructor.name}</p>
                      <p className="text-xs text-gray-500">{course.instructor.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-indigo-600">
                    <BookOpen size={16} />
                    <span className="text-sm">{course.lessons} lessons</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}

const courses = [
  {
    id: 1,
    title: "Mathematics Fundamentals",
    description: "Master essential mathematical concepts with interactive lessons and real-world applications.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80",
    level: "Beginner",
    levelColor: "bg-green-100 text-green-800",
    duration: "8 weeks",
    lessons: 24,
    instructor: {
      name: "Dr. Sarah Johnson",
      role: "Math Professor",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
    }
  },
  {
    id: 2,
    title: "Basic Science",
    description: "Explore the wonders of science through hands-on experiments and engaging video lessons.",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80",
    level: "Intermediate",
    levelColor: "bg-yellow-100 text-yellow-800",
    duration: "10 weeks",
    lessons: 32,
    instructor: {
      name: "Prof. Michael Chen",
      role: "Science Educator",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
    }
  },
  {
    id: 3,
    title: "English Language",
    description: "Improve your English skills with comprehensive lessons in grammar, vocabulary, and communication.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80",
    level: "Advanced",
    levelColor: "bg-red-100 text-red-800",
    duration: "12 weeks",
    lessons: 36,
    instructor: {
      name: "Emma Wilson",
      role: "Language Expert",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
    }
  }
];

export default Courses;