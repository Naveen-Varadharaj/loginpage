import React from 'react'

export default function Home(props) {
  return (
    <div className='home'>
      <header className='homeheader'><button className="switchbutton" onClick={()=>props.onFormSwitch("login")}>Logout</button></header>
      <h1 className='heading'>REDLITMUS COMMUNICATIONS</h1>
      <h2 className='heading1'>About Us</h2>
      <h3 className='heading1'>Our Roots</h3>
      <p>At Redlitmus Communications, we’ve built numerous years of experience in the Voice and Messaging industry. Experience that helps us create innovative solutions for our clients’ needs. With over 10 years of experience in understanding the market demands we keep developing software services in the cloud for clients who wish to use Voice and Messaging services to develop a better business and raise customer satisfaction.</p>
      <h3 className='heading1'>What You Need</h3>
      <p>Every business entity has number of customers, but reaching them has always been a challenge. This is where Redlitmus Communications can help you. We provide you software solutions integrated with communications solutions under one roof to venture out to your business needs rather than spending time learning or researching on how to reach the target market.</p>
      <p><strong className='heading1'>mBlastr</strong>, a cloud based cPaaS solution is a swiss knife in your digital promotions, customer service, day to day interaction with clients, authentication accessory and much more.</p>
      <p><strong className='heading1'>mBlastr</strong> helps you lift you company image from a traditional company to a modern one without any CAPEX. Using the mBlastr platform, you will be able to</p>
      </div>
  )
}
