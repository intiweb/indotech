import Image from "next/image";

export default function Home() {
  return (
    <div>
      <header className="bg-cover bg-no-repeat bg-center bg-opacity-10">
        <div className="w-full h-[100vh] bg-gradient-to-t from-transparent to-slate-900 absolute opacity-90"></div>
        <div className="w-full h-[200px] bg-gradient-to-t from-white to-transparent absolute left-0 bottom-0"></div>
        <section className="w-full max-w-[1200px] m-auto bg-transparent absolute inset-x-px z-20 py-4 flex flex-row justify-between">
            <a href="/" className="flex gap-2 items-center text-white hover:text-blue-300">
                <h1 className="uppercase text-xl tracking-wider font-normal">
                  indotech
                </h1>
            </a>
            <div className="flex gap-4 items-center">
                <a href="#section-nosotros" className="uppercase font-medium text-white hover:text-blue-300">nosotros</a>
                <a href="#section-contratos" className="uppercase font-medium text-white hover:text-blue-300">postula</a>
                <a href="#section-empresa" className="uppercase font-medium text-white hover:text-blue-300">contacto</a>
                <a href="/login" className="border-2 border-white rounded-md px-4 py-3 uppercase font-bold bg-white hover:bg-transparent hover:text-white w-[max-content]">ingresar</a>
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
    </div>
  );
}
