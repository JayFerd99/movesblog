import React from "react";
import { Link } from "react-router-dom";
import news1Image from "../../assets/news1.png";
import news2Image from "../../assets/news2.png";
import news3Image from "../../assets/news3.png";
import news4Image from "../../assets/new4.png";
import news5Image from "../../assets/news5.png";
import news6Image from "../../assets/news6.png";
import news7Image from "../../assets/news7.png";
import news8Image from "../../assets/news8.png";
import "../LatestNews.css";
import Footer from "./Footer";

const LatestNews = () => {
  const newsList = [
    {
      id: 1,
      title: "News Article 1",
      image: news1Image,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },

    {
      id: 2,
      title: "News Article 2",
      image: news2Image,
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },

    {
      id: 3,
      title: "Latest Article",
      image: news3Image,
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },

    {
      id: 4,
      title: "News Article 4",
      image: news5Image,
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },

    {
      id: 5,
      title: "News Article 5",
      image: news8Image,
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },

    {
      id: 6,
      title: "News Article 6",
      image: news6Image,
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },

    {
      id: 7,
      title: "News Article 7",
      image: news7Image,
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },

    {
      id: 8,
      title: "News Article 8",
      image: news4Image,
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    // Add more news articles here
  ];
  const currentPage = 1; // Current page number
  const totalPages = 5; // Total number of pages

  const generatePaginationLinks = () => {
    const links = [];

    for (let i = 1; i <= totalPages; i++) {
      links.push(
        <Link
          key={i}
          to={`/latest-news?page=${i}`}
          className={currentPage === i ? "active" : ""}
        >
          {i}
        </Link>
      );
    }

    return links;
  };

  return (
    <div className="latest-news-page">
      <div className="background"></div>
      <h2>Latest News</h2>
      {newsList.map((news) => (
        <div key={news.id} className="news-section">
          {" "}
          <div className="news-image">
            {" "}
            <img src={news.image} alt={news.title} />{" "}
          </div>{" "}
          <div className="news-content">
            {" "}
            <h3> {news.title}</h3> <p> {news.description}</p>{" "}
          </div>{" "}
        </div>
      ))}
      <div className="pagination"> {generatePaginationLinks()}</div>
      <Footer />
    </div>
  );
};

export default LatestNews;
