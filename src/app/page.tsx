import Container from "@/components/Container";
import Header from "@/components/Home/Header";
import OverviewPage from "@/components/Home/OverviewPage";
import PropertyGallery from "@/components/Home/PropertyGallery";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Header></Header>
      <Container>
        <Navbar></Navbar>
        <PropertyGallery></PropertyGallery>
        <OverviewPage labels={['Overview', 'Amenities', 'Policies']}></OverviewPage>
      </Container>
    </div>
  );
}
