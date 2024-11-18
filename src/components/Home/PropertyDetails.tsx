import React from 'react'

interface PolicyItem {
    text: string;
  }
  
  interface LocationItem {
    name: string;
    distance: string;
  }
  
  interface PropertyDetails {
    title: string;
    description: string;
    propertyCode: string;
    specs: string[];
    amenities: {
      home: string[];
      kitchen: string[];
      general: string[];
      parking: string[];
    };
    locations: {
      outdoors: LocationItem[];
      thingsToDo: LocationItem[];
      localFare: LocationItem[];
      transport: LocationItem[];
    };
    policies: PolicyItem[];
  }

export default function PropertyDetails() {
    const details: PropertyDetails = {
        title: "Juneau Vacation Home: Stunning View + Beach Access",
        description: "Escape to the mountains and experience the great outdoors at this lovely Juneau vacation rental! Perched on the shore of Lynn Canal, this 2-bedroom, 1-bath home is the perfect getaway for those looking to enjoy a relaxing retreat surrounded by nature. Spend your day fishing for King Salmon, exploring Lena Beach and the rocky coastline, or hiking the nearby trails. After your outdoor adventure, kick back on the private deck and admire the breathtaking panoramic views!",
        propertyCode: "CBJ1000104 | 1,115 Sq Ft | 2 Private Decks | Lena Cove & Mountain Views | 2 Bicycles Provided",
        specs: [
          "Bedroom 1: Queen Bed, Full Floor Mattress",
          "Bedroom 2: Extra Long Twin Bed"
        ],
        amenities: {
          home: ["Flat-screen TV", "dining table", "washer/dryer"],
          kitchen: ["Fridge", "stove", "coffee maker", "microwave", "cooking basics", "toaster", "dinnerware/flatware", "trash bags/paper towels", "Crockpot"],
          general: ["Free WiFi", "central heating", "linens/towels", "keyless entry", "hair dryer", "ceiling fans"],
          parking: ["Driveway (2 vehicles)", "RV parking allowed"]
        },
        locations: {
          outdoors: [
            { name: "Glacier Gardens Rainforest Adventure", distance: "10 miles" },
            { name: "Mendenhall Glacier", distance: "10 miles" },
            { name: "Twin Lakes", distance: "13 miles" }
          ],
          thingsToDo: [
            { name: "Mendenhall Golf", distance: "8 miles" },
            { name: "Diamond Park Aquatic Center", distance: "8 miles" },
            { name: "Last Chance Mining Museum", distance: "15 miles" }
          ],
          localFare: [
            { name: "Forbidden Peak Brewery", distance: "5 miles" },
            { name: "The Grind Coffee Company", distance: "7 miles" },
            { name: "Zerelda's Bistro", distance: "8 miles" }
          ],
          transport: [
            { name: "Juneau International Airport", distance: "9 miles" }
          ]
        },
        policies: [
          { text: "No smoking" },
          { text: "No pets allowed" },
          { text: "No events, parties, or large gatherings" },
          { text: "Must be at least 25 years old to book" },
          { text: "Additional fees and taxes may apply" },
          { text: "Photo ID may be required upon check-in" },
          { text: "NOTE: The property requires stairs to access" },
          { text: "NOTE: The property does not have air conditioning" },
          { text: "NOTE: The property sleeps 3 guests in 2 beds, with room for 4 total by using the full floor" }
        ]
      };
  return (
    <div className="md:w-2/3 p-6 space-y-8">
      {/* Title Section */}
      <section>
        <h1 className="text-2xl font-bold mb-4">About this property</h1>
        <p className="text-gray-700 mb-4">{details.title}</p>
        <p className="text-gray-600 mb-4">{details.description}</p>
        <p className="text-gray-500 text-sm">{details.propertyCode}</p>
      </section>

      {/* Bedrooms */}
      <section className="space-y-2">
        {details.specs.map((spec, index) => (
          <p key={index} className="text-gray-600">{spec}</p>
        ))}
      </section>

      {/* Amenities */}
      <section className="space-y-4">
        <div>
          <h3 className="font-semibold mb-2">HOME HIGHLIGHTS:</h3>
          <p className="text-gray-600">{details.amenities.home.join(', ')}</p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">KITCHEN:</h3>
          <p className="text-gray-600">{details.amenities.kitchen.join(', ')}</p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">GENERAL:</h3>
          <p className="text-gray-600">{details.amenities.general.join(', ')}</p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">PARKING:</h3>
          <p className="text-gray-600">{details.amenities.parking.join(', ')}</p>
        </div>
      </section>

      {/* Location */}
      <section className="space-y-4">
        <h2 className="font-semibold">-- THE LOCATION --</h2>
        {Object.entries(details.locations).map(([category, items]) => (
          <div key={category} className="space-y-1">
            {items.map((item, index) => (
              <p key={index} className="text-gray-600">
                {item.name} ({item.distance})
              </p>
            ))}
          </div>
        ))}
      </section>

      {/* Rest Easy Section */}
      <section>
        <h2 className="font-semibold mb-2">-- REST EASY WITH US --</h2>
        <p className="text-gray-600">
          Evolve makes it easy to find and book properties you'll never want to leave. You can relax knowing 
          that our properties will always be ready for you and that we'll answer the phone 24/7. Even better, 
          if anything is off about your stay, we'll make it right. You can count on our homes and our people to 
          make you feel welcome—because we know what vacation means to you.
        </p>
      </section>

      {/* Policies */}
      <section>
        <h2 className="font-semibold mb-2">-- POLICIES --</h2>
        <ul className="space-y-2">
          {details.policies.map((policy, index) => (
            <li key={index} className="text-gray-600">- {policy.text}</li>
          ))}
        </ul>
      </section>
    </div>
  )
}
