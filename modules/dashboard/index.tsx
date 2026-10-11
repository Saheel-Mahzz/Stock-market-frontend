import React from "react";
import { getNews } from "./api/getNews";

export default async function Dashboard() {
  const response = await getNews();
  console.log("repsonse news", response);
  const news = response?.data || [];
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Stock Market News</h1>
      {news.map((item: any) => (
        <div key={item.id} className="border p-4 mb-2 rounded shadow-sm">
          <h2 className="font-semibold">{item.title}</h2>
          <p className="text-sm text-gray-600">{item.body}</p>
          <span className="text-xs text-blue-500 font-medium">
            {item.source}
          </span>
        </div>
      ))}
    </div>
  );
}
