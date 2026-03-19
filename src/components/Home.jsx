import About from "./About";
import Contact from "./Contact";
import Project from "./Project";
import Skills from "./Skills";

function Home() {
  return (
    <>
 <section className="max-w-[1600px] mx-auto min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-100">

  <div className="w-[90%]  flex flex-col md:flex-row items-center justify-between">

    {/* LEFT SIDE */}
    <div className="md:w-1/2">

      <h1 className="text-5xl font-bold leading-tight">
        Hi, I'm <span className="text-blue-600">Sandhya</span>
      </h1>

      <h2 className="text-2xl mt-4 text-gray-700">
        React Developer
      </h2>

      <p className="mt-4 text-gray-600">
        I build modern, responsive websites using React and Tailwind CSS.
      </p>

      <div className="flex gap-4 mt-6">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
          View Projects
        </button>

        <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white">
          Download CV
        </button>
      </div>

      <div className="flex gap-4 mt-6 text-gray-600">
        <a href="#">GitHub</a>
        <a href="#">LinkedIn</a>
        <a href="#">Twitter</a>
      </div>

    </div>

    {/* RIGHT SIDE */}
    <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
      <img
        src="/assets/1.jpg"
        alt="profile"
        className="w-[300px] h-[300px] object-cover rounded-full border-4 border-white shadow-lg"
      />
    </div>

  </div>
</section>

      <About />
      <Skills />
      <Project />
      <Contact />
     
    </>
  );
}

export default Home;

// import About from "./About";
// import Contact from "./Contact";
// import Project from "./Project";
// import Skills from "./Skills";

// function Home() {
//   return (
//     <>
//       <section className="min-h-[80vh] flex items-center justify-center bg-gray-100">

//         <div className="max-w-[900px] text-center px-4">

//           <h1 className="text-5xl font-bold">
//             Hi, I'm <span className="text-blue-600">Sandhya</span>
//           </h1>

//           <h2 className="text-2xl mt-4 text-gray-700">
//             React Developer
//           </h2>

//           <p className="mt-4 text-gray-600">
//             I build responsive and modern web applications using React and Tailwind CSS.
//           </p>

//           <div className="flex justify-center gap-4 mt-6">

//             <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
//               View Projects
//             </button>

//             <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white">
//               Contact Me
//             </button>

//           </div>

//         </div>

//       </section>

//       <About />
//       <Skills />
//       <Project />
//       <Contact />
//     </>
//   );
// }

// export default Home;