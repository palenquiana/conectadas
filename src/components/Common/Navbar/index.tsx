import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseChimney,
  faArrowRightFromBracket,
  faFilm,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";
import { Card, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../../hooks";

const Navbar = () => {
  const { logout } = useAuth();
  return (
    <>
      <Card className="d-inline-flex border-0 mt-3 cardNav ">
        <Nav>
          <NavLink className="nav-link" to="/wall">
            <FontAwesomeIcon
              icon={faHouseChimney}
              className="fs-4 text-dark text-opacity-75"
            />
          </NavLink>

          <NavLink className="nav-link" to="/movies">
            <FontAwesomeIcon
              icon={faFilm}
              className="fs-4 text-dark text-opacity-75"
            />
          </NavLink>
          <Nav.Link className="nav-link" onClick={logout}>
            <FontAwesomeIcon
              icon={faArrowRightFromBracket}
              className="fs-4 text-dark text-opacity-75"
            />
          </Nav.Link>

          <NavLink className="nav-link" to="/user">
            <FontAwesomeIcon
              icon={faCircleUser}
              className="fs-4 text-dark text-opacity-75"
            />
          </NavLink>
        </Nav>
      </Card>
    </>
  );
};
export { Navbar };
