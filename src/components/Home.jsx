import React from 'react'
import popular01 from './assets/images/popular-01.jpg'
import game01 from './assets/images/game-01.jpg'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div className='flex justify-center bg-black px-16 lg:px-40 py-10'>
      <div className="bg-gray p-12 text-white w-full rounded-3xl">
        <div className="flex flex-col justify-center items-center md:items-start h-96
        bg-home-banner bg-no-repeat pl-0 md:pl-12 mb-12 bg-cover rounded-3xl text-center md:text-start">
          <p className='text-xl'>Welcome To Cyborg</p>
          <p className='text-5xl font-bold my-7'><span className='text-pink'>BROWSE </span>OUR POPULAR <br></br>
          GAMES HERE</p>
          <button className='pink-btn'>Browse Now</button>
        </div>
        {/* ---------------------------------------------- */}
        <div className="bg-black rounded-3xl py-8 px-7 pb-16">
          <p className='text-3xl font-bold text-pink mb-8'><span className='text-white underline'>Most Popular</span> Right Now</p>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div className="rounded-3xl bg-gray py-6 px-4">
              <img className='w-full mb-4 rounded-3xl' src={popular01} alt="" />
              <div className="flex justify-between">
                <p className='font-bold'>Fornite</p>
                <div className="flex gap-2">
                  <i style={{color: 'yellow' ,marginTop: '2px'}} class="fa-solid fa-star"></i>
                  <p>4.8</p>
                </div>
              </div>
              <div className="flex justify-between">
                <p style={{color: 'var(--color-lightgray)'}}>Sandbox</p>
                <div className="flex gap-2">
                  <i style={{color: 'var(--color-pink)'  ,marginTop: '2px'}} class="fa-solid fa-download"></i>
                  <p>2.3M</p>
                </div>
              </div>
            </div>
            <div className="rounded-3xl bg-gray py-6 px-4">
              <img className='w-full mb-4 rounded-3xl' src={popular01} alt="" />
              <div className="flex justify-between">
                <p className='font-bold'>Fornite</p>
                <div className="flex gap-2">
                  <i style={{color: 'yellow' ,marginTop: '2px'}} class="fa-solid fa-star"></i>
                  <p>4.8</p>
                </div>
              </div>
              <div className="flex justify-between">
                <p style={{color: 'var(--color-lightgray)'}}>Sandbox</p>
                <div className="flex gap-2">
                  <i style={{color: 'var(--color-pink)'  ,marginTop: '2px'}} class="fa-solid fa-download"></i>
                  <p>2.3M</p>
                </div>
              </div>
            </div>
            <div className="rounded-3xl bg-gray py-6 px-4">
              <img className='w-full mb-4 rounded-3xl' src={popular01} alt="" />
              <div className="flex justify-between">
                <p className='font-bold'>Fornite</p>
                <div className="flex gap-2">
                  <i style={{color: 'yellow' ,marginTop: '2px'}} class="fa-solid fa-star"></i>
                  <p>4.8</p>
                </div>
              </div>
              <div className="flex justify-between">
                <p style={{color: 'var(--color-lightgray)'}}>Sandbox</p>
                <div className="flex gap-2">
                  <i style={{color: 'var(--color-pink)'  ,marginTop: '2px'}} class="fa-solid fa-download"></i>
                  <p>2.3M</p>
                </div>
              </div>
            </div>
            <div className="rounded-3xl bg-gray py-6 px-4">
              <img className='w-full mb-4 rounded-3xl' src={popular01} alt="" />
              <div className="flex justify-between">
                <p className='font-bold'>Fornite</p>
                <div className="flex gap-2">
                  <i style={{color: 'yellow' ,marginTop: '2px'}} class="fa-solid fa-star"></i>
                  <p>4.8</p>
                </div>
              </div>
              <div className="flex justify-between">
                <p style={{color: 'var(--color-lightgray)'}}>Sandbox</p>
                <div className="flex gap-2">
                  <i style={{color: 'var(--color-pink)'  ,marginTop: '2px'}} class="fa-solid fa-download"></i>
                  <p>2.3M</p>
                </div>
              </div>
            </div>
            <div className="rounded-3xl bg-gray py-6 px-4">
              <img className='w-full mb-4 rounded-3xl' src={popular01} alt="" />
              <div className="flex justify-between">
                <p className='font-bold'>Fornite</p>
                <div className="flex gap-2">
                  <i style={{color: 'yellow' ,marginTop: '2px'}} class="fa-solid fa-star"></i>
                  <p>4.8</p>
                </div>
              </div>
              <div className="flex justify-between">
                <p style={{color: 'var(--color-lightgray)'}}>Sandbox</p>
                <div className="flex gap-2">
                  <i style={{color: 'var(--color-pink)'  ,marginTop: '2px'}} class="fa-solid fa-download"></i>
                  <p>2.3M</p>
                </div>
              </div>
            </div>
            <div className="rounded-3xl bg-gray py-6 px-4">
              <img className='w-full mb-4 rounded-3xl' src={popular01} alt="" />
              <div className="flex justify-between">
                <p className='font-bold'>Fornite</p>
                <div className="flex gap-2">
                  <i style={{color: 'yellow' ,marginTop: '2px'}} class="fa-solid fa-star"></i>
                  <p>4.8</p>
                </div>
              </div>
              <div className="flex justify-between">
                <p style={{color: 'var(--color-lightgray)'}}>Sandbox</p>
                <div className="flex gap-2">
                  <i style={{color: 'var(--color-pink)'  ,marginTop: '2px'}} class="fa-solid fa-download"></i>
                  <p>2.3M</p>
                </div>
              </div>
            </div>
            <div className="rounded-3xl bg-gray py-6 px-4">
              <img className='w-full mb-4 rounded-3xl' src={popular01} alt="" />
              <div className="flex justify-between">
                <p className='font-bold'>Fornite</p>
                <div className="flex gap-2">
                  <i style={{color: 'yellow' ,marginTop: '2px'}} class="fa-solid fa-star"></i>
                  <p>4.8</p>
                </div>
              </div>
              <div className="flex justify-between">
                <p style={{color: 'var(--color-lightgray)'}}>Sandbox</p>
                <div className="flex gap-2">
                  <i style={{color: 'var(--color-pink)'  ,marginTop: '2px'}} class="fa-solid fa-download"></i>
                  <p>2.3M</p>
                </div>
              </div>
            </div>
            <div className="rounded-3xl bg-gray py-6 px-4">
              <img className='w-full mb-4 rounded-3xl' src={popular01} alt="" />
              <div className="flex justify-between">
                <p className='font-bold'>Fornite</p>
                <div className="flex gap-2">
                  <i style={{color: 'yellow' ,marginTop: '2px'}} class="fa-solid fa-star"></i>
                  <p>4.8</p>
                </div>
              </div>
              <div className="flex justify-between">
                <p style={{color: 'var(--color-lightgray)'}}>Sandbox</p>
                <div className="flex gap-2">
                  <i style={{color: 'var(--color-pink)'  ,marginTop: '2px'}} class="fa-solid fa-download"></i>
                  <p>2.3M</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-center -mt-7 mb-10'>
          <button className="pink-btn">Discover Popular</button>
        </div>
        {/* ------------------------------------------------------------------------ */}
        <div className="bg-black rounded-3xl py-8 px-7 pb-16">
            <p className='text-3xl font-bold text-pink mb-8'><span className='text-white underline'>Your Gaming</span> Library</p>
          <div className="flex justify-between items-center pb-6 border-b border-solid border-lightgray/25">
            <div className='flex items-center'>
              <img className='rounded-3xl mr-5' src={game01} alt="" />
              <div>
                <p className='font-bold'>Dota 2</p>
                <p className='text-lightgray'>Sandbox</p>
              </div>
            </div>
            <div>
              <p className='font-bold'>Date Added</p>
              <p className='text-lightgray'>24/08/2036</p>
            </div>
            <div>
              <p className='font-bold'>Hours Played</p>
              <p className='text-lightgray'>634 H 22 Mins</p>
            </div>
            <div>
              <p className='font-bold'>Currently</p>
              <p className='text-lightgray'>Downloaded</p>
            </div>
            <div className='mr-9'>
              <button className=' text-lightgray border-2 
              border-solid border-lightgray px-6 py-2 rounded-3xl'>Downloaded</button>
            </div>
          </div>
          <div className="flex justify-between items-center py-6 border-b border-solid border-lightgray/25">
            <div className='flex items-center'>
              <img className='rounded-3xl mr-5' src={game01} alt="" />
              <div>
                <p className='font-bold'>Dota 2</p>
                <p className='text-lightgray'>Sandbox</p>
              </div>
            </div>
            <div>
              <p className='font-bold'>Date Added</p>
              <p className='text-lightgray'>24/08/2036</p>
            </div>
            <div>
              <p className='font-bold'>Hours Played</p>
              <p className='text-lightgray'>634 H 22 Mins</p>
            </div>
            <div>
              <p className='font-bold'>Currently</p>
              <p className='text-lightgray'>Downloaded</p>
            </div>
            <div className='mr-9'>
              <button className=' text-pink border-2 
              border-solid border-pink px-6 py-2 rounded-3xl transition ease-in-out duration-300
              hover:bg-white hover:border-white'>Download</button>
            </div>
          </div>
            
          <div className="flex justify-between items-center py-6 border-b border-solid border-lightgray/25">
            <div className='flex items-center'>
              <img className='rounded-3xl mr-5' src={game01} alt="" />
              <div>
                <p className='font-bold'>Dota 2</p>
                <p className='text-lightgray'>Sandbox</p>
              </div>
            </div>
            <div>
              <p className='font-bold'>Date Added</p>
              <p className='text-lightgray'>24/08/2036</p>
            </div>
            <div>
              <p className='font-bold'>Hours Played</p>
              <p className='text-lightgray'>634 H 22 Mins</p>
            </div>
            <div>
              <p className='font-bold'>Currently</p>
              <p className='text-lightgray'>Downloaded</p>
            </div>
            <div className='mr-9'>
              <button className=' text-lightgray border-2 
              border-solid border-lightgray px-6 py-2 rounded-3xl'>Downloaded</button>
            </div>
          </div>
        </div>
          <Link to ="/profile">
        <div className='flex justify-center -mt-7 mb-10'>
            <button className="pink-btn">View Your Library</button>
        </div>
          </Link>
      </div>
    </div>
  )
}

export default Home