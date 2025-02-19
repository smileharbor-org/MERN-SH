//new
import React from "react";
import FocusCards from "@/components/ui/focus-cards";
import Akshat from "../../assets/teamMembers/AKSHAT GOLCHHA.webp";
import Ishan from "../../assets/teamMembers/ISHAN TAPADIA.webp";
import Jigyasa from "../../assets/teamMembers/JIGYASA JHA.webp";
import Samriddhi from "../../assets/teamMembers/SAMRIDDHI VISHWAKARMA.webp";
import Sarthak from "../../assets/teamMembers/SARTHAK AGRAWAL.webp";
import Aryan from "../../assets/teamMembers/ARYAN SARKAR.webp";
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
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&h=400&fit=crop", // Dummy image
  },
  {
    name: "Jigayasa Jha",
    role: "Chief Happiness Officer",
    image: Jigyasa,
  },
];

function Team() {
  return (
    <div
      className="min-h-screen bg-gradient-to-r from-blue-100 via-pink-100  to-yellow-100 py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className=" text-lg max-w-2xl mx-auto">
            We are a youth-driven organization dedicated to empowering underprivileged communities, spreading smiles, and creating opportunities for a brighter future.
          </p>
        </div>

        <FocusCards members={teamMembers} />
      </div>
    </div>
  );
}

export default Team;
