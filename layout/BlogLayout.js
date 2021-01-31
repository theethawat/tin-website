import Navbar from "../components/Navbar"
import BlogHero from "../components/BlogHero"
import FacebookPage from "../components/FacebookPage"
import Footer from "../components/Footer"
export default function MainLayout({ children, title }) {
  return (
    <div>
      <Navbar />
      <BlogHero title={title} />
      <div className='container mx-auto'>
        <div className='flex flex-wrap lg:flex-nowrap w-full min-h-screen'>
          <div className='w-full lg:w-3/4 mx-4'>{children}</div>
          <div className='w-full lg:w-1/4'>
            {" "}
            <FacebookPage />{" "}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
