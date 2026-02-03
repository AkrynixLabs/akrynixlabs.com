import Navigation from "./Navigation";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Navigation />
            <main className="max-w-6xl mx-auto px-6 py-20">
                {children}
            </main>
        </>
    );
}