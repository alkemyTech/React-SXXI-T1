import { MemoryRouter } from "react-router-dom";
import { act, render, screen, waitFor } from "@testing-library/react";

import BackOfficeRoutes from "Components/views/Private/BackOfficeRoutes";
import { privateRoutes } from "models/routes";

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
