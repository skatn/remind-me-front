import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="container mx-auto max-w-[768px]">
      <Outlet />
    </div>
  );
};

export default Layout;
