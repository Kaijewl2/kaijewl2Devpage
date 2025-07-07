import "./nav.css";
import { RiHome2Fill } from "react-icons/ri";

export function Nav() {
  return (
    <nav>
      <a href="/" className="title pl-5">
        <RiHome2Fill />
      </a>
      <ul className="pr-15">
        <li className="pr-20">
          <a href="/projects" className="buttons">
            Projects
          </a>
        </li>
        <li>
          <a href="/socials" className="buttons">
            Socials
          </a>
        </li>
      </ul>
    </nav>
  );
}
