import { Line } from "react-chartjs-2";
import { NavLink } from "react-router-dom";

import "./Analystics.css";

export default function Analystics() {
  return (
    <div className="Analystics">
      <div className="tab_0">
        <div className="tab-header">
          <span className="cell_0">Website</span>
          <span className="cell_1">State</span>
          <span className="cell_0">Owner</span>
        </div>
        <NavLink to="/analystics/1" className="link_tab_WebSite" exact={true}>
          <div className="row_0">
            <span className="cell_0">M-INFOSOLUTION</span>
            <span className="cell_1">
              <i class="bx bxs-bolt-circle"></i>
            </span>
            <span className="cell_0">
              <i class="bx bxs-user"></i> Mottet Nicolas
            </span>
          </div>
        </NavLink>
        <div className="row_0">
          <span className="cell_0">GITHUB</span>
          <span className="cell_1">
            <i class="bx bxs-bolt-circle"></i>
          </span>
          <span className="cell_0">
            <i class="bx bxs-user"></i> GITHUB INDUSTRIES
          </span>
        </div>
        <div className="row_0">
          <span className="cell_0">MOTTETN.CH</span>
          <span className="cell_1">
            <i class="bx bx-bolt-circle"></i>
          </span>
          <span className="cell_0">
            <i class="bx bxs-user"></i> Mottet Nicolas
          </span>
        </div>
      </div>
      <div className="ct_btn_add">
        <div className="btn_m">Ajouter</div>
      </div>
    </div>
  );
}
