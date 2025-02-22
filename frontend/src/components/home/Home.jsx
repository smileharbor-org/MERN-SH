import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Carousel from "react-material-ui-carousel";
import image1 from "../../assets/carousel/image1.webp";
import image2 from "../../assets/carousel/image2.webp";
import image3 from "../../assets/carousel/image3.webp";
import bdimage1 from "../../assets/bookDonation/image1.jpg"; //bd- book donation
import bdimage2 from "../../assets/bookDonation/image2.jpg";
import hcimage1 from "../../assets/healthCamp/image1.jpeg"; //hc- health camp
import hcimage2 from "../../assets/healthCamp/image2.jpeg";
import oimage1 from "../../assets/orphanage/image1.jpeg"; //o- orphanage
import oimage2 from "../../assets/orphanage/image2.jpeg";
import bimage1 from "../../assets/bookShelf/image1.jpeg"; //b- bookshelf
import bimage2 from "../../assets/bookShelf/image2.jpg";
import svimage1 from "../../assets/schoolVisit/image1.jpeg"; //sv- school visit
import svimage2 from "../../assets/schoolVisit/image2.jpeg";
import { Stethoscope, BookOpen, Heart, Gift } from "lucide-react"; // Adjust based on your icon library
import { Helmet } from "react-helmet";

const App = () => {
  const images = [image1, image2, image3];

  return (
    <> <Helmet>
    <title>Home | Smile Harbor</title>
    <link rel="canonical" href="https://smileharborfoundation" />
  </Helmet>
    <div className="bg-gradient-to-b from-blue-50 via-pink-50 to-yellow-50">
      {/* Carousel Section */}
      <div className="mt-4 ">
        <Carousel>
          {images.map((image, index) => (
            // <img
            //   key={index}
            //   src={image}
            //   alt={`Slide ${index + 1}`}
            //   className="w-full h-[50vh] sm:h-[80vh] object-cover"
            // />
            <div key={index}
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height:"70vh",
                width: "100%",
                backgroundRepeat:"no-repeat"
              }}
            >

            </div>
          ))}
        </Carousel>
      </div>

      {/* About Us Section */}
      <h2 className="text-center text-2xl font-bold mt-8 mb-6">About Us</h2>
      <div className="max-w-7xl px-4 space-y-8">
        {/* Overview Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-4 overflow-hidden">
          <h3 className="text-lg text-center font-semibold relative pb-1">
            <span className="inline-block border-b-2 border-gray-300 ">
              Overview
            </span>
          </h3>
          <Card className="col-span-2 bg-yellow-50 transition-transform hover:scale-105 will-change-transform">
            <CardContent>
              <p>
                Smile Harbor Foundation is a non-profit organization focused on
                uplifting underserved communities by providing healthcare,
                educational resources, and emotional support. We believe in
                building a society where everyone has the opportunity to lead a
                healthy, informed, and dignified life. Through our work, we aim
                to create meaningful change, restoring hope and happiness for
                people in need.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-4 overflow-hidden ">
          <h3 className="text-lg text-center font-semibold relative pb-1 ">
            <span className="inline-block border-b-2 border-gray-300 ">
              Mission
            </span>
          </h3>
          <Card className="col-span-2 bg-pink-100 transition-transform hover:scale-105 will-change-transform ">
            <CardContent>
              <p>
                To bring smiles and hope to every life we touch, Smile Harbor
                Foundation is dedicated to supporting the elderly, individuals
                with special needs, and those facing socioeconomic challenges.
                We work to deliver impactful programs that improve health,
                education, and overall well-being, ensuring that no one is left
                behind.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Our Work Section */}

      <div className="min-h-screen w-full ">
        <div className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Our Work
              </h1>
              <p className="text-lg text-gray-600">
                Making a difference in our community through healthcare and
                education
              </p>
            </div>

            {/* Book donation Section */}
            <div className="mb-24">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 lg:pr-12">
                  <div className="flex items-center gap-2 mb-4">
                    <BookOpen className="w-6 h-6 text-blue-600" />
                    <Badge
                      variant="secondary"
                      className="text-blue-600 bg-blue-100"
                    >
                      Education Initiative
                    </Badge>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    Kitabein, Kahaniyan & Kal (Books, Stories & Tomorrow)
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    Smile Harbor Foundation’s book donation drive spreads the
                    joy of reading among underprivileged children. By providing
                    books, we nurture young minds, fuel creativity, and pave the
                    way for a brighter future. Join us in shaping lives, one
                    book at a time.
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-2">
                    <Card className="overflow-hidden">
                      <img
                        src={bdimage1}
                        alt="Person holding books"
                        className="w-full h-64 object-cover"
                      />
                    </Card>
                  </div>
                  <div className="mt-12">
                    <Card className="overflow-hidden">
                      <img
                        src={bdimage2}
                        alt="Person holding books and a puppy"
                        className="w-full h-64 object-cover"
                      />
                    </Card>
                  </div>
                </div>
              </div>
            </div>

            {/* Covid health response Section */}
            <div className="mb-24">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 grid grid-cols-3 gap-4">
                  <div className="col-span-2">
                    <Card className="overflow-hidden">
                      <img
                        src="https://www.gavi.org/sites/default/files/vaccineswork/2021/Thumb/shutterstock_1720887019_h2.jpg"
                        alt="Covid"
                        className="w-full h-64 object-cover"
                      />
                    </Card>
                  </div>
                  
                  <div className="mt-12">
                    <Card className="overflow-hidden">
                      <img
                        src="https://www.unicef.org/india/sites/unicef.org.india/files/styles/hero_extended/public/UN0517137_0.jpg.webp?itok=x0fbSB_P"
                        alt="Covid"
                        className="w-full h-64 object-cover"
                      />
                    </Card>
                  </div>
                </div>
                <div className="order-1 lg:order-2 space-y-6 lg:pl-12">
                  <div className="flex items-center gap-2 mb-4">
                    <Stethoscope className="w-6 h-6 text-blue-600" />
                    <Badge
                      variant="secondary"
                      className="text-blue-600 bg-blue-100"
                    >
                      Healthcare Initiative
                    </Badge>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    {" "}
                    Swasthya Setu: COVID Care & Beyond
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    During the pandemic, we provided essential healthcare
                    support, medical kits, awareness campaigns, and post-COVID
                    recovery assistance to vulnerable communities. Our efforts
                    continue to ensure better healthcare access, resilience, and
                    preparedness for future health challenges.
                  </p>
                </div>
              </div>
            </div>

            {/* Elderly Medical camp Event Section */}
            <div className="mb-24">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 lg:pr-12">
                  <div className="flex items-center gap-2 mb-4">
                    <Stethoscope className="w-6 h-6 text-pink-600" />
                    <Badge
                      variant="secondary"
                      className="text-pink-600 bg-pink-100"
                    >
                      Healthcare Initiative
                    </Badge>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    Zindagi Ke Saathi: Senior Health Camp
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    A health initiative dedicated to the well-being of senior
                    citizens, offering free medical check-ups, doctor
                    consultations, and wellness guidance. We aim to provide
                    care, respect, and companionship to our elderly, ensuring a
                    healthier and happier life.
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-2">
                    <Card className="overflow-hidden">
                      <img
                        src={hcimage1}
                        alt="Doctor checking elderly patient"
                        className="w-full h-64 object-cover"
                      />
                    </Card>
                  </div>
                  <div className="mt-12">
                    <Card className="overflow-hidden">
                      <img
                        src={hcimage2}
                        alt="Medical Consultation"
                        className="w-full h-64 object-cover"
                      />
                    </Card>
                  </div>
                </div>
              </div>
            </div>
            {/* Orphanage event section */}
            <div className="mb-24">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 grid grid-cols-3 gap-4">
                  <div className="col-span-2">
                    <Card className="overflow-hidden">
                      <img
                        src={oimage1}
                        alt="Santa giving out sweets"
                        className="w-full h-64 object-cover"
                      />
                    </Card>
                  </div>
                  <div className="mt-12">
                    <Card className="overflow-hidden">
                      <img
                        src={oimage2}
                        alt="Kids drawing together"
                        className="w-full h-64 object-cover"
                      />
                    </Card>
                  </div>
                </div>
                <div className="order-1 lg:order-2 space-y-6 lg:pl-12">
                  <div className="flex items-center gap-2 mb-4">
                    <Gift className="w-6 h-6 text-pink-600" />
                    <Badge
                      variant="secondary"
                      className="text-pink-600 bg-pink-100"
                    >
                      Holiday Initiative
                    </Badge>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    Umeedon Ki Udaan: A Day of Joy & Care
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    A special day filled with love, learning, and laughter for
                    orphaned children. Through interactive activities,
                    storytelling, and gifts, we bring hope and happiness, making
                    them feel cherished and supported in their journey of life.
                  </p>
                </div>
              </div>
            </div>

            {/* Bookshelf donation Section */}
            <div className="mb-24">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 lg:pr-12">
                  <div className="flex items-center gap-2 mb-4">
                    <BookOpen className="w-6 h-6 text-red-600" />
                    <Badge
                      variant="secondary"
                      className="text-red-600 bg-red-100"
                    >
                      Education Initiative
                    </Badge>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    Pustak Setu: Bridging Generations with Books
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    Our initiative installs bookshelves in schools, community
                    centers, and orphanages to ensure continuous access to
                    knowledge. With this effort, we create a culture of reading,
                    bridge educational gaps, and inspire young learners.
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-2">
                    <Card className="overflow-hidden">
                      <img
                        src={bimage1}
                        alt="Team"
                        className="w-full h-64 object-cover"
                      />
                    </Card>
                  </div>
                  <div className="mt-12">
                    <Card className="overflow-hidden">
                      <img
                        src={bimage2}
                        alt="Inaguration"
                        className="w-full h-64 object-cover"
                      />
                    </Card>
                  </div>
                </div>
              </div>
            </div>

            {/* Govt school event Section */}
            <div className="mb-24">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 grid grid-cols-3 gap-4">
                  <div className="col-span-2">
                    <Card className="overflow-hidden">
                      <img
                        src={svimage1}
                        alt="School kids"
                        className="w-full h-64 object-cover"
                      />
                    </Card>
                  </div>
                  <div className="mt-12">
                    <Card className="overflow-hidden">
                      <img
                        src={svimage2}
                        alt="Distributing candies"
                        className="w-full h-64 object-cover"
                      />
                    </Card>
                  </div>
                </div>
                <div className="order-1 lg:order-2 space-y-6 lg:pl-12">
                  <div className="flex items-center gap-2 mb-4">
                    <BookOpen className="w-6 h-6 text-red-600" />
                    <Badge
                      variant="secondary"
                      className="text-red-600 bg-red-100"
                    >
                      Education Initiative
                    </Badge>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    Nayi Soch, Nayi Shiksha
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    Volunteers engage with students in government schools,
                    providing quality education, mentorship, and innovative
                    learning methods. We strive to empower young minds with
                    knowledge, skills, and confidence to shape a better future.
                  </p>
                </div>
              </div>
            </div>

            {/* Impact Stats */}
            <div className="mt-24 text-center">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100">
                  <Heart className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900">150+</h3>
                  <p className="text-gray-600">Elderly Patients Served</p>
                </Card>
                <Card className="p-6 bg-gradient-to-br from-pink-50 to-pink-100">
                  <BookOpen className="w-8 h-8 text-pink-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900">18000+</h3>
                  <p className="text-gray-600">Books Donated</p>
                </Card>
                <Card className="p-6 bg-gradient-to-br from-purple-50 to-purple-100">
                  <Stethoscope className="w-8 h-8 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900">32+</h3>
                  <p className="text-gray-600">Healthcare Professionals</p>
                </Card>
                <Card className="p-6 bg-gradient-to-br from-red-50 to-red-100">
                  <Gift className="w-8 h-8 text-red-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900">200+</h3>
                  <p className="text-gray-600">Children Celebrated</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default App;
