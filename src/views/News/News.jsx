import { CustomAlertMessage } from "Components/CustomAlertMessage/CustomAlertMessage";
import { Animate } from "styled-components/animation.styled";
import { useNews } from "./hooks/useNews";
import { newsSchema } from "./utilities/newsSchema.util";
import { ShowNewsCardsSection } from "./components/ShowNewsCardsSection/ShowNewsCardsSection";
import SearchNews from "./components/SearchNews";
import { HeadTitle } from "Components/HeadTitle/HeadTitle";
import { SkeletonLoader } from "Components/Loading/SkeletonLoader/SkeletonLoader";

const News = () => {
  const { loadingNews, newsData, fetchNews } = useNews();

  const searchNewsHandler = async (searchText) => {
    const fetchParams = {};

    if (searchText.length >= 3) {
      fetchParams["search"] = searchText;
    }

    await fetchNews(fetchParams);
  };

  const slidesSkeletonLoader = () => (
    <div className="col col-12 col-sm-6  d-flex flex-column flex-sm-row justify-content-center align-items-center mb-5">
      {[1, 2].map((skeleton) => (
        <SkeletonLoader
          key={skeleton}
          skeletonClass="col col-12 d-flex justify-content-center mb-5"
          placeClass="placeClass col col-12 w-75 h-100"
          spanClass="spanClass h-100 w-100"
          height="350px"
        />
      ))}
    </div>
  );

  let newsContent;
  if (loadingNews) {
    newsContent = slidesSkeletonLoader();
  } else if (newsData.length > 0) {
    newsContent = newsData.map((item) => <ShowNewsCardsSection key={item.id} item={item} />);
  } else {
    newsContent = (
      <div className="col col-12 d-flex justify-content-center">
        <CustomAlertMessage alertClass="col col-10" text={newsSchema.noMatch} />
      </div>
    );
  }

  return (
    <Animate>
      <HeadTitle title={newsSchema.title} />

      <div className="col col-12 d-flex justify-content-center mb-3">
        <div className="col col-12 mb-3">
          <SearchNews onSearchNews={searchNewsHandler} />
        </div>
      </div>
      <div className="d-flex flex-row flex-wrap justify-content-center">{newsContent}</div>
    </Animate>
  );
};

export default News;
