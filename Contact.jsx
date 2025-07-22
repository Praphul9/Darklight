
export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto p-10">
      <h2 className="text-3xl font-semibold text-purple-500 mb-6">Contact Us</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Name" className="w-full p-2 rounded bg-gray-800 text-white" />
        <input type="email" placeholder="Email" className="w-full p-2 rounded bg-gray-800 text-white" />
        <textarea placeholder="Message" rows="4" className="w-full p-2 rounded bg-gray-800 text-white"></textarea>
        <button className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded">Send</button>
      </form>
    </div>
  );
}
