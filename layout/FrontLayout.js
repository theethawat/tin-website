import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Excerpt from "../components/Excerpt";
import FacebookPage from "../components/FacebookPage";
import Footer from "../components/Footer";

export default function MainLayout({ excerpt, children }) {
  return (
    <div>
      <Navbar />
      <Hero />
      <Excerpt excerpt={excerpt} />
      <div className=''>
        <div className=' w-full  flex justify-center min-h-screen '>
          <div className='w-full lg:w-2/3  px-4 '>{children}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
