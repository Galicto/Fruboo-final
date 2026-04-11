import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ingredients',
  description: 'Nothing artificial, just pure nature. Explore the premium, responsibly sourced ingredients inside every Fruboo.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
