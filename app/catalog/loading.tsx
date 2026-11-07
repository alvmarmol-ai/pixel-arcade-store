
export default function Loading() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-[#090914] px-6">

      <div className="w-full max-w-3xl text-center">

        <div className="mx-auto mb-8 h-16 w-16 animate-spin rounded-full border-4 border-purple-600 border-t-lime-400" />

        <h2 className="text-3xl font-black text-white">
          PIXEL ARCADE
        </h2>

        <p className="mt-3 font-bold tracking-widest text-lime-400">
          CARGANDO VIDEOJUEGOS...
        </p>

        <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="overflow-hidden rounded-xl border border-purple-900/40 bg-[#151525]"
            >
              <div className="h-40 animate-pulse bg-purple-900/30" />
              <div className="space-y-3 p-4">
                <div className="h-4 animate-pulse rounded bg-gray-700" />
                <div className="h-4 w-2/3 animate-pulse rounded bg-gray-800" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
