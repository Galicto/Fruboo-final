import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Process',
  description: 'From harvest to can. Learn about our unique methodology that locks in flavor and nutritional value.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
