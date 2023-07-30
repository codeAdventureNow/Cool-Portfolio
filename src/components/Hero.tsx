import HeroImageOne from '../assets/main1.png';
import HeroImageTwo from '../assets/main2.png';
import MainHero from '../assets/hero.png';

export default function Hero() {
  return (
    <div>
      <section className='hero'>
        <div className='hero-text'>
          <h1>Smartwatch</h1>
          <h4>Element series</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
            tenetur, totam fuga dignissimos unde incidunt.
          </p>
          <div className='hero-in'>
            <div className='box'>
              <h3>White</h3>
              <h5>Element</h5>
              <img src={HeroImageOne} alt='watch1' />
            </div>

            <div className='box'>
              <h3>White</h3>
              <h5>Element</h5>
              <img src={HeroImageTwo} alt='watch2' />
            </div>

            <div className='box'>
              <h3>White</h3>
              <h5>Element</h5>
              <img src={HeroImageOne} alt='watch3' />
            </div>
          </div>
        </div>

        <div className='hero-img'>
          <img src={MainHero} alt='mainwach' />
        </div>
      </section>
      <div className='down-arrow'>
        <i className='bx bx-down-arrow-alt'></i>
      </div>
    </div>
  );
}
