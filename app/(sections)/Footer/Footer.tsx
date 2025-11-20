import Image from "next/image";
import Link from "next/link";
import { Twitter, Linkedin, Github } from "lucide-react";

const Footer = () => {
  type FooterSection = {
    title: string;
    links: string[];
  };

  type SocialLink = {
    icon: React.ElementType;
    href: string;
    label: string;
  };

  const footerSections: FooterSection[] = [
    {
      title: "Product",
      links: ["Features", "Pricing", "Integrations", "Documentation"],
    },
    {
      title: "Company",
      links: ["About", "Careers", "Blog", "Press"],
    },
    {
      title: "Support",
      links: ["Help Center", "Contact", "Terms", "Privacy"],
    },
  ];

  const socialLinks: SocialLink[] = [
    {
      icon: Twitter,
      href: "https://twitter.com/yourprofile",
      label: "Twitter",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/davi-p-oliveira-a44705218/",
      label: "LinkedIn",
    },
    {
      icon: Github,
      href: "https://github.com/davi-p-oliveira-11",
      label: "GitHub",
    },
  ];

  return (
    <footer className="py-16 bg-[#ffffff]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Logo + Description */}
          <div className="md:col-span-1">
            <Image
              src="./images/Groclone.svg"
              alt="Logo"
              width={256}
              height={60}
              className="mb-4"
            />
            <p className="text-black/70 text-sm leading-relaxed max-w-[250px]">
              Voltaris delivers modern web solutions, automation, and high-performance digital systems.
            </p>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-lg text-black font-semibold mb-4">
                {section.title}
              </h4>

              <ul className="space-y-3 text-black/70 text-sm">
                {section.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="hover:text-black transition-colors duration-200"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider + Bottom Row */}
        <div className="border-t border-black/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-black/60 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Voltaris Digital Solutions. All rights reserved. | Developed by{" "}
            <Link
              href="https://www.linkedin.com/in/davi-p-oliveira-a44705218/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:opacity-70 transition font-medium"
            >
              Davi P. Oliveira
            </Link>
          </p>

          {/* Social Icons */}
          <div className="flex gap-6">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                className="text-black/60 hover:text-black transition-colors duration-200"
              >
                <Icon className="w-5 h-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
