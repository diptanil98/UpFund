import { TrendingUp, Moon, Sun } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  onNavigate: (page: string) => void;
  isLoggedIn?: boolean;
  showMarketAnalysis?: boolean;
}

export default function Header({ onNavigate, isLoggedIn, showMarketAnalysis = true }: HeaderProps) {
  const [isDark, setIsDark] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">VentureHub</span>
          </div>

          <nav className="flex items-center gap-8">
            <button
              onClick={() => onNavigate('startups')}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <span className="text-sm">📊</span>
              <span className="text-sm font-medium">Startups</span>
            </button>
            {showMarketAnalysis && (
              <button
                onClick={() => onNavigate('market-analysis')}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <span className="text-sm">📈</span>
                <span className="text-sm font-medium">Market Analysis</span>
              </button>
            )}

            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {!isLoggedIn && (
              <>
                <button
                  onClick={() => onNavigate('login')}
                  className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Login
                </button>
                <button
                  onClick={() => onNavigate('signup')}
                  className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Get Started
                </button>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
