import Link from "next/link";
import styles from "../../styles/users.module.css";

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:1337/portfolios");
  const data = await res.json();
  return {
    props: { posts: data },
  };
};

const Posts = ({ posts }) => {
  const baseUrl = "http://localhost:1337";
  //console.log(posts.slice(0,3));
  return (
    // <div>
    //   <h1>All Ninjas!!</h1>
    //     {posts.map(post =>(
    //       <Link href={`/ninjas/${post.id}` } key={post.id}>
    //         <a className={styles.single}> <h3>{post.Headline}</h3></a>
    //       </Link>
    //     ))}
    // </div>

    <section className="latest-posts">
      <div className="container">
        <header>
          <h2>Latest from the blog</h2>
          <p className="text-big">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </header>
        <div className="row">
          {posts.slice(0, 3).map((post) => (
            // <Link href={`/ninjas/${post.id}` } key={post.id}>
            //     <a className={styles.single}> <h3>{post.Headline}</h3></a>
            //   </Link>

            <div className="post col-xl-6" key={post.id}>
              <div className="post-thumbnail">
                <a href={`/posts/${post.id}`}>
                  <img
                    src={`${baseUrl}${post.image.url}`}
                    alt={post.Headline}
                    className="img-fluid thumb-img"
                  />
                </a>
              </div>
              <div className="post-details">
                <div className="post-meta d-flex justify-content-between">
                  <div className="date">{post.created}</div>
                  <div className="category">
                    <a href={`/posts/${post.id}`}>{post.slug}</a>
                  </div>
                </div>
                <a href={`/posts/${post.id}`}>
                  <h3 className="h4">{post.Headline}</h3>
                </a>
                <p className="text-muted">{post.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Posts;
