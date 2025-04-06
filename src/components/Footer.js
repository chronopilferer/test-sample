import React from 'react';
import Stack from 'react-bootstrap/Stack';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

import IconButton from './ui/button/IconButton'; 
import '../styles/styles.css';

function Footer() {

    const icons = [
        { href: "https://github.com/your-username", icon: FaGithub },
        { href: "https://www.linkedin.com/in/your-profile/", icon: FaLinkedin },
        { href: "https://twitter.com/your-profile", icon: FaTwitter }
        ];

  return (
    <Stack gap={3} className="text-center py-4 bg-light">
        <div className="copyright-text">
            <p>© 2025 My Website</p>
        </div>

        <div className="footer-links">
            {icons.map(({ href, icon }, idx) => (
                <IconButton key={idx} href={href} icon={icon} />
            ))}
        </div>
    </Stack>
  );
}

export default Footer;