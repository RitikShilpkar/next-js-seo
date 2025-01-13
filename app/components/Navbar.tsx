import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <div className="text-lg font-bold">Next SEO Demo</div>
        <ul className="flex space-x-4">
          <li>
            <Link href="/home">
              <span className="hover:underline">Home</span>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <span className="hover:underline">About</span>
            </Link>
          </li>
          <li>
            <Link href="/services">
              <span className="hover:underline">Services</span>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <span className="hover:underline">Contact</span>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <span className="hover:underline">Blog</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
