const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-primary/20 py-12 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-4">
            <span className="gradient-text">Tech</span>
            <span className="text-white">Solutions</span>
          </h3>
          <p className="text-gray-400 text-sm">
            Your partner in digital growth. We build websites, apps & marketing 
            campaigns that deliver results.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-primary">Services</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#services" className="hover:text-primary transition">Web Development</a></li>
            <li><a href="#services" className="hover:text-primary transition">Digital Marketing</a></li>
            <li><a href="#services" className="hover:text-primary transition">Mobile Apps</a></li>
            <li><a href="#services" className="hover:text-primary transition">SEO</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-primary">Quick Links</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#home" className="hover:text-primary transition">Home</a></li>
            <li><a href="#services" className="hover:text-primary transition">Services</a></li>
            <li><a href="#about" className="hover:text-primary transition">About</a></li>
            <li><a href="#contact" className="hover:text-primary transition">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-primary/20 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} TechSolutions. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer