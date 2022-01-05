import Navbar from "../components/Navbar";
import FacebookPage from "../components/FacebookPage";
import Footer from "../components/Footer";
export default function MainLayout({ children, title }) {
  return (
    <div>
      <Navbar />
      <div className=' w-full  lg:flex  justify-center min-h-screen '>
        <div className='w-full lg:w-2/3  px-4 '>{children}</div>
      </div>

      <Footer />
    </div>
  );
}
