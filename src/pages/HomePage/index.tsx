import { useNavigate } from "react-router";
import Button from "../../components/Button";
import css from "./HomePage.module.css";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className={css.hp_05}>
      <div className={css.hp_03}>
        <h1 className={css.hp_02}>Campers of your dreams</h1>
        <p className={css.hp_04}>
          You can find everything you want in our catalog
        </p>
        <Button
          className={css.hp_01}
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
