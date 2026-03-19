function Project() {
  return (
    <section
      id="projects"
      className="max-w-[1600px] justify-items-center mx-auto px-6 py-24 bg-gradient-to-br from-[#f8fafc] to-[#eef2ff]"
    >
      <h2 className="text-4xl font-bold text-center mb-12">
        My Projects
      </h2>

      <div className="w-[90%] grid md:grid-cols-3 gap-8">

        {/* CARD */}
        <div className="group relative rounded-2xl overflow-hidden shadow-lg">

          {/* IMAGE */}
          <img
            src="/assets/1.jpg"
            alt="project"
            className="w-full -[250px] object-cover group-hover:scale-110 transition duration-500"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex flex-col justify-center items-center text-white text-center p-4">

            <h3 className="text-xl font-bold mb-2">Portfolio Website</h3>

            <p className="text-sm mb-4">
              React + Tailwind modern portfolio design
            </p>

            <div className="flex gap-4">
              <button className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">
                Live
              </button>
              <button className="border border-white px-4 py-2 rounded hover:bg-white hover:text-black">
                Code
              </button>
            </div>

          </div>

        </div>

        {/* CARD 2 */}
        <div className="group relative rounded-2xl overflow-hidden shadow-lg">
          <img
            src="/assets/showing-cart-trolley-shopping-online-sign-graphic.jpg"
            className="w-full h-[250px] object-cover group-hover:scale-110 transition duration-500"
          />

          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex flex-col justify-center items-center text-white text-center p-4">
            <h3 className="text-xl font-bold mb-2">E-commerce UI</h3>
            <p className="text-sm mb-4">
              Shopping UI built with React
            </p>

            <div className="flex gap-4">
              <button className="bg-blue-600 px-4 py-2 rounded">
                Live
              </button>
              <button className="border px-4 py-2 rounded">
                Code
              </button>
            </div>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="group relative rounded-2xl overflow-hidden shadow-lg">
          <img
            src="/assets/tree-desert-white-clouds-daytime.jpg"
            className="w-full h-[250px] object-cover group-hover:scale-110 transition duration-500"
          />

          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex flex-col justify-center items-center text-white text-center p-4">
            <h3 className="text-xl font-bold mb-2">Weather App</h3>
            <p className="text-sm mb-4">
              API based weather application
            </p>

            <div className="flex gap-4">
              <button className="bg-blue-600 px-4 py-2 rounded">
                Live
              </button>
              <button className="border px-4 py-2 rounded">
                Code
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Project;