import Link from "next/link";
import { DiAtom } from "react-icons/di";
export default function Header(){
    return(
        <header className="p-3 bg-green-600 px-7">
            <div className="flex justify-between items-center">
            <div>
                < DiAtom size={38} className="text-black-600"/>
            </div>
            <nav className="space-x-7 text-lg font-semibold">
                <Link href="#">About</Link>
                <Link href="#">Services</Link>
                <Link href="#">Contact</Link>
                <Link href="#">Blogs</Link>
            </nav>
            </div>
        </header>
    )
}