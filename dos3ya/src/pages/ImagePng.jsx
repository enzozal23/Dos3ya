
import almarda from '../../image/almardatrazo.png'
import gena from '../../image/genatrazo.png'
import lau from '../../image/lautrazo.png'
import lu from '../../image/lutrazo.png'
import pirulina from '../../image/pirulinatrazo.png'


const images = [
    { src: almarda, alt: "almarda", name: "Alma", role: "Social media y community manager" },
    { src: gena, alt: "gena", name: "Genaro", role: "Diseñador y editor" },
    { src: lau, alt: "lau", name: "Lautaro", role: "Community manager" },
    { src: lu, alt: "lu", name: "Lucia", role: "Diseñadora" },
    { src: pirulina, alt: "pirulina", name: "Pierina", role: "Diseñadora" },
];

function ImagePng() {
    return (
        <div className="bg-[#141414] min-h-screen flex justify-center items-center relative">
            {/* Título en la parte superior izquierda */}
            <div className="absolute top-10 left-10 text-white">
                <div className="text-[#163fcb] text-4xl md:text-9xl font-corporates absolute left-0 z-10">
                    <p>NUESTRO</p>
                </div>
                <div className="text-5xl md:text-[150px] font-ivyora absolute left-2 z-20 mt-4 md:mt-14">
                    <p>equipo</p>
                </div>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-3 md:gap-6">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="relative flex flex-col items-center w-32 h-32 md:w-52 md:h-52 group"
                    >
                        {/* Imagen con borde */}
                        <div className="w-full h-full border-4 border-[#163fcb] rounded-full flex justify-center items-center overflow-hidden">
                            <img
                                src={image.src}
                                alt={image.alt}
                                loading="lazy"
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-150"
                            />
                        </div>

                        {/* Nombre al hacer hover */}
                        <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60 rounded-full">
                            <span className="text-white text-lg md:text-2xl font-corporates text-center">{image.name}</span>
                            <span className="text-white text-lg md:text-2xl font-ivyora mt-2 text-center">{image.role}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ImagePng;




