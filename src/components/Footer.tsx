import { Twitter, Linkedin, Github, Facebook } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import LogoLight from "../../public/logo-light.png";
import LogoDark from "../../public/logo-dark.png";

export function Footer() {
  return (
    <footer className=" border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link
              href="/"
              className="flex items-center hover:opacity-90 transition-opacity"
            >
              {/* Logo Image for Light Mode */}
              <div className="block dark:hidden">
                <Image
                  src={LogoLight}
                  alt="Kademia Logo"
                  width={160}
                  height={50}
                  className="w-40 h-20 object-contain"
                />
              </div>

              {/* Logo Image for Dark Mode */}
              <div className="hidden dark:block">
                <Image
                  src={LogoDark}
                  alt="Kademia Logo"
                  width={160}
                  height={50}
                  className="w-40 h-20 object-contain"
                />
              </div>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
              Empowering businesses through technology, automation and digital
              transformation.
            </p>
            <div className="flex space-x-4 pt-2">
              {[
                { icon: Twitter, label: "Twitter" },
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Github, label: "GitHub" },
                { icon: Facebook, label: "Facebook" },
              ].map(({ icon: Icon, label }) => (
                <Link
                  key={label}
                  href="#"
                  className="text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors p-2 rounded-lg hover:bg-violet-50 dark:hover:bg-violet-900/20"
                  aria-label={label}
                >
                  <Icon className="h-6 w-6" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["Home", "Solutions", "Blog", "About"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 text-base transition-colors block py-1"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-base font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-6">
              Resources
            </h4>
            <ul className="space-y-3">
              {["Documentation", "Guides", "API Status", "Help Center"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href={`/${item.toLowerCase().replace(" ", "-")}`}
                      className="text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 text-base transition-colors block py-1"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-base font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-6">
              Newsletter
            </h4>
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
                Get the latest tech insights delivered to your inbox.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-grow px-4 py-3 text-base rounded-l-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-violet-500"
                />
                <button className="px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white text-base rounded-r-lg transition-colors font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-100 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 dark:text-gray-400 text-base">
            © {new Date().getFullYear()} Kademia. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <Link
              href="/privacy"
              className="text-gray-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 text-base transition-colors mr-8"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 text-base transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
