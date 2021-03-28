const Hero = () => {
    return (
        <>
            <section className="hero" style={{backgroundImage: 'url("/hero.jpg")'}}>
                
                <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                    <h1>Bootstrap 4 Blog - A free template by Bootstrap Temple</h1><a href="#" className="hero-link">Discover More</a>
                    </div>
                </div><a href=".intro" className="continue link-scroll"><i className="fa fa-long-arrow-down"></i> Scroll Down</a>
                </div>
            </section>
            {/* Intro Section */}
            <section className="intro">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-8">
                        <h2 className="h3">Some great intro here</h2>
                        <p className="text-big">Place a nice <strong>introduction</strong> here <strong>to catch reader's attention</strong>. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderi.</p>
                    </div>
                    </div>
                </div>
            </section>
        </>

    );
  }
   
  export default Hero;