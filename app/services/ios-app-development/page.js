import { constructMetadata } from "@/lib/seo";
import ClientPage from "./ClientPage";

export const metadata = constructMetadata({
  title: "Ios App Development | Albos Technologies",
  description: "Professional Ios App Development services by Albos Technologies. Tailored software solutions to scale your business.",
  path: "/services/ios-app-development",
});

export default function Page() {
  return <ClientPage />;
}
