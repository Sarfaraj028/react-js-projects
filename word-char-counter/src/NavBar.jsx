import './NavBar.css'


function NavBar({toggleMode}) {

  return (
    <nav>
        <li>
            <h2>TextUtils</h2>
            <a href="/">Home</a>
            <a href='/about'>About</a>
        </li>
        <label onClick={toggleMode}  className="switch">
            <input type="checkbox"  />
            <span className="slider round"></span>
        </label>
    </nav>
  )
}

export default NavBar