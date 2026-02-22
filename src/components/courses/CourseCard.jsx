export default function CourseCard({ 
  title = 'Atomic Habits',
  instructor = 'James Clear',
  progress = 50,
  isFree = true,
  useGreenTheme = false,
  courseId = 1,
  showResume = false,
  level = null
}) {
  const courseImages = [
    'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  ];

  const buttonColor = useGreenTheme ? 'bg-green-600 hover:bg-green-700' : 'bg-[#0057A0] hover:bg-[#004080]';
  const textColor = useGreenTheme ? 'text-green-600' : 'text-[#0057A0]';
  const progressColor = useGreenTheme ? 'text-green-500' : 'text-[#32A8E0]';

  console.log('Course:', {
    title,
    progress,
    showResume,
    level,
    buttonText: progress > 0 ? 'Resume' : 'Learn'
  });

  const isCompleted = progress === 100;
  const buttonText = isCompleted ? 'View Certificate' : (progress > 0 ? 'Resume' : 'Learn');

  return (
    <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden w-[300px] hover:shadow-md transition-shadow duration-200">
      <div className="p-3">
        <div className="relative rounded-xl overflow-hidden mb-4">
          <img
            src={courseImages[courseId % courseImages.length]}
            alt={title}
            className="w-full h-40 object-cover"
          />
        </div>

        <div className="px-2">
        <div className="flex items-center gap-1 mb-2">
          <img
            src="https://www.google.com/favicon.ico"
            alt="Google"
            className="w-4 h-4 object-contain"
          />
          <p className="text-gray-500 text-xs font-medium">Google</p>
        </div>

        <h3 className="text-[15px] font-semibold text-gray-900 leading-tight mb-2">
            {title}
        </h3>

        <div className="flex justify-between items-center mb-2">
            <p className="text-gray-600 text-xs">Tutor: {instructor}</p>
            <button 
              className={`${buttonColor} text-white text-xs font-medium px-3 py-1.5 rounded-md transition-colors`}
            >
              {buttonText}
            </button>
        </div>

        <div className="flex justify-between items-center mb-3">
          {progress > 0 && (
            <p className={`${progressColor} text-xs`}>
              {isCompleted ? '100% Completed' : `${100 - progress}% Remaining to complete the course`}
            </p>
          )}
          {isCompleted && (
            <button 
              className="text-xs font-medium text-black px-3 py-1 hover:underline transition-colors"
            >
              Retake
            </button>
          )}
        </div>

        <div className="flex items-center justify-between text-xs text-gray-600">
          <span>Professional Certificate</span>
          <span className={`${textColor} font-medium`}>
            {isFree ? 'Free Course' : 'Paid Course'}
          </span>
        </div>
        </div>
      </div>
    </div>
  );
}
