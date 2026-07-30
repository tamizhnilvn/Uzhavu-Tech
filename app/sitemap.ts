import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://uzhavu.tech";

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
    { url: `${baseUrl}/solutions`, lastModified: new Date() },
    { url: `${baseUrl}/technology`, lastModified: new Date() },
    { url: `${baseUrl}/impact`, lastModified: new Date() },
    { url: `${baseUrl}/vision`, lastModified: new Date() },
    { url: `${baseUrl}/contact`, lastModified: new Date() },
  ];
}