import React from 'react'
import { Input } from "@/components/ui/input" //Inputfield
import { Label } from '@/components/ui/label' //Label import
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card"  // card
import { Button } from '@/components/ui/button'  // button
import bg from "./image/bg2.jpg"
function Contact() {
  return (
    <>
      <div className='w-full min-h-min lg:h-screen  flex justify-center flex-col lg:flex-row lg:justify-around items-center gap-3 lg:gap-0'
        style={{
          backgroundImage: `URL(${bg})`,
          backgroundSize: 'cover', // Ensure the background covers the entire screen
          backgroundPosition: 'center', // Center the background
          backgroundRepeat: 'no-repeat', // Prevent repeating
   
        }}
      >
        <div className='flex flex-col items-center'>
          <p className=' text-[20px] sm:text-[20px] md:text-[20px] lg:text-[32px] font-bold p-1'>
            Small acts of kindness lead to big changes.
          </p>
          <h4 className='text-[20px] sm:text-[20px] md:text-[20px]  lg:text-[24px] font-semibold p-1'>Let’s connect and create change together.</h4>
          {/* sample bg -> image */}
          <img 
            src="https://img.freepik.com/premium-vector/kindness-landing-page-flat-design_98292-25564.jpg"
            width={400}
            height={400}
            className='rounded-lg p-1'
          />
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
