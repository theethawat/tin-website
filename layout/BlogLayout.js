import Navbar from "../components/Navbar"
import BlogHero from "../components/BlogHero"
import FacebookPage from "../components/FacebookPage"
import Footer from "../components/Footer"
export default function MainLayout({ children, title }) {
  return (
    <div>
      <Navbar />
      <BlogHero title={title} />
      <div className=' w-full  lg:flex  justify-center min-h-screen '>
        <div className='w-full lg:w-2/3  px-4 '>{children}</div>
        <div className='w-full lg:w-1/4 px-4 '>
          <FacebookPage />
        </div>
      </div>

      <Footer />
    </div>
  )
}
