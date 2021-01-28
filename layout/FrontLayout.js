import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Excerpt from "../components/Excerpt"

export default function MainLayout({ children }) {
  return (
    <div>
      <Navbar />
      <Hero />
      <Excerpt />
      <div className='container mx-auto'>
        <div className='flex flex-wrap lg:flex-nowrap w-full min-h-screen'>
          <div className='w-full lg:w-3/4 mx-4'>{children}</div>
          <div className='w-full lg:w-1/4'></div>
        </div>
      </div>
    </div>
  )
}
