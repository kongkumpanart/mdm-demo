import Link from "next/link"
import Image from "next/image"
import "@/app/globals.css";

export default function Navbar() {
    return (
        <nav>
            <div>
                <h1 className="logo">MDM</h1>
            </div>
            <Link href="/">Home</Link>
            <Link href="/tasks">Task</Link>
            <Link href="/dataquality">Data Quality</Link>
        </nav>
    )
}
