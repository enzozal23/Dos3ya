import ayudarnos from '../../image/marcas/ayudarnos.webp';
import ciudadania from '../../image/marcas/ciudadaniacroata.webp';
import consciencia from '../../image/marcas/consciencia.webp';
import guanaco from '../../image/marcas/guanaco.webp';
import hellobaby from '../../image/marcas/hellobaby.webp';
import labsa from '../../image/marcas/labsa.webp';
import mbz from '../../image/marcas/mbz.webp';
import porto from '../../image/marcas/porto.webp';
import vanina from '../../image/marcas/vanina.webp';
import xs from '../../image/marcas/xs.webp';

function Brands() {
    return (
        <div className="h-[360px] bg-[#141414] relative flex items-center justify-center mobile:h-[100px]">
            {/* Títulos */}
            <h2 className="absolute text-[#163fcb] text-8xl font-corporates z-10 pb-20 mobile:static mobile:pb-2 mobile:hidden">
                NUESTRO
            </h2>
            <span className="absolute font-ivyora text-9xl z-20 text-[#faf9f0] mobile:static mobile:hidden">
                porfolio
            </span>

            {/* Contenido */}
            <div className="flex justify-between w-full px-5 ml-20 mobile:hidden">
                {/* Columna izquierda */}
                <div className="flex flex-col items-center gap-4">
                    <div className="flex gap-8">
                        <a href="/ayudarnos" aria-label="Ir a Ayudarnos">
                            <img src={ayudarnos} alt="Ayudarnos" className="h-[80px] object-contain" />
                        </a>
                        <a href="/ciudadania" aria-label="Ir a Ciudadanía Croata">
                            <img src={ciudadania} alt="Ciudadanía Croata" className="h-[80px] object-contain" />
                        </a>
                    </div>
                    <div className="flex gap-32">
                        <a href="/consciencia" aria-label="Ir a Consciencia">
                            <img src={consciencia} alt="Consciencia" className="h-[80px] object-contain" />
                        </a>
                        <a href="/guanaco" aria-label="Ir a Guanaco">
                            <img src={guanaco} alt="Guanaco" className="h-[80px] object-contain" />
                        </a>
                    </div>
                    <a href="/hellobaby" aria-label="Ir a Hello Baby">
                        <img src={hellobaby} alt="Hello Baby" className="h-[80px] object-contain" />
                    </a>
                </div>

                {/* Columna derecha */}
                <div className="flex flex-col items-center gap-4 mr-20">
                    <div className="flex gap-8">
                        <a href="/labsa" aria-label="Ir a Labsa">
                            <img src={labsa} alt="Labsa" className="h-[80px] object-contain" />
                        </a>
                        <a href="/mbz" aria-label="Ir a MBZ">
                            <img src={mbz} alt="MBZ" className="h-[80px] object-contain" />
                        </a>
                    </div>
                    <div className="flex gap-32">
                        <a href="/porto" aria-label="Ir a Porto">
                            <img src={porto} alt="Porto" className="h-[80px] object-contain" />
                        </a>
                        <a href="/vanina" aria-label="Ir a Vanina">
                            <img src={vanina} alt="Vanina" className="h-[120px] object-contain" />
                        </a>
                    </div>
                    <a href="/xs" aria-label="Ir a XS">
                        <img src={xs} alt="XS" className="h-[60px] object-contain" />
                    </a>
                </div>
            </div>

            {/* Carrusel para mobile */}
            <div className="hidden mobile:flex mobile:overflow-hidden mobile:relative mobile:w-full top-2">
                <div className="flex mobile:animate-marquee">
                    <img src={ayudarnos} alt="Ayudarnos" className="h-[40px] object-contain mx-4" />
                    <img src={ciudadania} alt="Ciudadanía Croata" className="h-[60px] object-contain mx-4" />
                    <img src={consciencia} alt="Consciencia" className="h-[60px] object-contain mx-4" />
                    <img src={guanaco} alt="Guanaco" className="h-[60px] object-contain mx-4" />
                    <img src={hellobaby} alt="Hello Baby" className="h-[60px] object-contain mx-4" />
                    <img src={labsa} alt="Labsa" className="h-[60px] object-contain mx-4" />
                    <img src={mbz} alt="MBZ" className="h-[60px] object-contain mx-4" />
                    <img src={porto} alt="Porto" className="h-[60px] object-contain mx-4" />
                    <img src={vanina} alt="Vanina" className="h-[80px] object-contain mx-4" />
                    <img src={xs} alt="XS" className="h-[40px] object-contain mx-4" />
                </div>
            </div>
        </div>


    );
}

export default Brands;

