import React from "react";
import { Bell, CreditCard, BookOpen, FileText } from "lucide-react";
import Logo from "../assets/logo.png"; // replace with your logo path

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r flex flex-col">
        {/* Logo */}
        <div className="flex items-center gap-2 p-4 border-b">
          <img src={Logo} alt="Logo" className="w-10 h-10" />
          <div>
            <h1 className="font-bold text-lg">NOVA</h1>
            <p className="text-sm text-gray-500">Health Consultancy</p>
          </div>
        </div>

        {/* Menu */}
        <nav className="flex-1 p-4 space-y-2">
          <a className="block px-3 py-2 rounded bg-gray-100 font-medium">
            Dashboard
          </a>
          <a className="block px-3 py-2 rounded hover:bg-gray-100">
            Study Materials
          </a>
          <a className="block px-3 py-2 rounded hover:bg-gray-100">Articles</a>
          <a className="block px-3 py-2 rounded hover:bg-gray-100">
            Exam Questions
          </a>

          <p className="text-xs text-gray-400 mt-4 uppercase">Account</p>
          <a className="block px-3 py-2 rounded hover:bg-gray-100">
            Subscription & Payment
          </a>
          <a className="block px-3 py-2 rounded hover:bg-gray-100">
            Profile Settings
          </a>
        </nav>

        {/* Support */}
        <div className="p-4 border-t text-sm">
          <button className="w-full border rounded p-2">Support</button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">User Dashboard</h2>
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Search..."
              className="border rounded px-3 py-1"
            />
            <Bell className="w-5 h-5 text-gray-500" />
            <img
              src="https://i.pravatar.cc/40"
              alt="User"
              className="w-8 h-8 rounded-full"
            />
          </div>
        </div>

        {/* Top Cards */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg border">
            <p className="text-sm text-gray-500">Current Subscription</p>
            <h3 className="font-bold text-lg">Pro Annual</h3>
            <span className="inline-block mt-2 px-2 py-1 text-xs bg-green-100 text-green-700 rounded">
              Active
            </span>
          </div>
          <div className="bg-white p-4 rounded-lg border">
            <p className="text-sm text-gray-500">Next Payment</p>
            <h3 className="font-bold text-lg">Oct 15, 2025</h3>
            <button className="mt-2 text-sm text-blue-600">Update Card</button>
          </div>
          <div className="bg-white p-4 rounded-lg border">
            <p className="text-sm text-gray-500">Materials Accessed</p>
            <h3 className="font-bold text-lg">12 / 20</h3>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div className="bg-black h-2 rounded-full w-3/5"></div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg border">
            <p className="text-sm text-gray-500">Articles Read</p>
            <h3 className="font-bold text-lg">8 this month</h3>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white p-4 rounded-lg border mb-6">
          <h3 className="font-semibold mb-4">Recent Activity</h3>
          {[
            { title: "Healthcare Basics - Module 3", type: "Material", time: "2h ago" },
            { title: "Policy Shifts in Public Health", type: "Article", time: "1d ago" },
            { title: "Patient Safety Checklist", type: "Material", time: "3d ago" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center border-t py-3 first:border-t-0"
            >
              <div>
                <p className="font-medium">{item.title}</p>
                <p className="text-sm text-gray-500">
                  {item.type} • {item.time}
                </p>
              </div>
              <button className="text-blue-600 text-sm">Open</button>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button className="bg-black text-white px-4 py-2 rounded">Upgrade Plan</button>
          <button className="bg-white border px-4 py-2 rounded">
            Browse New Materials
          </button>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
