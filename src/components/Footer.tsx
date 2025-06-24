"use client";

import type React from "react";

import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";

export default function Footer() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup

    toast.success("Thank you for subscribing to our newsletter!");
  };

  return (
    <footer className="bg-red-800 text-white lg:mt-10 mt-5">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Restaurant Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold uppercase tracking-wide">
              Restaurant
            </h3>
            <p className="text-sm text-red-100">
              Subscribe our newsletter and get discount 25% off
            </p>
            <form onSubmit={handleSubmit} className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 text-black text-sm rounded-l border-none outline-none bg-white"
                required
              />
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 px-3 py-2 rounded-r transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
            </form>
            <div className="flex space-x-3">
              <Link
                href="/"
                className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </Link>
              <Link
                href="/"
                className="w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-900 transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </Link>
              <Link
                href="/"
                className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </Link>
              <Link
                href="/"
                className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Contact Us Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold uppercase tracking-wide">
              Contact Us
            </h3>
            <div className="space-y-2 text-sm text-red-100">
              <p>1517 W. Gray St. Utica Pennsylvania 57867</p>
              <p>(401) 555-0103</p>
              <p>kodyfoods@rhoncus.co</p>
              <p>Sun - Sat / 10:00 AM - 8:00 PM</p>
            </div>
          </div>

          {/* Links Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold uppercase tracking-wide">Links</h3>
            <ul className="space-y-2 text-sm text-red-100">
              <li>
                <Link
                href="/"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                href="/"
                  className="hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                href="/"
                  className="hover:text-white transition-colors"
                >
                  Our Menu
                </Link>
              </li>
              <li>
                <Link
                href="/"
                  className="hover:text-white transition-colors"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                href="/"
                  className="hover:text-white transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Instagram Gallery Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold uppercase tracking-wide">
              Instagram Gallery
            </h3>
            <div className="grid grid-cols-3 gap-2">
              <Image
                src={`/1.png`}
                alt={`Food`}
                width={80}
                height={80}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 cursor-pointer"
                sizes="(max-width: 768px) 25vw, (max-width: 1200px) 20vw, 15vw"
              />
              <Image
                src={`/2.png`}
                alt={`Food`}
                width={80}
                height={80}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 cursor-pointer"
                sizes="(max-width: 768px) 25vw, (max-width: 1200px) 20vw, 15vw"
              />
              <Image
                src={`/3.png`}
                alt={`Food`}
                width={80}
                height={80}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 cursor-pointer"
                sizes="(max-width: 768px) 25vw, (max-width: 1200px) 20vw, 15vw"
              />
              <Image
                src={`/4.png`}
                alt={`Food`}
                width={80}
                height={80}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 cursor-pointer"
                sizes="(max-width: 768px) 25vw, (max-width: 1200px) 20vw, 15vw"
              />
              <Image
                src={`/5.png`}
                alt={`Food`}
                width={80}
                height={80}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 cursor-pointer"
                sizes="(max-width: 768px) 25vw, (max-width: 1200px) 20vw, 15vw"
              />
              <Image
                src={`/6.png`}
                alt={`Food`}
                width={80}
                height={80}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 cursor-pointer"
                sizes="(max-width: 768px) 25vw, (max-width: 1200px) 20vw, 15vw"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-red-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-red-100 space-y-2 md:space-y-0">
            <p>Copyright © 2024. All rights reserved</p>
            <div className="flex space-x-6">
              <Link
                href="/"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/"
                className="hover:text-white transition-colors"
              >
                Term of Use
              </Link>
              <Link
                href="/"
                className="hover:text-white transition-colors"
              >
                Partner
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
