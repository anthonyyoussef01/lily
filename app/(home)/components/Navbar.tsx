import React from 'react';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function Navbar() {
    const socials = [
        {
            link: 'https://www.linkedin.com/in/lily-marino-584bb516b/',
            label: 'LinkedIn',
            icon: faLinkedin,
        },
        {
            link: 'mailto:lilyam3.14@gmail.com',
            label: 'Email',
            icon: faEnvelope,
        }
    ];
    return (
        <nav className="py-10 flex justify-between items-center">
            <h1 className="text-gray-200 text-2xl font-bold underline underline-offset-8 decoration-orange-400">Lily 🌺</h1>
            <div className="text-gray-200 flex items-center gap-5">
                {socials.map((social, index) => (
                    <a key={index} href={social.link} aria-label={social.label} className="hover:text-orange-100">
                        <FontAwesomeIcon icon={social.icon} className="size-4" />
                    </a>
                ))}
                {/*<DarkModeToggle />*/}
            </div>
        </nav>
    );
}