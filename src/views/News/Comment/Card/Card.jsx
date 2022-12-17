import { CommentCard, CommentImg } from "./CardStyle";
import { useEffect } from "react";
import { useCard } from "./hook/useCard";

export default function Card({ image, text }) {
  const { validationImage, avatar, contentShow } = useCard(text, image);

  useEffect(() => {
    validationImage();
  }, [validationImage]);

  let content = contentShow();

  return (
    <CommentCard>
      <div>
        <CommentImg src={avatar} alt={"imagen"} />
      </div>
      {content}
    </CommentCard>
  );
}
