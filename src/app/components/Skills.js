"use client";
import React from 'react';
import './styles.css';

import { InfiniteMovingCards } from './ui/infinite-cards';

export default function App() {

    const images = [
        { id: crypto.randomUUID(), name: 'HTML5', image: '/images/html5.png' },
        { id: crypto.randomUUID(), name: 'CSS3', image: '/images/skills/css.png' },
        { id: crypto.randomUUID(), name: 'JavaScript', image: '/images/skills/javascript.png' },
        { id: crypto.randomUUID(), name: 'TypeScript', image: '/images/skills/ts.png' },
        { id: crypto.randomUUID(), name: 'Firebase', image: 'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg' },
        { id: crypto.randomUUID(), name: 'React', image: '/images/skills/reactjs.png' },
        { id: crypto.randomUUID(), name: 'Next', image: '/images/skills/nextjs.png' },
        { id: crypto.randomUUID(), name: 'Angular', image: '/images/skills/angularjs.png' },
        { id: crypto.randomUUID(), name: 'ASP.NET', image: '/images/asp.png' },
        { id: crypto.randomUUID(), name: 'Node', image: '/images/skills/nodejs.png' },
        { id: crypto.randomUUID(), name: 'Express', image: '/images/skills/expressjs.png' },
        { id: crypto.randomUUID(), name: 'MongoDB', image: '/images/skills/mongodb.png' },
        { id: crypto.randomUUID(), name: 'Unity', image: '/images/skills/unity.png' },
        { id: crypto.randomUUID(), name: 'Socket.io', image: '/images/skills/socketio.png' },
        { id: crypto.randomUUID(), name: 'Phaser', image: 'https://www.vectorlogo.zone/logos/phaserio/phaserio-icon.svg' },
        { id: crypto.randomUUID(), name: '.NET Core', image: 'https://cdn.cdnlogo.com/logos/d/6/dot-net-core.svg' },
        { id: crypto.randomUUID(), name: 'MSSQL', image: '/images/skills/mssql.png' },
        { id: crypto.randomUUID(), name: 'Bootstrap', image: '/images/skills/bootstrap.png' },
        { id: crypto.randomUUID(), name: 'Tailwind', image: '/images/skills/tailwind.png' },
        { id: crypto.randomUUID(), name: 'MySQL', image: '/images/skills/mysql.png' },
        { id: crypto.randomUUID(), name: 'Python', image: '/images/skills/python.png' },
        { id: crypto.randomUUID(), name: 'Django', image: '/images/skills/django.png' },
        { id: crypto.randomUUID(), name: 'Flutter', image: '/images/skills/flutter.png' },
        { id: crypto.randomUUID(), name: 'Dart', image: 'https://www.vectorlogo.zone/logos/dartlang/dartlang-icon.svg' },
        { id: crypto.randomUUID(), name: 'Java', image: 'https://www.vectorlogo.zone/logos/java/java-icon.svg' },
        { id: crypto.randomUUID(), name: 'Git', image: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg' },
        { id: crypto.randomUUID(), name: 'GitHub', image: 'https://www.vectorlogo.zone/logos/github/github-icon.svg' },
        { id: crypto.randomUUID(), name: 'GitLab', image: 'https://www.vectorlogo.zone/logos/gitlab/gitlab-icon.svg' },
        { id: crypto.randomUUID(), name: 'Figma', image: 'https://www.vectorlogo.zone/logos/figma/figma-icon.svg' },
        { id: crypto.randomUUID(), name: 'WordPress', image: 'https://www.vectorlogo.zone/logos/wordpress/wordpress-icon.svg' },
        { id: crypto.randomUUID(), name: 'Flask', image: '/images/skills/flask.png' },
        { id: crypto.randomUUID(), name: 'VS Code', image: 'https://www.vectorlogo.zone/logos/visualstudio_code/visualstudio_code-icon.svg' },
        { id: crypto.randomUUID(), name: 'C#', image: 'https://cdn.cdnlogo.com/logos/c/27/c.svg' },
        { id: crypto.randomUUID(), name: 'C++', image: 'https://cdn.cdnlogo.com/logos/c/1/c-plus-plus.svg' },
    ].map(skill => ({
        id: skill.id,
        image: skill.image,
        name: skill.name
    }));


    return (
        <>
            <h1 className="text-4xl text-purple-200 font-bold text-center mb-12">Skills</h1>
            {/* <Banner images={images} speed={25000} /> */}
            <InfiniteMovingCards items={images} speed="" />
            <div className='w-full h-px bg-purple-200 my-10'></div>
        </>
    );
}
