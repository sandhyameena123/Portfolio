function Contact() {
  return (
    <section
      id="contact"
      className="max-w-[1600px] mx-auto px-6 py-24 justify-items-center  bg-gradient-to-br from-[#f8fafc] via-[#eef2ff] to-[#e0f2fe]"
    >
      <div className="w-[90%] flex flex-col md:flex-row gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="md:w-1/2">
          <h2 className="text-5xl font-bold mb-6 leading-tight">
            Let’s Build <br />
            <span className="text-blue-600">Something Amazing</span>
          </h2>

          <p className="text-gray-600 mb-8 text-lg">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>

          <div className="space-y-4 text-gray-700">
            <p>📧 yourmail@gmail.com</p>
            <p>📱 +91 7898094834</p>
            <p>📍 India</p>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="md:w-1/2 w-full">

          <div className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-3xl shadow-xl p-8">

            <form className="flex flex-col gap-6">

              {/* INPUT GROUP */}
              <div className="relative">
                <input
                  type="text"
                  required
                  className="w-full p-4 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 peer"
                />
                <label className="absolute left-4 top-4 text-gray-500 text-sm transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-500 bg-white px-1">
                  Your Name
                </label>
              </div>

              <div className="relative">
                <input
                  type="email"
                  required
                  className="w-full p-4 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 peer"
                />
                <label className="absolute left-4 top-4 text-gray-500 text-sm transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-500 bg-white px-1">
                  Your Email
                </label>
              </div>

              <div className="relative">
                <textarea
                  rows="4"
                  required
                  className="w-full p-4 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 peer"
                />
                <label className="absolute left-4 top-4 text-gray-500 text-sm transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-500 bg-white px-1">
                  Your Message
                </label>
              </div>

              {/* BUTTON */}
              <button className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 hover:scale-105 transition transform shadow-md">
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;