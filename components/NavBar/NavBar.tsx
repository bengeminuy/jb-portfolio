import Image from "next/image";
import Logo from "../../public/images/logo_dark.png";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex justify-between items-center h-26 p-4 pr-8 pl-8">
      <Link className="z-10" href="/">
        <Image src={Logo} alt=".JB Logo" className="h-20 w-20 p-3 z-10" />
      </Link>

      <ul className="flex pr-3 gap-x-12 z-10">
        <li>
          <Link href="/about">/ About</Link>
        </li>
        <li>
          <Link href="/skills">/ Skills</Link>
        </li>
        <li>
          <Link href="/experience">/ Experience</Link>
        </li>
        <li>
          <Link href="/contact">/ Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
