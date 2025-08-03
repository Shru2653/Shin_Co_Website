import React, { useState } from 'react'
import { Menu, X, Building2 } from 'lucide-react'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="sticky top-0 z-50 bg-neutral-background/95 backdrop-blur-sm border-b border-neutral-border">
            <div className="max-w-container mx-auto px-l">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center space-x-s">
                        <Building2 className="h-8 w-8 text-brand-primary" />
                        <span className="text-h3 font-semibold tracking-wide">
  <span className="text-accent-project-m">Shinnovation</span> <span className="text-brand-primary">Co</span>
</span>
                    </div>

                    {/* Desktop Navigation */}

                    {/* Mobile menu button */}
                    <button
                        className="md:hidden p-s"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            <X className="h-6 w-6 text-brand-primary" />
                        ) : (
                            <Menu className="h-6 w-6 text-brand-primary" />
                        )}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden border-t border-neutral-border bg-neutral-background">
                        <nav className="flex flex-col space-y-s py-l">
                        </nav>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Header