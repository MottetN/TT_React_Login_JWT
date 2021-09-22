import "./Header.css";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav className="sidebar">
        <div className="logo_content">
          <div className="logo">
            <i className="bx bxl-c-plus-plus"></i>
            <div className="logo_name">M_ANALYTICS</div>
          </div>
          <i className="bx bx-menu" id="btn"></i>
        </div>
        <ul className="nav_list">
          <li>
            <i classname="bx bx-search"></i>
            <input type="search" placeholder="Search" />
          </li>
          <li>
            <NavLink
              to="/"
              className="link_name"
              activeClassName="is-active"
              exact={true}
            >
              <i classname="bx bx-grid-alt"></i> Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/api-openfoodfact/3017620429484"
              className="link_name"
              activeClassName="is-active"
              exact={true}
            >
              <i classname="bx bx-user"></i> User
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/test"
              className="link_name"
              activeClassName="is-active"
              exact={true}
            >
              <i classname="bx bx-chat"></i> Messages
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/analystics"
              className="link_name"
              activeClassName="is-active"
              exact={true}
            >
              <i classname="bx bx-pie-chart-alt-2"></i> Analystics
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/fileManager"
              className="link_name"
              activeClassName="is-active"
              exact={true}
            >
              <i classname="bx bx-folder"></i> File Manager
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/order"
              className="link_name"
              activeClassName="is-active"
              exact={true}
            >
              <i classname="bx bx-cart-alt"></i> Order
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/setting"
              className="link_name"
              activeClassName="is-active"
              exact={true}
            >
              <i classname="bx bx-cog"></i> Setting
            </NavLink>
          </li>
        </ul>
        <div className="profile_content">
          <div className="profile">
            <div className="profile_details">
              <img
                src="https://pbs.twimg.com/profile_images/1404740573488058372/uMo5CBu2_400x400.jpg"
                alt="user_profile_icon"
              />
              <div className="name_job">
                <div className="name">Nicolas Mottet</div>
                <div className="job">Informaticien</div>
              </div>
            </div>
            <i className="bx bx-log-out" id="log_out"></i>
          </div>
        </div>
      </nav>
    </header>
  );
}
