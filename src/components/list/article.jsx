import { TailSpin } from "react-loader-spinner"
import { useLocation } from "react-router-dom"
import { useState, useEffect } from "react";
import JsonData from '../../data/data.json'

export const Article = (props) => {
    const [articleData, setArticleData] = useState({});
    useEffect(() => {
        console.log(JsonData.Gallery.length)
        setArticleData(JsonData);
    }, []);
    const location = useLocation()
    // const articleData = location.state
    const onArticle = () => {
        console.log("on Article")

    }
    return (
        <div id='features' className='text-center' style={{ marginTop: '80px' }}>
            <div className='container'>
                <div className='col-md-10 col-md-offset-1 section-title'>
                    <h2>All Articles</h2>
                </div>
                <div className='row'>
                    {articleData.Features ?
                        <div>{
                            articleData.Features.map((d, i) => (
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
