import { BsLinkedin, BsTwitterX } from "react-icons/bs";
import { FaEnvelope, FaInstagram, FaLinkedin, FaLinkedinIn, FaTwitch, FaTwitter, FaTwitterSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { MdMail } from "react-icons/md";

const tile = () => {
    return ( <div className="w-full bg-[#DAF7CC] rounded-2xl flex flex-col overflow-hidden">
        <div className="flex flex-row gap-2 justify-between items-center px-4 pt-4">
            <div>
                <div className="text-xl sm:text-2xl font-semibold">
                    Name
                </div>
                <div className="text-md sm:text-lg">
                    Technical Coordinator
                </div>
            </div>
            <div className="flex gap-3">
            {/* <FontAwesomeIcon icon="fa-brands fa-linkedin-in" /> */}
                <FaTwitter />
                <FaLinkedinIn />
                <FaEnvelope />
            </div>
        </div>
        <img src="https://cdn.prod.website-files.com/643f0885bbed8e4b3a291266/6441901a900e301fcaf3416c_john-carter-default-peaceful-x-webflow-template.png" alt="" />
    </div> );
}
 
export default tile;