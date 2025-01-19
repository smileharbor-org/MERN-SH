import React from 'react'
import { Input } from "@/components/ui/input" //Inputfield
import { Label } from '@/components/ui/label' //Label import
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card"  // card
import { Button } from '@/components/ui/button'  // button
function Contact() {
  return (
    <>
      <div className='w-full h-screen flex justify-center flex-col lg:flex-row lg:justify-around items-center'>
        <div>
          <h2 className=' text-[24px] lg:text-[32px] font-bold'>
            Small acts of kindness lead to big changes.
          </h2>
          <h4 className='text-[18px] lg:text-[24px] font-semibold'>Let’s connect and create change together.</h4>
        </div>
        <Card className='w-[350px] lg:w-[500px] h-min py-6'>
          <form > {/*Form  */}
            <CardContent>
              <div className="grid w-full  items-center gap-2 my-5">
                <Label htmlFor="email" className="text-[16px] lg:text-[24px]">FullName</Label>
                <Input type="text" id="FullName" placeholder="FullName" />
              </div>
              <div className="grid w-full  items-center gap-2 my-5">
                <Label htmlFor="email" className="text-[16px] lg:text-[24px]">Email</Label>
                <Input type="email" id="email" placeholder="Email" />
              </div>
              <div className="grid w-full  items-center gap-2 my-5">
                <Label htmlFor="email" className="text-[16px] lg:text-[24px]">Message</Label>
                <textarea
                  rows={5}
                  type="text"
                  id="message"
                  placeholder="Message"
                  className='border rounded-sm' />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Send</Button>
            </CardFooter>
          </form>
        </Card>
      </div>

    </>
  )
}

export default Contact
