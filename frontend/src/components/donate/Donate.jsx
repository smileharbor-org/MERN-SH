import React, { useState } from 'react'
import { Input } from "@/components/ui/input" //Inputfield
import { Label } from '@/components/ui/label' //Label import
import {
  Card,
  CardContent,
  CardFooter,
  CardTitle,
} from "@/components/ui/card"  // card
import { Button } from '@/components/ui/button'  // button
import { IndianRupee } from 'lucide-react';
// import video from "./contents/donate.mp4"
import { SnackbarProvider, enqueueSnackbar } from 'notistack'
// import {VITE_RAZORPAT_SECRET,VITE_RAZORPAY_KEY} from "../../config"
import {VITE_GOOGLE_DONATION} from "../../config"

function Donate() {
  const [DataValues, SetDataValues] = useState({
    fullname: "",
    email: "",
    number: "",
    message: ""
  })
  const { fullname, email, message, number } = DataValues
  const HandleChange = (e) => {
    SetDataValues({ ...DataValues, [e.target.name]: e.target.value })
  }
  //Function for Submit Pay
  const HandleSubmit = async(e) => {
    e.preventDefault()
    const emailVerification = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!fullname) {
      enqueueSnackbar("Enter Your Name", {
        variant: "warning",
        autoHideDuration: 2000,
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right',
        }
      })
      return
    }
    if (!email) {
      enqueueSnackbar("Enter Your Email", {
        variant: "warning",
        autoHideDuration: 2000,
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right',
        }
      })

      return
    }
    if (!emailVerification.test(email)) {
      enqueueSnackbar("Enter Your Correct Email", {
        variant: "warning",
        autoHideDuration: 2000,
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right',
        }
      })
      return
    }



    if (number.length > 11 || number.length < 10) {
      enqueueSnackbar("Enter Correct Mobile Number", {
        variant: "warning",
        autoHideDuration: 2000,
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right',
        }
      })
      return
    }
    if (!message) {
      enqueueSnackbar("Enter Your Message", {
        variant: "warning",
        autoHideDuration: 2000,
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right',
        }
      })
      return
    }
    //Google sheet api by DB Sheet
    try {
      const DateTime = new Date().toLocaleString()
      const FormData = {
        TimeStamp:DateTime,...DataValues
      }
      const res = await fetch(VITE_GOOGLE_DONATION, {
        method: "POST",
        headers: { "Content-Type": "application/json",
          Accept:"application/json"
         },
        body: JSON.stringify(FormData),
        
      });
  
      const data = await res.json();
      console.log(data)
      if (data){
        enqueueSnackbar("Thank you for donation request. We get back to you", {
          variant: "success",
          autoHideDuration: 2000,
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right',
          }
        })
      }else {
        enqueueSnackbar("Submission Failed.Try Again", {
          variant: "warning",
          autoHideDuration: 2000,
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right',
          }
        })
      }

    } catch (error) {
      console.log(error)
      if (error) {
        enqueueSnackbar("Try Again Later", {
          variant: "warning",
          autoHideDuration: 2000,
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right',
          }
        })
      }
    }


    // else {
    //   //PAYMENT GATEWAY SETUP
    //   const options = {
    //     key: VITE_RAZORPAY_KEY,
    //     key_secret: VITE_RAZORPAT_SECRET,
    //     amount: amount * 100,
    //     currency: "INR",
    //     name: "SmileHarbor",
    //     description: "Donation",
    //     handler: function (res) {
    //       if (res) {
    //         enqueueSnackbar("Thank you!! Payment Successfull", {
    //           variant: "success",
    //           autoHideDuration: 2000,
    //           anchorOrigin: {
    //             vertical: 'top',
    //             horizontal: 'right',
    //           }
    //         })
    //         SetDataValues({
    //           fullname: "",
    //           email: "",
    //           number: "",
    //           amount: ""
    //         })
    //       }
    //     },
    //     prefill: {
    //       name: fullname,
    //       email: email,
    //       contact: number
    //     },
    //     notes: {
    //       address: "simleharbor"
    //     },
    //     theme: {
    //       color: "green"
    //     }
    //   }
    //   const pay = new window.Razorpay(options)
    //   pay.open()


    // }
  }
  return (
    <>

      {/* <div className="absolute top-0 left-0 w-full h-full z-0" >
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        >
          <source src={video} type="video/mp4" />
        </video>
      </div> */}
      <div className='flex justify-around items-center flex-col lg:flex-row  h-screen relative z-20 '
      >
        <h2 className='text-[24px] sm:text-[21px] md:text-[22px] lg:text-[32px] max-w-[350px] font-bold'>
          Your small contribution today can create a big impact tomorrow.
        </h2>
        <SnackbarProvider maxSnack={3}>
          <Card className='border w-[370px] lg:w-[500px] h-min py-6'>
            <form onSubmit={HandleSubmit}>
              <CardContent>
                <CardTitle>
                  PLEDGE TO DONATE
                </CardTitle>
                <div className="grid w-full  items-center gap-2 my-5">
                  <Label htmlFor="email" className="text-[16px] lg:text-[24px]">Full Name </Label>
                  <Input
                    id="fullname"
                    value={fullname}
                    name="fullname"
                    type="text"
                    onChange={HandleChange}
                  />
                </div>
                <div className="grid w-full  items-center gap-2 my-5">
                  <Label htmlFor="email" className="text-[16px] lg:text-[24px]">Email</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={HandleChange}
                  />
                </div>
                <div className="grid w-full  items-center gap-2 my-5">
                  <Label htmlFor="number" className="text-[16px] lg:text-[24px]">Contact Number</Label>
                  <Input
                    type="text"
                    id="number"
                    name="number"
                    value={number}
                    onChange={HandleChange}
                  />
                </div>
                <div className="grid w-full  items-center gap-2 my-5">
                  <Label htmlFor="message" className="text-[16px] lg:text-[24px]">Message</Label>
                  <textarea
                    rows={5}
                    type="text"
                    className=' border rounded-sm'
                    id="message"
                    name="message"
                    value={message}
                    onChange={HandleChange}
                  />
                </div>
                <h4 className='text-[12px] font-bold'>* Currently we not accepting donation.Shortly we get back to you.</h4>
              </CardContent>
              <CardFooter >
                <Button type="submit" className="w-full">Send</Button>
              </CardFooter>
            </form>

          </Card>
        </SnackbarProvider>

      </div>


    </>
  )
}

export default Donate
