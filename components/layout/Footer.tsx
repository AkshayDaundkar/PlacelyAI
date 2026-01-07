import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <span className="text-xl font-semibold text-neutral-900 tracking-tight">
                PlacelyAI
              </span>
            </Link>
            <p className="text-sm text-neutral-600 max-w-md">
              Make confident real-estate decisions before you invest. Unbiased,
              area-level intelligence to help you understand where to buy — and
              why.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-neutral-900 mb-4">
              Product
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/how-it-works"
                  className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="/cities/bentonville"
                  className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
                >
                  City Intelligence
                </Link>
              </li>
              <li>
                <Link
                  href="/methodology"
                  className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
                >
                  Methodology
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-neutral-900 mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-neutral-200">
          <p className="text-sm text-neutral-500 text-center">
            © {new Date().getFullYear()} PlacelyAI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

