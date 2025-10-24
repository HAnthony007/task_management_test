export default function ReportingLayout({
    children,
    numbersum,
    kpi,
    task,
}: {
    children: React.ReactNode;
    numbersum: React.ReactNode;
    kpi: React.ReactNode;
    task: React.ReactNode;
}) {
    return (
        <div className="bg-muted rounded-lg h-[calc(100vh-5.3rem)] mx-3 my-2.5 p-6 overflow-y-auto">
            {children}
            {numbersum}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="min-w-0">{kpi}</div>
                <div className="min-w-0">{task}</div>
            </div>
        </div>
    );
}
