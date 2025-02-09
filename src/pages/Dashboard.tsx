
import { BookOpen, Video, Award, BarChart3, Calendar} from 'lucide-react';
import DashboardLayout from '../components/DashboardLayout';

function Dashboard() {
  return (
    <DashboardLayout>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Welcome back, Student!</h1>
        
        {/* Progress Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center gap-4">
              <div className="bg-indigo-100 p-3 rounded-lg">
                <BookOpen className="text-indigo-600" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-600">Courses</p>
                <p className="text-xl font-bold">4</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center gap-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <Video className="text-green-600" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-600">Lessons</p>
                <p className="text-xl font-bold">23</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center gap-4">
              <div className="bg-yellow-100 p-3 rounded-lg">
                <Award className="text-yellow-600" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-600">Certificates</p>
                <p className="text-xl font-bold">2</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center gap-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <BarChart3 className="text-purple-600" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-600">Progress</p>
                <p className="text-xl font-bold">78%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Current Courses */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Current Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentCourses.map((course, index) => (
              <div key={index} className="border rounded-lg p-4">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h3 className="font-semibold mb-2">{course.title}</h3>
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-600">Progress: {course.progress}%</div>
                  <button className="text-indigo-600 hover:text-indigo-700">Continue</button>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div 
                    className="bg-indigo-600 h-2 rounded-full" 
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Schedule */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">Upcoming Schedule</h2>
          <div className="space-y-4">
            {schedule.map((item, index) => (
              <div key={index} className="flex items-center gap-4 p-4 border rounded-lg">
                <Calendar className="text-indigo-600" size={24} />
                <div className="flex-1">
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.time}</p>
                </div>
                <button className="px-4 py-2 text-sm text-indigo-600 border border-indigo-600 rounded-lg hover:bg-indigo-50">
                  Join
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

const currentCourses = [
  {
    title: "Mathematics Fundamentals",
    progress: 75,
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80",
  },
  {
    title: "Basic Science",
    progress: 45,
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80",
  },
  {
    title: "English Language",
    progress: 90,
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80",
  },
];

const schedule = [
  {
    title: "Live Math Class - Algebra Basics",
    time: "Today, 2:00 PM",
  },
  {
    title: "Science Lab - Virtual Experiment",
    time: "Tomorrow, 10:00 AM",
  },
  {
    title: "English Speaking Practice",
    time: "Tomorrow, 3:30 PM",
  },
];

export default Dashboard;