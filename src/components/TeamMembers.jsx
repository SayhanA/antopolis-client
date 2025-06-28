import Image from "next/image";
import SectionHeader from "./SectionHeader";
import cookServing from "@/assets/images/cook-serving.jpg";

const teamMembers = [
  {
    id: 1,
    name: "Mark Henry",
    role: "Owner",
    image: cookServing,
  },
  {
    id: 2,
    name: "Lucky Helen",
    role: "Chef",
    image: cookServing,
  },
  {
    id: 3,
    name: "Moon Henry",
    role: "Founder",
    image: cookServing,
  },
  {
    id: 4,
    name: "Tom Monrow",
    role: "Specialist",
    image: cookServing,
  },
];

export default function TeamMember() {
  return (
    <section className="py-16 bg-[#AD1519D9] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <SectionHeader className="text-white">Team Member</SectionHeader>
          <p className="text-white/90 max-w-[442px] mx-auto leading-relaxed mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
            pharetra dictum neque massa congue
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Member Image */}
              <div className="relative md:h-[312px] min-h-36 overflow-hidden">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Member Info */}
              <div className="md:p-6 p-2 text-center">
                <h3 className="md:text-xl text-[10.35px] font-semibold text-[#4F4F4F] mb-2">
                  {member.name}
                </h3>
                <p className="text-[#828282] font-medium md:text-base text-[8.28px]">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
