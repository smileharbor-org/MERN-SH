import React, { useState } from 'react'
import { Input } from "@/components/ui/input" //Inputfield
import { Label } from '@/components/ui/label' //Label import
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card"  // card
import { Button } from '@/components/ui/button'  // button
import bg from "./image/bg.jpg"
import { VITE_GOOGLE_SHEETS_API } from "../../config"
import { SnackbarProvider, enqueueSnackbar } from 'notistack'
function Contact() {
  const [formData, SetFormData] = useState({
    FullName: "",
    email: "",
    reasonForContact: "",
    message: ""
  })
  const { FullName, email, reasonForContact, message } = formData
  const HandleChange = (e) => {
    SetFormData({ ...formData, [e.target.name]: e.target.value })
  }

  //Submit 

  const HandleForm = async (e) => {
    e.preventDefault()
    if (!FullName) {
      enqueueSnackbar("Full Name is required", { variant: "error",
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right',
        },
        autoHideDuration:2000
      });
      return;
    }
    if (!email) {
      enqueueSnackbar("Email is required", { variant: "error",
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right',
        },
        autoHideDuration:2000

       });
      return;
    }
    if (!reasonForContact || reasonForContact === "Select a reason") {
      enqueueSnackbar("Please select a reason for contact", { variant: "error", anchorOrigin: {
        vertical: 'top',
        horizontal: 'right',
      } ,
      autoHideDuration:2000

    });
      return;
    }
    if (!message) {
      enqueueSnackbar("Message cannot be empty", {
        variant: "error",
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right',
        },
        autoHideDuration:2000

      });
      return;
    }
    try {
      const result = await fetch(VITE_GOOGLE_SHEETS_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify([[FullName, email, reasonForContact, message, new Date().toLocaleString()]])
      })
      const display = await result.json()
      console.log(display)
      SetFormData({
        FullName: "",
        email: "",
        reasonForContact: "",
        message: ""
      })
    } catch (error) {
      console.log(error)
    }
  }
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

        </div>
        <SnackbarProvider maxSnack={30}>  {/**Notifications */}
          <Card className='w-[350px] lg:w-[500px] h-min py-6'>
            <form onSubmit={HandleForm}> {/*Form  */}
              <CardContent>
                <div className="grid w-full  items-center gap-2 my-5">
                  <Label htmlFor="email" className="text-[16px] lg:text-[24px]">FullName</Label>
                  <Input
                    type="text"
                    id="FullName"
                    name="FullName"
                    value={FullName}
                    onChange={HandleChange}
                    placeholder="FullName" />
                </div>
                <div className="grid w-full  items-center gap-2 my-5">
                  <Label htmlFor="email" className="text-[16px] lg:text-[24px]">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    value={email}
                    onChange={HandleChange}

                    placeholder="Email" />
                </div>
                <div>
                  <Label htmlFor="reasonForContact" className="text-[16px] lg:text-[24px]" >Reason for Contact</Label>
                  <select
                    name="reasonForContact"
                    value={reasonForContact}
                    onChange={HandleChange}

                    className="border rounded-sm w-full p-2 bg-white"
                    required
                  >
                    <option>Select a reason</option>
                    <option value="donate">Donate</option>
                    <option value="volunteer">Volunteer</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="grid w-full  items-center gap-2 my-5">
                  <Label htmlFor="email" className="text-[16px] lg:text-[24px]">Message</Label>
                  <textarea
                    rows={5}
                    type="text"

                    name='message'
                    value={message}
                    onChange={HandleChange}

                    placeholder="Message"
                    className='border rounded-sm' />
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" className="w-full">Send</Button>
              </CardFooter>
            </form>
          </Card>
        </SnackbarProvider>

      </div>

    </>
  )
}

export default Contact
