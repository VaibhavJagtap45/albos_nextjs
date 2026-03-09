import { constructMetadata } from "@/lib/seo";
import ClientPage from "./ClientPage";

export const metadata = constructMetadata({
  title: "Web Hosting Services | Albos Technologies",
  description: "Professional Web Hosting Services services by Albos Technologies. Tailored software solutions to scale your business.",
  path: "/services/web-hosting-services",
});

export default function Page() {
  return <ClientPage />;
}
