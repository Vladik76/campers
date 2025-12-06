import { useNavigate } from "react-router";
import Button from "../../components/Button";
import css from "./HomePage.module.css";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className={css.homePageWrapper}>
      <div className={css.homePageOverlay}>
        <h1 className={css.homePageHeading}>Campers of your dreams</h1>
        <p className={css.homePageText}>
          You can find everything you want in our catalog
        </p>
        <Button
          className={css.homePageButton}
          onClick={() => {
            navigate("/catalog");
          }}
        >
          View Now
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
