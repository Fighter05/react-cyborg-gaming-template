import React from 'react'
import popular01 from './assets/images/popular-01.jpg'
import game01 from './assets/images/game-01.jpg'
import './Home.css'

function Home() {
  return (
    <div className='home'>
      <div className="container">
        <div className="home-banner">
          <p>Welcome To Cyborg</p>
          <p><span style={{color: 'var(--color-pink)'}}>BROWSE </span>OUR POPULAR <br></br>
          GAMES HERE</p>
          <button className='pink-btn'>Browse Now</button>
        </div>
        <div className="home-popular">
          <p><span>Most Popular</span> Right Now</p>
          <div className="home-popular-grid">
            <div className="home-game-popular">
              <img src={popular01} alt="" />
              <div className="home-popular-flex">
                <p>Fornite</p>
                <div className="home-icon-flex">
                  <i style={{color: 'yellow'}} class="fa-solid fa-star"></i>
                  <p>4.8</p>
                </div>
              </div>
              <div className="home-popular-flex">
                <p style={{color: 'var(--color-lightgray)'}}>Sandbox</p>
                <div className="home-icon-flex">
                  <i style={{color: 'var(--color-pink)'}} class="fa-solid fa-download"></i>
                  <p>2.3M</p>
                </div>
              </div>
            </div>
            <div className="home-game-popular">
              <img src={popular01} alt="" />
              <div className="home-popular-flex">
                <p>Fornite</p>
                <div className="home-icon-flex">
                  <i style={{color: 'yellow'}} class="fa-solid fa-star"></i>
                  <p>4.8</p>
                </div>
              </div>
              <div className="home-popular-flex">
                <p style={{color: 'var(--color-lightgray)'}}>Sandbox</p>
                <div className="home-icon-flex">
                  <i style={{color: 'var(--color-pink)'}} class="fa-solid fa-download"></i>
                  <p>2.3M</p>
                </div>
              </div>
            </div>
            <div className="home-game-popular">
              <img src={popular01} alt="" />
              <div className="home-popular-flex">
                <p>Fornite</p>
                <div className="home-icon-flex">
                  <i style={{color: 'yellow'}} class="fa-solid fa-star"></i>
                  <p>4.8</p>
                </div>
              </div>
              <div className="home-popular-flex">
                <p style={{color: 'var(--color-lightgray)'}}>Sandbox</p>
                <div className="home-icon-flex">
                  <i style={{color: 'var(--color-pink)'}} class="fa-solid fa-download"></i>
                  <p>2.3M</p>
                </div>
              </div>
            </div>
            <div className="home-game-popular">
              <img src={popular01} alt="" />
              <div className="home-popular-flex">
                <p>Fornite</p>
                <div className="home-icon-flex">
                  <i style={{color: 'yellow'}} class="fa-solid fa-star"></i>
                  <p>4.8</p>
                </div>
              </div>
              <div className="home-popular-flex">
                <p style={{color: 'var(--color-lightgray)'}}>Sandbox</p>
                <div className="home-icon-flex">
                  <i style={{color: 'var(--color-pink)'}} class="fa-solid fa-download"></i>
                  <p>2.3M</p>
                </div>
              </div>
            </div>
            <div className="home-game-popular">
              <img src={popular01} alt="" />
              <div className="home-popular-flex">
                <p>Fornite</p>
                <div className="home-icon-flex">
                  <i style={{color: 'yellow'}} class="fa-solid fa-star"></i>
                  <p>4.8</p>
                </div>
              </div>
              <div className="home-popular-flex">
                <p style={{color: 'var(--color-lightgray)'}}>Sandbox</p>
                <div className="home-icon-flex">
                  <i style={{color: 'var(--color-pink)'}} class="fa-solid fa-download"></i>
                  <p>2.3M</p>
                </div>
              </div>
            </div>
            <div className="home-game-popular">
              <img src={popular01} alt="" />
              <div className="home-popular-flex">
                <p>Fornite</p>
                <div className="home-icon-flex">
                  <i style={{color: 'yellow'}} class="fa-solid fa-star"></i>
                  <p>4.8</p>
                </div>
              </div>
              <div className="home-popular-flex">
                <p style={{color: 'var(--color-lightgray)'}}>Sandbox</p>
                <div className="home-icon-flex">
                  <i style={{color: 'var(--color-pink)'}} class="fa-solid fa-download"></i>
                  <p>2.3M</p>
                </div>
              </div>
            </div>
            <div className="home-game-popular">
              <img src={popular01} alt="" />
              <div className="home-popular-flex">
                <p>Fornite</p>
                <div className="home-icon-flex">
                  <i style={{color: 'yellow'}} class="fa-solid fa-star"></i>
                  <p>4.8</p>
                </div>
              </div>
              <div className="home-popular-flex">
                <p style={{color: 'var(--color-lightgray)'}}>Sandbox</p>
                <div className="home-icon-flex">
                  <i style={{color: 'var(--color-pink)'}} class="fa-solid fa-download"></i>
                  <p>2.3M</p>
                </div>
              </div>
            </div>
            <div className="home-game-popular">
              <img src={popular01} alt="" />
              <div className="home-popular-flex">
                <p>Fornite</p>
                <div className="home-icon-flex">
                  <i style={{color: 'yellow'}} class="fa-solid fa-star"></i>
                  <p>4.8</p>
                </div>
              </div>
              <div className="home-popular-flex">
                <p style={{color: 'var(--color-lightgray)'}}>Sandbox</p>
                <div className="home-icon-flex">
                  <i style={{color: 'var(--color-pink)'}} class="fa-solid fa-download"></i>
                  <p>2.3M</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='pink-btn-box'>
          <button className="pink-btn">Discover Popular</button>
        </div>
        <div className="home-popular">
          <p style={{marginBottom: '30px'}}><span>Your Gaming</span> Library</p>
          <div className="home-game-data">
            <img src={game01} alt="" />
            <div className="home-game-title">
              <p>Dota 2</p>
              <p>Sandbox</p>
            </div>
            <div className="home-game-title">
              <p>Date Added</p>
              <p>24/08/2036</p>
            </div>
            <div className="home-game-title">
              <p>Hours Played</p>
              <p>634 H 22 Mins</p>
            </div>
            <div className="home-game-title">
              <p>Currently</p>
              <p>Downloaded</p>
            </div>
            <button className='pink-btn'>Downloaded</button>
          </div>
          <div className="home-game-data">
            <img src={game01} alt="" />
            <div className="home-game-title">
              <p>Dota 2</p>
              <p>Sandbox</p>
            </div>
            <div className="home-game-title">
              <p>Date Added</p>
              <p>24/08/2036</p>
            </div>
            <div className="home-game-title">
              <p>Hours Played</p>
              <p>634 H 22 Mins</p>
            </div>
            <div className="home-game-title">
              <p>Currently</p>
              <p>Downloaded</p>
            </div>
            <button className='pink-btn'>Download</button>
          </div>
          <div className="home-game-data">
            <img src={game01} alt="" />
            <div className="home-game-title">
              <p>Dota 2</p>
              <p>Sandbox</p>
            </div>
            <div className="home-game-title">
              <p>Date Added</p>
              <p>24/08/2036</p>
            </div>
            <div className="home-game-title">
              <p>Hours Played</p>
              <p>634 H 22 Mins</p>
            </div>
            <div className="home-game-title">
              <p>Currently</p>
              <p>Downloaded</p>
            </div>
            <button className='pink-btn'>Downloaded</button>
          </div>
        </div>
        <div className='pink-btn-box'>
          <button className="pink-btn">View Your Library</button>
        </div>
      </div>
    </div>
  )
}

export default Home
