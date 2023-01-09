import React from 'react'
import featured01 from '../components/assets/images/featured-01.jpg'

const Streams = () => {
  return (
    <div className='flex justify-center bg-black px-16 lg:px-40 py-10'>
      <div className="bg-gray p-12 text-white w-full rounded-3xl">
      <div className="grid grid-cols-3 gap-6">
          <div className="bg-black rounded-3xl py-7 px-7 pb-5 col-span-2">
            <div className='flex justify-between'>
              <p className='text-3xl font-bold text-pink mb-8'><span className='text-white underline'>Live</span> Streams</p>
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
          <div className="bg-black rounded-3xl py-8 px-7">
            <p className='text-3xl font-bold text-pink mb-8'><span className='text-white underline'>Top</span> Streamers</p>
                   
          </div>
        </div>
      </div>
    </div>
  )
}

export default Streams
