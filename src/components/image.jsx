import { FaBookReader, FaBookOpen } from 'react-icons/fa';
import { Link } from 'react-router-dom';
export const Image = ({ title, largeImage, smallImage }) => {
  return (
    <div className='portfolio-item'>
      <Link to={'/read_magazine'}>
        <div className='hover-bg'>
          {' '}
          <a
            href={largeImage}
            // title={title}
            data-lightbox-gallery='gallery1'
          >
            <div className='hover-text'>

              <h4> <FaBookOpen /> Read</h4>
            </div>
            <img
              // style={{ width: "331px", height: '490px' }}
              src={largeImage}
              className='img-responsive'
              alt={title}
            />{' '}
          </a>{' '}
        </div>
      </Link>
    </div>
  )
}