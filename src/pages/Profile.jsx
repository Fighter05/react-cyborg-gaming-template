import React from 'react'
import game01 from '../components/assets/images/game-01.jpg'
import profile from '../components/assets/images/profile.jpg'
// border-2 border-solid border-red-600

const Profile = () => {
  return (
    <div className='flex justify-center bg-black px-16 lg:px-40 py-10'>
      <div className="bg-gray p-12 text-white w-full rounded-3xl">
        <div className="bg-black rounded-3xl py-8 px-7 mb-10">
          <div className='grid grid-cols-3 gap-6 items-center mb-8 pb-8 border-b border-solid border-lightgray/25'>
            <img className='rounded-3xl' src={profile} alt="" />
            <div className=''>
              <button className='bg-pink rounded-3xl px-6 py-2 cursor-default mb-3'>Offline</button>
              <p className='font-bold text-2xl'>Alan Smithee</p>
              <p className='text-lightgray my-5'>You Haven't Gone Live yet. Go Live By Touching The Button Below.</p>
              <button className='transition ease-in-out duration-300 border border-solid border-pink text-pink rounded-3xl px-6 py-3 hover:bg-white hover:border-white'>Start Live Stream</button>
            </div>
            <div className='rounded-3xl bg-gray p-5 py-7'>
              <div className='flex justify-between border-b border-solid border-lightgray pb-5'>
                <p className='text-lightgray'>Games Downloaded</p>
                <p className='text-pink'>3</p>
              </div>
              <div className='flex justify-between border-b border-solid border-lightgray py-5'>
                <p className='text-lightgray'>Friends Online</p>
                <p className='text-pink'>16</p>
              </div>
              <div className='flex justify-between border-b border-solid border-lightgray py-5'>
                <p className='text-lightgray'>Live Streams</p>
                <p className='text-pink'>None</p>
              </div>
              <div className='flex justify-between  pt-5'>
                <p className='text-lightgray'>Clips</p>
                <p className='text-pink'>29</p>
              </div>
            </div>
          </div>
          <p className='text-3xl font-bold text-pink mb-8'><span className='text-white underline'>Your Most Popular</span> Clips</p>
          <div className='grid grid-cols-4 gap-6'>
            <div className='px-5 py-10 pb-16 bg-gray rounded-3xl h-64'>
              <div className='h-full bg-clip-01 bg-cover rounded-3xl flex justify-center items-center mb-4'>
                <button>
                  <i style={{fontSize: '2.5rem', backgroundColor: 'var(--color-pink)', borderRadius: '50%'}} class="fa-solid fa-circle-play"></i>
                </button>
              </div>
              <div className='flex justify-between'>
                <p className='font-bold'>First Clip</p>
                <div className='flex items-center gap-2'>
                  <i style={{color: 'var(--color-pink)'}} class="fa-solid fa-eye"></i>
                  <p>250</p>
                </div>
              </div>
            </div>
            <div className='px-5 py-10 pb-16 bg-gray rounded-3xl h-64'>
              <div className='h-full bg-clip-01 bg-cover rounded-3xl flex justify-center items-center mb-4'>
                <button>
                  <i style={{fontSize: '2.5rem', backgroundColor: 'var(--color-pink)', borderRadius: '50%'}} class="fa-solid fa-circle-play"></i>
                </button>
              </div>
              <div className='flex justify-between'>
                <p className='font-bold'>First Clip</p>
                <div className='flex items-center gap-2'>
                  <i style={{color: 'var(--color-pink)'}} class="fa-solid fa-eye"></i>
                  <p>250</p>
                </div>
              </div>
            </div>
            <div className='px-5 py-10 pb-16 bg-gray rounded-3xl h-64'>
              <div className='h-full bg-clip-01 bg-cover rounded-3xl flex justify-center items-center mb-4'>
                <button>
                  <i style={{fontSize: '2.5rem', backgroundColor: 'var(--color-pink)', borderRadius: '50%'}} class="fa-solid fa-circle-play"></i>
                </button>
              </div>
              <div className='flex justify-between'>
                <p className='font-bold'>First Clip</p>
                <div className='flex items-center gap-2'>
                  <i style={{color: 'var(--color-pink)'}} class="fa-solid fa-eye"></i>
                  <p>250</p>
                </div>
              </div>
            </div>
            <div className='px-5 py-10 pb-16 bg-gray rounded-3xl h-64'>
              <div className='h-full bg-clip-01 bg-cover rounded-3xl flex justify-center items-center mb-4'>
                <button>
                  <i style={{fontSize: '2.5rem', backgroundColor: 'var(--color-pink)', borderRadius: '50%'}} class="fa-solid fa-circle-play"></i>
                </button>
              </div>
              <div className='flex justify-between'>
                <p className='font-bold'>First Clip</p>
                <div className='flex items-center gap-2'>
                  <i style={{color: 'var(--color-pink)'}} class="fa-solid fa-eye"></i>
                  <p>250</p>
                </div>
              </div>
            </div>
          </div>
          <div className='text-center mt-10'>
          <button className='pink-btn'>Load More Clips</button>
          </div>
        </div>
        <div className="bg-black rounded-3xl py-8 px-7">
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
              <button className=' text-lightgray border-2 
              border-solid border-lightgray px-6 py-2 rounded-3xl'>Downloaded</button>
            </div>
          </div>  
          <div className="flex justify-between items-center pt-6">
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
      </div>
    </div>
  )
}

export default Profile
