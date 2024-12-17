import { FaDiscord, FaTwitter, FaYoutube, FaMedium } from "react-icons/fa";

const socialLinks = [
  { href: "https://discord.gg/c4NkWnKzc3", icon: <FaDiscord /> },
  { href: "https://x.com/KitArtStop", icon: <FaTwitter /> },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-screen bg-gradient-to-br from-[#6d28d9] to-[#9d6fff] py-8 text-white">
      <div className="container mx-auto flex flex-col items-center gap-6 px-6 text-center md:flex-row md:justify-between md:text-left">
        {/* Branding */}
        <p className="text-lg font-semibold tracking-wide md:text-2xl">
          @KitArtStop<span className="text-[#facc15]"> </span>{currentYear}
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-6">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#6d28d9] shadow-md transition-all duration-300 hover:scale-110 hover:bg-black hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Privacy Policy */}
        <a
          href="#privacy-policy"
          className="text-sm font-light underline-offset-4 transition-all hover:text-[#facc15] hover:underline"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
