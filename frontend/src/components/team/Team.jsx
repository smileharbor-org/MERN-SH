import React from "react";
import Akshat from "../../assets/teamMembers/AKSHAT GOLCHHA.webp";
import Ishan from "../../assets/teamMembers/ISHAN TAPADIA.webp";
import Jigyasa from "../../assets/teamMembers/JIGYASA JHA.webp";
import Samriddhi from "../../assets/teamMembers/SAMRIDDHI VISHWAKARMA.webp";
import Sarthak from "../../assets/teamMembers/SARTHAK AGRAWAL.webp";
import Aryan from "../../assets/teamMembers/ARYAN SARKAR.webp";
import { Helmet } from "react-helmet";

const teamMembers = [
  {
    name: "Samriddhi Vishwakarma",
    role: "Co-Founder & General Secretary",
    image: Samriddhi,
  },
  {
    name: "Akshat Golchha",
    role: "Co-Founder & President",
    image: Akshat,
  },
  {
    name: "Aryan Sarkar",
    role: "Treasurer",
    image: Aryan,
  },
  {
    name: "Sarthak Agrawal",
    role: "Joint Secretary",
    image: Sarthak,
  },
  {
    name: "Ishan Tapadia",
    role: "Assistant President",
    image: Ishan,
  },
  {
    name: "Chirag Baradia",
    role: "Chief Marketing Officer",
    image:
      "https://forums.lindale.io/uploads/default/original/1X/0b92184f9ae10ddf6918f3b1fd5aa2bd26958a2c.png",
  },
  {
    name: "Jigayasa Jha",
    role: "Chief Happiness Officer",
    image: Jigyasa,
  },
];

function Team() {
  
  return (
    <> <Helmet>
    <title>Team | Smile Harbor</title>
    <link rel="canonical" href="https://smileharborfoundation/team" />
  </Helmet>
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-pink-100 to-yellow-100 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-lg max-w-2xl mx-auto">
            We are a youth-driven organization dedicated to empowering
            underprivileged communities, spreading smiles, and creating
            opportunities for a brighter future.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center max-w-[250px]"
            >
              <div className="w-[235px] h-[235px] overflow-hidden flex justify-center items-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-[235px] h-[235px] object-cover rounded-lg"
                />
              </div>
              <div className="p-2">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-gray-600 text-sm">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}

export default Team;
