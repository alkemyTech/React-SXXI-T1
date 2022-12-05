<<<<<<< HEAD
import { CustomAlertMessage } from "Components/GlobalComponents/CustomAlertMessage/CustomAlertMessage"
import { SpinnerLoad } from "Components/GlobalComponents/Loading/SpinnerLoad/SpinnerLoad"
import { Animate } from "styled-components/animation.styled"
import { useNews } from "./hooks/useNews"
import { newsSchema } from "./utilities/newsSchema.util"
import { ShowNewsCardsSection } from "./components/ShowNewsCardsSection/ShowNewsCardsSection"
import SearchNews from "./components/SearchNews"
import { CustomTitle } from "Components/GlobalComponents/CustomTitle/CustomTitle"
=======
import { CustomAlertMessage } from "Components/GlobalComponents/CustomAlertMessage/CustomAlertMessage";
import { HeadTitle } from "Components/GlobalComponents/HeadTitle/HeadTitle";
import { SpinnerLoad } from "Components/GlobalComponents/Loading/SpinnerLoad/SpinnerLoad";
import { Animate } from "styled-components/animation.styled";
import { useNews } from "./hooks/useNews";
import { newsSchema } from "./utilities/newsSchema.util";
import { ShowNewsCardsSection } from "./components/ShowNewsCardsSection/ShowNewsCardsSection";
import SearchNews from "./components/SearchNews";
>>>>>>> 7e36fb05ea6a6f65e1f43e09206a86699371581c

const News = () => {
  const { loadingNews, newsData, fetchNews } = useNews();

  const searchNewsHandler = async (searchText) => {
    const fetchParams = {};

    if (searchText.length >= 3) {
      fetchParams["search"] = searchText;
    }

    await fetchNews(fetchParams);
  };

  let newsContent;
  if (loadingNews) {
    newsContent = <SpinnerLoad />;
  } else if (newsData.length > 0) {
    newsContent = newsData.map((item) => <ShowNewsCardsSection key={item.id} item={item} />);
  } else {
    newsContent = (
      <div className="col col-12 d-flex justify-content-center">
        <CustomAlertMessage alertClass="col col-10" text={newsSchema.noNews} />
      </div>
    );
  }

  return (
    <Animate>
<<<<<<< HEAD
      <div className="my-5">
        <CustomTitle
          title={newsSchema.title}
          wrapTitleClass="d-block h-auto"
          justify="center"   
        />
      </div>
      <div className="col col-12 d-flex justify-content-center mb-5">
        <div className="col col-12">
=======
      <HeadTitle title={newsSchema.title} />

      <div className="col col-12 d-flex justify-content-center mb-3">
        <div className="col col-12 mb-3">
>>>>>>> 7e36fb05ea6a6f65e1f43e09206a86699371581c
          <SearchNews onSearchNews={searchNewsHandler} />
        </div>
      </div>
      <div className="d-flex flex-row flex-wrap justify-content-center">{newsContent}</div>
    </Animate>
  );
};

export default News;
