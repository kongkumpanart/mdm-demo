import Link from 'next/link';
import styles from '@/app/styles/navbar.module.css';

export default function SideNav() {
    return (
        <div className={styles.sideNav}>
            <ul>
                <li>
                    <Link href="/myfile">My File</Link>
                </li>
                <li>
                    <Link href="/dataquality">Data Quality</Link>
                </li>
                <li>
                    <Link href="/tasks">Task</Link>
                </li>
            </ul>
        </div>
    );
}