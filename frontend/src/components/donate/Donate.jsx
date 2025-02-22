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
import { SnackbarProvider, enqueueSnackbar } from 'notistack'
// import {VITE_RAZORPAT_SECRET,VITE_RAZORPAY_KEY} from "../../config"
import { VITE_GOOGLE_DONATION, VITE_EMAILJS_TEMPLATE, VITE_SERVICE_ID, VITE_PUBLIC_KEY } from "../../config"
import emailjs from '@emailjs/browser';
import donate from "./contents/donate.jpg"
import { Helmet } from 'react-helmet-async' // SEO

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
  const HandleSubmit = async (e) => {
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
        TimeStamp: DateTime, ...DataValues
      }
      const res = await fetch(VITE_GOOGLE_DONATION, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(FormData),

      });
      emailjs.send(
        VITE_SERVICE_ID,
        VITE_EMAILJS_TEMPLATE,
        DataValues,
        VITE_PUBLIC_KEY
      ).then(() => {
        enqueueSnackbar("Thank you for donation request. We get back to you", {
          variant: "success",
          autoHideDuration: 2000,
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right',
          }
        })
        SetDataValues({
          fullname: "",
          email: "",
          number: "",
          message: ""
        })
      })
        .catch((e) => {
          if (e) {
            enqueueSnackbar("Submission Failed.Try Again", {
              variant: "warning",
              autoHideDuration: 2000,
              anchorOrigin: {
                vertical: 'top',
                horizontal: 'right',
              }
            })
          }
        })
      const data = await res.json();
      console.log(data)

    } catch (error) {

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
      <Helmet >
        <title>Donate | SmileHarbor</title>
        <link rel="canonical" href="https://smileharborfoundation/donate" />
      </Helmet>
      <div className='flex justify-center gap-y-7 lg:gap-0 lg:justify-around items-center flex-col  lg:flex-row-reverse h-min lg:h-min z-20 '
        style={{
          backgroundImage: `url(${donate})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}
      >
        <h2 className='text-[24px] sm:text-[21px] p-3 md:text-[22px] lg:text-[32px] font-bold max-w-[500px]'>
          If you wish to donate, please fill out the form below, and our team will reach out to you with the next steps.
        </h2>
        <SnackbarProvider maxSnack={3}>
          <Card className='border w-[370px] lg:w-[500px] h-min py-6 my-2'>
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
                    placeholder="Enter Name"
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
                    placeholder="Enter Email"
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
                    placeholder="Enter Mobile Number"
                  />
                </div>
                <div className="grid w-full  items-center gap-2 my-5">
                  <Label htmlFor="message" className="text-[16px] lg:text-[24px]">Message</Label>
                  <textarea
                    // rows={5}
                    type="text"
                    className=' border rounded-sm p-2'
                    id="message"
                    name="message"
                    value={message}
                    onChange={HandleChange}
                    placeholder="Enter Message"
                  />
                </div>
                <h4 className='text-[12px] font-bold'>
                  <span className='text-red-500'>
                    Please note:
                  </span> We are not currently accepting donations through the website.
                  However, we will get in touch with you soon to assist with your contribution.
                </h4>
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
