import Image from "next/image";
import Logo from "../public/images/logo_dark.png";

export default function NavBar() {
  return (
    <nav className="flex justify-between items-center h-26 p-4 pr-8 pl-8">
      <Image src={Logo} alt=".JB Logo" className="h-20 w-20 p-3" />
      <ul className="flex pr-3 gap-x-12">
        <li>
          <a href="">/ About</a>
        </li>
        <li>
          <a href="">/ Stack</a>
        </li>
        <li>
          <a href="">/ Experience</a>
        </li>
        <li>
          <a href="">/ Contact</a>
        </li>
      </ul>
    </nav>
  );
}
