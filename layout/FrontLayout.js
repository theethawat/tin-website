import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Excerpt from "../components/Excerpt"
import FacebookPage from "../components/FacebookPage"
import Footer from "../components/Footer"

export default function MainLayout({ children }) {
  return (
    <div>
      <Navbar />
      <Hero />
      <Excerpt />
      <div className='px-5'>
        <div className=' w-full  lg:flex  justify-center min-h-screen '>
          <div className='w-full lg:w-2/3  px-4 '>{children}</div>
          <div className='w-full lg:w-1/4 px-4 '>
            <FacebookPage />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
