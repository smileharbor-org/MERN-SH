import React from "react";
import { Card, CardContent } from "../ui/card"; // Update the import path based on your setup
import { Badge } from "../ui/badge";
import Carousel from "react-material-ui-carousel"; // Replace this if you're switching to a different carousel library
import image1 from "../../assets/image1.webp";
import image2 from "../../assets/image2.webp";
import image3 from "../../assets/image3.webp";
import { Stethoscope, BookOpen, Heart, Gift } from "lucide-react"; // Adjust based on your icon library

const App = () => {
  const images = [image1, image2, image3];

  return (
    <div className="bg-gradient-to-b from-blue-50 via-pink-50 to-yellow-50">
      {/* Carousel Section */}
      <div className="mt-4 ">
        <Carousel>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-[50vh] sm:h-[80vh] object-cover"
            />
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
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Work</h1>
            <p className="text-lg text-gray-600">Making a difference in our community through healthcare and education</p>
          </div>

          {/* Medical Camp Section */}
          <div className="mb-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 lg:pr-12">
                <div className="flex items-center gap-2 mb-4">
                  <Stethoscope className="w-6 h-6 text-blue-600" />
                  <Badge variant="secondary" className="text-blue-600 bg-blue-100">Healthcare Initiative</Badge>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Free Medical Camp for the Elderly</h2>
                <p className="text-gray-600 leading-relaxed">
                  We organized a free medical camp for elderly citizens, providing comprehensive check-ups,
                  consultations, and essential medications at no cost. This initiative helped raise awareness
                  about healthcare and preventive measures, improving the quality of life for the elderly participants.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2">
                  <Card className="overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=500"
                      alt="Doctor checking elderly patient"
                      className="w-full h-64 object-cover"
                    />
                  </Card>
                </div>
                <div className="mt-12">
                  <Card className="overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=500"
                      alt="Medical consultation"
                      className="w-full h-64 object-cover"
                    />
                  </Card>
                </div>
                
              </div>
            </div>
          </div>

          {/* Book Donation Section */}
          <div className="mb-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 grid grid-cols-3 gap-4">
                <div className="col-span-2">
                  <Card className="overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1530538987395-032d1800fdd0?auto=format&fit=crop&q=80&w=500"
                      alt="Person holding books"
                      className="w-full h-64 object-cover"
                    />
                  </Card>
                </div>
                <div className="mt-12">
                  <Card className="overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=500"
                      alt="Reading together"
                      className="w-full h-64 object-cover"
                    />
                  </Card>
                </div>
              </div>
              <div className="order-1 lg:order-2 space-y-6 lg:pl-12">
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="w-6 h-6 text-pink-600" />
                  <Badge variant="secondary" className="text-pink-600 bg-pink-100">Education Initiative</Badge>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Book Donation Drive</h2>
                <p className="text-gray-600 leading-relaxed">
                  Our Book Donation Drive collected a wide range of books for both an old age home
                  and a school for specially-abled children. This initiative not only provided
                  educational resources but also promoted the joy of learning and reading for people
                  of all ages and abilities.
                </p>
              </div>
            </div>
          </div>

          {/* Christmas Event Section */}
          <div className="mb-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 lg:pr-12">
                <div className="flex items-center gap-2 mb-4">
                  <Gift className="w-6 h-6 text-red-600" />
                  <Badge variant="secondary" className="text-red-600 bg-red-100">Holiday Initiative</Badge>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Christmas Event at Orphanage</h2>
                <p className="text-gray-600 leading-relaxed">
                  We hosted a heartwarming Christmas event at an orphanage, bringing smiles and festive cheer 
                  to children in need. The celebration included games, gifts, and a warm meal, creating a 
                  memorable and joyful experience for those who might not otherwise have had the opportunity 
                  to celebrate.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2">
                  <Card className="overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1543945528-5a210c5985e1?auto=format&fit=crop&q=80&w=500"
                      alt="Children opening Christmas gifts"
                      className="w-full h-64 object-cover"
                    />
                  </Card>
                </div>
                <div className="mt-12">
                  <Card className="overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1576595580361-90a855b84b20?auto=format&fit=crop&q=80&w=500"
                      alt="Christmas celebration"
                      className="w-full h-64 object-cover"
                    />
                  </Card>
                </div>
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
  );
};

export default App;
