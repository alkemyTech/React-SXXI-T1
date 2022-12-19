import { useDetail } from "./hooks/useDetail";
import { MainContent, ActivityCard, ActivityImage, ActivityTitle, Paragraph, Container, CotainerSkeleton } from "./DetailStyle/DetailStyle";
import { CustomAlertMessage } from "Components/CustomAlertMessage/CustomAlertMessage";
import { SkeletonLoader } from "Components/Loading/SkeletonLoader/SkeletonLoader";

const Detail = () => {
  const { dataDetail, loadingDetail, category, loadingCategory } = useDetail();

  return (
    <MainContent>
      <h1>Detalle de la Actividad</h1>
      {loadingDetail ? (
        <CotainerSkeleton>
          <SkeletonLoader xs={12} />
          <SkeletonLoader xs={12} />
          <SkeletonLoader xs={12} />
          <SkeletonLoader xs={12} />
          <SkeletonLoader xs={12} />
        </CotainerSkeleton>
      ) : (
        <ActivityCard>
          <div>
            <ActivityImage src={dataDetail?.image} alt={dataDetail?.title} />
          </div>
          <Container>
            <ActivityTitle>{dataDetail?.title}</ActivityTitle>
            <Paragraph dangerouslySetInnerHTML={{ __html: dataDetail?.description }} />
          </Container>
        </ActivityCard>
      )}
      <h3>Categoría a la que pertenece:</h3>
      {loadingCategory && (
        <CotainerSkeleton>
          <SkeletonLoader xs={12} />
          <SkeletonLoader xs={12} />
          <SkeletonLoader xs={12} />
          <SkeletonLoader xs={12} />
          <SkeletonLoader xs={12} />
        </CotainerSkeleton>
      )}
      {category?.name && !loadingCategory ? (
        <ActivityCard>
          <div>
            <ActivityImage src={category?.image} alt={category?.name} />
          </div>
          <Container>
            <ActivityTitle>{category?.name}</ActivityTitle>
            <Paragraph dangerouslySetInnerHTML={{ __html: category?.description }} />
          </Container>
        </ActivityCard>
      ) : (
        <div className="col col-12 d-flex justify-content-center">
          <CustomAlertMessage alertClass="col col-10" text="No pertenece a ninguna categoría" />
        </div>
      )}
    </MainContent>
  );
};

export default Detail;
