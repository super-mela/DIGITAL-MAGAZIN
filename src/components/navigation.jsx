import { Link, useLocation } from "react-router-dom"

export const Navigation = (props) => {
  const location = useLocation()
  const currentPath = location.pathname
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          {currentPath === "/" ?
            <a className='navbar-brand page-scroll' href='#page-top'>
              DigMag
            </a> : <Link to='/' className='page-scroll'>
              <a className='navbar-brand page-scroll' >
                DigMag
              </a>
            </Link>}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            {currentPath === "/" || currentPath === "/realese_list" ?
              <li>
                <a href='#portfolio' className='page-scroll'>
                  Realeses
                </a>
              </li> : <li>
                <Link to='/realese_list' className='page-scroll'>
                  Realeses
                </Link>
              </li>}
            {currentPath === "/" || currentPath === "/article_list" ?
              <li>
                <a href='#features' className='page-scroll'>
                  Articles
                </a>
              </li> : <li>
                <Link to='/article_list' className='page-scroll'>
                  Articles
                </Link>
              </li>}
            {currentPath === "/about" ? <li>
              <a href='#about' className='page-scroll'>
                About
              </a>
            </li> :
              <li>
                <Link to='/about' className='page-scroll'>
                  About
                </Link>
              </li>}
            {currentPath === "/about" ? <li>
              <a href='#services' className='page-scroll'>
                Services
              </a>
            </li> : null}
            {currentPath === "/about" ?
              <li>
                <a href='#testimonials' className='page-scroll'>
                  Testimonials
                </a>
              </li> : null}
            {currentPath === "/about" ?
              <li>
                <a href='#team' className='page-scroll'>
                  Team
                </a>
              </li> : null}
            <li>
              <a href='#contact' className='page-scroll'>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
