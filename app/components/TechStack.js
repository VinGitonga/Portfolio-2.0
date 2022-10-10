import DjangoIcon from "../icons/DjangoIcon";
import FirebaseIcon from "../icons/FirebaseIcon";
import JSIcon from "../icons/JSIcon";
import MongoDBIcon from "../icons/MongoDBIcon";
import NextJSIcon from "../icons/NextJSIcon";
import PythonIcon from "../icons/PythonIcon";
import ReactJSIcon from "../icons/ReactJSIcon";
import RedisIcon from "../icons/RedisIcon";
import RustIcon from "../icons/RustIcon";
import SolIcon from "../icons/SolIcon";

const TechStack = () => {
    return (
        <section className="mt-20 px-20" style={{ fontFamily: "Poppins" }}>
            <div className="container">
                <h2 className="text-4xl font-extrabold text-white">
                    Tech Stack
                </h2>
                <TechHeading text={"Languages"} />

                <div className="mb-4 flex items-center">
                    <TechItem text={"Python"} Icon={PythonIcon} />
                    <TechItem text={"JavaScript"} Icon={JSIcon} />
                    <TechItem text={"Rust"} Icon={RustIcon} />
                </div>
                <TechHeading text={"Frameworks and Libraries"} />
                <div className="mb-4 flex items-center">
                    <TechItem text={"Next JS"} Icon={NextJSIcon} />
                    <TechItem text={"Django"} Icon={DjangoIcon} />
                    <TechItem text={"React JS"} Icon={ReactJSIcon} />
                </div>
                <TechHeading text={"Databases"} />
                <div className="mb-4 flex items-center">
                    <TechItem text={"Firebase"} Icon={FirebaseIcon} />
                    <TechItem text={"Mongo DB"} Icon={MongoDBIcon} />
                    <TechItem text={"Redis"} Icon={RedisIcon} />
                </div>

                <TechHeading text={"Blockchain"} />
                <div className="mb-4 flex items-center">
                    <TechItem text={"Solana"} Icon={SolIcon} />
                </div>
            </div>
        </section>
    );
};

const TechItem = ({ text, Icon }) => (
    <span class="bg-gray-100 text-gray-800 text-xl font-medium inline-flex items-center px-4 py-2 rounded-xl mr-2 dark:bg-gray-700 dark:text-gray-300">
        <Icon />
        <div className="ml-2">{text}</div>
    </span>
);

const TechHeading = ({ text }) => (
    <h3 className="text-gray-300 font-semibold my-5">{text}</h3>
);

export default TechStack;
