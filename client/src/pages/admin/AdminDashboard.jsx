import React from "react";

const sidebarItems = [
    { name: "Dashboard", icon: "📊" },
    { name: "Users", icon: "👥" },
    { name: "Trips", icon: "🗺️" },
    { name: "Bookings", icon: "📅" },
    { name: "Settings", icon: "⚙️" },
];

export default function AdminDashboard() {
    return (
        <div className="flex min-h-screen bg-[#f4f6fb]">
            {/* Sidebar */}
            <aside className="w-60 bg-gradient-to-br from-[#4f8cff] to-[#6ed6ff] text-white flex flex-col p-8 shadow-lg">
                <div className="font-bold text-2xl mb-8 tracking-wide">
                    Trip4You Admin
                </div>
                <nav>
                    {sidebarItems.map((item) => (
                        <div
                            key={item.name}
                            className="flex items-center gap-4 px-2 py-3 rounded-lg cursor-pointer mb-2 font-medium transition-colors hover:bg-white/15"
                        >
                            <span className="text-xl">{item.icon}</span>
                            {item.name}
                        </div>
                    ))}
                </nav>
                <div className="flex-grow" />
                <div className="text-sm opacity-70 mt-8">
                    &copy; {new Date().getFullYear()} Trip4You
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-10">
                <h1 className="text-3xl font-bold mb-6 text-[#2d3a4a]">
                    Welcome, Admin!
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Example dashboard cards */}
                    <DashboardCard icon="👥" title="Total Users" value="1,245" />
                    <DashboardCard icon="🗺️" title="Active Trips" value="87" />
                    <DashboardCard icon="📅" title="Bookings Today" value="34" />
                    <DashboardCard icon="💬" title="Support Tickets" value="5" />
                </div>
            </main>
        </div>
    );
}

function DashboardCard({ icon, title, value }) {
    return (
        <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-start min-h-[140px]">
            <div className="text-3xl mb-3">{icon}</div>
            <div className="text-base font-medium text-[#4f8cff] mb-2">{title}</div>
            <div className="text-2xl font-bold text-[#2d3a4a]">{value}</div>
        </div>
    );
}
