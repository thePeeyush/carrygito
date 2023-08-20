import Navbar from "./navbar";
import Header from "./header";
import Faq from "./faq";
import Plans from "./plans";
import ourPlans from "../data/ourplans.json";
import { Show } from "./show";
import Menu from "./menu";

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
        <Plans ourPlans={ourPlans.Plans} />
      </section>
      <section>
        <Faq />
      </section>
    </>
  );
}

export default Sections;
