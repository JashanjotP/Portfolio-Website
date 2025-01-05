import {HiArrowNarrowRight} from "react-icons/hi"
import { Link } from "react-scroll";

const Home = () => {
    return ( 
        <div name='home' className="w-full h-screen bg-[#0a192f]">
            <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
                 <p className="text-red-600 text-lg font-bold mb-4">This portfolio is outdated. Please visit the new version at <a href="https://portfolio.jashanjotpanjrath.com" className="underline hover:text-red-400">portfolio.jashanjotpanjrath.com</a></p>
                 <p className="text-pink-600">Hello, my name is</p>
                 <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">Jashanjot Panjrath</h1>
                 <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">A Software Engineering Student</h2>
                 <p className="text-[#8892b0] py-4 max-w-[700px]">I'm a Software Engineering Student at the University of Guelph. I am interested in building large scale web applications</p>
                 <div>
                   <button className="text-white border-2 group px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
                    <Link to="projects" smooth={true} duration={500}>View Projects</Link>
                        <span className="group-hover:rotate-90 duration-300">
                        <Link to="projects" smooth={true} duration={500}>  <HiArrowNarrowRight className="ml-2"/></Link>
                        </span>
                  </button>
                 </div>
            </div>
        </div> 
    );
}
 
export default Home;