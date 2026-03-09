const BASE_URL = 'https://albostechnologies.com';

export function constructMetadata({ title, description, path, ogImage }) {
  return {
    title,
    description,
    alternates: { canonical: `${BASE_URL}${path}` },
    openGraph: {
      title,
      description,
      url: `${BASE_URL}${path}`,
      images: [{ url: ogImage || '/og-image.jpg', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage || '/og-image.jpg'],
    },
  };
}
