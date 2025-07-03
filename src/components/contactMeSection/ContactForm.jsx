import React from 'react'

export default function ContactForm() {
  return (
    <div>
      <form action="https://formsubmit.co/runsewemichael39@gmail.com" method="POST" className='flex flex-col gap-4'>
        <input type="text" name='Name' placeholder='Your Name' required className='h-12 rounded-lg px-2 bg-col' />
        <input type="email" name='Email' placeholder='Your Email' required className='h-12 rounded-lg px-2 bg-col' />
        <textarea name="Message" id="" type='text' placeholder='Message' rows={9} cols={50} required className='rounded-lg p-2 bg-col'></textarea>
        <button type='submit' className='w-full rounded-lg border border-cyan-500 text-white h-12 font-bold text-xl bg-cyan-500 hover:bg-cyan-950 transition-all duration-500'>Send</button>
        <input type="hidden" name="_next" value="#"></input>
        <input type="hidden" name="_captcha" value="false"></input>
        <input type="hidden" name="_template" value="table"></input>
        <input type="hidden" name="_subject" value="New submission!"></input>
      </form>
    </div>
  )
}
