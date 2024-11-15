import Container from "@/components/Container";
import Extra from "@/components/Extra";
import Header from "@/components/Home/Header";
import HotelBooked from "@/components/Home/HotelBooked";
import OverviewPage from "@/components/Home/OverviewPage";
import PropertyGallery from "@/components/Home/PropertyGallery";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="">
      <Header></Header>
      <Container>
        <Navbar></Navbar>
        <PropertyGallery></PropertyGallery>
        <OverviewPage></OverviewPage>
        <HotelBooked></HotelBooked>
      </Container>
    </div>
  );
}
