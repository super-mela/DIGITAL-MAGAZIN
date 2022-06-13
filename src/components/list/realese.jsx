import { Image } from "../image";
import { TailSpin } from "react-loader-spinner";
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from "react";
import JsonData from '../../data/data.json'

export function Realese() {
    const [RealeseData, setRealeseData] = useState({});
    useEffect(() => {
        console.log(JsonData.Gallery.length)
        setRealeseData(JsonData);
    }, []);
    const location = useLocation()
    // const Realesedata = location.state
    const onRealese = () => {
        console.log("On Realese")
    }
    return (
        <div id='portfolio' className='text-center'>
            <div className='container'>
                <div className='section-title'>
                    <h2>All Releales</h2>
                    {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p> */}
                </div>
                <div className='row'>
                    <div className='portfolio-items'>
                        {/* {console.log(landingPageData)} */}
                        {RealeseData.Gallery ?
                            <div>{
                                RealeseData.Gallery.map((d, i) => (
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
