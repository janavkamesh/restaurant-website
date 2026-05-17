import { Metadata } from 'next';
import { RESTAURANT_DATA } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Reserve a Table',
  description: 'Book your table at Annamalai Kitchen. Experience authentic Tamil Nadu cuisine in T. Nagar, Chennai.',
  openGraph: {
    title: `Reserve a Table | ${RESTAURANT_DATA.name}`,
    description: 'Book your table at Annamalai Kitchen. Experience authentic Tamil Nadu cuisine in T. Nagar, Chennai.',
  }
};

export default function ReserveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
