import { constructMetadata } from "@/lib/seo";
import ClientPage from "./ClientPage";

export const metadata = constructMetadata({
  title: "Iot Application Development Services | Albos Technologies",
  description: "Professional Iot Application Development Services services by Albos Technologies. Tailored software solutions to scale your business.",
  path: "/services/iot-application-development-services",
});

export default function Page() {
  return <ClientPage />;
}
