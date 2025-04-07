import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../assets/images/logo.png';

export default function NavBar({ className }: { className?: string }) {
  return (
    <nav className={`flex items-center justify-between text-white py-4 px-8 ${className}`}>
      {/* Logo Section */}
      <div className="flex items-center">
        <a className="flex items-center">
          <Image src={logo} width={50} objectPosition="relative" objectFit="contain" alt="Amplify Logo" />
          <span className="hidden md:block text-2xl font-bold ml-2">Amplofi.</span>
        </a>
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-6">
        <Link
          href="/"
          className="hover:bg-purple-700 hover:text-white rounded-md px-4 py-2 text-lg font-medium"
        >
          Home
        </Link>
        <Link
          href="/curator"
          className="hover:bg-purple-700 hover:text-white rounded-md px-4 py-2 text-lg font-medium"
        >
          Curator
        </Link>
        <Link
          href="/profile"
          className="hover:bg-purple-700 hover:text-white rounded-md px-4 py-2 text-lg font-medium"
        >
          Profile
        </Link>
      </div>
    </nav>
  );
}