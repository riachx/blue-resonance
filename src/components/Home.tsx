import Blob from './Blob'
import ContactButton from './ContactButton'
import DesignStrategyButton from './DesignStrategyButton'

function Home() {
  return (
    <>
      {/* Animated blobs */}
      <Blob/>
      
      <main className="main-content">
        <div className="hero-section">
          <div className="hero-left-column">
            <div className="hero-text">
              <h1>Delivering <br></br>cutting-edge <span>enterprise mobility</span> and <span>IoT solutions.</span></h1>
            </div>

            <div className="content-section">
              <p>Through our expertise in mobile applications, backend services, security, and networking, we transform business strategies into powerful digital experiences.</p>
            </div>
            
            <div className="button-section">
              <ContactButton />
              <DesignStrategyButton />
            </div>
          </div>
          <div className="hero-image">
            <img src="/iphones.png" alt="iPhone devices" className="iphones" />
          </div>
        </div>
      </main>
    </>
  )
}

export default Home 