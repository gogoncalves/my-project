import Link from "next/link";
import styles from "@/components/header/header.module.css";

export function Header() {
    return(
        <header className={styles.header}>
            <h1>My site</h1>
            <Link href="/">Home</Link> <br />
            <Link href="/contacts">Contacts</Link> <br />
            <Link href="/repositories">Repositories</Link> <br />
            <Link href="/dashboard">Dashboard</Link> <br />
            <br /><br />
            <hr />
        </header>
    )
}