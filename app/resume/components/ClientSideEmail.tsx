// ClientSideEmail.tsx
'use client';
import React, { useState, useEffect } from 'react';
import { RESUME_DATA } from "@/data/resume-data";

const ClientSideEmail = () => {
    const [clientPrintEmail, setClientPrintEmail] = useState('');

    useEffect(() => {
        setClientPrintEmail(RESUME_DATA.contact.printEmail);
    }, []);

    return (
        <>
            {clientPrintEmail && (
                <div className="print:block print:underline">
                    <a href={`mailto:${clientPrintEmail}`}>
                        {clientPrintEmail}
                    </a>
                </div>
            )}
        </>
    );
};

export default ClientSideEmail;