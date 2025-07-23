export default function Navbar() {

  return (
    <nav className={`app-container}`}>
        <ul>
            <li><a href="default">Home</a></li>
            <li><a href="news">News</a></li>
            <li><a href="contact">Contact</a></li>
            <li><a href="about">About</a></li>
        </ul>
    </nav>
  );
}