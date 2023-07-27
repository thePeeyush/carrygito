import Footer from '@/components/footer';
import Sections from '@/components/sections';
import Image from 'next/image';


function Home() {
  return (
    <div className=" bg-white custom-cursor">
      <Sections />
      <Footer />
    </div>
  );
}

export default Home;