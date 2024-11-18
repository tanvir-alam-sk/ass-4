import Container from "@/components/Container";
import Extra from "@/components/Extra";
import Amenities from "@/components/Home/Amenities";
import DamageIncidentals from "@/components/Home/DamageIncidentals";
import Header from "@/components/Home/Header";
import HotelBooked from "@/components/Home/HotelBooked";
import HouseRules from "@/components/Home/HouseRules";
import OverviewPage from "@/components/Home/OverviewPage";
import PropertyDetails from "@/components/Home/PropertyDetails";
import PropertyGallery from "@/components/Home/PropertyGallery";
import QuestionBox from "@/components/Home/QuestionBox";
import RoomAndBedDetails from "@/components/Home/RoomAndBedDetails";
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
        <RoomAndBedDetails></RoomAndBedDetails>
        <PropertyDetails></PropertyDetails>
        <Amenities></Amenities>
        <QuestionBox></QuestionBox>
        <HouseRules></HouseRules>
        <DamageIncidentals></DamageIncidentals>
      </Container>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}
