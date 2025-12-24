import { useState } from 'react'
import { motion } from 'framer-motion'

const links = ['Home', 'About', 'Education', 'Achievements', 'Music', 'Contact']

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm"
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Tithiksha Shripad</h1>
        <div className="hidden md:flex space-x-8">
          {links.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-[#2F6FDB] transition">
              {link}
            </a>
          ))}
        </div>
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden">
          ☰
        </button>
      </div>
      {mobileOpen && (
        <div className="md:hidden bg-white shadow-lg">
          {links.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} className="block py-3 px-6 hover:bg-gray-50">
              {link}
            </a>
          ))}
        </div>
      )}
    </motion.nav>
  )
}