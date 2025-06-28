import Image from "next/image"

const teamMembers = [
  {
    id: 1,
    name: "Mark Henry",
    role: "Owner",
    image: "/placeholder.svg?height=300&width=250",
  },
  {
    id: 2,
    name: "Lucky Helen",
    role: "Chef",
    image: "/placeholder.svg?height=300&width=250",
  },
  {
    id: 3,
    name: "Moon Henry",
    role: "Founder",
    image: "/placeholder.svg?height=300&width=250",
  },
  {
    id: 4,
    name: "Tom Monrow",
    role: "Specialist",
    image: "/placeholder.svg?height=300&width=250",
  },
]

export default function TeamMember() {
  return (
    <section className="py-16 bg-gradient-to-b from-red-600 to-red-500 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-white rounded-full"></div>
        <div className="absolute bottom-10 left-1/4 w-16 h-16 bg-white rounded-full"></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-white rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Team Member</h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Member Image */}
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Member Info */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-gray-600 font-medium">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
