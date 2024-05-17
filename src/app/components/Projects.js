"use client";
import React, { useState } from 'react';
import Image from 'next/image';

export default function Projects() {
  // Sample project data
  const projectsData = [
    {
      title: "Afforai Website",
      description: "Afforai is an AI chatbot that searches, summarizes, and translates info from multiple sources to produce trustworthy research. Feed lengthy research documents to stacks of dry compliance requirements and extract the key findings you need.",
      imageUrl: "/images/projects/Screenshot (389).png",
      liveLink: "https://afforai.com",
      projectType: "Website",
    },
    {
      title: "AInytime Website",
      description: "Create content, enrich your CRM, scale your prospecting efforts, and much more. Our AI platform is designed for your entire GTM team. Install our powerful, pre-built workflows — or build your own in seconds.",
      imageUrl: "/images/projects/Screenshot (390).png",
      liveLink: "https://ainytime.vercel.app/",
      projectType: "Website",
    },
    {
      title: "Clothing Website",
      description: `A minimalist website design for "FS.", a fashion brand, featuring a clean interface with essential navigation elements and a compelling banner that reads "Choose Perfect Fashion For You." The design emphasizes functionality and style, highlighted by a prominent image of a male model in a classic white t-shirt.`,
      imageUrl: "/images/projects/Screenshot (391).png",
      liveLink: "",
      projectType: "Website",
    },
    {
      title: "Hotelier Website",
      description: `An opulent hotel website design named "HOTELIER," featuring a luxurious banquet hall as its centerpiece. The homepage includes intuitive navigation options, and engaging calls-to-action like "Learn More" and "Get Started" to enhance user interaction and conversion.`,
      imageUrl: "/images/projects/Screenshot (241).png",
      liveLink: "",
      projectType: "Website",
    },
    {
      title: "Gov UK Website",
      description: `UK Government healthcare portal designed for medical staff, featuring a user-centric dashboard for Dr. John Smith. The interface includes efficient management tools for appointments and patient records, alongside easily accessible sections for upcoming and past appointments, enhancing organization and accessibility for healthcare professionals.`,
      imageUrl: "/images/projects/Gov UK.png",
      liveLink: "",
      projectType: "Website",
    },
    {
      title: "Mindful Kids Website",
      description: `A multidimensional approach to construct a dynamic VR ecosystem. By integrating immersive experiences with psychological principles, our VR platform aims to promote emotional resilience, stress reduction, and overall mental well-being in a playful and engaging manner. The technology stack used in this project is suitable for an interactive user experience and aligns with our young users’ psychological and emotional needs.`,
      imageUrl: "/images/projects/Screenshot (403).png",
      liveLink: "",
      projectType: "Website",
    },
    {
      title: "Caawwd Website",
      description: `A visually engaging e-commerce website for "Odaplace," designed to facilitate online shopping for electronics, specifically highlighting an extensive range of Asus laptops. The interface offers advanced filters and a user-friendly layout, displaying product prices, ratings, and sales data clearly to enhance the shopping experience and decision-making process for consumers.`,
      imageUrl: "/images/projects/Screenshot (401).png",
      liveLink: "",
      projectType: "Website",
    },
    {
      title: "Saborea Website",
      description: `"Saborea," a vibrant Spanish restaurant website that integrates OpenStreetMap to visually guide users to various restaurant locations. The interface includes a functional search bar, handy filter options, and a dual display of map and list views, enabling a seamless exploration of dining options. Each restaurant entry is presented with appealing graphics and star ratings, enhancing the user's browsing and selection experience.`,
      imageUrl: "/images/projects/Screenshot (388).png",
      liveLink: "",
      projectType: "Website",
    },
    {
      title: "Blogging Website",
      description: `A clean and straightforward user interface for creating blog posts on a website. It includes input fields for the blog title and content, along with an option to upload a file, ensuring a user-friendly experience for content creators looking to publish new posts efficiently. The minimalistic design focuses on functionality, reducing distractions and enhancing the content creation process.`,
      imageUrl: "/images/projects/Screenshot (397).png",
      liveLink: "",
      projectType: "Website",
    },
    {
      title: "E-commerce Website",
      description: `An e-commerce website design that presents a vibrant and engaging shopping experience. The homepage features a thematic graphic emphasizing online shopping, with intuitive navigation links for Home, Products, Cart, and Contact Us. The design is user-friendly, encouraging easy access to product categories and secure checkout, with prominent registration and login options to enhance customer interaction and retention.`,
      imageUrl: "/images/projects/Screenshot (396).png",
      liveLink: "",
      projectType: "Website",
    },
    {
      title: "Fake-News Detection Website",
      description: `A clean and authoritative website design for a "Fake News Detector" tool, aimed at empowering users to identify and combat misinformation. The homepage presents a bold statement on the importance of discerning truth in media, with straightforward navigation options like Home, News, and Detect News. It invites users to engage with the platform through a prominent "Get Started" button, facilitating easy access to the tool's features designed to clarify news from specified regions such as Israeli and American sources.`,
      imageUrl: "/images/projects/Screenshot (399).png",
      liveLink: "",
      projectType: "Website",
    },
    {
      title: "Pharmacy Website",
      description: `"One Stop Pharmacy," an online pharmacy website designed to provide a comprehensive and accessible healthcare shopping experience. The homepage features a welcoming message that underscores the trustworthiness and convenience of using the platform for various health needs. With navigation options for Home, About, and Medicines, plus prominent Sign In and Sign Up buttons, the site is user-friendly, catering to customers seeking a range of prescription medications and wellness products directly from the comfort of their homes.`,
      imageUrl: "/images/projects/Screenshot (402).png",
      liveLink: "",
      projectType: "Website",
    },
    {
      title: "Gaming Console Website",
      description: `A retro-themed website, prominently featuring a stylized graphic of a classic gaming console, embodying a nostalgic aesthetic. This design element serves as a central visual focus, likely appealing to users interested in retro gaming culture. The site includes navigation options such as Home, About, FAQ, Console, and Gallery, suggesting a comprehensive exploration of retro gaming content and history.`,
      imageUrl: "/images/projects/Screenshot (142).png",
      liveLink: "",
      projectType: "Website",
    },
    {
      title: "Jungle Scratch Game",
      description: `Jungle Scratch game refer to instant win games where the player scratches off a layer of material to reveal a hidden image or text underneath, which determines whether or not they have won a prize. Jungle Scratch could refer to a scratch game with a jungle-themed design or a game that incorporates elements of the jungle into the gameplay.`,
      imageUrl: "/images/projects/Screenshot (16).png",
      liveLink: "",
      projectType: "Game",
    },
    {
      title: "French Baguette Game",
      description: "The game is about a Bread (French Baguette) that runs and avoid sports obstacles, gaps, water, rats. He eats cheese, wines, baguettes, coins. He is capable of firing baguette-shaped (bread) missiles at rats to avoid being attacked. Finally, we will have a LeaderBoard (ranking based on score).",
      imageUrl: "/images/projects/Screenshot (66).png",
      liveLink: "",
      projectType: "Game",
    },
    {
      title: "FAHRION Pacman Game",
      description: `Pac-Man game level that spells out the word "FAHRION" in the maze layout. The design cleverly integrates the classic arcade game elements with a theme related to style or apparel, providing a unique and interactive way to engage with the concept of fashion through nostalgic gaming visuals. This could be used as an entertaining feature on a fashion-related website or digital platform to captivate visitors.`,
      imageUrl: "/images/projects/Pacman.png",
      liveLink: "",
      projectType: "Game",
    },
    {
      title: "Cash Hunt Game",
      description: "Cash Hunt is a game where you have to find the hidden cash in a picture. The game is played by clicking on the picture to reveal the hidden cash. The player has to find all the hidden cash in the picture to win the game. The game is played in a top-down view and the player must navigate through the maze-like levels to find the jewels. The player can also use power-ups to help them in their quest.",
      imageUrl: "/images/projects/Cash Hunt.png",
      liveLink: "",
      projectType: "Game",
    },
    {
      title: "Cat Burglar Game",
      description: "CatBurglar is a game where you play as a cat burglar who must steal as many jewels as possible without getting caught by the police. The game is played in a top-down view and the player must navigate through the maze-like levels to find the jewels. The player can also use power-ups to help them in their quest.",
      imageUrl: "/images/projects/CatBurglarGame.png",
      liveLink: "",
      projectType: "Game",
    },
  ];

  // State to hold current projects and active filter
  const [projects, setProjects] = useState(projectsData);
  const [activeFilter, setActiveFilter] = useState('All');

  // Function to filter projects based on project type
  const filterProjects = (type) => {
    if (type === 'All') {
      setProjects(projectsData);
    } else {
      const filteredProjects = projectsData.filter(project => project.projectType === type);
      setProjects(filteredProjects);
    }
    setActiveFilter(type);
  };

  // Function to open project link in a new tab
  const openProjectLink = (liveLink) => {
    window.open(liveLink, "_blank");
  };

  return (
    <>
      <h1 id="projects" className="text-4xl text-purple-200 font-bold text-center mb-12">Featured Projects</h1>

      {/* Buttons for filtering */}
      <div className="flex justify-center mb-8">
        <button
          className={`mr-4 px-4 w-20 py-2 rounded-lg font-semibold ${activeFilter === 'All' ? 'bg-gradient-to-r from-purple-950 to-purple-800 text-white' : 'bg-purple-200 text-black'
            }`}
          onClick={() => filterProjects('All')}
        >
          All
        </button>
        <button
          className={`mr-4 px-4 py-2 rounded-lg font-semibold ${activeFilter === 'Website' ? 'bg-gradient-to-r from-purple-950 to-purple-800 text-white' : 'bg-purple-200 text-black'
            }`}
          onClick={() => filterProjects('Website')}
        >
          Websites
        </button>
        <button
          className={`px-4 py-2 rounded-lg font-semibold ${activeFilter === 'Game' ? 'bg-gradient-to-r from-purple-950 to-purple-800 text-white' : 'bg-purple-200 text-black'
            }`}
          onClick={() => filterProjects('Game')}
        >
          Games
        </button>
      </div>

      <div className="mx-auto px-20 grid gap-7 w-full md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div key={index} className="border-2 border-purple-400 rounded-lg overflow-hidden shadow-md">
            <Image src={project.imageUrl} alt={project.title} className="w-full h-56 object-cover" height={56} width={100} />
            <div className="p-4">
              <div className='flex justify-between items-center'>
                <h2 className="text-xl text-purple-200 font-semibold mb-2">{project.title}</h2>
                {project.liveLink && (
                  <button
                    onClick={() => openProjectLink(project.liveLink)}
                    className="text-sm font-medium bg-gradient-to-r py-1 px-1 rounded-xl from-purple-950 to-purple-800 text-white"
                  >
                    Live Link
                  </button>
                )}
              </div>
              <p className="text-purple-400 text-justify">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='w-full h-px bg-purple-200 mt-10 mb-2'></div>
    </>
  );
}
