import { CustomTitle } from "Components/CustomTitle/CustomTitle";
import { Animate } from "styled-components/animation.styled";
import { DashboardCard } from "./components/DashboardCard/DashboardCard";
import { dashboardLinks } from "./utilities/dashboardLinks.util";

export default function Dashboard() {
  return (
    <Animate className="mt-3 mt-sm-2 mb-3">
      <div className="d-flex col col-12">
        <CustomTitle title="Dashboard" wrapTitleClass="h-auto" />
      </div>
      <div className="col col-12 d-flex justify-content-center flex-wrap">
        {dashboardLinks.map((section) => (
          <div key={section.text} className="col col-12 col-sm-4 col-lg-3 d-flex justify-content-center my-3">
            <DashboardCard item={section} />
          </div>
        ))}
      </div>
    </Animate>
  );
}
