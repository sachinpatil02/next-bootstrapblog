// export default function About() {
//     return (
//       <h1>About</h1>
//     )
//   }

import Head from "next/head"
import Divider from "./component/Divider"
import LatestPost from './component/LatestPost'

  const About = () => {
      return(
        <>
          <Head>
            <title>Ninja List | About</title>
            <meta name="keywords" content="ninjas"/>
          </Head>
          <div className="container">
            <div className="row">
              {/* <!-- Latest Posts --> */}
              <main className="post blog-post col-lg-12"> 
                <div className="container">
                  <div className="post-single">
                    <div className="post-thumbnail"><img src="img/featured-pic-3.jpeg" alt="..." className="img-fluid" /></div>
                    <div className="post-details">
                      
                      <h1>Diversity in Engineering: The Effect on Questions<a href="#"><i className="fa fa-bookmark-o"></i></a></h1>
                      
                      <div className="post-body">
                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <h3>Lorem Ipsum Dolor</h3>
                        <p>div Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda temporibus iusto voluptates deleniti similique rerum ducimus sint ex odio saepe. Sapiente quae pariatur ratione quis perspiciatis deleniti accusantium</p>
                        
                        <p>quasi nam. Libero dicta eum recusandae, commodi, ad, autem at ea iusto numquam veritatis, officiis. Accusantium optio minus, voluptatem? Quia reprehenderit, veniam quibusdam provident, fugit iusto ullam voluptas neque soluta adipisci ad.</p>
                      </div>                
                      
                    </div>
                  </div>
                </div>
              </main>
              
            </div>
          </div>
          <Divider />
          <LatestPost />
        </>
      );
  }
  export default About;