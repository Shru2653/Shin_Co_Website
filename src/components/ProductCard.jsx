import React from 'react'
import { ArrowRight } from 'lucide-react'

const ProductCard = ({ product }) => {
    const { name, description, features, accentColor, icon: Icon } = product

    return (
        <div className="card h-full flex flex-col">
            {/* Product Icon */}
            <div className="mb-l">
                <div className={`w-12 h-12 rounded-standard flex items-center justify-center ${accentColor} mb-m`}>
                    <Icon className="h-6 w-6 text-white" />
                </div>
            </div>

            {/* Product Title */}
            <h3 className="text-h3 text-brand-primary mb-m">{name}</h3>

            {/* Product Description */}
            <p className="text-body text-brand-secondary mb-l flex-grow">{description}</p>

            {/* Features List */}
            <ul className="space-y-s mb-xxl">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-s">
                        <div className={`w-2 h-2 rounded-full mt-2 ${accentColor.replace('text-', 'bg-')}`}></div>
                        <span className="text-body text-brand-secondary">{feature}</span>
                    </li>
                ))}
            </ul>

            {/* CTA Button */}
            <button className={`btn-primary ${accentColor.includes('accent-project-r') ? 'btn-primary-project-r' : ''} flex items-center justify-center space-x-s w-full`}>
                <span>Learn More</span>
                <ArrowRight className="h-4 w-4" />
            </button>
        </div>
    )
}

export default ProductCard 