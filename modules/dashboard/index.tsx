import React from "react";
import { getNews } from "./api/getNews";

export default async function Dashboard() {
  const response = await getNews();
  console.log("repsonse news", response);
  return <div>I am dashboard</div>;
}
