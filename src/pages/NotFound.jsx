import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notfound-page">
      <div className="notfound-card">
        <h1>404</h1>

        <h2>Oops! Page Not Found</h2>

        <p>
          The page you are looking for might have been removed,
          renamed or temporarily unavailable.
        </p>

        <Link to="/dashboard">
          <button>Back To Home</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;