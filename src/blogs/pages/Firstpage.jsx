import React, { useState } from "react";
import { Link } from "react-router-dom";
import image1 from "../../assets/1.png";
import image2 from "../../assets/8.png";
import image3 from "../../assets/2.png";
import image4 from "../../assets/3.png";
import image5 from "../../assets/4.png";
import image6 from "../../assets/5.png";
import image7 from "../../assets/6.png";
import "../Post.css";
import "../Cube.css";
import Footer from "./Footer";

const Firstpage = () => {
  const latestPosts = [
    {
      id: 1,
      title: "Post 1",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl: image1,
    },
    {
      id: 2,
      title: "Post 2",
      excerpt:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imageUrl: image4,
    },
    {
      id: 3,
      title: "Post 3",
      excerpt:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      imageUrl: image7,
    },
    {
      id: 4,
      title: "Post 4",
      excerpt:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      imageUrl: image2,
    },
  ];

  const featuredArticles = [
    {
      id: 1,
      title: "Featured Article 1",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl: image6,
    },
    {
      id: 2,
      title: "Featured Article 2",
      excerpt:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imageUrl: image3,
    },
    {
      id: 3,
      title: "Featured Article 3",
      excerpt:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      imageUrl: image5,
    },
  ];

  return (
    <div>
      <div className="hero">
        <div className="parent-class">
          <div className="home-page">
            <h2>Latest Blog Posts</h2>
            <div className="post-container">
              {latestPosts.map((post) => (
                <div key={post.id} className="post">
                  {post.imageUrl && (
                    <img src={post.imageUrl} alt={post.title} />
                  )}
                  <div className="post-content">
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <Link to={`/post/${post.id}`}>Read More</Link>
                  </div>
                </div>
              ))}
            </div>
            <h2>Featured Articles</h2>
            <div className="post-container">
              {featuredArticles.map((article) => (
                <div key={article.id} className="post">
                  {article.imageUrl && (
                    <img src={article.imageUrl} alt={article.title} />
                  )}
                  <div className="post-content">
                    <h3>{article.title}</h3>
                    <p>{article.excerpt}</p>
                    <Link to={`/article/${article.id}`}>Read More</Link>
                  </div>
                </div>
              ))}
              <div className="cube"></div>
              <div className="cube"></div>
              <div className="cube"></div>
              <div className="cube"></div>
              <div className="cube"></div>
              <div className="cube"></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Firstpage;

