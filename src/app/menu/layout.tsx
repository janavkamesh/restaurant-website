import { Metadata } from 'next';
import { RESTAURANT_DATA } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Menu',
  description: 'Explore our authentic Chettinad and coastal Tamil menu, featuring our signature Kozhi Curry and Dindigul Biryani.',
  openGraph: {
    title: `Menu | ${RESTAURANT_DATA.name}`,
    description: 'Explore our authentic Chettinad and coastal Tamil menu, featuring our signature Kozhi Curry and Dindigul Biryani.',
  }
};

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
