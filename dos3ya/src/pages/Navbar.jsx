import React, { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* Barra de navegación fija */}
            <div className="fixed top-0 left-0 w-full h-16 bg-[#faf9f0] shadow-md z-50 flex items-center px-4 sm:h-screen sm:w-16 sm:flex-col sm:justify-start">
                {/* Botón hamburguesa */}
                <button
                    className="w-12 h-12 flex items-center justify-center rounded hover:bg-gray-100 focus:outline-none sm:mt-4"
                    onClick={toggleMenu}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="#163fcb"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 6h18M3 12h18M3 18h18"
                        />
                    </svg>
                </button>
            </div>

            {/* Menú desplegable */}
            {isOpen && (
                <div
                    className={`fixed top-16 left-0 h-screen w-full bg-white/80 shadow-lg z-50 sm:top-0 sm:left-16 sm:w-[400px] sm:h-full transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"
                        }`}
                >
                    <div className="flex flex-col h-full">
                        {/* Botón para cerrar */}
                        <button
                            onClick={toggleMenu}
                            className="text-gray-800 text-xl font-bold px-4 py-2 self-end sm:self-start sm:px-6"
                        >
                            &times;
                        </button>

                        {/* Enlaces del menú */}
                        <nav className="flex flex-col mt-4">
                            <a
                                href="#quienes-somos"
                                className="block px-4 py-3 text-gray-800 hover:bg-gray-200 sm:px-6"
                            >
                                ¿Quiénes Somos?
                            </a>
                            <a
                                href="#testimonios"
                                className="block px-4 py-3 text-gray-800 hover:bg-gray-200 sm:px-6"
                            >
                                Testimonios
                            </a>
                            <a
                                href="#contactos"
                                className="block px-4 py-3 text-gray-800 hover:bg-gray-200 sm:px-6"
                            >
                                Contactos
                            </a>
                        </nav>

                        {/* Logo o contenido adicional */}
                        <div className="mt-auto px-4 py-2 sm:px-6">
                            <h6 className="text-black font-bold">Logo</h6>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
