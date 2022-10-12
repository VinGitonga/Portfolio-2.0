export default function Contact() {
    return (
        <section className="mt-20 px-20" style={{ fontFamily: "Poppins" }} id="contact" >
            <div className="container">
                <h2 className="text-4xl font-extrabold text-white mb-2">Contact</h2>
                <div className="flex items-center justify-between">
                    <div>
                        <ContactHeading text={"Call"} />
                        <ContactItem
                            text={"+254704260663"}
                            href={"tel:+254704260663"}
                        />
                    </div>
                    <div>
                        <ContactHeading text={"Email"} />
                        <ContactItem
                            text={"gitongavincent64@gmail.com"}
                            href={"mailto:gitongavincent64@gmail.com"}
                        />
                    </div>
                    <div />
                </div>
            </div>
        </section>
    );
}

const ContactHeading = ({ text }) => (
    <h3 className="text-gray-300 font-semibold my-3">{text}</h3>
);

const ContactItem = ({ text, Icon, href }) => (
    <a
        className="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 mr-2 my-3 cursor-pointer"
        target={"_blank"}
        href={href}
    >
        {Icon ? <Icon /> : null}
        <p className="text-center text-md">{text}</p>
    </a>
);
