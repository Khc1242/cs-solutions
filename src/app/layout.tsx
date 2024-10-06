// 'use client';
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Image from 'next/image';
import logo from './images/logo.ico';
import Link from 'next/link';
// import React, { useState } from 'react';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: 'CS-Solutions',
  description: 'Innovative software solutions for modern businesses',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const toggleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };

  return (
    <html lang="en">
      <body className="bg-white text-gray-800 min-h-screen flex flex-col">
        {/* Header */}
        {/* <header className="bg-gray-900 px-4 text-white fixed w-full z-50"> */}
        <header className="bg-white px-4 text-blue-600 font-semibold bg-opacity-75 fixed w-full z-50">
          <nav className="container mx-auto flex justify-between items-center py-4">
            {/* <div className="text-2xl font-bold">CS Solutions</div> */}
            {/* Website Icon */}
            <div className="flex items-center mr-3">
              <Image src={logo} alt="CS-Solutions" width={40} height={40} />
            </div>
            {/* Desktop Links */}
            <ul className="flex space-x-4">
              <li>
                <Link href="/" className="hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gray-300">
                  About
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-gray-300">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-300">
                  Contact
                </Link>
              </li>
            </ul>

            {/* Mobile Navigation */}
            {/* <div className="md:hidden">
              <button onClick={toggleMenu} className="text-white focus:outline-none">
                ☰
              </button>
            </div> */}
          </nav>

          {/* {isMenuOpen && (
            <div className="md:hidden bg-gray-700">
              <ul className="flex flex-col space-y-4 p-4">
                <li>
                  <Link href="/" className="hover:text-gray-300" onClick={toggleMenu}>Home</Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-gray-300" onClick={toggleMenu}>About</Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-gray-300" onClick={toggleMenu}>Services</Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-gray-300" onClick={toggleMenu}>Contact</Link>
                </li>
              </ul>
            </div>
          )} */}
        </header>

        {/* Main Content */}
        <main className="px-4 mx-auto flex-grow mt-20">{children}</main>
        {/* <main className="container mx-auto flex-grow mt-20 mb-5 px-4 sm:px-0">{children}</main> */}

        {/* Footer */}
        <footer className="text-white p-5 mt-auto flex justify-center">
          <div className="bg-blue-600 border-solid border-blue-600 rounded-full max-w-max px-2 py-1 text-sm">
            &copy; {new Date().getFullYear()} CS-Solutions Sdn Bhd. All rights reserved.
          </div>
        </footer>
      </body >
    </html >
  );
}
