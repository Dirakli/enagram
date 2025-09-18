import Heading from "../components/Heading";
import InnerSection from "../components/InnerSection";

function Home() {
  return (
    <div className="flex flex-col w-full lg:flex-row">
      <Heading className="flex-none lg:w-[240px]" />
      <div className="flex-1">
        <InnerSection />
      </div>
    </div>
  );
}

export default Home;
