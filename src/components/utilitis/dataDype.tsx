interface HostInformation {
    name: string;
    contact: string;
    email: string;
  }
  
  interface Room {
    hotel_slug: string;
    room_slug: string;
    room_image: string;
    room_title: string;
    bedroom_count: number;
  }
export interface HotelType {
    hotel: any;
    hotel_id: string;
    slug: string;
    images: string[];
    title: string;
    description: string;
    guest_count: number;
    bedroom_count: number;
    bathroom_count: number;
    amenities: string[];
    host_information: HostInformation;
    address: string;
    latitude: number;
    longitude: number;
    rooms: Room[];
  }

  export type HotelsType=HotelType[]
  

  