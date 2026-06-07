import { Outlet } from 'react-router-dom';
import TopNavBar from '../components/layout/TopNavBar';
import Footer from '../components/layout/Footer';
import CustomCursor from '../components/layout/CustomCursor';

export default function MainLayout() {
  return (
    <div className="font-body-md text-body-md antialiased min-h-screen flex flex-col relative selection:bg-primary-container selection:text-zinc-surface">
      <CustomCursor />
      <TopNavBar />
      
      <main className="flex-grow w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-[120px] pb-section-gap relative z-10">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
}
