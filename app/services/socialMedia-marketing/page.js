import { constructMetadata } from "@/lib/seo";
import ClientPage from "./ClientPage";

export const metadata = constructMetadata({
  title: "SocialMedia Marketing | Albos Technologies",
  description: "Professional SocialMedia Marketing services by Albos Technologies. Tailored software solutions to scale your business.",
  path: "/services/socialMedia-marketing",
});

export default function Page() {
  return <ClientPage />;
}
