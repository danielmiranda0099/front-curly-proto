import "./sideBar.css";

export function SideBar({ children, style }) {
  return (
    <>
      <div></div>
      <div className="sidebar" style={style}>{children}</div>
    </>
  );
}
