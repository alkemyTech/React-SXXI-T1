import { useState } from "react";
import { Button, CommentText } from "../CardStyle";
import avatarUser from "assets/avatar.svg";

export const useCard = (text, image) => {
  const [show, setShow] = useState(false);
  const [avatar, setAvatar] = useState();

  function validationImage() {
    if (image === "string" || !image) setAvatar(avatarUser);
    else setAvatar(image);
  }

  function contentLargeText() {
    if (show) {
      return (
        <CommentText>
          {text.text1}
          {text.text2}
          <Button onClick={() => setShow(!show)}>menos</Button>
        </CommentText>
      );
    } else {
      return (
        <CommentText>
          {text.text1}
          {text.points}
          <Button onClick={() => setShow(!show)}>más</Button>
        </CommentText>
      );
    }
  }

  let content = contentLargeText();

  function contentShow() {
    if (text.text1) return content;
    else return <CommentText>{text}</CommentText>;
  }

  return {
    contentShow,
    validationImage,
    avatar,
  };
};
