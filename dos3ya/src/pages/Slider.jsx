

function Slider() {
    const sections = [
        {
            title: "COMUNIDAD",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac.",
            bgColor: "bg-[#141414]",
            titleColor: "text-[#163fcb]",
            textColor: "text-white",
        },
        {
            title: "DISEÑO",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum.",
            bgColor: "bg-[#163fcb]",
            titleColor: "text-[#faf9f0]",
            textColor: "text-[#faf9f0]",
        },
        {
            title: "RECONOCIMIENTO",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Nullam ac erat ante. Sed pellentesque, nunc sit amet tempor pharetra, risus metus viverra velit, eget consequat enim dolor ut purus. Ut non malesuada neque. Aliquam erat volutpat.",
            bgColor: "bg-[#faf9f0]",
            titleColor: "text-[#163fcb]",
            textColor: "text-[#141414]",
        },
    ];

    return (
        <div className="relative w-full">
            <div className="absolute inset-0 z-0">
                {/* Fondo o contenido adicional */}
            </div>
            <div className="relative z-10 flex flex-col">
                {sections.map((section, index) => (
                    <div
                        key={index}
                        className={`h-[600px] flex flex-col ${section.bgColor} sticky top-0 shadow-[0px_-4px_6px_rgba(0,0,0,0.1)]`} // Sombra superior leve
                    >
                        {/* Título arriba a la izquierda */}
                        <h1
                            className={`font-corporates text-4xl md:text-8xl p-8 ${section.titleColor}`}
                        >
                            {section.title}
                        </h1>

                        {/* Texto centrado */}
                        <div className="flex-1 flex justify-center items-center">
                            <p
                                className={`text-2xl md:text-3xl font-ivyora text-center px-4 ${section.textColor}`}
                            >
                                {section.text}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>




    );
}

export default Slider;

