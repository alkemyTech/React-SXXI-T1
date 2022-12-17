const gridCard = {
  oneColumn: {
    firstCol: "  col-12 ",
    secondCol: " flex-column ",
  },
  twoColumn: {
    firstCol: " col-12 col-sm-6 flex-row justify-content-center ",
    secondCol: " col-sm-6 flex-column ",
  },
  text: {
    oneColumn: "",
    twoColumn: " text-sm-start ",
  },
  card: {
    oneColumn: " justify-content-between",
    twoColumn: " flex-sm-row ",
  },
  cardFooter: {
    oneColumn: "",
    twoColumn: "  col-8 col-sm-12  ",
  },
  link: {
    oneColumn: "  col-sm-8 col-lg-10 ",
    twoColumn: "  col-sm-6 ",
  },
};

const defaultAtrBtn = {
  textBtn: "Ver más",
  color: "success",
  background: "success",
  icon: "👀",
};

const defaultAtrImage = {
  backgroundSize: "cover",
  height: "250px",
};

export { gridCard, defaultAtrBtn, defaultAtrImage };
