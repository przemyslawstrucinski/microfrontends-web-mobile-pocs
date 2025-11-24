import { Outlet } from '@modern-js/runtime/router';
import '../styles/global.css';

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Outlet />
    </div>
  );
}

