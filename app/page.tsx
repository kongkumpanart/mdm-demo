import Image from "next/image";
import Head from "next/head";
import Link from 'next/link';
import styles from './styles/login.module.css';
import RootLayout from "./layout";


export default function Home() {
  return (
    <div className={styles.formContainer}>
      <h2 className={styles.loginText}>Login</h2>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email : </label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password : </label>
          <input type="password" id="password" name="password" required />
        </div>
        <Link href="/myfile">
          <button type="submit">Login</button>
        </Link>
      </form>
      <p>
        Don't have an account? <Link href="/register">Register</Link>
      </p>
    </div>
  );
}
