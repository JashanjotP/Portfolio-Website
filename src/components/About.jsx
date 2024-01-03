const About = () => {
    return ( 
        <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
                    <div className="sm:text-right pb-8 pl-4">
                        <p className="text-4xl font-bold inline border-b-4 border-pink-600">About</p>
                    </div>
                    <div>
                    </div>
                </div>

                <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">

                    <div className="sm:text-right text-4xl font-bold">
                        <p>Hello, I am Jashanjot, nice to see you. Please take a look around.</p>
                    </div>
                    <div>
                        <p>
                        I am a software engineering student at the University of Guelph. My portfolio 
                        reflects a blend of creativity and logic, showcasing projects that demonstrate my 
                        commitment to crafting elegant solutions. From web applications prioritizing 
                        user experience to optimizing algorithms for efficiency, I thrive on the transformative
                        power of technology. Join me on this journey through the digital realm, where 
                        passion meets precision, and innovation takes center stage. 
                        </p>
                    </div>

                </div>
                </div>
        </div>
     );
}
 
export default About;