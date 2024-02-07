import Link from 'next/link';
import styles from '@/app/styles/navbar.module.css';
import Image from 'next/image';
import icon from '@/public/user.png';

export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <Link href="/">MDM</Link>
            </div>
            <div className={styles.userButton}>
                <button>
                <Image src={icon} alt="Profile" width={24} height={24} className={styles.profileIcon}/>
                </button>
            </div>
        </nav>
    );
}
