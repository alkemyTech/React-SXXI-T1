import { useNearScreen } from "hooks/useNearScreen"
import { WrapNewsCard } from "../../styled-components/WrapNewsCard.styled"
import { NewsCard } from "../NewsCard/NewsCard"

export const ShowNewsCardsSection = ({ item }) => {
  const [show, ref] = useNearScreen()
  return (
    <>
      <WrapNewsCard key={item.id} className="col col-12 col-sm-6 col-lg-4 d-flex justify-content-center mb-4" ref={ref} show={show}>
        {show && <NewsCard item={item} />}
      </WrapNewsCard>
    </>
  )
}
