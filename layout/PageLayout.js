import Navbar from "../components/Navbar";
import PageHero from "../components/PageHero";
import Footer from "../components/Footer";
export default function MainLayout({ children, title }) {
  return (
    <div>
      <Navbar />
      <PageHero title={title} />
      <div className='px-5'>
        <div className=' w-full  lg:flex  justify-center min-h-screen '>
          <div className='w-full lg:w-2/3  px-4 '>{children}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
