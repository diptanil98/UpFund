import { useState } from 'react';
import HomePage from './pages/HomePage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import StartupBrowsePage from './pages/StartupBrowsePage';
import StartupDetailsPage from './pages/StartupDetailsPage';
import InvestorDashboard from './pages/InvestorDashboard';
import AdminDashboard from './pages/AdminDashboard';

type Page = 'home' | 'signup' | 'login' | 'startups' | 'startup-details' | 'investor-dashboard' | 'admin-dashboard';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState<'investor' | 'entrepreneur' | 'admin' | null>(null);

  const handleNavigation = (page: Page) => {
    setCurrentPage(page);
  };

  const handleLogin = (role: 'investor' | 'entrepreneur' | 'admin') => {
    setIsLoggedIn(true);
    setUserRole(role);
    if (role === 'investor') {
      setCurrentPage('investor-dashboard');
    } else if (role === 'admin') {
      setCurrentPage('admin-dashboard');
    } else {
      setCurrentPage('startups');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserRole(null);
    setCurrentPage('home');
  };

  return (
    <>
      {currentPage === 'home' && (
        <HomePage onNavigate={handleNavigation} />
      )}
      {currentPage === 'signup' && (
        <SignupPage onNavigate={handleNavigation} onLogin={handleLogin} />
      )}
      {currentPage === 'login' && (
        <LoginPage onNavigate={handleNavigation} onLogin={handleLogin} />
      )}
      {currentPage === 'startups' && (
        <StartupBrowsePage onNavigate={handleNavigation} isLoggedIn={isLoggedIn} userRole={userRole} />
      )}
      {currentPage === 'startup-details' && (
        <StartupDetailsPage onNavigate={handleNavigation} isLoggedIn={isLoggedIn} userRole={userRole} />
      )}
      {currentPage === 'investor-dashboard' && (
        <InvestorDashboard onNavigate={handleNavigation} onLogout={handleLogout} />
      )}
      {currentPage === 'admin-dashboard' && (
        <AdminDashboard onNavigate={handleNavigation} onLogout={handleLogout} />
      )}
    </>
  );
}

export default App;
