import React from 'react'
import { Users, Heart } from 'lucide-react'
import ProductCard from './ProductCard'

const Products = () => {
    const products = [
        {
            name: 'Project-M',
            description: 'A community-driven platform that connects people through shared interests and meaningful conversations. Build lasting relationships in a safe, moderated environment.',
            features: [
                'Real-time community interactions',
                'Advanced moderation tools',
                'Personalized content discovery',
                'Secure messaging system'
            ],
            accentColor: 'text-accent-project-m',
            icon: Users
        },
        {
            name: 'Project-R',
            description: 'A wellness and mindfulness app designed to help users find inner peace and balance in their daily lives. Guided meditation, breathing exercises, and personal growth tracking.',
            features: [
                'Guided meditation sessions',
                'Breathing exercise tools',
                'Progress tracking & insights',
                'Personalized wellness plans'
            ],
            accentColor: 'text-accent-project-r',
            icon: Heart
        }
    ]

    return (
        <section id="products" className="py-xxxl bg-neutral-background-subtle">
            <div className="max-w-container mx-auto px-l">
                {/* Section Header */}
                <div className="text-center mb-xxl">
                    <h2 className="text-h1 text-brand-primary mb-m">Our Products</h2>
                    <p className="text-body-large text-brand-secondary max-w-2xl mx-auto">
                        Two distinct solutions, one Shinnovation Co mission. Each product serves a unique purpose
                        while sharing our commitment to human-centered design.
                    </p>
                </div>

                {/* Products Grid */}
                <div className="grid md:grid-cols-2 gap-xxl">
                    {products.map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Products 