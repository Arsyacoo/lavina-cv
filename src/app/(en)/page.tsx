import Site from "@/components/Site";
import { pageMetadata } from "../shell";

export const metadata = pageMetadata("en");

export default function Home() {
    return <Site lang="en" />;
}
