import Navbar from "./navbar";
import Header from "./header";
import Faq from "./faq";
import Plans from "./plans";
import ourPlans from "../data/ourplans.json"
import { Show } from "./show";

function Sections() {
    return (
      <>
        <section className="py-2">
        <div className="container min-h-screen max-w-screen-xl mx-auto px-4 overflow-hidden">
          <Navbar />
          <Header />
        </div>
      </section>

      <section>
        <Show/>
      </section>
      
      <section >
        <div className=" mb-10  w-full">
          <Plans ourPlans={ourPlans.Plans}/>
        </div>
      </section>
      <section>
        <div className="container max-w-screen-xl my-20 mx-auto px-4">
          <Faq/>
        </div>
      </section>
      </>
    );
  }

  export default Sections;