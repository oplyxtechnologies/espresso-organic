"use client";

import Recharts from "@/components/Charts/Recharts";

export default function Page() {
  return (
    <div className="min-h-screen  max-w-7xl mx-auto">
      <main className="container mx-auto py-8 px-4">
        <div className=" rounded-lg  py-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Dashboard</h1>
          <p className="text-gray-600 mb-6">Welcome Admin!</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-300 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                Total Users
              </h3>
              <p className="text-3xl font-bold text-blue-600">1,234</p>
            </div>
            <div className="bg-green-300 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-green-900 mb-2">
                Revenue
              </h3>
              <p className="text-3xl font-bold text-green-600">$12,345</p>
            </div>
            <div className="bg-purple-300 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-purple-900 mb-2">
                Orders
              </h3>
              <p className="text-3xl font-bold text-purple-600">567</p>
            </div>
          </div>
        </div>
      </main>

      <Recharts />
    </div>
  );
}
