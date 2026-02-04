import type { MetadataRoute } from "next";

export default function sitemap():MetadataRoute.Sitemap {
    return [
        { url: "https://akrynixlabs.com", lastModified: new Date() },
        { url: "https://akrynixlabs.com/contact", lastModified: new Date() },
    ];
}