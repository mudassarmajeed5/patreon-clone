import React from 'react'

const Username = ({ params }) => {
  return (
    <div>
      <div className="cover relative w-full">
        <img className='w-full h-[35vh] object-cover' src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3IjoxOTIwLCJ3ZSI6MX0%3D/15.gif?token-time=1714780800&token-hash=XCeQHa8XmNu9cbM7CSxFfesMrb53Get7_XIQ_dy9ONs%3D" alt="" />
        <div className='userImage absolute left-1/2'>
          <img className='w-[150px] rounded-full border-4 -translate-x-1/2 -translate-y-1/2' src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/aa52624d1cef47ba91c357da4a7859cf/eyJoIjoxMDgwLCJ3IjoxMDgwfQ%3D%3D/4.gif?token-time=1715212800&token-hash=Ha3c98dn2daGzO9eZavVN_bxKcfPLBobAfFmIiOKL8M%3D" alt="" />
        </div>
        <div className="ProfileInfo mt-[100px] flex flex-col justify-center items-center gap-2">
          <h1 className='text-3xl'>@{params.username}</h1>
          <h2 className='text-2xl text-gray-300'>Support me for Exclusive Content</h2>
          <p className='flex gap-2 text-gray-400'><span>10,595 members</span><span>83 posts</span><span>$15,580/release</span></p>
        </div>
      </div>
    <div className="payment mt-5 flex gap-3 w-3/4 mx-auto justify-around">
        <div className="supporters rounded-lg p-5 bg-slate-900 w-full">
          <h2 className="text-2xl text-center my-3">Supporters</h2>
          <ul className='text-slate-200'>
            <li className='p-2 bg-slate-800 m-2 hover:bg-slate-700 hover:cursor-pointer rounded-md'>Shubham made a payment of $50 with a message of.</li>
            <li className='p-2 bg-slate-800 m-2 hover:bg-slate-700 hover:cursor-pointer rounded-md'>Bilal made a payment of $40 with a message of.</li>
            <li className='p-2 bg-slate-800 m-2 hover:bg-slate-700 hover:cursor-pointer rounded-md'>Soniay made a payment of $10 with a message of.</li>
            <li className='p-2 bg-slate-800 m-2 hover:bg-slate-700 hover:cursor-pointer rounded-md'>Ali made a payment of $5 with a message of.</li>
          </ul>
        </div>
        <div className="makepayment p-5 rounded-lg bg-slate-900 w-full">
          Show the payment
        </div>
    </div>
    
    </div>
  )
}

export default Username
