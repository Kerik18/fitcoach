import {Link, Outlet} from "react-router";

export default function AppLayout() {
    return (
        <div>
            <header>
                <span>FitCoach</span>
                <nav>
                    <Link to="/login">Вход</Link>
                    <Link to="/coach/clients">Клиенты</Link>
                    <Link to="/client/program">Программа тренировок</Link>
                </nav>
            </header>

            <main>
                <Outlet />
            </main>
        </div>
    );
}
