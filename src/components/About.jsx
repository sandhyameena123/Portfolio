function About() {
  return (
    <section
      id="about"
      className="max-w-[1600px] mx-auto px-6 py-24  justify-items-center bg-gradient-to-br from-white to-blue-50"
    >
      <div className="w-[90%] mx-auto text-center">

        <h2 className="text-4xl font-bold mb-6 relative inline-block">
          About Me
          <span className="block h-1 w-16 bg-blue-600 mt-2 mx-auto rounded"></span>
        </h2>

        <p className="text-gray-600 mb-10 leading-relaxed">
          I am a passionate React Developer who loves building modern,
          responsive, and user-friendly web applications. I enjoy solving
          real-world problems and continuously improving my skills.
        </p>

        {/* CARDS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition text-center">
            <h3 className="font-semibold text-lg">Experience</h3>
            <p className="text-gray-600 text-sm mt-2">1 Year</p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition text-center">
            <h3 className="font-semibold text-lg">Projects</h3>
            <p className="text-gray-600 text-sm mt-2">10+ Completed</p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition text-center">
            <h3 className="font-semibold text-lg">Skills</h3>
            <p className="text-gray-600 text-sm mt-2">React, JS</p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition text-center">
            <h3 className="font-semibold text-lg">Location</h3>
            <p className="text-gray-600 text-sm mt-2">India</p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;