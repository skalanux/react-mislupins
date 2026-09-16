import { Outlet } from "react-router";
import RandomCover from "./RandomCover";
import logo from "../../../assets/logonuevo.svg";

const Layout = () => (
  <div className="min-h-dvh bg-stone-100">
    <header className="bg-ml-red shadow">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="/" className="flex items-center">
          <img src={logo} className="h-20 w-auto" alt="mis lupin" />
        </a>
        <div className="flex items-center gap-4">
          <RandomCover />
          <a href="/login" className="font-semibold text-white">
            Login
          </a>
        </div>
      </nav>
    </header>
    <main className="mx-auto max-w-6xl px-4 py-6">
      <Outlet />
    </main>
  </div>
);

export default Layout;
