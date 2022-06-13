import { TailSpin } from "react-loader-spinner"
import { useNavigate } from "react-router-dom"
export const Features = (props) => {
  const navigate = useNavigate()
  const onArticle = () => {
    console.log("on Article")
    navigate("/article_list", {
      state: props
    })
  }
  return (
    <div id='features' className='text-center'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2>Latest Articles</h2>
        </div>
        <div className='row'>
          {props.data ?
            <div className='portfolio-item'>{
              props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-xs-6 col-md-3'>
                  {' '}
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))}
              <button onClick={() => onArticle()} style={{ margin: "30px 0px" }} className='btn btn-custom btn-lg'> SEE MORE</button>
            </div>
            : <TailSpin
              height="100"
              width="100"
              color='blue'
              ariaLabel='loading'
            />}
        </div>
      </div>
    </div>
  )
}
