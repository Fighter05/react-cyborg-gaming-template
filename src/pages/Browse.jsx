import React from 'react'
import featured01 from '../components/assets/images/featured-01.jpg'
import game01 from '../components/assets/images/game-01.jpg'
import stream01 from '../components/assets/images/stream-01.jpg'
import avatar01 from '../components/assets/images/avatar-01.jpg'
// border-2 border-solid border-red-600

const Browse = () => {
  return (
    <div className='flex justify-center bg-black px-16 lg:px-40 py-10'>
      <div className="bg-gray p-12 text-white w-full rounded-3xl">
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-black rounded-3xl py-7 px-7 pb-5 col-span-2">
            <div className='flex justify-between'>
              <p className='text-3xl font-bold text-pink mb-8'><span className='text-white underline'>Featured</span> Games</p>
              <div className='flex gap-2 text-lightgray'>
                <i class="fa-solid fa-chevron-left"></i>
                <i class="fa-solid fa-chevron-right"></i>
              </div>
            </div>
            <div className="wrapper">
              <div className="items">
                <img className='rounded-3xl w-full' src={featured01} alt="" />
                <div className="bg-black pt-4 px-4">
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
              <div className="items">
                <img className='rounded-3xl w-full' src={featured01} alt="" />
                <div className="bg-black pt-4 px-4">
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
              <div className="items">
                <img className='rounded-3xl w-full' src={featured01} alt="" />
                <div className="bg-black pt-4 px-4">
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
              <div className="items">
                <img className='rounded-3xl w-full' src={featured01} alt="" />
                <div className="bg-black pt-4 px-4">
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
          </div>
          <div className="bg-black rounded-3xl py-7 px-7">
            <p className='text-3xl font-bold text-pink mb-8'><span className='text-white underline'>Top</span> Downloaded</p>
            <div>
              <div className="pb-6 border-b border-solid border-lightgray/25">
                  <div className='flex'>
                    <img className='rounded-3xl mr-5' src={game01} alt="" />
                    <div className="">
                      <p className='font-bold'>Dota 2</p>
                      <p className='text-lightgray'>Sandbox</p>
                      <div className='flex gap-2 mt-2'>
                          <i style={{color: 'yellow' ,marginTop: '2px'}} class="fa-solid fa-star"></i>
                          <p>4.8</p>
                          <i style={{color: 'var(--color-pink)'  ,marginTop: '2px'}} class="fa-solid fa-download"></i>
                          <p>2.3M</p>
                      </div>
                    </div>
                    <div className='self-end ml-auto'>
                      <button className='bg-gray p-4 rounded-full'>
                        <i style={{color: 'var(--color-pink)'}} class="fa-solid fa-download"></i>
                      </button>
                    </div>
                  </div>
                  
                </div>
                <div className="py-6 border-b border-solid border-lightgray/25">
                  <div className='flex'>
                    <img className='rounded-3xl mr-5' src={game01} alt="" />
                    <div className="">
                      <p className='font-bold'>Dota 2</p>
                      <p className='text-lightgray'>Sandbox</p>
                      <div className='flex gap-2 mt-2'>
                          <i style={{color: 'yellow' ,marginTop: '2px'}} class="fa-solid fa-star"></i>
                          <p>4.8</p>
                          <i style={{color: 'var(--color-pink)'  ,marginTop: '2px'}} class="fa-solid fa-download"></i>
                          <p>2.3M</p>
                      </div>
                    </div>
                    <div className='self-end ml-auto'>
                      <button className='bg-gray p-4 rounded-full'>
                        <i style={{color: 'var(--color-pink)'}} class="fa-solid fa-download"></i>
                      </button>
                    </div>
                  </div>
                  
                </div>
                <div className="py-6 border-b border-solid border-lightgray/25">
                  <div className='flex'>
                    <img className='rounded-3xl mr-5' src={game01} alt="" />
                    <div className="">
                      <p className='font-bold'>Dota 2</p>
                      <p className='text-lightgray'>Sandbox</p>
                      <div className='flex gap-2 mt-2'>
                          <i style={{color: 'yellow' ,marginTop: '2px'}} class="fa-solid fa-star"></i>
                          <p>4.8</p>
                          <i style={{color: 'var(--color-pink)'  ,marginTop: '2px'}} class="fa-solid fa-download"></i>
                          <p>2.3M</p>
                      </div>
                    </div>
                    <div className='self-end ml-auto'>
                      <button className='bg-gray p-4 rounded-full'>
                        <i style={{color: 'var(--color-pink)'}} class="fa-solid fa-download"></i>
                      </button>
                    </div>
                  </div>
      
                </div>
                <p className='text-pink font-bold text-center mt-4 cursor-pointer'>View All Games</p>
            </div>
          </div>
        </div>
        <p className='text-center text-3xl font-bold text-pink my-10'><span className='text-white underline'>How To Start Your</span> Live Stream</p>
        <div className='grid grid-cols-3 gap-6'>
          <div className='border border-solid border-lightgray/50 rounded-3xl p-6'>
            <button className='py-3 px-3 bg-white rounded-full'>
              <i style={{color: 'var(--color-pink)', fontSize: '2rem'}} class="fa-solid fa-headset"></i>
            </button>
            <p className='font-bold my-4 text-xl'>Go To Your Profile</p>
            <p className='text-lightgray leading-7'>Cyborg Gaming is free HTML CSS website template provided by TemplateMo. This is Bootstrap v5.2.0 layout.</p>
          </div>
          <div className='border border-solid border-lightgray/50 rounded-3xl p-6'>
            <button className='py-3 px-3 bg-white rounded-full'>
              <i style={{color: 'var(--color-pink)', fontSize: '2rem'}} class="fa-solid fa-headset"></i>
            </button>
            <p className='font-bold my-4 text-xl'>Go To Your Profile</p>
            <p className='text-lightgray leading-7'>Cyborg Gaming is free HTML CSS website template provided by TemplateMo. This is Bootstrap v5.2.0 layout.</p>
          </div>
          <div className='border border-solid border-lightgray/50 rounded-3xl p-6'>
            <button className='py-3 px-3 bg-white rounded-full'>
              <i style={{color: 'var(--color-pink)', fontSize: '2rem'}} class="fa-solid fa-headset"></i>
            </button>
            <p className='font-bold my-4 text-xl'>Go To Your Profile</p>
            <p className='text-lightgray leading-7'>Cyborg Gaming is free HTML CSS website template provided by TemplateMo. This is Bootstrap v5.2.0 layout.</p>
          </div>
        </div>
        <div className='text-center my-8'>
          <button className='pink-btn'>Go To Profile</button>
        </div>
        <div className="bg-black rounded-3xl py-7 px-7 pb-10">
          <p className='text-3xl font-bold text-pink mb-8'><span className='text-white underline'>Most Popular</span> Live Stream</p>
          <div className='grid grid-cols-4 gap-6'>
            <div>
              <img className='rounded-3xl mb-4' src={stream01} alt="" />
              <div className='flex gap-2'>
                <div>
                  <img className='rounded-full' src={avatar01} alt="" />
                </div>
                <div>
                  <div className='flex items-center gap-2'>
                    <i style={{color: 'var(--color-pink)'}} class="fa-solid fa-circle-check"></i>
                    <p className='text-pink'>KenganC</p>
                  </div>
                  <p className='font-bold text-xl'>Just Talking With Fans</p>
                </div>
              </div>
            </div>
            <div>
              <img className='rounded-3xl mb-4' src={stream01} alt="" />
              <div className='flex gap-2'>
                <div>
                  <img className='rounded-full' src={avatar01} alt="" />
                </div>
                <div>
                  <div className='flex items-center gap-2'>
                    <i style={{color: 'var(--color-pink)'}} class="fa-solid fa-circle-check"></i>
                    <p className='text-pink'>KenganC</p>
                  </div>
                  <p className='font-bold text-xl'>Just Talking With Fans</p>
                </div>
              </div>
            </div>
            <div>
              <img className='rounded-3xl mb-4' src={stream01} alt="" />
              <div className='flex gap-2'>
                <div>
                  <img className='rounded-full' src={avatar01} alt="" />
                </div>
                <div>
                  <div className='flex items-center gap-2'>
                    <i style={{color: 'var(--color-pink)'}} class="fa-solid fa-circle-check"></i>
                    <p className='text-pink'>KenganC</p>
                  </div>
                  <p className='font-bold text-xl'>Just Talking With Fans</p>
                </div>
              </div>
            </div>
            <div>
              <img className='rounded-3xl mb-4' src={stream01} alt="" />
              <div className='flex gap-2'>
                <div>
                  <img className='rounded-full' src={avatar01} alt="" />
                </div>
                <div>
                  <div className='flex items-center gap-2'>
                    <i style={{color: 'var(--color-pink)'}} class="fa-solid fa-circle-check"></i>
                    <p className='text-pink'>KenganC</p>
                  </div>
                  <p className='font-bold text-xl'>Just Talking With Fans</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='text-center -mt-4'>
          <button className='pink-btn'>Discover All Streams</button>
        </div>
      </div>
    </div>
  )
}

export default Browse
