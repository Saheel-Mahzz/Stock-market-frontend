import React from "react";
import { getCompanies } from "./api/getCompanies";

export default async function Companies() {
  const response = await getCompanies();
  const companies = response?.data || [];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Stock Market Companies</h1>
      {companies.map((item: any) => (
        <div key={item.id} className="border p-4 mb-2 rounded shadow-sm">
          <h2 className="font-semibold">{item.name}</h2>
          <p className="text-sm text-gray-600">{item.symbol}</p>
        </div>
      ))}
    </div>
  );
}
