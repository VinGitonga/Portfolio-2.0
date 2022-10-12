const About = () => {
    return (
        <section className="mt-20" id="about" style={{ fontFamily: "Poppins" }}>
            <div className="container flex flex-col items-center py-12 mx-auto xl:flex-row">
                <div className="flex justify-center xl:w-1/2">
                    <img
                        src="https://iili.io/QsDmTQ.md.jpg"
                        className="h-80 w-80 sm:w-[28rem] sm:h-[28rem] flex-shrink-0 object-cover rounded-full"
                    />
                </div>

                <div className="flex flex-col items-start xl:w-1/2 xl:mt-0">
                    <h2 className="text-3xl font-bold tracking-tight xl:text-4xl text-white items-center">
                        About Me !
                    </h2>

                    <div className="my-2">
                        <p className="my-3 mx-0 text-white text-xl">
                            I am a Full Stack Developer. I have built various
                            projects both during my free time and in hackathons
                            not only with Python and JavaScript Languages but
                            also frameworks such as React JS and Next JS. <br />{" "}
                            <br /> I am consantly eager to learn, highly
                            adaptable and goal driven.
                        </p>
                        <p className="my-3 mx-0 text-white text-xl">
                            When am not coding, I go to different meetup
                            circles, visit friends, do cycling and netflixing.
                        </p>
                    </div>
                    <div className="my-6">
                        <Btn text={"Contact"} href="#contact" />
                        <Btn
                            text={"View my Resume"}
                            href="/resume/Vincent_Gitonga_Resume.pdf"
                            target={"_blank"}
                            rel="noreferrer"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const Btn = ({ text, href, ...rest }) => (
    <a
        className="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 mr-2 mb-2 cursor-pointer"
        href={href}
        {...rest}
    >
        {text}
    </a>
);

export default About;
