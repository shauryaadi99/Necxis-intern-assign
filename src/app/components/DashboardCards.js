'use client';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function DashboardCards({ title, description, onClick }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 min-w-[200px] flex-grow hover:shadow-xl transition-shadow duration-300 ease-in-out group">
      <h2 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-200">
        {title}
      </h2>
      <p className="text-sm text-gray-500 mb-4 group-hover:text-gray-700 transition-colors duration-200">
        {description}
      </p>

      <button
        onClick={onClick}
        className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium text-sm transition-all duration-200"
      >
        View Details
        <ArrowForwardIosIcon className="!text-xs group-hover:translate-x-1 transition-transform duration-200" />
      </button>
    </div>
  );
}
