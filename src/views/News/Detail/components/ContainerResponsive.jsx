import { useDetailNews } from "../hook/useDetailNews";
import { Paragraph } from "../NewsDetailsStyle/NewsDetailsStyle";
import ParagraphAndButton from "./ParagraphAndButton";
import { SkeletonLoader } from "Components/Loading/SkeletonLoader/SkeletonLoader";

export default function ContainerResponsive({ text }) {
  const { show } = useDetailNews();

  if (!text) return <SkeletonLoader />;

  let content;
  if (show) content = <ParagraphAndButton text1={text.text1} text2={text.text2} textButton="menos" />;
  else content = <ParagraphAndButton text1={text.text1} text2={text.points} textButton="más" />;

  return <>{text.text1 ? { content } : <Paragraph dangerouslySetInnerHTML={{ __html: text }} />}</>;
}
