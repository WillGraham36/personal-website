import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const contacts = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/will-graham-4623022a8/", icon: faLinkedinIn },
  { label: "GitHub", href: "https://github.com/WillGraham36", icon: faGithub },
  { label: "Email", href: "mailto:wgraham1@umd.edu", icon: faEnvelope },
];

const ContactMe = () => (
  <div className="mx-auto w-full max-w-6xl px-4 pb-16 text-center sm:text-left">
    <h2 className="text-primary text-4xl font-medium mb-6">Contact Me</h2>
    <div className="flex flex-wrap justify-center sm:justify-start gap-4">
      {contacts.map(({ label, href, icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith('https:') ? '_blank' : undefined}
          rel={href.startsWith('https:') ? 'noopener noreferrer' : undefined}
          className="inline-flex items-center gap-3 rounded-lg bg-offmain px-5 py-3 text-neutral-200 transition-colors hover:bg-neutral-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
        >
          <FontAwesomeIcon icon={icon} className="h-5 w-5" />
          {label}
        </a>
      ))}
    </div>
  </div>
);

export default ContactMe;
