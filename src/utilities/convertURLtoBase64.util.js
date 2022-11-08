import { requestMessagesSchema } from "./requestMessagesSchema.util";

export const convertUrlToBase64 = async (imageURL) => {
  try {
    const data = await fetch(imageURL);
    const blob = await data.blob();
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = () => {
        const base64data = reader.result;
        resolve(base64data);
      };
    });
  } catch (error) {
    Promise.reject(
      new Error(`${requestMessagesSchema.dontConvertURLtoase64} 
        ${requestMessagesSchema.tryLater}`)
    );
  }
};
