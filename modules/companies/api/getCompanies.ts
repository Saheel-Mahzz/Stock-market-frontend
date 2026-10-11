import { cax } from "@/lib/axios";

export async function getCompanies() {
  try {
    const response = await cax.get("/companies/");
    return response;
  } catch (err) {
    throw err;
  }
}
