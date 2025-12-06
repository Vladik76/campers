import css from "./CatalogPage.module.css";
import Filters from "../../components/Filters";
import CampersList from "../../components/CampersList";

const CatalogPage = () => {
  return (
    <div className={css.catalogPageContainer}>
      <div className={css.catalogPageFiltersContainer}>
        <Filters />
      </div>
      <div className={css.catalogPageCamperslistcontainer}>
        <CampersList />
      </div>
    </div>
  );
};

export default CatalogPage;
