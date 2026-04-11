import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Freshness',
  description: 'Experience pure, unadulterated freshness enclosed in a Fruboo can. Discover how we preserve nature\'s vitality.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
