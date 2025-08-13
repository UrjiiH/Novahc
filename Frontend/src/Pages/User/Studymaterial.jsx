import React from 'react'
import { Search, Download } from "lucide-react";
import Logo from "../../assets/logo.png";
import {Link} from 'react-router-dom'
import Topbar from '../../Components/Topbar';
import Sidebar from '../../Components/Sidebar';


const Studymaterial = () => {
  const materials = [
  { title: "Policy Foundations", category: "Policy", type: "PDF" },
  { title: "Clinic Safety Walkthrough", category: "Safety", type: "Video" },
  { title: "Ethics Overview Slides", category: "Ethics", type: "PPT" },
  { title: "Community Health Models", category: "Policy", type: "PDF" },
  { title: "Medication Safety", category: "Safety", type: "PDF" },
  { title: "Ethical Dilemmas 101", category: "Ethics", type: "Video" },
];

  return (
     <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
        <Sidebar/>

      {/* Main Content */}
      <main className="flex-1 px-4 ">
        {/* Top Bar */}
        <Topbar/>

        {/* Search and Filters */}
        <div className="bg-white rounded shadow p-4 mb-6">
          <h3 className="font-semibold mb-2">Study Materials</h3>
          <p className="text-sm text-gray-500 mb-3">
            Search and filter by category or type
          </p>
          <div className="flex space-x-3">
            <div className="flex items-center border rounded px-3 py-1 flex-1">
              <Search className="w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search materials..."
                className="ml-2 outline-none flex-1 text-sm"
              />
            </div>
            <select className="border rounded px-2 text-sm">
              <option>All Categories</option>
            </select>
            <select className="border rounded px-2 text-sm">
              <option>All Types</option>
            </select>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-4">
          {materials.map((item, index) => (
            <div key={index} className="bg-white rounded shadow overflow-hidden">
              <div className="bg-blue-200 h-32"></div>
              <div className="p-3">
                <h4 className="font-semibold text-sm">{item.title}</h4>
                <div className="flex space-x-2 mt-1 text-xs text-gray-500">
                  <span className="bg-gray-100 px-2 py-0.5 rounded">{item.category}</span>
                  <span className="bg-gray-100 px-2 py-0.5 rounded">{item.type}</span>
                </div>
                <div className="flex mt-3 space-x-2">
                  <button className="bg-black text-white px-3 py-1 text-xs rounded">
                    Open
                  </button>
                  <button className="border px-3 py-1 text-xs rounded flex items-center">
                    <Download className="w-3 h-3 mr-1" /> Download
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default Studymaterial