const MOCKDATA = {
  title: "Titulo Ficticio",
  description: `
    <p>
      <b>Lorem ipsum</b> dolor sit amet, consectetur adipiscing elit. Ultricies ullamcorper et bibendum at neque, 
      tellus dolor nibh netus. Varius odio dictum blandit suscipit praesent purus ultrices. Cras suspendisse arcu 
      hendrerit sed faucibus platea. Facilisis molestie quisque ultrices commodo nunc cursus sit nisi. Vivamus sed 
      euismod rutrum placerat ut. Eu in facilisis vestibulum at. Morbi amet mattis sed elementum cursus. Interdum 
      quisque sed viverra integer diam purus, tortor commodo. Duis sed vulputate suspendisse consectetur in mauris. 
      Est volutpat quisque faucibus ut turpis sagittis massa, quam. Tincidunt in rutrum aenean neque, volutpat sit. 
      Dictum diam malesuada condimentum ultrices amet gravida aliquam lobortis. Dolor enim facilisi semper odio at est bibendum 
      porta augue. Lectus morbi tellus odio eu.
    </p>
  `,
  responsibles: [{ name: "Responsable 1" }, { name: "Responsable 2" }, { name: "Responsable 3" }],
};

const MOCKCALLAPI = (delay, value) => {
  const promise = new Promise((resolve) => {
    setTimeout(resolve, delay, value);
  });
  return {
    get promise() {
      return promise;
    },
  };
};

export const postDetail = async (idDetail) => {
  return await MOCKCALLAPI(2000, MOCKDATA).promise;
};
