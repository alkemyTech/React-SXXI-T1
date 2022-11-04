import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Image from "react-bootstrap/Image";

import DetailHeading from "./Heading";

const DUMMY_NEWS = {
  content: "dummy content of the news",
  imgUrl:
    "https://images.unsplash.com/photo-1661961110671-77b71b929d52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
};

const NewsDetail = ({ title }) => {
  const { id: newsId } = useParams();
  const [news, setNews] = useState(null);

  useEffect(() => {
    const fetchNews = (id) => {
      setNews(DUMMY_NEWS);
    };

    fetchNews(newsId);
  }, [newsId]);

  if (!news) return null;

  return (
    <div>
      <DetailHeading>{title}</DetailHeading>
      <Image src={news.imgUrl} alt="Some dummy img" />
      <p>{news.content}</p>
    </div>
  );
};

export default NewsDetail;
