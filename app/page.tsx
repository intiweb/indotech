import Link from "next/link";
import styles from "./ui/home.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <header className={`bg-cover bg-no-repeat bg-center bg-opacity-10 ${styles.bgheader}`}>
        <div className="w-full h-[100vh] bg-gradient-to-t from-transparent to-slate-900 absolute opacity-90"></div>
        <div className="w-full h-[200px] bg-gradient-to-t from-white to-transparent absolute left-0 bottom-0"></div>
        <section className="w-full max-w-[1200px] m-auto bg-transparent absolute inset-x-px z-20 py-4 flex flex-row justify-between">
          <a href="/" className="flex gap-2 items-center text-white hover:text-blue-300">
            <h1 className="uppercase text-xl tracking-wider font-normal">
              indotech
            </h1>
          </a>
          <div className="flex gap-4 items-center">
            <Link
              key={'nosotros'}
              href={'#section-nosotros'}
              className="uppercase font-medium text-white hover:text-blue-300"
            >
              nosotros
            </Link>
            <Link
              key={'contratos'}
              href={'#section-contratos'}
              className="uppercase font-medium text-white hover:text-blue-300"
            >
              postula
            </Link>
            <Link
              key={'empresa'}
              href={'#section-empresa'}
              className="uppercase font-medium text-white hover:text-blue-300"
            >
              contacto
            </Link>
            <Link
              key={'nosotros'}
              href={'/'}
              className="border-2 border-white rounded-md px-4 py-3 uppercase font-bold bg-white hover:bg-transparent hover:text-white w-[max-content]"
            >
              ingresar
            </Link>
          </div>
        </section>
        <section className="w-full max-w-[1200px] m-auto bg-transparent grid grid-cols-1 grid-rows-[100vh] items-center justify-items-center relative z-10">
          <article className="min-h-[300px] flex flex-row gap-4">
            <section className="flex flex-col gap-10 items-center">
              <h2 className="w-3/4 text-white text-center tracking-wides text-7xl uppercase font-extralight tracking-widert">
                Líder en Asesoría y Gestión Comercial
              </h2>
              <p className="tracking-widest leading-normal w-full text-2xl text-white text-center">Expertos en ventas corporativas y asesoría en telecomunicaciones</p>
            </section>
          </article>
        </section>
      </header>

      {/* nosotros */}
      <section id="section-nosotros" className="w-full max-w-[1200px] m-auto bg-transparent grid grid-cols-1 grid-rows-[40vh] items-center">
        <article className="min-h-[190px] flex flex-row gap-4">
          <article className="relative h-[inherit]">
            <div className="static w-[3px] h-full bg-blue-400 rounded-xl"></div>
            <div className="absolute w-[4px] h-[100px] bg-blue-600 rounded-xl top-20"></div>
          </article>
          <section className="flex flex-col justify-between">
            <h5 className="text-xl text-slate-700 tracking-wider capitalize font-normal">nosotros</h5>
            <p className="text-xl tracking-widest leading-normal w-3/4">Indotech es un distribuidor autorizado de Movistar a nivel corporativo, especializado en la venta de servicios de telecomunicaciones como telefonía fija, móvil, CAEQ, servicios avanzados y multipunto. Nos destacamos por brindar un servicio de excelencia para satisfacer a nuestros clientes internos y externos.</p>
          </section>
        </article>
      </section>

      {/* vision */}
      <section id="section-vision" className="w-full max-w-[1200px] m-auto bg-transparent grid grid-cols-2 grid-rows-[80vh] items-center">
        <article className="min-h-[200px] flex flex-row gap-4">
          <article className="relative h-[inherit]">
            <div className="static w-[3px] h-full bg-blue-400 rounded-xl"></div>
            <div className="absolute w-[4px] h-[100px] bg-blue-600 rounded-xl bottom-3"></div>
          </article>
          <section className="flex flex-col justify-between">
            <h5 className="text-xl text-slate-700 tracking-wider capitalize font-normal">visión</h5>
            <p className="text-xl tracking-widest leading-normal w-3/4">Ser el principal socio estratégico comercial de empresas que necesiten mejorar su participación en el mercado nacional para el año 2025.</p>
          </section>
        </article>
        <article className="flex justify-center">
          <Image
            src="/vision.png"
            alt="Vision indotech"
            width={1000}
            height={760}
            className="w-[700px] opacity-50 hover:opacity-100"
          />
        </article>
      </section>

      {/* mision */}
      <section id="section-mision" className="w-full max-w-[1200px] m-auto bg-transparent grid grid-cols-2 grid-rows-[80vh] items-center">
        <article className="flex justify-center">
          <Image
            src="/mision.png"
            alt="Mision indotech"
            width={1000}
            height={760}
            className="w-[800px] opacity-50 hover:opacity-100"
          />
        </article>
        <article className="min-h-[310px] flex flex-row gap-4">
          <section className="flex flex-col justify-between items-end">
            <h5 className="text-xl text-slate-700 tracking-wider capitalize font-normal">misión</h5>
            <p className="text-xl tracking-widest leading-normal w-3/4 text-right">Somos una empresa de ventas corporativas en las principales ciudades del Perú. Ofrecemos productos y servicios con un estándar de gestión de ventas diferenciado, comprometidos con el desarrollo de nuestros colaboradores en un entorno de trabajo en equipo, perseverancia y responsabilidad.</p>
          </section>
          <article className="relative h-[inherit]">
            <div className="static w-[3px] h-full bg-blue-400 rounded-xl"></div>
            <div className="absolute w-[4px] h-[100px] bg-blue-600 rounded-xl top-20"></div>
          </article>
        </article>
      </section>

      {/* contratos */}
      <section id="section-contratos" className="bg-black text-white">
        <section className="w-full max-w-[1200px] m-auto bg-transparent grid grid-cols-2 grid-rows-[60vh] items-center">
          <article className="min-h-[350px] flex flex-row gap-4">
            <article className="relative h-[inherit]">
              <div className="static w-[3px] h-full bg-blue-400 rounded-xl"></div>
              <div className="absolute w-[4px] h-[100px] bg-white rounded-xl bottom-20"></div>
            </article>
            <section className="flex flex-col justify-between">
              <h5 className="text-xl text-white tracking-wider capitalize font-extralight">únete a indotech</h5>
              <h4 className="text-2xl text-white uppercase font-light tracking-wider">Buscamos asesores de ventas coorporativas</h4>
              <p className="text-xl tracking-widest leading-normal w-3/4 mt-10 font-extralight">¿Tienes experiencia en ventas y estás buscando una oportunidad para crecer? En Indotech, estamos buscando Asesores de Ventas Corporativas apasionados y con experiencia en ventas.</p>
            </section>
          </article>
          <article className="grid grid-cols-3 grid-rows-2 gap-8">
            <div className="flex flex-col items-center">
              <Image
                src="/comisiones.svg"
                alt="comisiones"
                width={1000}
                height={760}
                className="w-[150px] h-[100px]"
              />
              <p className="text-md tracking-widest leading-normal w-3/4 mt-10 font-light text-center">Comisiones Ilimitadas.</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/bonos.svg"
                alt="bonos"
                width={1000}
                height={760}
                className="w-[150px] h-[100px]"
              />
              <p className="text-md tracking-widest leading-normal w-3/4 mt-10 font-light text-center">Bonos e Incentivos.</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/horarios.svg"
                alt="horarios"
                width={1000}
                height={760}
                className="w-[150px] h-[100px]"
              />
              <p className="text-md tracking-widest leading-normal w-3/4 mt-10 font-light text-center">Horarios Flexibles.</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/premiaciones.svg"
                alt="premiaciones"
                width={1000}
                height={760}
                className="w-[150px] h-[100px]"
              />
              <p className="text-md tracking-widest leading-normal w-3/4 mt-10 font-light text-center">Premiaciones.</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/capacitaciones.svg"
                alt="capacitaciones"
                width={1000}
                height={760}
                className="w-[150px] h-[100px]"
              />
              <p className="text-md tracking-widest leading-normal w-3/4 mt-10 font-light text-center">Capacitaciones Constantes.</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/convenios.svg"
                alt="convenios"
                width={1000}
                height={760}
                className="w-[150px] h-[100px]"
              />
              <p className="text-md tracking-widest leading-normal w-3/4 mt-10 font-light text-center">Convenios Corporativos.</p>
            </div>
          </article>
        </section>
      </section>

      {/* boton de whatsapp */}
      <section className="bg-black text-white">
        <section className="w-full max-w-[1200px] m-auto bg-transparent grid grid-cols-1 grid-rows-[20vh] justify-items-center items-center">
          <Link
            key={'whatsapp'}
            href={'https://api.whatsapp.com/send?phone=51920045271&text=%C2%A1Hola!%0A%0AEstoy%20interesado%20en%20trabajar%20con%20Indotech.%20%C2%BFPodr%C3%ADan%20darme%20m%C3%A1s%20informaci%C3%B3n%20sobre%20las%20oportunidades%20disponibles%20y%20c%C3%B3mo%20puedo%20unirme%20a%20su%20equipo%3F%0A%0A%C2%A1Gracias!'}
            className="border-2 border-white rounded-md px-4 py-3 uppercase font-bold hover:bg-white hover:text-black w-[max-content]"
            target="blank"
          >
            únete ahora
          </Link>
        </section>
      </section>

      {/* información de la empresa */}
      <section id="section-empresa" className="w-full max-w-[1200px] m-auto bg-transparent grid grid-cols-1 grid-rows-[60vh] items-center">
        <article className="min-h-[350px] flex flex-row gap-4">
          <article className="relative h-[inherit]">
            <div className="static w-[3px] h-full bg-blue-400 rounded-xl"></div>
            <div className="absolute w-[4px] h-[100px] bg-blue-600 rounded-xl bottom-2"></div>
          </article>
          <section className="flex flex-col justify-between gap-4">
            <h5 className="text-xl text-slate-700 tracking-wider capitalize font-normal mb-10">Nuestra Información</h5>
            <p className="text-xl tracking-widest leading-normal w-3/4">
              <strong>Whatsapp:</strong> <br />
              <Link
                key={'whatsapp_number'}
                href={'https://api.whatsapp.com/send?phone=51920045271&text=%C2%A1Hola!%0A%0AEstoy%20interesado%20en%20trabajar%20con%20Indotech.%20%C2%BFPodr%C3%ADan%20darme%20m%C3%A1s%20informaci%C3%B3n%20sobre%20las%20oportunidades%20disponibles%20y%20c%C3%B3mo%20puedo%20unirme%20a%20su%20equipo%3F%0A%0A%C2%A1Gracias!'}
                className="hover:text-blue-500"
                target="blank"
              >
                +51 920045271
              </Link>
            </p>
            <p className="text-xl tracking-widest leading-normal w-3/4">
              <strong>Correo Electrónico:</strong> <br />
              <span>reclutamiento@indotechsac.com</span>
            </p>
            <p className="text-xl tracking-widest leading-normal w-full">
              <strong>Nuestras Oficinas:</strong> <br />
              <span>- Jr. Tacna Nro. 561 - 3er Piso Ofi. 302 - Huancayo - Huancayo - Júnin </span> <br />
              <span>- Av. Luis Espejo Nro. 1097 - 6to Piso Ofi. 601 - Santa Catalina - La Victoria - Lima</span>
            </p>
          </section>
        </article>
      </section>

      <footer>
        <section className="w-full max-w-[1200px] m-auto bg-transparent grid grid-cols-1 grid-rows-[10vh] items-center">
          <h5 className="text-xl text-slate-700 tracking-wider capitalize font-normal">
            Desarrollado por <a href="/" className="lowercase font-medium text-slate-900 hover:text-blue-500">Indotechsac.com</a>
          </h5>
        </section>
      </footer>
    </div>
  );
}
