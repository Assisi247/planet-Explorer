import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  function handleChange(event) {
    const { name, value } = event.target

    setFormData({
      ...formData,
      [name]: value,
    })

    setSubmitted(false)
  }

  function handleSubmit(event) {
    event.preventDefault()

    setSubmitted(true)

    setFormData({
      name: '',
      email: '',
      message: '',
    })
  }

  return (
    <section id="contact" className="contact-section">
      <div className="contact-content">
        <div className="contact-heading">
          <p>GET IN TOUCH</p>
          <h2>Contact Us</h2>
          <span>
            Have a question about the planets? Send us a message.
          </span>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            minLength="2"
            placeholder="Enter your name"
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            minLength="10"
            placeholder="Write your message"
            rows="5"
          />

          <button type="submit">Send Message</button>

          {submitted && (
            <p className="success-message">
              Thank you! Your message has been submitted successfully.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

export default Contact