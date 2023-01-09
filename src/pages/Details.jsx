import React from 'react'
import fortniteLeft from '../components/assets/images/feature-left.jpg'
import detail01 from '../components/assets/images/details-01.jpg'
import game01 from '../components/assets/images/game-01.jpg'


// border-2 border-solid border-red-600

const Details = () => {
  return (
    <div className='flex justify-center bg-black px-16 lg:px-40 py-10'>
        <div className="bg-gray p-12 text-white w-full rounded-3xl">
            <div className='grid grid-cols-1 grid-rows-3 gap-y-6 lg:grid-rows-1 lg:grid-cols-3 lg:gap-x-6'>
              <img className='w-full row-span-2 rounded-3xl lg:row-span-1' src={fortniteLeft} alt="" />
              <div className='col-span-2 bg-fortnite-right bg-cover rounded-3xl flex justify-center items-center'>
                <button>
                  <i style={{fontSize: '2.5rem', backgroundColor: 'var(--color-pink)', borderRadius: '50%'}} class="fa-solid fa-circle-play"></i>
                </button>
              </div>
            </div>
            <p className='my-16 uppercase text-center font-bold text-5xl'>Fortnite Details</p>
            <div className=' bg-black p-10 rounded-3xl mb-10'>
              <div className='inline lg:flex gap-6 mb-6'>
                <div className="rounded-3xl bg-gray py-6 px-4 w-full lg:w-1/2">
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
                <div className=" flex justify-between rounded-3xl bg-gray my-6 lg:my-0 py-6 px-14 lg:px-8 xl:px-14 w-full lg:w-1/2">
                  <div className="text-center">
                      <i style={{color: 'yellow' ,marginTop: '2px'}} class="fa-solid fa-star"></i>
                      <p>4.8</p>
                  </div>
                  <div className="text-center">
                      <i style={{color: 'var(--color-pink)'  ,marginTop: '2px'}} class="fa-solid fa-download"></i>
                      <p>2.3M</p>
                  </div>
                  <div className="text-center">
                      <i style={{color: 'var(--color-pink)'  ,marginTop: '2px'}} class="fa-solid fa-server"></i>
                      <p>36GB</p>
                  </div>
                  <div className="text-center">
                    <i style={{color: 'var(--color-pink)'  ,marginTop: '2px'}} class="fa-solid fa-gamepad"></i>
                    <p>Action</p>
                  </div>
                </div>      
              </div>
              <div className='grid lg:flex gap-6 '>
                <div className='lg:w-1/3 '>
                  <img className='w-full rounded-3xl' src={detail01} alt="" />
                </div>
                <div className='w-full lg:w-1/3 '>
                  <img className='w-full rounded-3xl' src={detail01} alt="" />
                </div>
                <div className='w-full lg:w-1/3'>
                  <img className='w-full rounded-3xl' src={detail01} alt="" />
                </div>
              </div>
              <p className='text-lightgray my-6 leading-7'>
              Cyborg Gaming is free HTML CSS website template provided by TemplateMo. This is Bootstrap 
              v5.2.0 layout. You can make a 
              <span className='text-white hover:text-pink cursor-pointer'> small contribution via PayPal </span> 
              to info [at] templatemo.com and 
              thank you for supporting. If you want to get the PSD source files, please contact us. Lorem 
              ipsum dolor sit consectetur es dispic dipiscingei elit, sed doers eiusmod lisum hored tempor.
              </p>
              <button className='transition ease-in-out duration-300 border-solid border border-pink text-pink w-full py-3 rounded-3xl
              hover:bg-white hover:border-white'>Download Fortnite Now!</button>
            </div>
            <div className="bg-black rounded-3xl py-8 px-7 pb-16">
              <p className='text-3xl font-bold text-pink mb-8'><span className='text-white underline'>Other Related</span> Games</p>
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 gap-y-8'>
                <div className="pb-8 border-b border-solid border-lightgray/25 flex justify-between items-center">
                  <div className='flex items-center'>
                    <img className='rounded-3xl mr-5' src={game01} alt="" />
                    <div className="mr-10 lg:mr-20 xl:mr-40">
                      <p className='font-bold'>Dota 2</p>
                      <p className='text-lightgray'>Sandbox</p>
                    </div>
                  </div>
                  <div>
                    <div className="flex gap-2">
                      <i style={{color: 'yellow' ,marginTop: '2px'}} class="fa-solid fa-star"></i>
                      <p>4.8</p>
                    </div>
                    <div className="flex gap-2">
                      <i style={{color: 'var(--color-pink)'  ,marginTop: '2px'}} class="fa-solid fa-download"></i>
                      <p>2.3M</p>
                    </div>
                  </div>
                </div>
                <div className="pb-8 border-b border-solid border-lightgray/25 flex justify-between items-center">
                  <div className='flex items-center'>
                    <img className='rounded-3xl mr-5' src={game01} alt="" />
                    <div className="mr-10 lg:mr-20 xl:mr-40">
                      <p className='font-bold'>Dota 2</p>
                      <p className='text-lightgray'>Sandbox</p>
                    </div>
                  </div>
                  <div>
                    <div className="flex gap-2">
                      <i style={{color: 'yellow' ,marginTop: '2px'}} class="fa-solid fa-star"></i>
                      <p>4.8</p>
                    </div>
                    <div className="flex gap-2">
                      <i style={{color: 'var(--color-pink)'  ,marginTop: '2px'}} class="fa-solid fa-download"></i>
                      <p>2.3M</p>
                    </div>
                  </div>
                </div>
                <div className="pb-8 border-b border-solid border-lightgray/25 flex justify-between items-center">
                  <div className='flex items-center'>
                    <img className='rounded-3xl mr-5' src={game01} alt="" />
                    <div className="mr-10 lg:mr-20 xl:mr-40">
                      <p className='font-bold'>Dota 2</p>
                      <p className='text-lightgray'>Sandbox</p>
                    </div>
                  </div>
                  <div>
                    <div className="flex gap-2">
                      <i style={{color: 'yellow' ,marginTop: '2px'}} class="fa-solid fa-star"></i>
                      <p>4.8</p>
                    </div>
                    <div className="flex gap-2">
                      <i style={{color: 'var(--color-pink)'  ,marginTop: '2px'}} class="fa-solid fa-download"></i>
                      <p>2.3M</p>
                    </div>
                  </div>
                </div>
                <div className="pb-8 border-b border-solid border-lightgray/25 flex justify-between items-center">
                  <div className='flex items-center'>
                    <img className='rounded-3xl mr-5' src={game01} alt="" />
                    <div className="mr-10 lg:mr-20 xl:mr-40">
                      <p className='font-bold'>Dota 2</p>
                      <p className='text-lightgray'>Sandbox</p>
                    </div>
                  </div>
                  <div>
                    <div className="flex gap-2">
                      <i style={{color: 'yellow' ,marginTop: '2px'}} class="fa-solid fa-star"></i>
                      <p>4.8</p>
                    </div>
                    <div className="flex gap-2">
                      <i style={{color: 'var(--color-pink)'  ,marginTop: '2px'}} class="fa-solid fa-download"></i>
                      <p>2.3M</p>
                    </div>
                  </div>
                </div>
                <div className="pb-8 border-b border-solid border-lightgray/25 flex justify-between items-center">
                  <div className='flex items-center'>
                    <img className='rounded-3xl mr-5' src={game01} alt="" />
                    <div className="mr-10 lg:mr-20 xl:mr-40">
                      <p className='font-bold'>Dota 2</p>
                      <p className='text-lightgray'>Sandbox</p>
                    </div>
                  </div>
                  <div>
                    <div className="flex gap-2">
                      <i style={{color: 'yellow' ,marginTop: '2px'}} class="fa-solid fa-star"></i>
                      <p>4.8</p>
                    </div>
                    <div className="flex gap-2">
                      <i style={{color: 'var(--color-pink)'  ,marginTop: '2px'}} class="fa-solid fa-download"></i>
                      <p>2.3M</p>
                    </div>
                  </div>
                </div>
                <div className="pb-8 border-b border-solid border-lightgray/25 flex justify-between items-center">
                  <div className='flex items-center'>
                    <img className='rounded-3xl mr-5' src={game01} alt="" />
                    <div className="mr-10 lg:mr-20 xl:mr-40">
                      <p className='font-bold'>Dota 2</p>
                      <p className='text-lightgray'>Sandbox</p>
                    </div>
                  </div>
                  <div>
                    <div className="flex gap-2">
                      <i style={{color: 'yellow' ,marginTop: '2px'}} class="fa-solid fa-star"></i>
                      <p>4.8</p>
                    </div>
                    <div className="flex gap-2">
                      <i style={{color: 'var(--color-pink)'  ,marginTop: '2px'}} class="fa-solid fa-download"></i>
                      <p>2.3M</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Details