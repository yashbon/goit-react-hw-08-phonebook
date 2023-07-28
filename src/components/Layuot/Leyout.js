const { AppBar } = require('components/AppBar/AppBar');
const { Suspense } = require('react');
const { Outlet } = require('react-router-dom');

const Layout = () => {
<<<<<<< Updated upstream
  return (
    <>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
=======
    return (
        <>
            <AppBar />
            <Suspense fallback={null}>
                <Outlet />
            </Suspense>
        </>
    );
>>>>>>> Stashed changes
};

export default Layout;
