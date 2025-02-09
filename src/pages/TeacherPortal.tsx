
import { Users, Upload, BookOpen, MessageSquare } from 'lucide-react';
import DashboardLayout from '../components/DashboardLayout';

function TeacherPortal() {
  return (
    <DashboardLayout>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Teacher Portal</h1>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <button className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <div className="flex flex-col items-center gap-2">
              <div className="bg-indigo-100 p-3 rounded-lg">
                <Upload className="text-indigo-600" size={24} />
              </div>
              <span className="font-semibold">Upload Content</span>
            </div>
          </button>
          <button className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <div className="flex flex-col items-center gap-2">
              <div className="bg-green-100 p-3 rounded-lg">
                <Users className="text-green-600" size={24} />
              </div>
              <span className="font-semibold">Manage Students</span>
            </div>
          </button>
          <button className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <div className="flex flex-col items-center gap-2">
              <div className="bg-yellow-100 p-3 rounded-lg">
                <BookOpen className="text-yellow-600" size={24} />
              </div>
              <span className="font-semibold">Create Course</span>
            </div>
          </button>
          <button className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <div className="flex flex-col items-center gap-2">
              <div className="bg-purple-100 p-3 rounded-lg">
                <MessageSquare className="text-purple-600" size={24} />
              </div>
              <span className="font-semibold">Discussion Forum</span>
            </div>
          </button>
        </div>

        {/* My Courses */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">My Courses</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Course Name</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Students</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Progress</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {teacherCourses.map((course, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img 
                          src={course.image} 
                          alt={course.title}
                          className="w-10 h-10 rounded-lg object-cover"
                        />
                        <span className="font-medium">{course.title}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">{course.students}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-24 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-indigo-600 h-2 rounded-full" 
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>
                        <span>{course.progress}%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <button className="text-indigo-600 hover:text-indigo-700">Edit</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center gap-4 p-4 border rounded-lg">
                <div className={`p-2 rounded-lg ${activity.iconBg}`}>
                  {activity.icon}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold">{activity.title}</h4>
                  <p className="text-sm text-gray-600">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

const teacherCourses = [
  {
    title: "Mathematics Fundamentals",
    students: 45,
    progress: 75,
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80",
  },
  {
    title: "Basic Science",
    students: 32,
    progress: 45,
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80",
  },
  {
    title: "English Language",
    students: 28,
    progress: 90,
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80",
  },
];

const recentActivity = [
  {
    icon: <Upload className="text-indigo-600" size={20} />,
    iconBg: "bg-indigo-100",
    title: "New lesson uploaded: Introduction to Algebra",
    time: "2 hours ago",
  },
  {
    icon: <MessageSquare className="text-green-600" size={20} />,
    iconBg: "bg-green-100",
    title: "Responded to student questions in Math forum",
    time: "4 hours ago",
  },
  {
    icon: <Users className="text-yellow-600" size={20} />,
    iconBg: "bg-yellow-100",
    title: "5 new students joined Basic Science course",
    time: "Yesterday",
  },
];

export default TeacherPortal;