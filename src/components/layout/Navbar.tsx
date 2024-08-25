'use client';

import ButtonLogin from "../ui/button/ButtonLogin";
import ButtonSignUp from "../ui/button/ButtonSignUp";
import { ThemeSwitch } from "@/components/providers/ThemeSwitch";

const Navbar = () => {

    return (
        <nav className="flex items-center justify-center gap-x-5">
            <ThemeSwitch />
            <ButtonLogin />
            <ButtonSignUp />
        </nav>
    );
}

export default Navbar;