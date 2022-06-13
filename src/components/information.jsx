import { useEffect, useState } from "react";
import { About } from "./about";
import { Services } from "./services";
import { Testimonials } from "./testimonials";
import { Team } from "./Team";
import JsonData from "../data/data.json"
export function Information() {
    const [landingPageData, setLandingPageData] = useState({});
    useEffect(() => {
        setLandingPageData(JsonData);
    }, []);
    return (
        <div>
            <About data={landingPageData.About} />
            <Services data={landingPageData.Services} />
            <Testimonials data={landingPageData.Testimonials} />
            <Team data={landingPageData.Team} />
        </div>
    )
}