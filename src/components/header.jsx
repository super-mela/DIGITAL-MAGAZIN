export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-6  intro-text'>
                <h1>
                  {props.data ? props.data.title : 'Loading'}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                <a
                  href='#portfolio'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  Explore Releases
                </a>{' '}
              </div>
              <div className="col-md-6 header-card" >
                <div className="hover-card">
                  <div className='hover-bgt'>
                    <div className='hover-text'>
                      <h4>Read Button</h4>
                    </div>
                    <img src="img/portfolio/01-large.jpg" />
                  </div>
                  <div className="hover-card">
                    <div className='hover-bgt'>
                      <div className='hover-text'>
                        <h4>Read Button</h4>
                      </div>
                      <img src="img/portfolio/02-large.jpg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </header>
  )
}
