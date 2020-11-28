  
import Link from 'next/link';

const Header = () => (
  <div className="header-wrapper">
    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/cotizacion">
        <a>Cotizaciones</a>
      </Link>
      <Link href="/destinos">
        <a>Destinos</a>
      </Link>
    </nav>

    <style jsx>{`
      .header-wrapper {
        padding: 20px;
        background: #111;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
      }
      a {
        padding: 10px 0;
        margin: 0 15px 0 0;
        white-space: nowrap;
        color: #fff;
      }
      a:hover {
        color: #fff;
        border-bottom: 1px solid #fff;
      }
    `}</style>
  </div>
);

export default Header;