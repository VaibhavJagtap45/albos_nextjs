export default function sitemap() {
  const baseUrl = "https://albostechnologies.com";
  const now = new Date();

  const routes = [
    { url: baseUrl, priority: 1.0, changeFrequency: "weekly" },
    { url: `${baseUrl}/about`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${baseUrl}/services`, priority: 0.9, changeFrequency: "weekly" },
    { url: `${baseUrl}/portfolio`, priority: 0.8, changeFrequency: "weekly" },
    { url: `${baseUrl}/contact`, priority: 0.9, changeFrequency: "monthly" },
    {
      url: `${baseUrl}/services/website-development-services-company`,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services/android-app-development-services`,
      priority: 0.85,
    },
    { url: `${baseUrl}/services/ios-app-development`, priority: 0.85 },
    { url: `${baseUrl}/services/api-development-services`, priority: 0.8 },
    {
      url: `${baseUrl}/services/blockchain-development-company`,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/mobile-game-development-company`,
      priority: 0.8,
    },
    { url: `${baseUrl}/services/web-hosting-services`, priority: 0.75 },
    { url: `${baseUrl}/services/socialMedia-marketing`, priority: 0.8 },
    { url: `${baseUrl}/services/telecalling-support`, priority: 0.75 },
    { url: `${baseUrl}/services/uiux-design-company`, priority: 0.8 },
    { url: `${baseUrl}/services/digital-marketing-seo`, priority: 0.85 },
    { url: `${baseUrl}/services/erp-crm-development`, priority: 0.8 },
    {
      url: `${baseUrl}/services/iot-application-development-services`,
      priority: 0.8,
    },
  ];

  return routes.map((route) => ({
    url: route.url,
    lastModified: now,
    changeFrequency: route.changeFrequency || "monthly",
    priority: route.priority,
  }));
}
