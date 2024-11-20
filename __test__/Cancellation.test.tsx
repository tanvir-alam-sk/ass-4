// __tests__/Cancellation.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
// import Cancellation from "../Cancellation"; // Adjust the import according to your file structure
import "@testing-library/jest-dom"; // for custom matchers like toBeInTheDocument
import Cancellation from "@/components/Home/Cancellation";

describe("Cancellation", () => {
  test("renders the cancellation title", () => {
    render(<Cancellation />);

    // Check if the title "Cancellation" is displayed
    const titleElement = screen.getByText(/Cancellation/i);
    expect(titleElement).toBeInTheDocument();
  });

  test("renders the refund timeline with Full refund and No refund", () => {
    render(<Cancellation />);

    // Check if 'Full refund' and 'No refund' are displayed in the timeline
    const fullRefundText = screen.getByText(/Full refund/i);
    const noRefundText = screen.getByText(/No refund/i);

    expect(fullRefundText).toBeInTheDocument();
    expect(noRefundText).toBeInTheDocument();
  });

  test("renders the timeline with 'Today', 'Nov 4', and 'Check-in' labels", () => {
    render(<Cancellation />);

    // Check if the timeline labels are displayed correctly
    const todayLabel = screen.getByText(/Today/i);
    const nov4Label = screen.getByText(/Nov 4/i);
    const checkinLabel = screen.getByText(/Check-in/i);

    expect(todayLabel).toBeInTheDocument();
    expect(nov4Label).toBeInTheDocument();
    expect(checkinLabel).toBeInTheDocument();
  });

  test("renders the full refund section with correct date and details", () => {
    render(<Cancellation />);

    // Check if the full refund section has the correct text
    const fullRefundText = screen.getByText(/Cancel your reservation before Nov 4 at 11:59 PM/i);
    expect(fullRefundText).toBeInTheDocument();

    // Check if the section for "Before Nov 4" is displayed
    const beforeDate = screen.getByText(/Nov 4/i);
    expect(beforeDate).toBeInTheDocument();
  });

  test("renders the no refund section with correct date and details", () => {
    render(<Cancellation />);

    // Check if the no refund section has the correct text
    const noRefundText = screen.getByText(/After that, you won't get a refund/i);
    expect(noRefundText).toBeInTheDocument();

    // Check if the section for "After Nov 4" is displayed
    const afterDate = screen.getByText(/Nov 4/i);
    expect(afterDate).toBeInTheDocument();
  });

  test("renders the cancellation timeline with correct points", () => {
    render(<Cancellation />);

    // Check if the timeline points are rendered correctly (e.g., blue and white circles)
    const points = screen.getAllByRole("img");
    expect(points.length).toBe(3); // Assuming there are 3 points in the timeline
  });
});
