import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu "+(menuOpen && "active")}>
      <ul>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#home">Home</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#whatido">What I do</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#whyme">Why me?</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#contact">Contact me</a>
        </li>
      </ul>
    </div>
  );
}
