function Header({ isSignedIn, onSignIn, onSignOut }) {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#hero" className="text-2xl font-bold text-indigo-600">Sunova</a>
        <div className="flex items-center space-x-6">
          <a href="#about" className="text-gray-600 hover:text-indigo-600 transition-colors">About Us</a>
          <a href="#contact" className="text-gray-600 hover:text-indigo-600 transition-colors">Contact</a>
          <button 
            onClick={isSignedIn ? onSignOut : onSignIn}
            className="bg-indigo-600 text-white py-2 px-4 rounded-full font-medium shadow-md hover:bg-indigo-700 transition-colors"
          >
            {isSignedIn ? 'Sign Out' : 'Sign In'}
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header