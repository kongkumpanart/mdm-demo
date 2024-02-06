import Link from 'next/link';
import styles from '@/app/styles/navbar.module.css';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Link href="/">Logo</Link>
            </div>
            <div className={styles.userButton}>
                <button>Profile</button>
            </div>
        </nav>
    );
}