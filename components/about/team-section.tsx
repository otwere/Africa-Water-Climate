"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Linkedin, Twitter, Mail } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export function TeamSection() {
  const [activeTab, setActiveTab] = useState("leadership")
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)

  interface TeamMember {
    name: string
    role: string
    image: string
    bio: string
    category: string
    credentials: string
    location: string
    expertise: string[]
    social: {
      linkedin?: string
      twitter?: string
      email?: string
    }
  }

  const teamMembers: TeamMember[] = [
    {
      name: "Dr. Amara Okafor",
      role: "Executive Director",
      image: "/placeholder.svg?height=300&width=300&text=AO",
      bio: "Dr. Okafor has over 20 years of experience in water resource management across West Africa. She previously served as a senior advisor to the African Development Bank and has led major water infrastructure projects in Nigeria, Ghana, and Senegal.",
      category: "leadership",
      credentials: "PhD in Hydrology, Imperial College London",
      location: "Lagos, Nigeria",
      expertise: ["Water Policy", "Transboundary Water Management", "Climate Adaptation"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "amara@africawater.org",
      },
    },
    {
      name: "Dr. Kwame Nkrumah",
      role: "Chief Scientific Officer",
      image: "/placeholder.svg?height=300&width=300&text=KN",
      bio: "Dr. Nkrumah leads our scientific research initiatives, focusing on climate modeling and water quality assessment. His groundbreaking work on drought prediction has been adopted by multiple national meteorological agencies across East Africa.",
      category: "leadership",
      credentials: "PhD in Climate Science, University of Cape Town",
      location: "Accra, Ghana",
      expertise: ["Climate Modeling", "Drought Prediction", "Water Quality"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "kwame@africawater.org",
      },
    },
    {
      name: "Fatima El-Bashir",
      role: "Chief Technology Officer",
      image: "/placeholder.svg?height=300&width=300&text=FB",
      bio: "Fatima oversees our technology infrastructure and data platform development. With a background in both computer science and environmental engineering, she bridges the gap between technical innovation and practical environmental applications.",
      category: "leadership",
      credentials: "MSc in Computer Science, MIT",
      location: "Cairo, Egypt",
      expertise: ["Data Architecture", "IoT Sensor Networks", "AI Applications"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "fatima@africawater.org",
      },
    },
    {
      name: "Jean-Pierre Mutombo",
      role: "Director of Partnerships",
      image: "/placeholder.svg?height=300&width=300&text=JM",
      bio: "Jean-Pierre manages our relationships with government agencies, NGOs, and private sector partners. His diplomatic background has been instrumental in establishing cross-border water management initiatives in the Congo Basin.",
      category: "leadership",
      credentials: "MA in International Relations, Sciences Po",
      location: "Kinshasa, DRC",
      expertise: ["Stakeholder Engagement", "Public-Private Partnerships", "Resource Mobilization"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "jeanpierre@africawater.org",
      },
    },
    {
      name: "Dr. Nala Diallo",
      role: "Lead Hydrologist",
      image: "/placeholder.svg?height=300&width=300&text=ND",
      bio: "Dr. Diallo specializes in groundwater modeling and aquifer assessment. Her research has helped identify sustainable extraction rates for urban water supplies in water-stressed regions of the Sahel.",
      category: "scientists",
      credentials: "PhD in Hydrogeology, Stanford University",
      location: "Dakar, Senegal",
      expertise: ["Groundwater Modeling", "Aquifer Assessment", "Water Resource Planning"],
      social: {
        linkedin: "#",
        email: "nala@africawater.org",
      },
    },
    {
      name: "Dr. Tendai Moyo",
      role: "Climate Data Scientist",
      image: "/placeholder.svg?height=300&width=300&text=TM",
      bio: "Dr. Moyo leads our climate data analysis team, developing predictive models for rainfall patterns and extreme weather events across Southern Africa.",
      category: "scientists",
      credentials: "PhD in Atmospheric Science, University of Reading",
      location: "Harare, Zimbabwe",
      expertise: ["Climate Data Analysis", "Precipitation Modeling", "Extreme Weather Prediction"],
      social: {
        twitter: "#",
        email: "tendai@africawater.org",
      },
    },
    {
      name: "Ibrahim Toure",
      role: "Senior Software Engineer",
      image: "/placeholder.svg?height=300&width=300&text=IT",
      bio: "Ibrahim leads the development of our data platform, ensuring that complex climate and water data is accessible and usable for stakeholders at all technical levels.",
      category: "technology",
      credentials: "MSc in Software Engineering, Carnegie Mellon University Africa",
      location: "Kigali, Rwanda",
      expertise: ["Full-Stack Development", "Data Visualization", "Cloud Architecture"],
      social: {
        linkedin: "#",
        github: "#",
        email: "ibrahim@africawater.org",
      },
    },
    {
      name: "Zainab Mahmoud",
      role: "GIS Specialist",
      image: "/placeholder.svg?height=300&width=300&text=ZM",
      bio: "Zainab creates our interactive mapping tools and spatial analyses, helping users visualize water resources and climate impacts across different geographic scales.",
      category: "technology",
      credentials: "MSc in Geographic Information Science, University of Nairobi",
      location: "Nairobi, Kenya",
      expertise: ["Spatial Analysis", "Remote Sensing", "Interactive Mapping"],
      social: {
        linkedin: "#",
        email: "zainab@africawater.org",
      },
    },
  ]

  const filteredMembers = teamMembers.filter((member) => member.category === activeTab)

  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">Our Team</h2>
          <p className="text-lg text-muted-foreground">
            Meet the dedicated experts working to transform water resource management across Africa through data,
            science, and collaboration.
          </p>
        </motion.div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="leadership">Leadership</TabsTrigger>
              <TabsTrigger value="scientists">Scientists</TabsTrigger>
              <TabsTrigger value="technology">Technology</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value={activeTab} className="mt-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Dialog>
                    <DialogTrigger asChild>
                      <div className="cursor-pointer" onClick={() => setSelectedMember(member)}>
                        <div className="relative overflow-hidden rounded-lg mb-4">
                          <img
                            src={member.image || "/placeholder.svg"}
                            alt={member.name}
                            className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                            <div className="flex gap-2">
                              {member.social.linkedin && (
                                <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm">
                                  <Linkedin className="h-4 w-4 text-white" />
                                </div>
                              )}
                              {member.social.twitter && (
                                <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm">
                                  <Twitter className="h-4 w-4 text-white" />
                                </div>
                              )}
                              {member.social.email && (
                                <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm">
                                  <Mail className="h-4 w-4 text-white" />
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                        <h3 className="font-bold text-lg">{member.name}</h3>
                        <p className="text-muted-foreground">{member.role}</p>
                      </div>
                    </DialogTrigger>

                    <DialogContent className="sm:max-w-[600px]">
                      {selectedMember && (
                        <>
                          <DialogHeader>
                            <DialogTitle className="text-2xl">{selectedMember.name}</DialogTitle>
                            <DialogDescription className="text-base font-medium">
                              {selectedMember.role}
                            </DialogDescription>
                          </DialogHeader>

                          <div className="grid md:grid-cols-3 gap-6 py-4">
                            <div>
                              <img
                                src={selectedMember.image || "/placeholder.svg"}
                                alt={selectedMember.name}
                                className="w-full aspect-square object-cover rounded-lg"
                              />
                              <div className="mt-4 space-y-2">
                                <p className="text-sm">
                                  <strong>Location:</strong> {selectedMember.location}
                                </p>
                                <p className="text-sm">
                                  <strong>Credentials:</strong> {selectedMember.credentials}
                                </p>
                                <div className="flex gap-3 mt-4">
                                  {selectedMember.social.linkedin && (
                                    <Button variant="outline" size="icon" asChild>
                                      <a
                                        href={selectedMember.social.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        <Linkedin className="h-4 w-4" />
                                      </a>
                                    </Button>
                                  )}
                                  {selectedMember.social.twitter && (
                                    <Button variant="outline" size="icon" asChild>
                                      <a href={selectedMember.social.twitter} target="_blank" rel="noopener noreferrer">
                                        <Twitter className="h-4 w-4" />
                                      </a>
                                    </Button>
                                  )}
                                  {selectedMember.social.email && (
                                    <Button variant="outline" size="icon" asChild>
                                      <a href={`mailto:${selectedMember.social.email}`}>
                                        <Mail className="h-4 w-4" />
                                      </a>
                                    </Button>
                                  )}
                                </div>
                              </div>
                            </div>
                            <div className="md:col-span-2 space-y-4">
                              <div>
                                <h4 className="font-medium mb-2">Biography</h4>
                                <p className="text-muted-foreground">{selectedMember.bio}</p>
                              </div>
                              <div>
                                <h4 className="font-medium mb-2">Areas of Expertise</h4>
                                <div className="flex flex-wrap gap-2">
                                  {selectedMember.expertise.map((skill, i) => (
                                    <span
                                      key={i}
                                      className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2.5 py-0.5 rounded-full"
                                    >
                                      {skill}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                    </DialogContent>
                  </Dialog>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
