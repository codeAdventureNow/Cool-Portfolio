export default function Header() {
  const darkmode = document.querySelector('#darkmode');
  function switchDark() {
    if (darkmode?.classList.contains('bx-moon')) {
      darkmode.classList.replace('bx-moon', 'bx-sun');
      document.body.classList.add('color');
    } else {
      darkmode?.classList.replace('bx-sun', 'bx-moon');
      document.body.classList.remove('color');
    }
  }

  const menu = document.querySelector('#menu-icon')
  const navlist = document.querySelector('.navlist')

  function switchMenu (){
    menu?.classList.toggle('bx-x');
    navlist?.classList.toggle('open')
  }


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
          <a href='#'>Contact</a>
        </li>
      </ul>
      <div className='h-main'>
        <a href='#' className='h-btn'>
          Buy Now
        </a>
        <div onClick={switchMenu} className='bx bx-menu' id='menu-icon'></div>
        <div onClick={switchDark} className='bx bx-moon' id='darkmode'></div>
      </div>
    </header>
  );
}
