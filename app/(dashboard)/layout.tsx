import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-[#fff7ed]">
      <Sidebar />

      <div className="flex-1">
        <Topbar />

        <main className="p-6 xl:p-8">{children}</main>
      </div>
    </div>
  );
}