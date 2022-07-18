import { Email } from 'react-obfuscate-email';
import { Github, Linkedin, Email as EmailIcon } from './Icons';

export default function SocialLinks() {
  return (
    <ul className="flex space-x-5">
      <li>
        <a
          href="https://github.com/MilanBarande"
          className="social-link-hover"
          target="_blank"
          rel="noreferrer"
        >
          <Github height={20} width={20} />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/milan-barande/"
          className="social-link-hover"
          target="_blank"
          rel="noreferrer"
        >
          <Linkedin height={20} width={20} />
        </a>
      </li>
      <li>
        <Email email="milan.barande@gmail.com">
          <EmailIcon height={20} width={20} className="social-link-hover" />
        </Email>
      </li>
    </ul>
  );
}
