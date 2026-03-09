import { constructMetadata } from "@/lib/seo";
import ClientPage from "./ClientPage";

export const metadata = constructMetadata({
  title: "Api Development Services | Albos Technologies",
  description: "Professional Api Development Services services by Albos Technologies. Tailored software solutions to scale your business.",
  path: "/services/api-development-services",
});

export default function Page() {
  return <ClientPage />;
}
