import {NavLink, Outlet} from "react-router";
import styles from "./AppLayout.module.css";

export default function AppLayout() {
    return (
        <div className={styles.layout}>
            <header className={styles.header}>
                <div className={styles.headerInner}>
                    <span className={styles.logo}>FitCoach</span>
                    <nav className={styles.nav}>
                        <NavLink to="/login">Вход</NavLink>
                        <NavLink to="/coach/clients">Клиенты</NavLink>
                        <NavLink to="/client/program">Программа тренировок</NavLink>
                    </nav>
                </div>
            </header>

            <main className={styles.main}>
                <Outlet />
            </main>
        </div>
    );
}
