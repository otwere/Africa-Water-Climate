"use client";

import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import { useEffect, useState } from "react";

export function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear()); // Set the year on the client side
  }, []);

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 font-poppins">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-water-blue-400 to-earth-green-400 bg-clip-text text-transparent">
              AfricaWater
            </h3>
            <p className="text-gray-400 mb-6">
              Empowering sustainable water resource management across Africa with comprehensive data and climate insights.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-water-blue-400 transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-water-blue-400 transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-water-blue-400 transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-water-blue-400 transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "About Us", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Research", href: "/research" },
                { name: "Data Access", href: "/data" },
                { name: "Partners", href: "/partners" },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-water-blue-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {[
                { name: "Documentation", href: "/docs" },
                { name: "API Access", href: "/api" },
                { name: "Case Studies", href: "/case-studies" },
                { name: "Publications", href: "/publications" },
                { name: "FAQ", href: "/faq" },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-water-blue-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-water-blue-400 flex-shrink-0" />
                <span className="text-gray-400">
                  123 Water Street, Nairobi, Kenya
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 h-5 w-5 text-water-blue-400 flex-shrink-0" />
                <span className="text-gray-400">+254 123 456 789</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-water-blue-400 flex-shrink-0" />
                <span className="text-gray-400">info@africawater.org</span>
              </li>
            </ul>
          </div>
        </div> {/* Closing the last <div> */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © {year || "Loading..."} AfricaWater. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
