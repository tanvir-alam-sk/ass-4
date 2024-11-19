/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import Container from "@/components/Container";
import Amenities from "@/components/Home/Amenities";
import Cancellation from "@/components/Home/Cancellation";
import DamageIncidentals from "@/components/Home/DamageIncidentals";
import FAQAccordion from "@/components/Home/FAQAccordion";
import Header from "@/components/Home/Header";
import HostInfo from "@/components/Home/HostInfo";
import HotelBooked from "@/components/Home/HotelBooked";
import HouseRules from "@/components/Home/HouseRules";
import ImportantInfoAccordion from "@/components/Home/ImportantInfoAccordion";
import OverviewPage from "@/components/Home/OverviewPage";
import PropertyDetails from "@/components/Home/PropertyDetails";
import PropertyGallery from "@/components/Home/PropertyGallery";
import QuestionBox from "@/components/Home/QuestionBox";
import Reviews from "@/components/Home/Reviews";
import RoomAndBedDetails from "@/components/Home/RoomAndBedDetails";
import Navbar from "@/components/Navbar";
import { dataLoad } from "@/components/utilitis/fetchData";
import React from "react";

 

export default async function page({ params }: any) {
  const { slug, id } = params;
  const hotels = await dataLoad(`${slug}/${id}`);
  const {hotel}=hotels
  const { title,description,guest_count,bedroom_count,bathroom_count,amenities,host_information,address,latitude,longitude,rooms}=hotel
  return (
    <div>
      <Header></Header>
      <Container>
        <Navbar></Navbar>
        <PropertyGallery hotels={hotels.hotel}></PropertyGallery>
        <OverviewPage></OverviewPage>
        <HotelBooked hotel={hotel}></HotelBooked>
        <RoomAndBedDetails></RoomAndBedDetails>
        <PropertyDetails title={title} description={description}></PropertyDetails>
        <Amenities host={host_information}></Amenities>
        <QuestionBox></QuestionBox>
        <HouseRules></HouseRules>
        <DamageIncidentals></DamageIncidentals>
        <Cancellation></Cancellation>
        <ImportantInfoAccordion></ImportantInfoAccordion>
        <FAQAccordion></FAQAccordion>
        <Reviews></Reviews>
        <HostInfo host={host_information}></HostInfo>
      </Container>
    </div>
  );
}
