import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Products from './components/Products'
import Mission from './components/Mission'
import WhyChooseUs from './components/WhyChooseUs'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
    return (
        <div className="min-h-screen bg-neutral-background">
            <Header />
            <main>
                <Hero />
                <Mission />
                <WhyChooseUs />
                <Contact />
            </main>
            <Footer />
        </div>
    )
}

export default App 