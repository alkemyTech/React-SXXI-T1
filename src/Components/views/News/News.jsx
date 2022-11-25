import { BackTo } from "Components/GlobalComponents/BackTo/BackTo";
import { CustomAlertMessage } from "Components/GlobalComponents/CustomAlertMessage/CustomAlertMessage";
import { HeadTitle } from "Components/GlobalComponents/HeadTitle/HeadTitle";
import { SpinnerLoad } from "Components/GlobalComponents/SpinnerLoad/SpinnerLoad";
import { Animate } from "styled-components/animation.styled";
import { useNews } from "./hooks/useNews";
import { newsSchema } from "./utilities/newsSchema.util";
import { ShowNewsCardsSection } from "./components/ShowNewsCardsSection/ShowNewsCardsSection";
import SearchNews from "./components/SearchNews";
import { routes } from "models/routes";

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
    newsContent = newsData.map((item) => (
      <ShowNewsCardsSection key={item.id} item={item} />
    ));
  } else {
    newsContent = (
      <div className="col col-12 d-flex justify-content-center">
        <CustomAlertMessage alertClass="col col-10" text={newsSchema.noNews} />
      </div>
    );
  }

  return (
    <Animate>
      <HeadTitle title={newsSchema.title} />
      <BackTo wrapLink="my-4" to={routes.HOME} text="Ir a inicio" />

      <div className="col col-12 d-flex justify-content-center mb-3">
        <div className="col col-12">
          <SearchNews onSearchNews={searchNewsHandler} />
        </div>
      </div>
      <div className="d-flex flex-row flex-wrap justify-content-center">
        {newsContent}
      </div>
    </Animate>
  );
};

export default News;
