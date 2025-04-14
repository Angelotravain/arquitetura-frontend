import { Header } from "../components/header/header";
import { Outlet } from "react-router-dom";

export function RootLayout({ children }) {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}