import {Link} from 'react-router-dom'
const Nav = () => {
  
  return (
    <nav className="navbar">
      <h4>Cabana Day</h4>
      <div>
  <Link to="/">Home</Link>
  <Link to="/cabanalist">Cabanas</Link>
</div>
</nav>
  )
}

export default Nav