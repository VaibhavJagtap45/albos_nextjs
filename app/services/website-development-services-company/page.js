import { constructMetadata } from "@/lib/seo";
import ClientPage from "./ClientPage";

export const metadata = constructMetadata({
  title: "Website Development Services Company | Albos Technologies",
  description: "Professional Website Development Services Company services by Albos Technologies. Tailored software solutions to scale your business.",
  path: "/services/website-development-services-company",
});

export default function Page() {
  return <ClientPage />;
}
