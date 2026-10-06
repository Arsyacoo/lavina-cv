import Site from "@/components/Site";
import { pageMetadata } from "../../shell";

export const metadata = pageMetadata("id");

export default function Home() {
    return <Site lang="id" />;
}
