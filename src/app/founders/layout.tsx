import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Founders',
  description: 'Meet the visionaries behind Fruboo. A team dedicated to redefining the premium beverage experience.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
