import { Paragraph } from "../NewsDetailsStyle/NewsDetailsStyle";
import { Button } from "../../Comment/Card/CardStyle";
import { useDetailNews } from "../hook/useDetailNews";

export default function ParagraphAndButton({ text1, text2, textButton }) {
  const { show, setShow } = useDetailNews();

  function handleClick() {
    setShow(!show);
  }

  return (
    <>
      <Paragraph dangerouslySetInnerHTML={{ __html: text1 + text2 }} />
      <Button onClick={handleClick}>{textButton}</Button>
    </>
  );
}
