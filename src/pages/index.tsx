import Layout from '@/components/Layout';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
      <div>
        <p className="text-lg">
          Welcome to the Library Dashboard. Use the sidebar to navigate.
        </p>
        <Link href="/books" className="text-blue-500 underline">
          Go to Books List
        </Link>
      </div>
    </Layout>
  );
}
