export default function ReportingLayout({
    children,
    numbersum,
}: {
    children: React.ReactNode;
    numbersum: React.ReactNode;
}) {
    return (
        <div className="bg-muted rounded-lg h-[calc(100vh-5.3rem)] mx-3 my-2.5 p-6 overflow-y-auto">
            {children}
            {numbersum}
        </div>
    );
}
