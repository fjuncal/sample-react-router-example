import { NavLink, Outlet } from "react-router-dom";
import "./ProfilesPage.css";
export default function ProfilesPage() {
  const profiles = [1, 2, 3, 4, 5];
  return (
    <div className="flex flex-col gap">
      {profiles.map((profile) => (
        <div>
          <NavLink
            key={profile}
            to={`/profiles/${profile}`}
            className={({ isActive }) => {
              return isActive ? "classCreatedInCssFile" : "";
            }}
          >
            Profile {profile}
          </NavLink>
        </div>
      ))}
      <Outlet />
    </div>
  );
}
