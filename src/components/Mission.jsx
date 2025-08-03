import React from 'react'
import { Target, Users, Sparkles } from 'lucide-react'

const Mission = () => {
    const values = [
        {
            icon: Target,
            title: 'Purpose-Driven',
            description: 'Every feature we build serves a clear purpose in improving human connection and well-being.'
        },
        {
            icon: Users,
            title: 'Human-Centered',
            description: 'We prioritize the human experience above all else, designing for real people with real needs.'
        },
        {
            icon: Sparkles,
            title: 'Innovation-First',
            description: 'We embrace cutting-edge technology to solve age-old problems in new and meaningful ways.'
        }
    ]

    return (
        <section id="mission" className="py-xxxl bg-neutral-background">
            <div className="max-w-container mx-auto px-l">
                <div className="text-center mb-xxl">
                    <h2 className="text-h1 text-brand-primary mb-m">Our Mission</h2>
                    <p className="text-body-large text-brand-secondary max-w-3xl mx-auto">
                        We believe technology should bring people closer together, not drive them apart.
                        Our mission is to create digital experiences that foster genuine human connection,
                        promote mental well-being, and build communities that thrive in the modern world.
                    </p>
                </div>

                {/* Values Grid */}
                <div className="grid md:grid-cols-3 gap-xxl">
                    {values.map((value, index) => (
                        <div key={index} className="text-center">
                            <div className="w-16 h-16 rounded-large bg-neutral-background-subtle flex items-center justify-center mx-auto mb-l">
                                <value.icon className="h-8 w-8 text-accent-project-m" />
                            </div>
                            <h3 className="text-h3 text-brand-primary mb-m">{value.title}</h3>
                            <p className="text-body text-brand-secondary">{value.description}</p>
                        </div>
                    ))}
                </div>

                {/* Mission Statement */}
                <div className="mt-xxxl text-center">
                    <div className="max-w-4xl mx-auto bg-neutral-background-subtle rounded-large p-xxl">
                        <blockquote className="text-h2 text-brand-primary mb-m">
                            "Technology should enhance human connection, not replace it."
                        </blockquote>
                        <p className="text-body-large text-brand-secondary">
                            This simple principle guides everything we do, from the products we build
                            to the communities we nurture.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Mission 