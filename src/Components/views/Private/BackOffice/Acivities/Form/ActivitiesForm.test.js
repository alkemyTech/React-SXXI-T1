import { MemoryRouter } from "react-router-dom";
import { act, render, screen, waitFor } from "@testing-library/react";

import BackOfficeRoutes from "Components/views/Private/BackOfficeRoutes";
import { privateRoutes } from "models/routes";
import { activityValidationSchema } from "../utilities/utilities";
import { FILE_SIZE } from "Components/GlobalComponents/FormImageField/utilities/ImageFieldSchemas.util";

it("should render the creation form when the activity id is not passed", async () => {
  const createFormRoute = `/${privateRoutes.ACTIVITIESCREATE}`;

  await act(async () => {
    render(
      <MemoryRouter initialEntries={[createFormRoute]}>
        <BackOfficeRoutes />
      </MemoryRouter>
    );
  });

  await waitFor(() => {
    expect(screen.getByText("Crea actividad")).toBeInTheDocument();
  });
});

it("should render the edition form when the activity id is passed", async () => {
  const activityId = 1;
  const editFormRoute = `/${privateRoutes.ACTIVITIESEDIT}/${activityId}`;

  await act(async () => {
    render(
      <MemoryRouter initialEntries={[editFormRoute]}>
        <BackOfficeRoutes />
      </MemoryRouter>
    );
  });

  await waitFor(() => {
    expect(screen.getByText("Edita actividad")).toBeInTheDocument();
  });
});

it("should resolve for a valid activity", async () => {
  const dummyActivity = {
    name: "Dummy activity",
    image: {
      type: "image/jpg",
      size: 1000,
    },
    description: "Some description",
  };
  const activitySchema = activityValidationSchema();

  await expect(activitySchema.validate(dummyActivity)).resolves.toBeTruthy();
});

it("should reject when entering an empty name", async () => {
  const name = "";
  const activitySchema = activityValidationSchema();

  await expect(activitySchema.validateAt("name", { name })).rejects.toBeTruthy();
});

it("should reject when entering a name with less than 4 characters", async () => {
  const name = "123";
  const activitySchema = activityValidationSchema();

  await expect(activitySchema.validateAt("name", { name })).rejects.toBeTruthy();
});

it("should reject when uploading an image with an invalid format", async () => {
  const image = {
    type: "pdf",
  };
  const activitySchema = activityValidationSchema();

  await expect(activitySchema.validateAt("image", { image })).rejects.toBeTruthy();
});

it("should reject when uploading an image with a size over the defined limit", async () => {
  const image = {
    type: "image/jpg",
    size: FILE_SIZE + 1,
  };
  const activitySchema = activityValidationSchema();

  await expect(activitySchema.validateAt("image", { image })).rejects.toBeTruthy();
});

it("should reject when entering an empty description", async () => {
  const description = "";
  const activitySchema = activityValidationSchema();

  await expect(activitySchema.validateAt("description", { description })).rejects.toBeTruthy();
});
