import React from 'react'

function Contact() {
  return (
      <section id="contact"className="bg-gray-50 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Stay In Touch</h2>
          <p className="text-gray-600 mb-6">
            Want to stay updated on my latest projects, blog posts, or portfolio updates? Subscribe to my newsletter and never miss out on new content.
          </p>
          {/* Email Subscription Form */}
          <form className="flex justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="px-4 py-3 rounded-l-full w-full focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <button type="submit" className="bg-pink-500 text-white px-6 py-3 rounded-r-full hover:bg-pink-600 transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </section>
  )
}

export default Contact;