import { AdminDashboardPage } from './admin/AdminDashboardPage';
import { AdminHomeEditorPage } from './admin/AdminHomeEditorPage';
import { AdminPropertiesPage } from './admin/AdminPropertiesPage';
import { HomePage } from './pages/HomePage';

function getNormalizedPathname() {
  const pathname = window.location.pathname.replace(/\/+$/, '');
  return pathname === '' ? '/' : pathname;
}

export default function App() {
  const pathname = getNormalizedPathname();

  if (pathname === '/admin') {
    return <AdminDashboardPage />;
  }

  if (pathname === '/admin/home') {
    return <AdminHomeEditorPage />;
  }

  if (pathname === '/admin/properties') {
    return <AdminPropertiesPage />;
  }

  return <HomePage />;
}
