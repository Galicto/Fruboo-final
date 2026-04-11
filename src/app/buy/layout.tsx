import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Buy Fruboo',
  description: 'Order your favorite Fruboo beverages online. Choose from our signature 350ml and 500ml cans for ultimate refreshment.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
