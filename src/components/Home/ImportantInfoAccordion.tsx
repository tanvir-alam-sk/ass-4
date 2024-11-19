import React from "react";

interface InfoItem {
  description: string;
}

export default function ImportantInfoAccordion() {
  return (
    <div className="p-6 grid md:grid-cols-3 bg-white rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800">
        Important information
      </h2>
      <div className="col-span-2">
        <h3 className="mt-4 text-xl font-semibold text-gray-700">
          You need to know
        </h3>
        <ul className="mt-2 space-y-2 text-gray-900">
          <li>
            Extra-person charges may apply and vary depending on property
            policy.
          </li>
          <li>
            Government-issued photo identification and a credit card, debit
            card, or cash deposit may be required at check-in for incidental
            charges.
          </li>
          <li>
            Special requests are subject to availability upon check-in and may
            incur additional charges; special requests cannot be guaranteed.
          </li>
          <li>Onsite parties or group events are strictly prohibited.</li>
          <li>
            Host has indicated there is a carbon monoxide detector on the
            property.
          </li>
          <li>Host has indicated there is a smoke detector on the property.</li>
          <li>
            Safety features at this property include a fire extinguisher and a
            first aid kit.
          </li>
        </ul>
      </div>
    </div>
  );
}
