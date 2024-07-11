import { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";



function Navbar() {
    const NavLinks = () => {
        return (
            <div className="flex flex-col items-center gap-2 bg-red-200">

                <NavLink to="/">Home</NavLink>
                <NavLink to="/login">Log in</NavLink>
                <NavLink to="/dashboard">Tablero</NavLink>
                <NavLink to="/contact">Contacto</NavLink>
            </div>
        )
    }

    const [isOpen, setIsOpen] = useState(false)

    const toggleNavBar = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav className="relative w-full ">
            <span className="">NUTRILU</span>
            <div className="flex justify-end mt-2 mr-6">
                <button className="text-red-400"
                    onClick={toggleNavBar}
                    aria-label="Toggle navigation"
                >{isOpen ? <IoClose /> : <IoMenu />}

                </button>
            </div>

            {isOpen && (
                <div className="absolute top-full right-0 w-36 pr-6">
                    <NavLinks />
                </div>
            )}
        </nav>
    )
}

export default Navbar;