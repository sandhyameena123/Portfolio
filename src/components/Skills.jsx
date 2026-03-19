function Skills() {
  return (
    <section className="max-w-[1600px] mx-auto px-6 justify-items-center py-24 bg-gray-50">

      <div className=" text-center mb-12">
        <h2 className="text-4xl font-bold">Skills</h2>
        <p className="text-gray-500 mt-2">
          Technologies I work with
        </p>
      </div>

      <div className="w-[90%] grid grid-cols-2 md:grid-cols-4 gap-8">

        <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition text-center">
          React
        </div>

        <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition text-center">
          JavaScript
        </div>

        <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition text-center">
          Tailwind CSS
        </div>

        <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition text-center">
          Git & GitHub
        </div>

      </div>

    </section>
  );
}

export default Skills;