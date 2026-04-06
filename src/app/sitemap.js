export default function sitemap() {
  const currentDate = new Date();
  const formattedDate = currentDate.toISOString();

  const baseUrl = "https://www.leatherssc.org";

  const routes = [
    {
      url: `${baseUrl}/`,
      lastModified: formattedDate,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/who-we-are`,
      lastModified: formattedDate,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/what-we-do`,
      lastModified: formattedDate,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/courses`,
      lastModified: formattedDate,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/partners`,
      lastModified: formattedDate,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/media`,
      lastModified: formattedDate,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/job-post`,
      lastModified: formattedDate,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/training-map`,
      lastModified: formattedDate,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/who-we-are/initiatives`,
      lastModified: formattedDate,
      priority: 0.64,
    },
    {
      url: `${baseUrl}/partners/affiliation`,
      lastModified: formattedDate,
      priority: 0.64,
    },
  ];

  return routes;
}
