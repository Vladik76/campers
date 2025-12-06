import css from "./CatalogPage.module.css";
import Filters from "../../components/Filters";
import CampersList from "../../components/CampersList";

const CatalogPage = () => {
  return (
    <div className={css.cp_02}>
      <div className={css.cp_03}>
        <Filters />
      </div>
      <div className={css.cp_01}>
        <CampersList />
      </div>
    </div>
  );
};

export default CatalogPage;
