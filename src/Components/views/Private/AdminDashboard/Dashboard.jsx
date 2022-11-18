import { CustomTitle } from "Components/GlobalComponents/CustomTitle/CustomTitle";
import { Animate } from "styled-components/animation.styled";
import { privateLinks } from "utilities/navitems/navItems.util";
import { DashboardCard } from "./components/DashboardCard/DashboardCard";

// novedades, actividades, categorias, testimonios, organizacion, slides, usuarios, miembros

// privateLinks
export default function Dashboard() {
  const dashboardLinks = privateLinks.slice(1);
  console.log({ dashboardLinks });
  return (
    <Animate>
      <div className=" mt-2 d-flex col col-12">
        <CustomTitle title="Dashboard" wrapTitleClass="h-auto" />
      </div>
      <div className="col col-12 d-flex justify-content-center flex-wrap">
        {dashboardLinks.map((section) => (
          <div
            key={section.text}
            className="col col-3 d-flex justify-content-center my-3"
          >
            <DashboardCard item={section} />
          </div>
        ))}
      </div>
    </Animate>
  );
}
