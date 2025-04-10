import { Outlet } from 'react-router';

export const RootLayout = () => (
  <div className='min-h-screen'>
    <main className='container mx-auto p-4'>
      <Outlet />
    </main>
  </div>
);
