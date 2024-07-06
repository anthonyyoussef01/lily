import React from 'react';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Image from "next/image";

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
        <nav className="flex justify-between items-center transition-all py-4 sm:py-5 md:py-7 lg:py-9">
            <div className="flex items-center border-b-orange-400 border-b-2">
                <h1 className="text-gray-200 text-2xl font-bold">
                    Lily
                </h1>
                <Image src="/calla_lily.png" alt="🌺" width={38} height={38} className="ml-1 mb-1"/>
            </div>
            <div className="text-gray-200 flex items-center gap-5">
                {socials.map((social, index) => (
                    <a key={index} href={social.link} aria-label={social.label} className="hover:text-orange-100">
                        <FontAwesomeIcon icon={social.icon} className="size-4"/>
                    </a>
                ))}
                {/*<DarkModeToggle />*/}
            </div>
        </nav>
    );
}