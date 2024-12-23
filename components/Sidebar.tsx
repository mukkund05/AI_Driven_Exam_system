"use client";

import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-100 h-screen p-5 border-r flex flex-col items-center">
      <div className="text-center mb-8">
        <img
          src="/assets/profile-icon.svg"
          alt="Profile Icon"
          className="w-16 h-16 rounded-full mx-auto mb-2"
        />
        <p className="font-bold text-lg">John Doe</p>
      </div>
      <nav>
        <ul className="space-y-4">
          <li>
            <Link href="/dashboard" className="text-blue-600 font-semibold">
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/test" className="text-blue-600 font-semibold">
              AI Suggested Tests
            </Link>
          </li>
          <li>
            <Link href="/test" className="text-blue-600 font-semibold">
              Prerequisite Test
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
