import { auth } from "@/lib/auth";
import HomeView from "@/modules/home/ui/views/home-view";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

async function Page() {
  const session = await auth.api.getSession({
    headers: await headers(), //deconstruction from header parameters
  });

  if (!session || !session.user) {
    redirect("/signin");
  }

  return <HomeView />;
}
export default Page;
