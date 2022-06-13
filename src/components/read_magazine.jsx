import React, { useCallback, useEffect, useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import "../flipPages/style.css";
import FlipData from "../flipPages/data.json";
import TextImg from "../assets/imgs/some_random_text.jpg";
import ImageBlend from "../assets/imgs/some_blend.jpg";
import graywood from "../assets/imgs/gray_wood.jpg"
import blackwood from "../assets/imgs/black_wood.jpeg"

export function ReadMagazine() {

    const { flipData } = FlipData;
    const book = useRef();
    const [pageCount, setPageCount] = useState(0)
    const [currentPage, setCurrentPage] = useState(0)
    const [selectPage, setSelectPage] = useState(0)
    const [prevButtonState, setprevButtonState] = useState(true);
    const [nextButtonState, setnextButtonState] = useState(false);
    const onInit = useCallback((e) => {
        setPageCount(book.current.pageFlip().getPageCount() - 2)

    }, []);
    const onFlip = useCallback((e) => {
        const pagenum = book.current.pageFlip().getCurrentPageIndex();
        setCurrentPage(pagenum)
        if (pagenum === 1 || pagenum < 1) {
            setprevButtonState(true);
        } else if (pagenum === (pageCount)) {
            setnextButtonState(true);
        } else {
            setprevButtonState(false);
            setnextButtonState(false);
        }
    }, []);

    const privPage = () => {
        const pagenum = book.current.pageFlip().getCurrentPageIndex()
        setCurrentPage(pagenum)
        if (pagenum < 1) {
            setprevButtonState(true)
        }
        setnextButtonState(false)
        book.current.pageFlip().flipPrev()
    }
    const nextPage = () => {
        const pagenum = book.current.pageFlip().getCurrentPageIndex();
        setCurrentPage(pagenum)
        setprevButtonState(false)
        if (pagenum === pageCount) {
            setnextButtonState(true)
        }
        book.current.pageFlip().flipNext()
    }
    const closeBook = () => {
        book.current.pageFlip().destroy()
    }
    const flip = () => {
        if (selectPage === "") {
            alert("Insert proper page number")
        }
        book.current.pageFlip().flip(JSON.parse(selectPage))
    }

    return (
        <div className="text-center" style={{ marginTop: '80px', minHeight: "100vh", background: "#f6f6f6", paddingTop: "20px" }}>
            <div className='container'>
                {/* <div style={{ position: "fixed", width: "100%", zIndex: 1 }}>
                <div className="header">
                    <div className="home-nav">Home</div>
                    <div className="option">
                        <a>Features</a>
                        <a>About</a>
                        <a>Service</a>
                        <a>Contact</a>
                    </div>
                </div>
                </div> */}
                {/* <div style={{ position: "relative", top: "5.4rem" }}> */}
                <button style={{ display: "flex", position: "absolute", right: "15px", top: "0px", padding: "5px" }} onClick={() => closeBook()}>Close</button>
                <input style={{ padding: "5px", marginRight: "5px", border: "1px solid blue", borderRadius: "10px", boxShadow: "0px 0px 100px gray", backgroundColor: "#f6f6f6" }} type="number" max={pageCount} min="0" onChange={(e) => setSelectPage(e.target.value)} />
                <button className="btn btn-custom btn-lg" style={{ padding: "5px", marginRight: "25px" }} onClick={() => flip()}>Go</button>
                <div className="main-page-container" style={{ marginTop: "25px", marginBottom: "25px" }}>
                    <HTMLFlipBook
                        showCover={false}
                        width={500}
                        height={600}
                        style={{ margin: "0 auto", boxShadow: "0px 0px 100px gray" }}
                        onInit={onInit}
                        onFlip={onFlip}
                        ref={book}

                    >

                        <img src={graywood} alt="" />
                        <img src={'/img/portfolio/01-large.jpg'} alt="" />

                        {flipData.map((el, i) => (
                            <div className="demoPage" key={el.id}>
                                <img src={TextImg} alt="" />
                            </div>
                        ))}
                        <img src={'/img/portfolio/02-large.jpg'} alt="" />

                        <img src={graywood} alt="" />

                    </HTMLFlipBook>
                </div>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <button className="btn btn-custom btn-lg" disabled={prevButtonState} style={{ padding: "5px", marginRight: "15px" }} onClick={() => privPage()}>Privious</button>
                    <div style={{ color: "gray" }}>
                        page {currentPage} of {pageCount}
                    </div>
                    <button className="btn btn-custom btn-lg" disabled={nextButtonState} style={{ padding: "5px", marginLeft: "15px" }} onClick={() =>
                        nextPage()}>Next </button>
                </div>
            </div>

        </div>
    )
}
//style={{ diplay: "flex", justifyContent: "center", alignItems: "center", color: "black", height: "100vh", marginTop: "100px" }}