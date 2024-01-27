import Link from "next/link";
import styles from '@/app/styles/register.module.css'

export default function Register() {
    return (
    <div className={styles.formContainer}>
        <h2 className={styles.registerText}>Register</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email : </label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password : </label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit">Register</button>
        </form>
        <p>
          Already have an account? <Link href="/">Login</Link>
        </p>
    </div>
    );
  }