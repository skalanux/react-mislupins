import { Outlet } from "react-router";
import RandomCover from "./RandomCover";
import logo from "../../../assets/logonuevo.svg";

const Layout = () => (
  <div className="min-h-dvh bg-stone-100">
      <header className="sticky top-0 z-20 bg-stone-100 shadow-sm">
        <nav className="mx-auto grid max-w-6xl grid-cols-3 items-center px-4 py-3">
        <a href="/" className="flex items-center justify-self-start">
          <img src={logo} className="h-20 w-auto" alt="mis lupin" />
        </a>
        <div className="justify-self-center">
          <RandomCover />
        </div>
        <div className="flex items-center justify-self-end gap-4">
          <a href="/login" className="font-semibold text-stone-700 hover:text-stone-900">
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
