import { Stats } from "fs";
import Hero from "./_components/Hero";
import Information from "./_components/Information";
import StoreListing from "./_components/StoreListing";
import StoreSection from "./_components/StoreSection";
import Status from "./_components/Status";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <>
      <Hero/>
       {/* All stores are displayed here  */}
      <StoreSection />
      {/* all store name are displayed here  */}
      <StoreListing />
      <Status/>
      <Information/>
      <Footer/>
    </>
  );
}
