const Contact = () => {
    return (
      <section id="contact" className="p-8 mt-16 bg-gray-100">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <form className="flex flex-col">
          <input type="email" placeholder="Your Email" className="p-2 border rounded mb-4" required />
          <textarea placeholder="Your Message" className="p-2 border rounded mb-4" rows="4" required></textarea>
          <button type="submit" className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700">Send</button>
        </form>
      </section>
    );
  };
  
  export default Contact;
  