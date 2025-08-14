function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} Sunova. All rights reserved.</p>
        <p className="mt-2 text-gray-400">CEO and Founder: Suneeth Kokala and Team</p>
      </div>
    </footer>
  )
}

export default Footer