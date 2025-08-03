import React from 'react'
import { Building2, Linkedin, Twitter, Github, Mail } from 'lucide-react'

const Footer = () => {
    const footerLinks = {
        products: [
            { name: 'Project-M', href: '#products' },
            { name: 'Project-R', href: '#products' },
            { name: 'Features', href: '#products' },
        ],
        company: [
            { name: 'About', href: '#mission' },
            { name: 'Team', href: '#team' },
            { name: 'Careers', href: '#' },
        ],
        support: [
            { name: 'Help Center', href: '#' },
            { name: 'Contact', href: '#contact' },
            { name: 'Privacy Policy', href: '#' },
        ]
    }

    const socialLinks = [
        { name: 'LinkedIn', icon: Linkedin, href: '#' },
        { name: 'Twitter', icon: Twitter, href: '#' },
        { name: 'GitHub', icon: Github, href: '#' },
        { name: 'Email', icon: Mail, href: 'mailto:hello@unifiedmission.com' },
    ]

    return (
        <footer className="bg-brand-primary text-neutral-background">
            <div className="max-w-container mx-auto px-l py-xxl">
                <div className="grid md:grid-cols-4 gap-xxl">
                    {/* Company Info */}
                    <div className="md:col-span-2">
                        <div className="flex items-center space-x-s mb-l">
                            <Building2 className="h-8 w-8 text-accent-project-m" />
                            <span className="text-h3 font-semibold">The Shinnovation Co</span>
                        </div>
                        <p className="text-body text-neutral-background/80 mb-l max-w-md">
                            Building technology that brings people together and promotes well-being.
                            Our dual-focus approach creates meaningful connections in the digital age.
                        </p>
                        <div className="flex space-x-s">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    className="p-s text-neutral-background/60 hover:text-accent-project-m transition-colors duration-200"
                                    aria-label={social.name}
                                >
                                    <social.icon className="h-5 w-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Footer Links */}
                    
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-neutral-border/20 mt-xxl pt-l">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-m md:space-y-0">
                        <p className="text-caption text-neutral-background/60">
                            © 2024 The Shinnovation Co. All rights reserved.
                        </p>
                        <div className="flex space-x-l">
                            <a
                                href="#"
                                className="text-caption text-neutral-background/60 hover:text-neutral-background transition-colors duration-200"
                            >
                                Terms of Service
                            </a>
                            <a
                                href="#"
                                className="text-caption text-neutral-background/60 hover:text-neutral-background transition-colors duration-200"
                            >
                                Privacy Policy
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer 