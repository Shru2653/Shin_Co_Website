import React from 'react'
import { Linkedin, Twitter } from 'lucide-react'

const Team = () => {
    const teamMembers = [
        {
            name: 'Sarah Chen',
            title: 'CEO & Co-Founder',
            bio: 'Former product leader at Google and Meta. Passionate about building technology that serves humanity.',
            image: '/placeholder-avatar-1.jpg',
            linkedin: '#',
            twitter: '#'
        },
        {
            name: 'Marcus Rodriguez',
            title: 'CTO & Co-Founder',
            bio: 'Full-stack engineer with 15+ years experience. Believes in the power of thoughtful, human-centered code.',
            image: '/placeholder-avatar-2.jpg',
            linkedin: '#',
            twitter: '#'
        },
        {
            name: 'Dr. Emily Watson',
            title: 'Head of Product',
            bio: 'PhD in Human-Computer Interaction. Dedicated to creating products that truly understand and serve users.',
            image: '/placeholder-avatar-3.jpg',
            linkedin: '#',
            twitter: '#'
        },
        {
            name: 'Alex Kim',
            title: 'Head of Design',
            bio: 'Design systems expert with a background in psychology. Creates interfaces that feel intuitive and welcoming.',
            image: '/placeholder-avatar-4.jpg',
            linkedin: '#',
            twitter: '#'
        }
    ]

    return (
        <section id="team" className="py-xxxl bg-neutral-background-subtle">
            <div className="max-w-container mx-auto px-l">
                {/* Section Header */}
                <div className="text-center mb-xxl">
                    <h2 className="text-h1 text-brand-primary mb-m">Meet Our Team</h2>
                    <p className="text-body-large text-brand-secondary max-w-2xl mx-auto">
                        We're a diverse team of designers, engineers, and product thinkers
                        united by our passion for human-centered technology.
                    </p>
                </div>

                {/* Team Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-xxl">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="card text-center">
                            {/* Avatar Placeholder */}
                            <div className="w-20 h-20 rounded-full bg-neutral-background-subtle mx-auto mb-l flex items-center justify-center">
                                <span className="text-h3 text-brand-secondary font-semibold">
                                    {member.name.split(' ').map(n => n[0]).join('')}
                                </span>
                            </div>

                            {/* Member Info */}
                            <h3 className="text-h3 text-brand-primary mb-s">{member.name}</h3>
                            <p className="text-caption text-accent-project-m mb-m font-medium">{member.title}</p>
                            <p className="text-body text-brand-secondary mb-l">{member.bio}</p>

                            {/* Social Links */}
                            <div className="flex justify-center space-x-s">
                                <a
                                    href={member.linkedin}
                                    className="p-s text-brand-secondary hover:text-accent-project-m transition-colors duration-200"
                                    aria-label={`${member.name} on LinkedIn`}
                                >
                                    <Linkedin className="h-5 w-5" />
                                </a>
                                <a
                                    href={member.twitter}
                                    className="p-s text-brand-secondary hover:text-accent-project-m transition-colors duration-200"
                                    aria-label={`${member.name} on Twitter`}
                                >
                                    <Twitter className="h-5 w-5" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Team 