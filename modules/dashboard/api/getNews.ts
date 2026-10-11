import { cax } from "@/lib/axios";

export async function getNews() {
  try {
    const response = await cax.get("/news/");
    return response.data;
  } catch (err) {
    throw err;
  }
}
