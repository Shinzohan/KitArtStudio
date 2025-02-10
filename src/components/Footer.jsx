import { FaDiscord, FaTwitter, FaYoutube, FaMedium } from "react-icons/fa";

const socialLinks = [
  { href: "https://discord.gg/c4NkWnKzc3", icon: <FaDiscord /> },
  { href: "https://x.com/KitArtStop", icon: <FaTwitter /> },
  { href: "https://www.youtube.com/c/KitArtStop", icon: <FaYoutube /> },
  { href: "https://medium.com/@KitArtStop", icon: <FaMedium /> },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-screen bg-[#f8f9fa] py-12 text-black">
      <div className="container mx-auto flex flex-col items-center gap-8 px-6 text-center md:flex-row md:justify-between md:text-left">
        {/* Branding */}
        <p className="text-2xl font-serif font-semibold tracking-wide text-[#333] md:text-3xl">
          @KitArtStop <span className="text-[#666]">{currentYear}</span>
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-8">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-transparent border-2 border-[#333] text-[#333] shadow-[0_1px_2px_rgba(0,0,0,0.1)] hover:border-[#facc15] hover:text-[#facc15] hover:scale-105 transition-all duration-300"
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Privacy Policy */}
        <a
          href="#privacy-policy"
          className="text-sm font-light text-[#888] underline-offset-4 transition-all hover:text-[#facc15] hover:underline"
        >
          Privacy Policy
        </a>
      </div>

      {/* Pencil Sketch Border */}
      <div className="w-full mt-12">
        <div className="border-t-2 border-dashed border-[#333] mx-auto w-3/4" />
      </div>
    </footer>
  );
};

export default Footer;
