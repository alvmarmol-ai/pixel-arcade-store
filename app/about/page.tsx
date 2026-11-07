import SectionTitle from "@/components/SectionTitle";

export default function AboutPage() {
  return (
    <section className="mx-auto min-h-screen max-w-7xl px-6 py-20">

      <SectionTitle
        title="SOBRE PIXEL ARCADE"
        subtitle="Conoce nuestra pasión por los videojuegos."
      />

      {/* Presentación */}
      <div className="grid items-center gap-12 md:grid-cols-2">

        <div>
          <span className="font-bold tracking-widest text-lime-400">
            NUESTRA HISTORIA
          </span>

          <h2 className="mt-4 text-4xl font-black leading-tight">
            MÁS QUE UNA TIENDA,
            <span className="block text-purple-500">
              UNA EXPERIENCIA GAMER.
            </span>
          </h2>

          <p className="mt-6 leading-8 text-gray-400">
            Pixel Arcade Store nace de la pasión por los
            videojuegos y la tecnología. Nuestro objetivo
            es ofrecer un espacio donde los jugadores
            puedan descubrir, explorar y disfrutar de
            sus videojuegos favoritos.
          </p>

          <p className="mt-4 leading-8 text-gray-400">
            Queremos convertirnos en una tienda de
            referencia para la comunidad gamer,
            ofreciendo variedad, calidad y una
            experiencia de compra sencilla.
          </p>
        </div>

        <div className="flex min-h-80 items-center justify-center rounded-3xl border border-purple-800/50 bg-gradient-to-br from-purple-900/50 to-lime-900/20 p-10">

          <div className="text-center">
            <div className="text-8xl">🎮</div>

            <h3 className="mt-6 text-3xl font-black">
              PIXEL ARCADE
            </h3>

            <p className="mt-3 tracking-widest text-lime-400">
              PLAY. EXPLORE. REPEAT.
            </p>
          </div>

        </div>
      </div>

      {/* Misión y visión */}
      <div className="mt-24 grid gap-8 md:grid-cols-2">

        <div className="rounded-2xl border border-purple-800/50 bg-[#151525] p-8 transition hover:border-purple-500">
          <h3 className="text-2xl font-black text-purple-400">
            NUESTRA MISIÓN
          </h3>

          <p className="mt-5 leading-8 text-gray-400">
            Ofrecer videojuegos de calidad y una
            experiencia accesible, moderna y
            satisfactoria para todos los jugadores.
          </p>
        </div>

        <div className="rounded-2xl border border-lime-800/50 bg-[#151525] p-8 transition hover:border-lime-400">
          <h3 className="text-2xl font-black text-lime-400">
            NUESTRA VISIÓN
          </h3>

          <p className="mt-5 leading-8 text-gray-400">
            Ser una tienda reconocida por nuestra
            innovación, variedad de videojuegos
            y compromiso con la comunidad gamer.
          </p>
        </div>

      </div>

      {/* Valores */}
      <div className="mt-24">
        <SectionTitle
          title="NUESTROS VALORES"
          subtitle="Los principios que nos representan."
        />

        <div className="grid gap-6 sm:grid-cols-3">

          {[
            {
              icon: "🚀",
              title: "Innovación",
              description: "Siempre buscamos nuevas experiencias.",
            },
            {
              icon: "💜",
              title: "Pasión",
              description: "Amamos el mundo de los videojuegos.",
            },
            {
              icon: "🎯",
              title: "Compromiso",
              description: "Trabajamos para ofrecer calidad.",
            },
          ].map((value) => (
            <div
              key={value.title}
              className="rounded-2xl border border-purple-900/40 bg-[#151525] p-8 text-center"
            >
              <div className="text-5xl">{value.icon}</div>

              <h3 className="mt-5 text-xl font-bold text-white">
                {value.title}
              </h3>

              <p className="mt-3 text-sm text-gray-400">
                {value.description}
              </p>
            </div>
          ))}

        </div>
      </div>

    </section>
  );
}