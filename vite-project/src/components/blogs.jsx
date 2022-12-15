import React from "react";
const Blogs = ({ blogs, props }) => {
  return (
    <div className="container">
      {blogs.map((blog) => (
        <div className="blog">
          <header>
            <div className="avatar">
              <img
                src={blog.avatar}
                alt="black and white photo of smiling man infront of laptop"
              />
            </div>

            <div className="author">
              <p className="name">{blog.author}</p>
            </div>
          </header>

          <main className="image">
            <img src={blog.thumbnail} alt="black screen with code over it" />
          </main>

          <footer>
            <p className="title">{blog.title}</p>
            <p className="text">{blog.description}</p>
          </footer>
        </div>
      ))}
      <div className="main-cointainer">
        <h2>Compnent2</h2>

        <p>{props} </p>
      </div>
    </div>
  );
};

export default Blogs;
