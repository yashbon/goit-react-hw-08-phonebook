const { AppBar } = require('components/AppBar/AppBar');
const { Suspense } = require('react');
const { Outlet } = require('react-router-dom');

const Layout = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
