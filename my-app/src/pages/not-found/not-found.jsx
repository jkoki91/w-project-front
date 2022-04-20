import React from "react";
import Footer from "../../components/footer/footer";
import LandingHeader from "../../components/landing-header/landing-header";


export default function NotFound(){
    return(
        <React.Fragment>
            <LandingHeader></LandingHeader>
            <h1>Error 404: Not found</h1>
            <Footer></Footer>
        </React.Fragment>
    )
}