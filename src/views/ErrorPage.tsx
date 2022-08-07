// modules
import { FC } from "react";

// styles
import "views/views-style-modules/ErrorPage.css";

const ErrorPage: FC = () => {
  return (
    <div className="error-page-wpapper">
      <h1 className="error-page-title">Oops something went wrong!</h1>
    </div>
  );
};

export default ErrorPage;
