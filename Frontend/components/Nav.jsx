import {Link} from 'react-router-dom'
const Nav = () => {
  
  return (
    <nav className="navbar">
      <h4>Cabana <Day></Day></h4>
      <div>
  <Link to="/">Home</Link>
  <Link to="listings">Cabanas</Link>
</div>
</nav>
  )
}

export default Nav