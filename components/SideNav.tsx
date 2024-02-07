import Link from 'next/link';
import styles from '@/app/styles/navbar.module.css';

export default function SideNav() {
    return (
        <aside className={styles.aside}>
            <ul className={styles.sideNavbar}>
                <li>
                    <Link href="/myfile">MyFile</Link>
                </li>
                <li>
                    <Link href="/tasks">Task</Link>
                </li>
                <li>
                    <Link href="/dataquality">Data</Link>
                </li>
            </ul>
        </aside>
    );
}
