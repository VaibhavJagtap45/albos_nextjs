const fs = require('fs');
const path = require('path');

const srcDir = 'c:/Users/kdnya/OneDrive/Desktop/Albos Technologies/In house projects/Albos company site/src/components/services';
const destDir = 'c:/Users/kdnya/OneDrive/Desktop/Albos Technologies/In house projects/albos-nextjs/app/services';

const formatTitle = (str) => {
  return str.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};

const mappings = {
  "WebDevelopement.jsx": "website-development-services-company",
  "AppDevelopement.jsx": "android-app-development-services",
  "IosDevelopment.jsx": "ios-app-development",
  "ApiDevlopment.jsx": "api-development-services",
  "BlockchainAndWeb3.jsx": "blockchain-development-company",
  "GameDevelopment.jsx": "mobile-game-development-company",
  "HostingPage.jsx": "web-hosting-services",
  "SocialMediaMarketing.jsx": "socialMedia-marketing",
  "TelecallingAndSupportServices.jsx": "telecalling-support",
  "UIUXPage.jsx": "uiux-design-company",
  "DigitalMarketing.jsx": "digital-marketing-seo",
  "ErpCrmSystem.jsx": "erp-crm",
  "IotDevelopmentPage.jsx": "iot-application-development-services"
};

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

for (const [viteFile, slug] of Object.entries(mappings)) {
  const sourcePath = path.join(srcDir, viteFile);
  const targetRouteDir = path.join(destDir, slug);
  const clientPagePath = path.join(targetRouteDir, 'ClientPage.jsx');
  const serverPagePath = path.join(targetRouteDir, 'page.js');

  if (!fs.existsSync(targetRouteDir)) {
    fs.mkdirSync(targetRouteDir, { recursive: true });
  }

  // Read Vite file content
  let content = fs.readFileSync(sourcePath, 'utf8');

  // Fix imports
  content = content.replace(/import\s+\{\s*Link\s*\}\s+from\s+["']react-router-dom["']/g, 'import Link from "next/link"');
  
  // Fix asset imports
  content = content.replace(/from\s+["'](\.\.\/)*assets\/([^"']+)["']/g, 'from "@/public/images/$2"');
  
  // Fix UI component imports (assuming they moved to components/ui or components/sections)
  content = content.replace(/from\s+["'](\.\.\/)*ui\/([^"']+)["']/g, 'from "@/components/ui/$2"');
  content = content.replace(/from\s+["'](\.\.\/)*Contact["']/g, 'from "@/components/sections/Contact"');
  content = content.replace(/from\s+["'](\.\.\/)*Process["']/g, 'from "@/components/sections/Process"');
  content = content.replace(/from\s+["'](\.\.\/)*Techmarquee["']/g, 'from "@/components/sections/TechMarquee"');
  content = content.replace(/from\s+["'](\.\.\/)*TrustBar["']/g, 'from "@/components/sections/TrustBar"');
  content = content.replace(/from\s+["'](\.\.\/)*Services["']/g, 'from "@/components/sections/Services"');
  content = content.replace(/from\s+["'](\.\.\/)*Portfolio["']/g, 'from "@/components/sections/Portfolio"');
  content = content.replace(/from\s+["'](\.\.\/)*Whyus["']/g, 'from "@/components/sections/WhyUs"');
  content = content.replace(/from\s+["'](\.\.\/)*Testimonials["']/g, 'from "@/components/sections/Testimonials"');

  // Convert <img> to <Image>
  content = content.replace(/<img\s/g, '<Image ');
  // If `<Image src="..."` is a string literal, inject basic width/height (to appease Next.js)
  // Static imports do not need this, but we'll try to find string srcs and inject it safely.
  content = content.replace(/<Image\s+([^>]*?)src=(["'][^"']+["'])([^>]*?)>/g, (match, before, src, after) => {
     if (!before.includes('width=') && !after.includes('width=')) {
        return `<Image ${before}src=${src} width={800} height={600}${after}>`;
     }
     return match;
  });

  // Ensure "use client" and 'next/image' import
  let finalClientContent = `"use client";\nimport Image from "next/image";\n\n` + content;
  fs.writeFileSync(clientPagePath, finalClientContent);

  // Write Server Component with SEO Metadata
  const cleanTitle = formatTitle(slug);
  const serverContent = `import { constructMetadata } from "@/lib/seo";
import ClientPage from "./ClientPage";

export const metadata = constructMetadata({
  title: "${cleanTitle} | Albos Technologies",
  description: "Professional ${cleanTitle} services by Albos Technologies. Tailored software solutions to scale your business.",
  path: "/services/${slug}",
});

export default function Page() {
  return <ClientPage />;
}
`;
  fs.writeFileSync(serverPagePath, serverContent);
  
  console.log(`Migrated ${viteFile} to /services/${slug}`);
}

console.log('Migration of 13 service pages completed successfully.');
