import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="container mx-auto max-w-screen-md">
      <Outlet />
    </div>
  );
};

export default Layout;
