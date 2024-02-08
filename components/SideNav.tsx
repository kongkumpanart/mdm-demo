import Link from 'next/link';
import styles from '@/app/styles/navbar.module.css';
import Image from 'next/image';
import iconFile from '@/public/document.png';
import iconTask from '@/public/task.png';
import iconQuality from '@/public/quality.png';



export default function SideNav() {
    return (
        <aside className={styles.aside}>
            <ul className={styles.sideNavbar}>
                <li>
                    <Link href="/myfile">
                        <Image src={iconFile} alt='myfile' width={24} height={24} className={styles.profileIcon}></Image>
                    </Link>
                </li>
                <li>
                    <Link href="/tasks">
                        <Image src={iconTask} alt='task' width={24} height={24} className={styles.profileIcon}></Image>
                    </Link>
                </li>
                <li>
                    <Link href="/dataquality">
                        <Image src={iconQuality} alt='dataquality' width={24} height={24} className={styles.profileIcon}></Image>
                    </Link>
                </li>
            </ul>
        </aside>
    );
}
