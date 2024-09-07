

function Navbar() {
   return (
      <nav>
         <div className="nav-wrapper">
            <a href="#!" className="brand-logo left">Logo</a>
            <ul className="center hide-on-med-and-down">
               <li><a href="sass.html">Sass</a></li>
               <li><a href="badges.html">Components</a></li>
               <li className="active"><a href="collapsible.html">JavaScript</a></li>
            </ul>
         </div>
      </nav>
   )
}

export default Navbar