
import { useParams } from 'react-router-dom';
import { Play, Download, BookOpen, Clock, Award, MessageSquare } from 'lucide-react';
import DashboardLayout from '../components/DashboardLayout';

function CourseDetails() {
  const { id } = useParams();
  const course = courses.find(c => c.id === Number(id));

  if (!course) {
    return (
      <DashboardLayout>
        <div className="p-6">
          <h1 className="text-2xl font-bold">Course not found</h1>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="relative h-96">
            <img 
              src={course.image} 
              alt={course.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-8 text-white">
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${course.levelColor}`}>
                  {course.level}
                </div>
                <h1 className="text-4xl font-bold mb-2">{course.title}</h1>
                <p className="text-lg opacity-90 mb-4">{course.description}</p>
                <div className="flex items-center gap-4">
                  <img 
                    src={course.instructor.avatar} 
                    alt={course.instructor.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-white"
                  />
                  <div>
                    <p className="font-medium">{course.instructor.name}</p>
                    <p className="opacity-90">{course.instructor.role}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-2">
                <Clock className="text-indigo-600" size={20} />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="text-indigo-600" size={20} />
                <span>{course.lessons} lessons</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="text-indigo-600" size={20} />
                <span>Certificate</span>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h2 className="text-xl font-semibold mb-4">Course Content</h2>
                <div className="space-y-4">
                  {course.modules.map((module, index) => (
                    <div key={index} className="border rounded-lg">
                      <div className="p-4 border-b bg-gray-50">
                        <h3 className="font-medium">{module.title}</h3>
                      </div>
                      <div className="divide-y">
                        {module.lessons.map((lesson, lessonIndex) => (
                          <div key={lessonIndex} className="p-4 flex items-center justify-between hover:bg-gray-50">
                            <div className="flex items-center gap-3">
                              <Play size={16} className="text-indigo-600" />
                              <span>{lesson.title}</span>
                            </div>
                            <div className="flex items-center gap-4">
                              <span className="text-sm text-gray-500">{lesson.duration}</span>
                              {lesson.downloadable && (
                                <Download size={16} className="text-gray-400" />
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h2 className="text-xl font-semibold mb-4">Course Features</h2>
                  <ul className="space-y-4">
                    {course.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <feature.icon size={20} className="text-indigo-600" />
                        <span>{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="w-full mt-6 bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          </div>
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
    },
    modules: [
      {
        title: "Module 1: Introduction to Numbers",
        lessons: [
          { title: "Understanding Number Systems", duration: "15 min", downloadable: true },
          { title: "Basic Operations", duration: "20 min", downloadable: true },
          { title: "Properties of Numbers", duration: "25 min", downloadable: false }
        ]
      },
      {
        title: "Module 2: Fractions and Decimals",
        lessons: [
          { title: "Introduction to Fractions", duration: "30 min", downloadable: true },
          { title: "Decimal Numbers", duration: "25 min", downloadable: true },
          { title: "Converting Between Fractions and Decimals", duration: "20 min", downloadable: false }
        ]
      }
    ],
    features: [
      { icon: BookOpen, text: "24 Comprehensive Lessons" },
      { icon: Download, text: "Downloadable Resources" },
      { icon: MessageSquare, text: "Discussion Forums" },
      { icon: Award, text: "Certificate of Completion" }
    ]
  }
];

export default CourseDetails;