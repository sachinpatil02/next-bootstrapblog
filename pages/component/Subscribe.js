const Subscribe = () => {
    return(
        // Newsletter Section
        <section className="newsletter no-padding-top">    
        <div className="container">
            <div className="row">
            <div className="col-md-6">
                <h2>Subscribe to Newsletter</h2>
                <p className="text-big">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="col-md-8">
                <div className="form-holder">
                <form action="#">
                    <div className="form-group">
                    <input type="email" name="email" id="email" placeholder="Type your email address" />
                    <button type="submit" className="submit">Subscribe</button>
                    </div>
                </form>
                </div>
            </div>
            </div>
        </div>
        </section>
    );
}

export default Subscribe;