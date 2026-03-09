import { constructMetadata } from "@/lib/seo";
import ClientPage from "./ClientPage";

export const metadata = constructMetadata({
  title: "Android App Development Services | Albos Technologies",
  description: "Professional Android App Development Services services by Albos Technologies. Tailored software solutions to scale your business.",
  path: "/services/android-app-development-services",
});

export default function Page() {
  return <ClientPage />;
}
