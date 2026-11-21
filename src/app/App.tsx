import {Route, Routes} from "react-router";
import AppLayout from "./AppLayout";
import LoginPage from "../pages/LoginPage";
import ClientsPage from "../pages/ClientsPage";
import ClientProgramPage from "../pages/ClientProgramPage";
import NotFoundPage from "../pages/NotFoundPage";

export default function App() {
    return (
        <Routes>
            <Route element={<AppLayout />}>
                <Route path="/" element={<LoginPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/coach/clients" element={<ClientsPage />} />
                <Route path="/client/program" element={<ClientProgramPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
    );
}
