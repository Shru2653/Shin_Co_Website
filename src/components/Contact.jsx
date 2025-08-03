import React, { useState } from 'react'
import { Mail, Send } from 'lucide-react'

const Contact = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the form data to your backend
        console.log('Contact form submitted:', { name, number, email, message });
        setIsSubmitted(true);
        setName('');
        setNumber('');
        setEmail('');
        setMessage('');
    }

    return (
        <section id="contact" className="py-xxxl bg-neutral-background">
            <div className="max-w-container mx-auto px-l">
                <div className="max-w-2xl mx-auto text-center">
                    {/* Section Header */}
                    <div className="mb-xxl">
                        <h2 className="text-h1 text-brand-primary mb-m">Contact Us</h2>
                        <p className="text-body-large text-brand-secondary">
                            We'd love to hear from you! Fill out the form below and our team will get back to you soon.
                        </p>
                    </div>

                    {/* Contact Form */}
                    <div className="card">
                        {!isSubmitted ? (
                            <form
  onSubmit={handleSubmit}
  className="flex flex-col gap-y-4"
>
  {/* Row 1: Name & Phone */}
  <div className="flex flex-col md:flex-row md:gap-x-4">
    <div className="flex-1 flex flex-col mb-4 md:mb-0">
      <label htmlFor="name" className="mb-1 font-medium text-left">Name</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Enter your name"
        className="input-field"
        required
      />
                                    </div>
                                    <div className="flex-1 flex flex-col">
                                        <label htmlFor="number" className="mb-1 font-medium text-left">Phone Number</label>
                                        <input
                                            type="tel"
                                            id="number"
                                            value={number}
                                            onChange={e => setNumber(e.target.value)}
                                            placeholder="Enter your phone number"
                                            className="input-field"
                                            required
                                        />
                                    </div>
                                </div>
                                {/* Row 2: Email & Message */}
                                <div className="flex flex-col md:flex-row md:gap-x-4">
                                    <div className="flex-1 flex flex-col mb-4 md:mb-0">
                                        <label htmlFor="email" className="mb-1 font-medium text-left">Email Address</label>
                                        <div className="relative">
                                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-brand-secondary" />
                                            <input
                                                type="email"
                                                id="email"
                                                value={email}
                                                onChange={e => setEmail(e.target.value)}
                                                placeholder="Enter your email address"
                                                className="input-field pl-10"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="flex-1 flex flex-col">
                                        <label htmlFor="message" className="mb-1 font-medium text-left">Message</label>
                                        <textarea
                                            id="message"
                                            value={message}
                                            onChange={e => setMessage(e.target.value)}
                                            placeholder="Type your message here"
                                            className="input-field resize-none min-h-[48px]"
                                            rows={1}
                                            required
                                        />
                                    </div>
                                </div>
                                {/* Submit Button */}
                                <div className="flex justify-end mt-4">
                                    <button
                                        type="submit"
                                        className="btn-unified min-w-[150px] h-[48px] flex items-center justify-center space-x-2 w-full md:w-auto md:self-end"
                                    >
                                        <span>Send Message</span>
                                        <Send className="h-5 w-5" />
                                    </button>
                                </div>
                            </form>
                        ) : (
                            <div className="text-center py-xxl">
                                <div className="w-16 h-16 rounded-full bg-state-success/10 flex items-center justify-center mx-auto mb-l">
                                    <Mail className="h-8 w-8 text-state-success" />
                                </div>
                                <h3 className="text-h3 text-brand-primary mb-m">Thank You!</h3>
                                <p className="text-body text-brand-secondary">
                                    Your message has been received. We'll get back to you as soon as possible.
                                </p>
                                <button
                                    onClick={() => setIsSubmitted(false)}
                                    className="btn-secondary mt-l"
                                >
                                    Send Another Message
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Additional Info */}
                    <div className="mt-xxl text-center">
                        <p className="text-caption text-brand-secondary">
                            We respect your privacy. Your email will only be used for product updates and early access notifications.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact 