function Contact() {
  return (
    <section id="contact" className="p-10 bg-white">
      <h2 className="text-3xl font-bold mb-4">Contact</h2>

      <form className="flex flex-col gap-4 max-w-md">
        <input
          type="text"
          placeholder="Name"
          className="border p-2"
        />

        <input
          type="email"
          placeholder="Email"
          className="border p-2"
        />

        <textarea
          placeholder="Message"
          className="border p-2"
        />

        <button className="bg-blue-500 text-white p-2">
          Send
        </button>
      </form>
    </section>
  );
}

export default Contact;