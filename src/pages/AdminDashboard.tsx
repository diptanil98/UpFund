import { LayoutDashboard, FileText, Users, BarChart3, Settings, LogOut } from 'lucide-react';
import ChatBot from '../components/ChatBot';

interface AdminDashboardProps {
  onNavigate: (page: string) => void;
  onLogout: () => void;
}

export default function AdminDashboard({ onNavigate, onLogout }: AdminDashboardProps) {
  const applications = [
    {
      company: 'Tech Innovators Inc.',
      founder: 'Ethan Harper',
      industry: 'Technology',
      status: 'Pending',
      submitted: '2023-09-15',
    },
    {
      company: 'Green Solutions Ltd.',
      founder: 'Olivia Bennett',
      industry: 'Sustainability',
      status: 'Pending',
      submitted: '2023-09-18',
    },
    {
      company: 'Creative Media Studio',
      founder: 'Ryan Carter',
      industry: 'Arts & Culture',
      status: 'Pending',
      submitted: '2023-09-20',
    },
    {
      company: 'HealthTech Dynamics',
      founder: 'Sophia Davis',
      industry: 'Healthcare',
      status: 'Pending',
      submitted: '2023-09-22',
    },
    {
      company: 'EduFuture Systems',
      founder: 'Liam Evans',
      industry: 'Education',
      status: 'Pending',
      submitted: '2023-09-25',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        <aside className="w-64 bg-white min-h-screen p-6 border-r border-gray-200">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold text-sm">IN</span>
            </div>
            <div>
              <div className="font-semibold text-gray-900">Innovest</div>
            </div>
          </div>

          <nav className="space-y-2">
            <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg font-medium transition-colors">
              <LayoutDashboard className="w-5 h-5" />
              Dashboard
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 bg-blue-50 text-blue-600 rounded-lg font-medium">
              <FileText className="w-5 h-5" />
              Applications
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg font-medium transition-colors">
              <Users className="w-5 h-5" />
              Investors
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg font-medium transition-colors">
              <BarChart3 className="w-5 h-5" />
              Campaigns
            </button>
          </nav>

          <div className="absolute bottom-6">
            <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg font-medium transition-colors mb-2">
              <Settings className="w-5 h-5" />
              Settings
            </button>
            <button
              onClick={onLogout}
              className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg font-medium transition-colors"
            >
              <LogOut className="w-5 h-5" />
              Logout
            </button>
          </div>
        </aside>

        <main className="flex-1 p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Applications</h1>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-gray-600">John Doe</span>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 mb-6">
            <div className="border-b border-gray-200">
              <div className="flex">
                <button className="px-6 py-4 text-sm font-semibold text-gray-900 border-b-2 border-blue-600">
                  All <span className="text-gray-500">(28)</span>
                </button>
                <button className="px-6 py-4 text-sm font-medium text-blue-600 hover:text-blue-700">
                  Pending <span className="text-gray-500">(5)</span>
                </button>
                <button className="px-6 py-4 text-sm font-medium text-gray-600 hover:text-gray-900">
                  Verified <span className="text-gray-500">(91)</span>
                </button>
              </div>
            </div>

            <div className="p-6">
              <div className="relative mb-6">
                <input
                  type="text"
                  placeholder="Search by company, founder, or industry..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-4 px-4 text-gray-600 font-semibold text-sm">
                        COMPANY
                      </th>
                      <th className="text-left py-4 px-4 text-gray-600 font-semibold text-sm">
                        FOUNDER
                      </th>
                      <th className="text-left py-4 px-4 text-gray-600 font-semibold text-sm">
                        INDUSTRY
                      </th>
                      <th className="text-left py-4 px-4 text-gray-600 font-semibold text-sm">
                        STATUS
                      </th>
                      <th className="text-left py-4 px-4 text-gray-600 font-semibold text-sm">
                        SUBMITTED
                      </th>
                      <th className="text-left py-4 px-4 text-gray-600 font-semibold text-sm">
                        ACTION
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {applications.map((app, index) => (
                      <tr
                        key={index}
                        className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                      >
                        <td className="py-4 px-4 text-gray-900 font-medium">{app.company}</td>
                        <td className="py-4 px-4 text-gray-700">{app.founder}</td>
                        <td className="py-4 px-4">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              app.industry === 'Technology'
                                ? 'bg-blue-100 text-blue-700'
                                : app.industry === 'Sustainability'
                                ? 'bg-green-100 text-green-700'
                                : app.industry === 'Healthcare'
                                ? 'bg-red-100 text-red-700'
                                : app.industry === 'Education'
                                ? 'bg-violet-100 text-violet-700'
                                : 'bg-orange-100 text-orange-700'
                            }`}
                          >
                            {app.industry}
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-semibold">
                            {app.status}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-gray-700">{app.submitted}</td>
                        <td className="py-4 px-4">
                          <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                            View Details
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
      <ChatBot />
    </div>
  );
}
