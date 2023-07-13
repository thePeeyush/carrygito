import Navbar from "./navbar";
import Header from "./header";
import Faq from "./faq";
import Plans from "./plans";
import ourPlans from "../data/ourplans.json"

function Sections() {
    return (
      <>
        <section className="py-2">
        <div className="container max-w-screen-xl mx-auto px-4 overflow-hidden">
          <Navbar />
          <Header />
        </div>
      </section>
      
      <section className="py-2">
        <div className=" my-10  w-full">
          <Plans ourPlans={ourPlans.Plans}/>
        </div>
      </section>
      <section className="py-2">
        <div className="container max-w-screen-xl my-20 mx-auto px-4">
          <Faq/>
        </div>
      </section>
      </>
    );
  }

  export default Sections;