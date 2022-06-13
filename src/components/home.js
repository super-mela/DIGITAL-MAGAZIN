import { useEffect, useState } from "react";
import { Navigation } from "./navigation";
import { Features } from "./features";
import { Gallery } from "./gallery";
import { Header } from "./header";
import { Footer } from "./footer";
import { Contact } from "./contact";
import JsonData from "../data/data.json"
import SmoothScroll from "smooth-scroll";
export default function Home() {
    const [landingPageData, setLandingPageData] = useState({});
    useEffect(() => {
        setLandingPageData(JsonData);
    }, []);
    return (
        <div>
            {/* <Navigation /> */}
            <Header data={landingPageData.Header} />
            <Gallery data={landingPageData.Gallery} />
            <Features data={landingPageData.Features} />
            <Contact data={landingPageData.Contact} />
            {/* <Footer /> */}
        </div>

    )
}