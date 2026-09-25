/* =========================================
   projects.js
   Project Data & Project Cards
========================================= */

/* =========================================
   PROJECT DATA
========================================= */

const projects = [
    {
        title: "Hostel Website",
        image: "assets/images/projects/project-1.jpg",
        description:
            "A responsive modern web platform for student hostel living featuring room discovery, amenities, gallery, and online booking workflows.",
        technologies: [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        liveLink: "#",
        githubLink: "#"
    },
    {
        title: "Astronomy Application",
        image: "assets/images/projects/project-2.jpg",
        description:
            "An interactive astronomy project designed to help users discover astronomical events, chart constellations, and explore the night sky.",
        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "API"
        ],
        liveLink: "#",
        githubLink: "#"
    },
    {
        title: "To-Do Application",
        image: "assets/images/projects/project-3.jpg",
        description:
            "A task management and productivity application designed to help users organize, prioritize, and track their daily workflows.",
        technologies: [
            "Python",
            "Data Logic"
        ],
        liveLink: "#",
        githubLink: "#"
    },
    {
        title: "Skincare App UI",
        image: "assets/images/projects/project-4.jpg",
        description:
            "A clean and modern skincare application interface designed in Figma following modern UI/UX design heuristics and design systems.",
        technologies: [
            "Figma",
            "UI/UX",
            "Prototyping"
        ],
        liveLink: "#",
        githubLink: "#"
    }
];

/* =========================================
   CREATE PROJECT CARDS
========================================= */

function displayProjects() {
    const projectsContainer = document.getElementById("projects-container");
    if (!projectsContainer) {
        return;
    }

    projectsContainer.innerHTML = "";

    projects.forEach((project) => {
        const projectCard = document.createElement("article");
        projectCard.classList.add("project-card");

        const technologies = project.technologies
            .map((technology) => `<span>${technology}</span>`)
            .join("");

        projectCard.innerHTML = `
            <img
                src="${project.image}"
                alt="${project.title}"
                class="project-image"
                loading="lazy"
            >
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tech">
                    ${technologies}
                </div>
                <div class="project-links">
                    <a href="${project.liveLink}" target="_blank" rel="noopener noreferrer">
                        Live Demo
                    </a>
                    <a href="${project.githubLink}" target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                </div>
            </div>
        `;

        projectsContainer.appendChild(projectCard);
    });
}

/* =========================================
   RUN PROJECT FUNCTION
========================================= */

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", displayProjects);
} else {
    displayProjects();
}