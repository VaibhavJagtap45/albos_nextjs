import { constructMetadata } from "@/lib/seo";
import ClientPage from "./ClientPage";

export const metadata = constructMetadata({
  title: "Mobile Game Development Company | Albos Technologies",
  description: "Professional Mobile Game Development Company services by Albos Technologies. Tailored software solutions to scale your business.",
  path: "/services/mobile-game-development-company",
});

export default function Page() {
  return <ClientPage />;
}
