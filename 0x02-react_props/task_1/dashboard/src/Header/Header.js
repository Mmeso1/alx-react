import logo from "../holberton_logo.jpg";

export default function Header() {
  return (
    <header className="App-header">
      <img src={logo} alt="Holberton School logo" />
      <h1>School dashboard</h1>
    </header>
  );
}
