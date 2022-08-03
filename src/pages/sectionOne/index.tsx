import BoldoIcon from '../../components/boldoIcon'
import Glass from '../../components/glass'
import HorizontalLine from '../../components/horizontalLine'
import PieIcon from '../../components/pieIcon'
import StraightLine from '../../components/straightLine'
import './index.css'

function SectionOne() {
  return (
    <section className='container'>
      <header className='d-flex justify-content-between align-items-center' >
        <a className="logo" href='/'>
          <BoldoIcon className='mr-1' /> Boldo
        </a>
        <nav className='desktop-nav'>
          <ul>
            <li><a href='/'>Product</a></li>
            <li><a href="/">Services</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/" className='login'>Login</a></li>
          </ul>
        </nav>

        <label className="hambugger" htmlFor='hambuggerInput'>
          <span className="top"></span>
          <span className="middle"></span>
          <span className="bottom"></span>
        </label>
        <input id='hambuggerInput' type="checkbox" />
        <nav className='mobile-nav'>
          <ul>
            <li><a href='/'>Product</a></li>
            <li><a href="/">Services</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/" className='login'>Login</a></li>
          </ul>
        </nav>
      </header>
      <div className="main">
        <div className="main-left">
          <h1>Save time by building <br />fast with Boldo Template</h1>
          <p>Funding handshake buyer business-to-business metrics iPad partnership. First mover advantage innovator success deployment non-disclosure.</p>
          <div className="buttons-container">
            <a href="/">Buy template</a>
            <a href="/">Explore</a>
          </div>
        </div>
        <div className="main-right">
          <div className="top-glass">
            <Glass>
              <div className='d-flex align-items-center mb-2 mt-2'>
                <StraightLine />
                <span className="width-container">
                  <StraightLine width='80%' /> 80%
                </span>
              </div>
              <div className='d-flex align-items-center mb-2'>
                <StraightLine />
                <span className="width-container">
                  <StraightLine backgroundColor='#0DBBFC' width='30%' /> 30%
                </span>
              </div>
              <div className='d-flex align-items-center mb-2'>
                <StraightLine />
                <span className="width-container">
                  <StraightLine backgroundColor='white' width='100%' />100%
                </span>
              </div>
              <div className='d-flex align-items-center mb-1'>
                <StraightLine />
                <span className="width-container">
                  <StraightLine backgroundColor='#65E4A3' width='75%' />75%
                </span>
              </div>
            </Glass>
          </div>

          <div className="bottom-glass mt-3">
            <div className="left">
              <Glass>
                <div className="top-section">
                  <HorizontalLine height='var(--h-60)' />
                  <HorizontalLine height='var(--h-40)' />
                  <HorizontalLine height="var(--h-80)" backgroundColor='#95ABBC' />
                  <HorizontalLine height='var(--h-60)' />
                  <HorizontalLine height='var(--h-70)' />
                  <HorizontalLine height='var(--h-30)' />
                </div>
                <div className="bottom-section">
                  <HorizontalLine height='var(--h-20)' />
                  <HorizontalLine height='var(--h-10)' />
                </div>
              </Glass>
            </div>
            <div className="right">
              <Glass>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="circle"></div>
                  <div className="lines">
                    <StraightLine width='100%' marginBottom='var(--h-10)' height='var(--h-10)' />
                    <StraightLine width='90%' marginBottom='var(--h-10)' height='var(--h-10)' />
                    <StraightLine width='100%' marginBottom='var(--h-10)' height='var(--h-10)' />
                  </div>
                </div>
              </Glass>
            </div>
          </div>
        </div>
      </div>

      <div className="roller">
        <div className="slider">
          {
            Array(10).fill(0).map((item, idx) =>
              <div key={idx}>
                <div className="item"><BoldoIcon color='white' /> <span className='d-inline-block ml-1'>Boldo</span></div>
                <div className="item"><PieIcon /> <span className='d-inline-block ml-1'>Presto</span> </div>
              </div>
            )
          }
        </div>
      </div>
    </section>
  )
}

export default SectionOne