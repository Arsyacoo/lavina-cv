import { Shell, viewport } from "../shell";

export { viewport };

export default function Layout({ children }: { children: React.ReactNode }) {
    return <Shell lang="id">{children}</Shell>;
}
