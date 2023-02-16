import {
  asideClass,
  asideUlContainerClass,
  asideUlClass,
  asidespanLogoClass,
  asideListSpan,
} from "./style";

const SideBar = ({ user }) => {
  return (
    <aside className={asideClass}>
      <div className={asideUlContainerClass}>
        <ul className={asideUlClass}>
          <li>
            <span className={asidespanLogoClass}>Artmedia</span>
          </li>
          <li>
            <span className={asideListSpan}>{user?.name} {user?.surname}</span>
          </li>
          <li>
            <span className={asideListSpan}>Logout</span>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;
