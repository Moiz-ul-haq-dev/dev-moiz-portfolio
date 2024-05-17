"use client";
import React from 'react';
import { HoverEffect } from './ui/glowing-cards';
import { MX, US, RO, GB } from 'country-flag-icons/react/3x2';

export default function Testimonials() {
    return (
        <>
            <h1 className="text-4xl text-purple-200 font-bold text-center mt-10 mb-5">Testimonials</h1>
            <div className="flex flex-col md:flex-row justify-between px-14 items-center">
                <HoverEffect
                    items={[
                        {
                            title: 'brico_',
                            description: '"Responsive with all messages and receptive!"',
                            // link: '#',
                            clientImage: '/images/clients/1.webp',
                            clientCountry: 'Mexico',
                            flagImage: <MX />,
                        },
                        {
                            title: 'gencopura',
                            description: `"Very satisfied with my order. Accomplished everything I've asked for and delivered sooner than expected. I wouldn't hesitate recommending him."`,
                            // link: '#',
                            clientImage: '',
                            clientCountry: 'Romania',
                            flagImage: <RO />,
                        },
                        {
                            title: 'waraba20',
                            description: `"I recently hired this freelancer to build a 2D game for me, and I couldn't be happier with the results! Communication was top-notch, as they were highly responsive and open to feedback throughout the process. They delivered the game on time, showcasing their commitment to meeting deadlines. The final product was exceptional, perfectly matching the project description, and demonstrating their attention to detail and work quality. I highly recommend this freelancer and would definitely work with them again."`,
                            // link: '#',
                            clientImage: '',
                            clientCountry: 'USA',
                            flagImage: <US />,
                        },
                        {
                            title: 'hsnshz63',
                            description: '"Good quality work meeting precise requirements. Respectful and helpful conversation and good work with revision as well. Would recommend!"',
                            // link: '#',
                            clientImage: '/images/clients/2.webp',
                            clientCountry: 'UK',
                            flagImage: <GB />,
                        },
                    ]}
                />
            </div>
            <div className='w-full h-px bg-purple-200 mt-10 mb-2'></div>
        </>
    );
}
