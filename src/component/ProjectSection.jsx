import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "B2BSurge Mobile Application",
    description:
      "A B2B networking platform enabling business connections, lead generation, meetings, real-time chat, and admin-controlled content management.",
    image: "/projects/b2bsurge.png",
    tags: ["Flutter", "Node.js", "MongoDB", "Socket.IO"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "S3LifeStyle Mobile Application",
    description:
      "A society management app with user and admin modules, UI/UX enhancements, and new feature integrations for improved experience.",
    image: "/projects/s3lifestyle.png",
    tags: ["Flutter", "Node.js", "MongoDB", "React.js"],
    demoUrl:
      "https://play.google.com/store/apps/details?id=com.techriigour.slifestyle",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Velocitt Consumer App",
    description:
      "An M-Commerce application built using React Native, enhanced with bug fixes, new features, and UI/UX improvements for a smooth shopping experience.",
    image: "/projects/velocitt.png",
    tags: ["React Native", "MongoDB"],
    demoUrl:
      "https://play.google.com/store/apps/details?id=com.velocitt.customer",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Booba Junction Menu",
    description:
      "A React.js web app allowing users to browse a restaurant menu, place orders, and test payments via an integrated gateway.",
    image: "/projects/boobajunction.png",
    tags: ["React.js"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              {/* <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div> */}

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/VipulS643"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
