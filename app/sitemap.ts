import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/siteConfig";

export const dynamic = "force-static";

const paths = ["/", "/about", "/projects", "/skills", "/contact"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return paths.map((path) => ({
    url: `${siteConfig.url}${path === "/" ? "" : path}`,
    lastModified,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
