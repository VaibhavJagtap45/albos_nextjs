import { constructMetadata } from "@/lib/seo";
import ClientPage from "./ClientPage";

export const metadata = constructMetadata({
  title: "Telecalling Support | Albos Technologies",
  description: "Professional Telecalling Support services by Albos Technologies. Tailored software solutions to scale your business.",
  path: "/services/telecalling-support",
});

export default function Page() {
  return <ClientPage />;
}
