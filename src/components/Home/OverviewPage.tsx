import React from "react";
import OverviewButton from "../utilitis/OverviewButton";

export default function OverviewPage() {
  return (
    <div className="w-full mt-10">
        <OverviewButton labels={['Overview', 'Amenities', 'Policies']}></OverviewButton>
    </div>
  );
}
