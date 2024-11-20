import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import test, { describe } from 'node:test';
import Header from '@/components/Home/Header';

describe('Header Component', () => {
  test('renders navigation links and region selector button', () => {
    render(<Header />);

    // Check for navigation links
    expect(screen.getByText(/Trip Boards/i)).toBeInTheDocument();
    expect(screen.getByText(/List your property/i)).toBeInTheDocument();
    expect(screen.getByText(/Help/i)).toBeInTheDocument();
    expect(screen.getByText(/My trips/i)).toBeInTheDocument();
    expect(screen.getByText(/Sign in/i)).toBeInTheDocument();

    // Check for region selector button
    expect(screen.getByText(/United States/i)).toBeInTheDocument();
  });

  test('opens modal when region selector button is clicked', () => {
    render(<Header />);

    // Click region selector button
    const regionButton = screen.getByText(/United States/i);
    fireEvent.click(regionButton);

    // Modal should be visible
    expect(screen.getByText(/Display Settings/i)).toBeInTheDocument();
    expect(screen.getByText(/Changing your region could change your rewards program/i)).toBeInTheDocument();
  });

  test('closes modal when close button is clicked', () => {
    render(<Header />);

    // Open modal
    fireEvent.click(screen.getByText(/United States/i));

    // Close modal
    fireEvent.click(screen.getByText(/×/i));

    // Modal should not be in the document
    expect(screen.queryByText(/Display Settings/i)).not.toBeInTheDocument();
  });

  test('updates region and currency on selection', async () => {
    render(<Header />);

    // Open modal
    fireEvent.click(screen.getByText(/United States/i));

    // Change region to "Bangladesh"
    const regionDropdown = screen.getByLabelText(/Region/i);
    userEvent.selectOptions(regionDropdown, ['Bangladesh']);

    // Verify the selected region
    expect(screen.getByDisplayValue('Bangladesh')).toBeInTheDocument();

    // Verify the currency changes
    const currencyInput = screen.getByLabelText(/Currency/i);
    expect(currencyInput).toHaveValue('BDT');
  });

  test('saves changes and closes modal when Save button is clicked', () => {
    render(<Header />);

    // Open modal
    fireEvent.click(screen.getByText(/United States/i));

    // Click save button
    fireEvent.click(screen.getByText(/Save/i));

    // Modal should not be in the document
    expect(screen.queryByText(/Display Settings/i)).not.toBeInTheDocument();
  });
});
function expect(arg0: any) {
    throw new Error('Function not implemented.');
}

