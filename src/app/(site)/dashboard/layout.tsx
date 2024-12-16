export const metadata = {
    title: "Dashboard",
    description: "Panel"
}

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <h3>Dashboard Header</h3>
            <br />
            {children}
        </>
    );
}
