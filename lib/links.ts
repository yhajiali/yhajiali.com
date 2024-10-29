// Social Icons
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

export const socials = [
  {
    href: "mailto:yusuf@yhajiali.com",
    icon: EnvelopeIcon,
    label: "Email",
  },
  {
    href: "https://www.linkedin.com/in/yhajiali",
    icon: FaLinkedin,
    label: "LinkedIn",
  },
  {
    href: "https://www.x.com/yhajiali_",
    icon: FaXTwitter,
    label: "Twitter",
  },
  {
    href: "https://www.instagram.com/yhajiali_",
    icon: FaInstagram,
    label: "Instagram",
  },
  {
    href: "https://www.github.com/yhajiali",
    icon: FaGithub,
    label: "Github",
  },
];

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];
