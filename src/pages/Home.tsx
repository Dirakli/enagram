import Heading from "../components/Heading";
import Comparison from "../components/Comparison";
import InnerSection from "../components/InnerSection";
function Home() {
  return (
    <div className="flex flex-col items-center w-full ">
      <Heading />
      <InnerSection />
      <Comparison />
    </div>
  );
}

export default Home;
