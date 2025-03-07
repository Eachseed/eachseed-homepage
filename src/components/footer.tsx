import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-6">
          <div className="text-center text-sm mb-4">
            <p>&copy; 2025 Eachseed. All rights reserved.</p>
          </div>
    
          {/* Social Media Links */}
          <div className="flex justify-center space-x-4">
            <a
              href="https://instagram.com/eachseed_/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <img
                src="https://img.icons8.com/ios-filled/30/ffffff/instagram-new.png"
                alt="Instagram"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/105748238/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <img
                src="https://img.icons8.com/ios-filled/30/ffffff/linkedin.png"
                alt="LinkedIn"
              />
            </a>
          </div>
        </footer>
  )
}
