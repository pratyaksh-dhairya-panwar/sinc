import { MdArrowForward } from "react-icons/md";

const Herosection = () => {
    return ( 
        <div className="w-full border-t-[0.5px] flex flex-col items-center justify-center py-14 gap-4 px-8 ">
                <h2 className="lg:text-7xl md:text-5xl text-4xl font-bold text-center leading-snug tracking-wider">Student Incubation Cell</h2>
                <p className=" text-md md:text-lg font-semibold text-gray-700 text-center tracking-wider">Your journey from idea to impact begins here.</p>
                <div className="mt-8 flex gap-4 flex-col md:flex-row">
                    <button className="bg-black text-white text-xl px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition duration-300">
                        Get started
                    </button>
                    <button className=" text-black border-black border-[1px] text-xl px-8 py-4 rounded-full font-semibold hover:bg-black hover:text-white transition duration-300">
                        Learn more
                        <MdArrowForward className="inline-block size-6"/>
                    </button>
                </div>
        </div>
     );
}
 
export default Herosection;