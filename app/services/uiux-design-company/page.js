import { constructMetadata } from "@/lib/seo";
import ClientPage from "./ClientPage";

export const metadata = constructMetadata({
  title: "Uiux Design Company | Albos Technologies",
  description: "Professional Uiux Design Company services by Albos Technologies. Tailored software solutions to scale your business.",
  path: "/services/uiux-design-company",
});

export default function Page() {
  return <ClientPage />;
}
