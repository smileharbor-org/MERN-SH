
import React from "react";
import { Card, CardContent } from "@/components/ui/card"; // Update the import path based on your setup
import Carousel from "react-material-ui-carousel"; // Replace this if you're switching to a different carousel library
import image1 from "../../assets/image1.webp";
import image2 from "../../assets/image2.webp";
import image3 from "../../assets/image3.webp";

const App = () => {
  const images = [image1, image2, image3];

  return (
    <div>
      {/* Carousel Section */}
      <div className="mt-4">
        <Carousel>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-[800px] object-cover"
            />
          ))}
        </Carousel>
      </div>

      {/* About Us Section */}
      <h2 className="text-center text-2xl font-bold mt-8 mb-6">About Us</h2>
      <div className="px-4 space-y-8">
        {/* Overview Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-4 overflow-hidden">
          
          <h3 className="text-lg text-center font-semibold relative pb-1">
  <span className="inline-block border-b-2 border-gray-300 ">
    Overview
  </span>
</h3>
          <Card className="col-span-2 bg-yellow-100 transition-transform hover:scale-105 will-change-transform">
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
      <h2 className="text-center text-2xl font-bold mt-8 mb-6">Our Work</h2>
      <div className="px-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Free Medical Camp */}
        <Card className="p-4 shadow-md">
          <CardContent>
            <h3 className="font-semibold mb-2">Free Medical Camp for the Elderly</h3>
            <p>
              We organized a free medical camp for elderly citizens, providing
              check-ups, consultations, and free medications. This initiative
              improved access to healthcare for many.
            </p>
          </CardContent>
        </Card>

        {/* Book Donation Drive */}
        <Card className="p-4 shadow-md">
          <CardContent>
            <h3 className="font-semibold mb-2">Book Donation Drive</h3>
            <p>
              Our Book Donation Drive collected a wide range of books for
              children and adults. This initiative not only provided educational
              resources but also promoted the joy of learning for people of all
              ages.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default App;
