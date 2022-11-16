import React, { useEffect, useState } from "react";
import { BackTo } from "Components/GlobalComponents/BackTo/BackTo";
import { CustomTitle } from "Components/GlobalComponents/CustomTitle/CustomTitle";
import { privateRoutes } from "models/routes";
import { CustomTable } from "Components/GlobalComponents/CustomTable/CustomTable";
import { feedbackUser } from "utilities/alerts/feedbackUser.util";
import { requestMessagesSchema } from "utilities/requestMessagesSchema.util";
import { personalSlides } from "utilities/slides/slides.util";
import { getSlides } from "./interceptor/getSlides.interceptor";
import { useNavigate } from "react-router-dom";

const tableHead = ["#", "Título", "Imagen", "Orden", "Acciones"];
const myTableData = { name: "name", image: "image", order: "order" };

const PrivateSlides = () => {
  const [loadSlides, setLoadSlides] = useState(false);
  const [slides, setSlides] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllSlides = async () => {
      try {
        setLoadSlides(true);
        const getData = await getSlides({});

        if (getData && !getData.success) throw new Error(getData.message);

        setSlides(personalSlides(getData.data));
      } catch (error) {
        console.error("error SlidesForm - fetchAllSlides", error.message);
        feedbackUser(
          "top-end",
          "error",
          requestMessagesSchema.problemExistTryLater +
            " " +
            requestMessagesSchema.contactAdmin
        );
      } finally {
        setLoadSlides(false);
      }
    };

    fetchAllSlides();
  }, []);

  const handleEdit = (id) => {
    navigate("/" + privateRoutes.BACKOFFICE + privateRoutes.SLIDESEDIT + id);
  };

  const handleDelete = () => {
    console.log("delete");
  };

  return (
    <>
      <div className=" mt-2 d-flex col col-12">
        <CustomTitle title="Slides" />
      </div>
      <div className="d-flex justify-content-start">
        <BackTo
          wrapLink="my-1"
          to={"/" + privateRoutes.BACKOFFICE + "dashboard"}
        />
      </div>
      <CustomTable
        tHead={tableHead}
        tBody={slides}
        loading={loadSlides}
        myTableData={myTableData}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </>
  );
};

export default PrivateSlides;
