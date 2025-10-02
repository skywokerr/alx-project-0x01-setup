const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto">
        <ul className="flex space-x-4">
          <li><a href="/" className="hover:text-gray-300">Home</a></li>
          <li><a href="/posts" className="hover:text-gray-300">Posts</a></li>
          <li><a href="/users" className="hover:text-gray-300">Users</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;