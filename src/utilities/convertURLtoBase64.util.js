import { requestMessagesSchema } from "./requestMessagesSchema.util";

export const convertUrlToBase64 = async (imageURL) => {
  try {
    const data = await fetch(imageURL);
    const blob = await data.blob();
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64data = reader.result;
        resolve(base64data);
      };

      reader.readAsDataURL(blob);
    });
  } catch (error) {
    console.error("error convertUrlToBase64", error.message);
    return {
      success: false,
      message: `${requestMessagesSchema.dontConvertURLtoase64} 
    ${requestMessagesSchema.tryLater}`,
    };
  }
};
