import Navbar from "./Navbar";
import Header from "./Header";
import Faq from "./Faq";
import ourPlans from "../data/ourplans.json";
import { Show } from "./Show";
import Menu from "./Menu";
import Plans from "./Plans";

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
        <Show />
      </section>

      <section>
        <Menu />
      </section>

      <section>
        <Plans ourPlans={ourPlans.Plans} className={'w-full bg-green-50 p-10 pb-20'}/>
      </section>
      <section>
        <Faq />
      </section>
    </>
  );
}

export default Sections;
