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
  const { loadingNews, newsData } = useNews();

  if (loadingNews) {
    return (
      <div>
        <SpinnerLoad />
      </div>
    );
  }

  const searchNewsHandler = (searchText) => {
    if (searchText.length >= 3) {
      console.log(`Buscar a /news?search={${searchText}}`);
    } else {
      console.log("Buscar a /news");
    }
  };

  return (
    <Animate>
      <HeadTitle title={newsSchema.title} />
      <BackTo wrapLink="my-4" to={routes.HOME} text="Ir a inicio" />

      <div className="col col-12 d-flex justify-content-center mb-3">
        <div className="col col-10">
          <SearchNews onSearchNews={searchNewsHandler} />
        </div>
      </div>
      <div className="d-flex flex-row flex-wrap justify-content-center">
        {newsData.length > 0 ? (
          newsData.map((item) => (
            <ShowNewsCardsSection key={item.id} item={item} />
          ))
        ) : (
          <div className="col col-12 d-flex justify-content-center">
            <CustomAlertMessage
              alertClass="col col-10"
              text={newsSchema.noNews}
            />
          </div>
        )}
      </div>
    </Animate>
  );
};

export default News;
