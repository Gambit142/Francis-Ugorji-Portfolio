import { Link } from 'react-router-dom'

const Navbar = () => {
  const navlinks = [
    {
      name: 'Hello',
      path: '/',
    },
    {
      name: 'Projects',
      path: '/projects'
    },
    {
      name: 'About Me',
      path: '/about'
    },
    {
      name: 'Contact',
      path: '/contact'
    }
  ]

  return (
    <>
      {navlinks.map((navlink) => {
        <nav>
          <Link to={navlink.path}>{navlink.name}</Link>
        </nav>
      })}
    </>
  )
}

export default Navbar;