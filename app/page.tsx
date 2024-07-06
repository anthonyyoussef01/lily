import React from 'react';
import Navbar from "@/app/(home)/components/Navbar";
import {FlipWords} from "@/app/(home)/components/FlipWords";
import {ResumeButton} from "@/app/(home)/components/ResumeButton";
import {faFile} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function Page() {
    const words: string[] = ["Compassionate", "Dedicated", "Experienced", "Certified"];

    return (
        <div className="dark min-h-screen bg-black">
            <div className="max-w-7xl mx-auto px-2">
                <Navbar/>
                <div className="h-[40rem] flex justify-center items-center px-2">
                    <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
                        <span className="font-bold">Lily Marino:</span> <br/>
                        <FlipWords words={words}/> <br/>
                        EMT &<br/>
                        Aspiring Physician Assistant
                        <div className="flex justify-center items-center">
                            <ResumeButton
                                containerClassName="rounded-full"
                                as="button"
                                className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
                            >
                                <FontAwesomeIcon icon={faFile} className="size-4"/>
                                <span>View Resume</span>
                            </ResumeButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
