import Link from 'next/link';
import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex">
      <aside className="w-64 bg-gray-800 text-white p-6">
        <h2 className="text-2xl font-bold mb-8">Dashboard</h2>
        <nav>
          <ul>
            <li className="mb-4">
              <Link href="/" className="hover:text-gray-300">
                Home
              </Link>
            </li>
            <li className="mb-4">
              <Link href="/books" className="hover:text-gray-300">
                Books
              </Link>
            </li>
            <li className="mb-4">
              <Link href="/reading-list" className="hover:text-gray-300">
                Reading List
              </Link>
            </li>
            <li className="mb-4">
              <Link href="/debug/memory-leak" className="hover:text-gray-300">
                Debugging
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 bg-gray-100 p-8 text-gray-900">
        <header className="mb-8">
          <h1 className="text-3xl font-bold">Library Management Dashboard</h1>
        </header>
        <section>{children}</section>
      </main>
    </div>
  );
}
