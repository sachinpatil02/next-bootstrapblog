const Gallary = () => {
    return (
        // Gallery Section
        <section className="gallery no-padding">    
          <div className="row">
            <div className="mix col-lg-3 col-md-3 col-sm-6">
              <div className="item"><a href="img/gallery-1.jpg" data-fancybox="gallery" className="image">
                  <img src="img/gallery-1.jpg" alt="..." className="img-fluid"/>
                  <div className="overlay d-flex align-items-center justify-content-center"><i className="icon-search"></i></div></a></div>
            </div>
            <div className="mix col-lg-3 col-md-3 col-sm-6">
              <div className="item"><a href="img/gallery-2.jpg" data-fancybox="gallery" className="image">
                  <img src="img/gallery-2.jpg" alt="..." className="img-fluid" />
                  <div className="overlay d-flex align-items-center justify-content-center"><i className="icon-search"></i></div></a></div>
            </div>
            <div className="mix col-lg-3 col-md-3 col-sm-6">
              <div className="item"><a href="img/gallery-3.jpg" data-fancybox="gallery" className="image">
                  <img src="img/gallery-3.jpg" alt="..." className="img-fluid" />
                  <div className="overlay d-flex align-items-center justify-content-center"><i className="icon-search"></i></div></a></div>
            </div>
            <div className="mix col-lg-3 col-md-3 col-sm-6">
              <div className="item"><a href="img/gallery-4.jpg" data-fancybox="gallery" className="image">
                  <img src="img/gallery-4.jpg" alt="..." className="img-fluid"/>
                  <div className="overlay d-flex align-items-center justify-content-center"><i className="icon-search"></i></div></a></div>
            </div>
          </div>
        </section>
    );
  }
   
  export default Gallary;