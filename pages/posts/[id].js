export const getStaticPaths = async () => {
    //const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const res = await fetch('http://localhost:1337/portfolios');
    const data = await res.json();
  
    // map data to an array of path objects with params (id)
    const paths = data.map(user => {
      return {
        params: { id: user.id.toString() }
      }
    })
  
    return {
      paths,
      fallback: false
    }
  }
  
  export const getStaticProps = async (context) => {
    const id = context.params.id;
    //const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const res = await fetch('http://localhost:1337/portfolios/' + id);
    const data = await res.json();
  
    return {
      props: { user: data }
    }
  }
  
  const Details = ({ user }) => {
    const baseUrl ='http://localhost:1337';
    return (
      // <div>
      //   {/* <h1>{ user.name }</h1>
      //   <p>{ user.email }</p>
      //   <p>{ user.website }</p>
      //   <p>{ user.address.city }</p> */}
      //   <h1>{ user.Headline }</h1>
      //   <p>{ user.content }</p>
      //   <p>{ user.slug }</p>
      //   <p>{ user.image.url }</p>
      // </div>
      <div className="container">
            <div className="row">
              {/* <!-- Latest Posts --> */}
              <main className="post blog-post col-lg-12"> 
                <div className="container">
                  <div className="post-single">
                    <div className="post-thumbnail"><img src={`${baseUrl}${user.image.url}`} alt="..." className="img-fluid" /></div>
                    <div className="post-details">
                      
                      <h1>{ user.Headline }</h1>
                      
                      <div className="post-body">
                        <p className="lead">{ user.content }</p>
                        
                      </div>                
                      
                    </div>
                  </div>
                </div>
              </main>
              
            </div>
          </div>
    );
  }
  
  export default Details;