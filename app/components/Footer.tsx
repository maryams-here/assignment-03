import Link from "next/link";
import { FaFacebook,FaInstagramSquare ,FaGithub} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function Footer(){
    return(
        <div className="bg-black-300 flex justify-center flex-col items-center space-y-5">
            <div className=" pt-5 text-lg font-semibold">
            <Link href="#">About |</Link>
                <Link href="#">Services |</Link>
                <Link href="#">Contact |</Link>
                <Link href="#">Blogs </Link>
            </div>
            <div className="flex space-x-5 ">
                <FaFacebook size={35}/>
                <FaInstagramSquare size={35}/>
                <FaGithub size={35}/>
                <FaSquareXTwitter size={35}/>
            </div>
            <p className="pb-5">@ 2024 Blah-Blah, All Right Reserved | Designed by Maryum Shaikh</p>
        </div>
    )
}