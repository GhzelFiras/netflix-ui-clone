import React from "react";
import Navbar from "../components/Navbar";
import GetStarted from "../components/Getstarted";
import Questions from "../components/Questions";
import Footer from "../components/Footer";
function Home(){
    return(
        <>
        <section className='home-section'>
            <Navbar />
            <div className="content">
                <h1>Unlimited movies, TV shows, and more</h1>
                <p>Watch anywhere. Cancel anytime.</p>
                <GetStarted />
            </div>
        </section>
        <section className="about-section">
            <div className="content">
                <h1>Enjoy on your TV</h1>
                <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
            </div>
            <div className="tv-image-container">
                <img src="src/assets/images/netflix-tv.png" />
            </div>
        </section>
        <section className="about-section">
            <div className="download-image-container">
                <img src="src/assets/images/netflix-download.png" />
            </div>
            <div className="content">
                <h1>Download your shows to watch offline</h1>
                <p>Save your favorites easily and always have something to watch.</p>
            </div>
        </section>
        <section className="about-section">
            <div className="content">
                <h1>Watch everywhere</h1>
                <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
            </div>
            <div className="watch-image-container">
                <img src="src/assets/images/watch-netflix.png" />
            </div>
        </section>
        <section className="about-section">
            <div className="watch-image-container">
                <img src="src/assets/images/kids-netflix.png" />
            </div>
            <div className="content">
                <h1>Create profiles for kids</h1>
                <p>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</p>
            </div>
        </section>
        <section className="questions-section">
            <Questions />
            <GetStarted />
        </section>
        <footer>
            <Footer />
        </footer>
        </>
    );
}
export default Home;