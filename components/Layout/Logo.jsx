import { LightningBoltIcon } from '@heroicons/react/outline';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/">
      <a className="flex items-center space-x-1 text-teal-600">
        <LightningBoltIcon className="h-8 w-8 flex-shrink-0 mr-3" />
        <span className="font-bold text-3xl font-sans tracking-tight whitespace-nowrap">
          Hacker News 2.0
        </span>
      </a>
    </Link>
  );
};

export default Logo;
