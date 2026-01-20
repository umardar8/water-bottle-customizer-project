import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h4 className="font-bold text-xl">BottleCraft PK</h4>
            <p className="text-gray-400 text-sm">Made with ❤️ in Jamshoro, Pakistan</p>
          </div>
          <div className="flex gap-6 text-sm text-gray-400">
            <Link to="/design" className="hover:text-white">Label Designer</Link>
            <Link to="/careers" className="hover:text-white">Careers</Link>
            <span><a href='https://wa.me/message/LBK7LVG2OJB3C1'>WhatsApp</a></span>
          </div>
        </div>
      </footer>
  )
}

export default Footer
