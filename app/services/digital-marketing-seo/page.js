import { constructMetadata } from "@/lib/seo";
import ClientPage from "./ClientPage";

export const metadata = constructMetadata({
  title: "Digital Marketing Seo | Albos Technologies",
  description: "Professional Digital Marketing Seo services by Albos Technologies. Tailored software solutions to scale your business.",
  path: "/services/digital-marketing-seo",
});

export default function Page() {
  return <ClientPage />;
}
