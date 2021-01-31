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
      <div className='container mx-auto min-mx-10 '>
        <div className='flex flex-wrap md:flex-nowrap w-full min-h-screen mx-8'>
          <div className='w-full md:w-3/4 mx-4'>{children}</div>
          <div className='w-full md:w-1/4'>
            <FacebookPage />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
