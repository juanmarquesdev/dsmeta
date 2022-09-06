import logo from "/src/assets/img/logo.svg";
import "./styles.css";
function Header() {
  return (
    <>
      <header>
        <div className="dsmeta-logo-container">
          <img src={logo} alt="DSMeta" />
          <h1>DSMeta</h1>
          <p>
            Desenvolvido por
            <a href="https://github.com/juanmarquesdev">@juanmarquesdev</a>
          </p>
        </div>
      </header>
    </>
  );
}

export default Header;
