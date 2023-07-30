export default function Header() {
  return (
    <header>
      <a href='#' className='logo'>
        <i className='bx bx-stopwatch'></i>Honor
      </a>

      <ul className='navlist'>
        <li>
          <a href='#' className='active'>
            Home
          </a>
        </li>
        <li>
          <a href='#'>About</a>
        </li>
        <li>
          <a href='#'>Smartphone</a>
        </li>
        <li>
          <a href='#'>Store</a>
        </li>
        <li>
          <a href='#'>Contact Us</a>
        </li>
      </ul>
      <div className='h-main'>
        <a href='#' className='h-btn'>
          Buy Now
        </a>
        <div className='bx bx-menu' id='menu-icon'></div>
        <div className='bx bx-moon' id='darkmode'></div>
      </div>
    </header>
  );
}
