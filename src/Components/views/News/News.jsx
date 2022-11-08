import { BackToHome } from "Components/GlobalComponents/BackToHome/BackToHome";
import { CustomAlertMessage } from "Components/GlobalComponents/CustomAlertMessage/CustomAlertMessage";
import { HeadTitle } from "Components/GlobalComponents/HeadTitle/HeadTitle";
import { SpinnerLoad } from "Components/GlobalComponents/SpinnerLoad/SpinnerLoad";
import { Animate } from "styled-components/animation.styled";
import { useNews } from "./hooks/useNews";
import { newsSchema } from "./utilities/newsSchema.util";
import { ShowNewsCardsSection } from "./components/ShowNewsCardsSection/ShowNewsCardsSection";

const News = () => {
  const { loadingNews, newsData } = useNews();

  if (loadingNews)
    return (
      <div>
        <SpinnerLoad />
      </div>
    );

  return (
    <Animate>
      <HeadTitle title={newsSchema.title} />
      <BackToHome wrapLink="my-4 col col-7 col-sm-5 col-lg-4 " />

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
