# Hotel Details Application

This project is a full-stack web application for displaying hotel details using a React frontend with Next.js, integrated with a backend API developed with Node.js and Express.js. The project is built with TypeScript to ensure type safety and maintainability, and it includes unit tests to validate core functionality.

## Project Requirements

- **Frontend**: Next.js and React
- **Backend**: Node.js and Express.js
- **TypeScript**: Used throughout for type safety
- **Testing**: Jest and React Testing Library

## Features

1. **Dynamic Content Fetching**: Fetch hotel details from the API backend dynamically, based on the hotel ID in the URL.
2. **Type Safety**: TypeScript is used to ensure maintainable and type-safe code, particularly for defining hotel data structures.
3. **SEO-Friendly URL Structure**: Uses a URL-friendly slug for hotel names (e.g., `/hotel-details/radisson-blu/76512`).
4. **Responsive UI**: Converts the original HTML and CSS design into reusable React components styled with CSS Modules or Styled Components.
5. **Server-Side Rendering (SSR)**: Utilizes `getServerSideProps` to ensure fresh data is loaded on every request.
6. **Unit Testing**: Ensures reliability and robustness with unit tests for components and API endpoints.

## Project Structure

. ├── pages │ ├── hotel-details │ │ └── [slug] │ │ └── [hotel-id].tsx # Dynamic Next.js page for hotel details ├── components │ └── HotelDetails # Component folder for displaying hotel info │ ├── HotelHeader.tsx # Hotel header component (name, rating, etc.) │ ├── HotelAmenities.tsx # Hotel amenities component │ ├── HotelGallery.tsx # Component to show hotel images │ └── ... ├── api # Frontend API integration │ └── hotelApi.ts # Functions to call backend endpoints ├── types │ └── hotel.d.ts # TypeScript definitions for hotel data ├── tests # Jest and React Testing Library tests │ ├── hotel-details.test.tsx # Test for Hotel Details page component │ └── api.test.ts # Test for API integration ├── styles │ └── ... # Styles for components └── ...



## Getting Started

### Prerequisites

- **Node.js**: Ensure Node.js is installed.
- **Backend API**: Set up and run your Node.js and Express.js backend server for the API.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/hotel-details-app.git
   cd hotel-details-app
# Hotel Details Application

This project is a full-stack web application for displaying hotel details using a React frontend with Next.js, integrated with a backend API developed with Node.js and Express.js. The project is built with TypeScript to ensure type safety and maintainability, and it includes unit tests to validate core functionality.

## Getting Started

### Installation

1. **Install dependencies**:
   ```bash
   npm install
# Hotel Details Application

This project is a full-stack web application for displaying hotel details using a React frontend with Next.js, integrated with a backend API developed with Node.js and Express.js. The project is built with TypeScript to ensure type safety and maintainability, and it includes unit tests to validate core functionality.

## Getting Started

### Environment Variables

1. Create a `.env.local` file to store your environment variables.
2. Add the following variable:
   ```plaintext
   NEXT_PUBLIC_API_BASE_URL=http://localhost:5000/api  # Adjust to your backend API's base URL
# Hotel Details Application

This project is a full-stack web application for displaying hotel details using a React frontend with Next.js, integrated with a backend API developed with Node.js and Express.js. The project is built with TypeScript to ensure type safety and maintainability, and it includes unit tests to validate core functionality.

## Getting Started

### Run the Development Server

To start the development server, run:

```bash
npm run dev


Visit http://localhost:3000 to see the application.

##Project Implementation

** API Endpoint **

**-Endpoint:** GET /hotel/{hotel-id}
**-Description:** Fetches hotel details based on the provided hotel-id.
**-Integration:** This endpoint is called in the Next.js frontend using getServerSideProps to retrieve hotel data dynamically.

##-Frontend Page
**-Page URL Structure:** /hotel-details/{slug}/{hotel-id}
**-Example:** http://localhost:3000/hotel-details/radisson-blu/76512

##-Page Component:
**-Created with dynamic routing to capture slug and hotel-id from the URL.
**-Displays hotel details such as name, description, location, images, and amenities based on API data.
**-Styling: CSS Modules or Styled Components are used to convert the original HTML/CSS design.


##Testing
**-Testing Frameworks:** Jest and React Testing Library


##Unit Tests:
-HotelDetails page and components
-API integration for fetching hotel data



















<!-- --------------------------------------------------------------- -->
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
