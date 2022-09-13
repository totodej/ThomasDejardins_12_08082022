import "../styles/pages/Error.css";
import { Link } from "react-router-dom";

/**
 * Error page to show error message
 * @returns {ReactElement}
 */

function Error() {
  return (
    <div className="error">
      <h2>404</h2>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" className="link-error">
        Retourner sur la page d'acceuil
      </Link>
    </div>
  );
}

export default Error;
