import React from 'react'

export default function ContactPage() {
    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 px-6 py-10">
            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
                Contact Us
            </h1>

            {/* Subtitle */}
            <p className="text-gray-600 text-center text-lg max-w-xl mb-10">
                Got a question or feedback? We'd love to hear from you!
                Fill out the form below and we'll get back to you as soon as possible.
            </p>

            {/* Contact Form */}
            <form className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md space-y-4">
                {/* Name */}
                <div>
                    <label className="block text-gray-700 mb-1 text-sm">Your Name</label>
                    <input
                        type="text"
                        placeholder="Enter your name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    />
                </div>

                {/* Email */}
                <div>
                    <label className="block text-gray-700 mb-1 text-sm">Your Email</label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    />
                </div>

                {/* Message */}
                <div>
                    <label className="block text-gray-700 mb-1 text-sm">Message</label>
                    <textarea
                        rows={4}
                        placeholder="Write your message..."
                        className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    ></textarea>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
                >
                    Send Message
                </button>
            </form>

            {/* Contact Info */}
            <div className="mt-10 text-center text-gray-600">
                <p>📧 Email: support@crudapp.com</p>
                <p>📞 Phone: +91 98765 43210</p>
            </div>
        </div>
    )
}
