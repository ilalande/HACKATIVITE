import { NavLink } from "react-router-dom";
import SMenu from "./style";

export default function Menu() {
  return (
    <SMenu>
      <ul>
        <li>
          <NavLink to="/">Accueil</NavLink>
        </li>
        <li className="i">
          <NavLink to="/infos">Infos</NavLink>
        </li>
      </ul>
    </SMenu>
  );
}
