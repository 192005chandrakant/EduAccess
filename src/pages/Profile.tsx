
import { Mail, Phone, MapPin, Book, Award, Clock } from 'lucide-react';
import DashboardLayout from '../components/DashboardLayout';

function Profile() {
  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Info */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="text-center mb-6">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
                  alt="Profile"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h2 className="text-2xl font-bold">John Doe</h2>
                <p className="text-gray-600">Student</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="text-gray-400" size={20} />
                  <span>john.doe@example.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-gray-400" size={20} />
                  <span>+1 234 567 890</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="text-gray-400" size={20} />
                  <span>New York, USA</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t">
                <h3 className="font-semibold mb-4">Skills & Interests</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-indigo-100 p-3 rounded-lg">
                    <Book className="text-indigo-600" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Courses</p>
                    <p className="text-xl font-bold">12</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Award className="text-green-600" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Certificates</p>
                    <p className="text-xl font-bold">4</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-yellow-100 p-3 rounded-lg">
                    <Clock className="text-yellow-600" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Hours</p>
                    <p className="text-xl font-bold">156</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-4">Achievements</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 border rounded-lg">
                    <div className={`p-3 rounded-lg ${achievement.bgColor}`}>
                      <achievement.icon className={achievement.iconColor} size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold">{achievement.title}</h4>
                      <p className="text-sm text-gray-600">{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
              <div className="space-y-4">
                {activities.map((activity, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="relative">
                      <div className={`p-2 rounded-lg ${activity.bgColor}`}>
                        <activity.icon className={activity.iconColor} size={20} />
                      </div>
                      {index !== activities.length - 1 && (
                        <div className="absolute top-10 bottom-0 left-1/2 w-px bg-gray-200" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium">{activity.title}</p>
                      <p className="text-sm text-gray-600">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

const skills = [
  "Mathematics",
  "Physics",
  "Chemistry",
  "Programming",
  "English",
  "Problem Solving",
  "Critical Thinking"
];

const achievements = [
  {
    icon: Award,
    title: "Course Excellence",
    description: "Completed Mathematics with distinction",
    bgColor: "bg-indigo-100",
    iconColor: "text-indigo-600"
  },
  {
    icon: Clock,
    title: "Quick Learner",
    description: "Completed 5 courses in record time",
    bgColor: "bg-green-100",
    iconColor: "text-green-600"
  },
  {
    icon: Book,
    title: "Knowledge Seeker",
    description: "Enrolled in 10+ courses",
    bgColor: "bg-yellow-100",
    iconColor: "text-yellow-600"
  },
  {
    icon: Award,
    title: "Top Performer",
    description: "Ranked #1 in Science course",
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600"
  }
];

const activities = [
  {
    icon: Book,
    title: "Started new course: Advanced Mathematics",
    time: "2 hours ago",
    bgColor: "bg-indigo-100",
    iconColor: "text-indigo-600"
  },
  {
    icon: Award,
    title: "Earned certificate in Basic Science",
    time: "Yesterday",
    bgColor: "bg-green-100",
    iconColor: "text-green-600"
  },
  {
    icon: Clock,
    title: "Completed Chapter 5: Chemical Reactions",
    time: "2 days ago",
    bgColor: "bg-yellow-100",
    iconColor: "text-yellow-600"
  }
];

export default Profile;