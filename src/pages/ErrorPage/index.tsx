import React from "react";
import { useNavigate } from "react-router";
import css from "./ErrorPage.module.css";

const ErrorPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={css.ep_03}>
      <div className={css.ep_01}>
        <h1 className={css.ep_05}>Oops!</h1>
        <p className={css.ep_04}>
          Something went wrong. The page you are looking for doesn’t exist or an
          unexpected error occurred.
        </p>
        <button className={css.ep_02} onClick={() => navigate("/")}>
          Go to Homepage
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
