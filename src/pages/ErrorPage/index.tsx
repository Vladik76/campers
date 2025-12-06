import React from "react";
import { useNavigate } from "react-router";
import css from "./ErrorPage.module.css";

const ErrorPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={css.errorPageContainer}>
      <div className={css.errorPageBox}>
        <h1 className={css.errorPageTitle}>Oops!</h1>
        <p className={css.errorPageMessage}>
          Something went wrong. The page you are looking for doesn’t exist or an
          unexpected error occurred.
        </p>
        <button className={css.errorPageButton} onClick={() => navigate("/")}>
          Go to Homepage
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
