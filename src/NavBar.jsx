import React from 'react'

export default function NavBar() {
    return (
        <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-purple-500/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Portfolio
                    </div>
                <div className="hidden md:flex space-x-8">
                    {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                    <button
                        key={item}
                        onClick={() => setActiveSection(item.toLowerCase())}
                        className={`hover:text-purple-400 transition-colors ${
                        activeSection === item.toLowerCase() ? 'text-purple-400' : 'text-gray-300'
                        }`}
                    >
                        {item}
                    </button>
                    ))}
                </div>
                </div>
            </div>
        </nav>
  );
}
