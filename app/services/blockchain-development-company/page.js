import { constructMetadata } from "@/lib/seo";
import ClientPage from "./ClientPage";

export const metadata = constructMetadata({
  title: "Blockchain Development Company | Albos Technologies",
  description: "Professional Blockchain Development Company services by Albos Technologies. Tailored software solutions to scale your business.",
  path: "/services/blockchain-development-company",
});

export default function Page() {
  return <ClientPage />;
}
