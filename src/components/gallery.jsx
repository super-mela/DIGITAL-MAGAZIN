import { Image } from "./image";
import { TailSpin } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";

export const Gallery = (props) => {
  const navigate = useNavigate()
  const onRealese = () => {
    console.log("On Realese")
    navigate("/realese_list", {
      state: props
    })
  }
  return (
    <div id='portfolio' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Latest Releales</h2>
          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p> */}
        </div>
        <div className='row'>
          <div className='portfolio-items'>
            {props.data ?
              <div>{
                props.data.map((d, i) => (
                  <div key={`${d.title}-${i}`} className='col-sm-6 col-md-4 col-lg-4'>
                    <Image title={d.title} largeImage={d.largeImage} smallImage={d.smallImage} />
                    <p>{d.title}</p>
                  </div>
                ))}
                <button onClick={() => onRealese()} style={{ marginTop: "30px" }} className='btn btn-custom btn-lg'> SEE MORE</button>
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
    </div>
  )
}
