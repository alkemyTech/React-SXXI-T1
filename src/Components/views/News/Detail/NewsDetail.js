import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { CustomTitle } from "Components/GlobalComponents/CustomTitle/CustomTitle";

const DUMMY_NEWS = {
  content: "dummy content of the news",
  imgUrl:
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
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
    <div className="h-100">
      <CustomTitle wrapTitleClass="d-block" title={title} image={news.imgUrl} />
      <div className="py-2">
        <p>{news.content}</p>
      </div>
    </div>
  );
};

export default NewsDetail;
