import { projects } from "../data/data";

export default function Projects() {
    return (
        <section className="mt-20 px-20" style={{ fontFamily: "Poppins" }} id="projects" >
            <div className="container">
                <h2 className="text-4xl font-extrabold text-white">
                    My Projects
                </h2>

                {projects.map((item, i) => (
                    <ProjectItem data={item} key={i} />
                ))}
            </div>
        </section>
    );
}

const ProjectItem = ({ data }) => (
    <div className="container flex flex-col items-center px-4 py-12 mx-auto xl:flex-row">
        <div className="flex justify-center xl:w-1/2">
            <img
                className="flex-shrink-0 object-cover rounded-md"
                src={data.imageLink}
                width="550"
                height="500"
                alt=""
            />
        </div>
        <div className="flex flex-col items-center mt-6 xl:items-start xl:w-1/2 xl:mt-0 lg:ml-6">
            <h2 className="text-3xl font-bold tracking-tight text-gray-800 xl:text-4xl dark:text-white">
                {data.title}
            </h2>

            <p className="block max-w-2xl mt-4 text-md text-gray-500 dark:text-gray-300">
                {data.description}
            </p>
            <h3 className="text-gray-300 font-semibold my-5">Tech Stack</h3>
            <div className="mt-5 flex items-center flex-wrap">
                {data.stack.map((item, i) => (
                    <TechItem text={item} key={i} />
                ))}
            </div>
            {/* <TechItem text={"Next JS"} /> */}
            <div className="mt-2 flex items-center">
                <ActionBtn
                    text={"View on Github"}
                    Icon={GithubIcon}
                    href={data.githubRepo}
                />

                <ActionBtn text={"Demo"} href={data.demoLink} />
            </div>
        </div>
    </div>
);

const TechItem = ({ text }) => (
    <span className="bg-gray-100 text-gray-800 text-xl font-medium inline-flex items-center px-4 py-2 rounded-xl mr-2 dark:bg-gray-700 dark:text-gray-300 my-2">
        {text}
    </span>
);

const ActionBtn = ({ text, Icon, href }) => (
    <a
        className="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 mr-2 my-2 cursor-pointer"
        target={"_blank"}
        href={href}
    >
        {Icon ? <Icon /> : null}
        <p className="text-center text-md">{text}</p>
    </a>
);

const GithubIcon = () => (
    <svg
        className="mr-2 -ml-1 w-4 h-4 text-white"
        aria-hidden="true"
        focusable="false"
        data-prefix="fab"
        data-icon="twitter"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
    >
        <path
            fill="currentColor"
            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
        />
    </svg>
);
