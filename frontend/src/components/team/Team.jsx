//new
import React from "react";
import FocusCards from "../ui/focus-cards";

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&h=400&fit=crop",
  },
  {
    name: "Michael Chen",
    role: "CTO",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&h=400&fit=crop",
  },
  {
    name: "Emily Rodriguez",
    role: "Lead Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&h=400&fit=crop",
  },
  {
    name: "David Kim",
    role: "Senior Developer",
    image:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=400&h=400&fit=crop",
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
