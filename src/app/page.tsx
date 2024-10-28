import FeaturedCourses from './components/FeaturedCourses';
import HeroSection from './components/HeroSection';
import TestimonialCards from './components/TestimonialCards';
import UpcomingWebinar from './components/UpcomingWebinar';
import WhyChooseUs from './components/WhyChooseUs';

export default function Home() {
  return (
    <>
    <div className='h-screen  bg-black/[0.96] antialiased bg-grid-white/[0.02]'>
      <HeroSection/>
      </div>
      <div>
      <FeaturedCourses/>
      <WhyChooseUs/>
      <TestimonialCards/>
      <UpcomingWebinar/>
    </div>
    </>
  );
}
