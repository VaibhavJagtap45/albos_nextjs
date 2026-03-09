import { constructMetadata } from "@/lib/seo";
import ClientPage from "./ClientPage";

export const metadata = constructMetadata({
  title: "Erp Crm | Albos Technologies",
  description:
    "Professional Erp Crm services by Albos Technologies. Tailored software solutions to scale your business.",
  path: "/services/erp-crm-development",
});

export default function Page() {
  return <ClientPage />;
}
