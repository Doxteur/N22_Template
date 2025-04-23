import { Outlet } from 'react-router';
import Sidebar from '../Sidebar';

export const RootLayout = () => (
  <div className="flex min-h-screen">
    <Sidebar />
    <main className="flex-1 overflow-auto">
      <div className="container mx-auto p-6">
        <Outlet />
      </div>
    </main>
  </div>
);
