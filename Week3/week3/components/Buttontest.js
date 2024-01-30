import React from 'react'
import { Button } from './ui/button'
import { EnvelopeOpenIcon } from "@radix-ui/react-icons"
import { ReloadIcon } from "@radix-ui/react-icons"



const Buttontest = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-5 m-5 w-full'>
       <h1 className=' font-bold text-2xl'>Buttons</h1> 
      <Button variant="outline">Button</Button>
      <Button variant="secondary">Button</Button>
      <Button variant="destructive">Button</Button>
      <Button variant="link">Link</Button>
      <Button>
      <EnvelopeOpenIcon className="mr-2 h-4 w-4" /> Login with Email
    </Button>
      <Button disabled>
      <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
      Please wait
    </Button>

    </div>
  )
}

export default Buttontest
