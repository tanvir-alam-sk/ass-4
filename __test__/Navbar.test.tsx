/* eslint-disable react/display-name */
// __tests__/Navbar.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
// import Navbar from "../Navbar"; // Adjust the import according to your file structure
import '@testing-library/jest-dom'; // for the custom jest matchers like toBeInTheDocument
import Navbar from "@/components/Navbar";

jest.mock("../common/ShareModal", () => () => <div>ShareModal Component</div>);
jest.mock("./NavberBooked", () => () => <div>NavberBooked Component</div>);

describe("Navbar", () => {
  test("renders the 'See all properties' link with the correct href", () => {
    render(<Navbar/>);

    // Check if the link with text 'See all properties' is rendered
    const linkElement = screen.getByText(/See all properties/i);
    expect(linkElement).toBeInTheDocument();

    // Check if the link points to the correct URL
    expect(linkElement).toHaveAttribute("href", "/properties");
  });

  test("renders ShareModal component", () => {
    render(<Navbar />);

    // Check if the ShareModal is rendered
    const shareModal = screen.getByText(/ShareModal Component/i);
    expect(shareModal).toBeInTheDocument();
  });

  test("renders NavberBooked component", () => {
    render(<Navbar />);

    // Check if the NavberBooked component is rendered
    const navberBooked = screen.getByText(/NavberBooked Component/i);
    expect(navberBooked).toBeInTheDocument();
  });

  test("renders the Navbar with proper structure", () => {
    render(<Navbar />);

    // Check if the Navbar has two main sections: left and right
    const leftSection = screen.getByText(/See all properties/i);
    const rightSection = screen.getByText(/ShareModal Component/i);

    expect(leftSection).toBeInTheDocument();
    expect(rightSection).toBeInTheDocument();
  });
});
