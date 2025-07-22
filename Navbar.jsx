
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-black p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-purple-500">Dark Light</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:text-purple-300">Home</Link>
          <Link to="/about" className="hover:text-purple-300">About</Link>
          <Link to="/services" className="hover:text-purple-300">Services</Link>
          <Link to="/projects" className="hover:text-purple-300">Projects</Link>
          <Link to="/ai-solutions" className="hover:text-purple-300">AI Solutions</Link>
          <Link to="/careers" className="hover:text-purple-300">Careers</Link>
          <Link to="/contact" className="hover:text-purple-300">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
