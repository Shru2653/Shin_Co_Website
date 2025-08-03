import React from 'react'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
    return (
        <section className="py-xxxl bg-neutral-background">
            <div className="max-w-container mx-auto px-l">
                <div className="text-center max-w-4xl mx-auto">
                    {/* Main Headline */}
                    <h1 className="text-display text-brand-primary mb-l">
                        Building the Future,{' '}
                        <span className="text-accent-project-m">Together</span>
                    </h1>

                    {/* Sub-headline */}
                    <p className="text-body-large text-brand-secondary mb-xxl max-w-2xl mx-auto">
                        We're creating innovative solutions that bridge the gap between technology and human connection.
                        Our dual-focus approach brings together the best of both worlds.
                    </p>

                    {/* Primary CTA */}
                    <div className="flex flex-col sm:flex-row gap-m justify-center items-center">
                        <button className="btn-unified flex items-center space-x-s">
                            <span>Get Started</span>
                            <ArrowRight className="h-5 w-5" />
                        </button>
                        <button className="btn-secondary">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero 