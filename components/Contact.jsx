'use client'

import './ContactStyles.css'
import { aldrich } from "@/app/fonts";
import Image from 'next/image';
import { useRef, useState } from 'react';
import PlanetCanvas from './PlanetCanvas';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = () => {
    
  }
  const handleSubmit = () => {

  }
    return (
      <div className="contact">
        <section className="contact_container">
          <div className="contact_left">
            <h1 className={`${aldrich.className} + contact_title`}>
              Contact Us
            </h1>
            <div className="contact_icons_container">
              <p className="contact_icons">
                <Image src="/location.svg" width={12} height={12} />
                Dammam, Saudi Arabia
              </p>
              <p className="contact_icons">
                <Image src="/phone.svg" width={12} height={12} />
                +966 591698112
              </p>
              <p className="contact_icons">
                {""}
                <Image src="/mail.svg" width={12} height={12} />
                jaseeraengg@gmail.com
              </p>
            </div>
            <div className="contact_sphere">
              <PlanetCanvas />
            </div>
          </div>
          <div className="contact_right">
            <form
              ref={formRef}
              className="contact_form"
              onSubmit={handleSubmit}
            >
              <div className="contact_box">
                <input
                  type="text"
                  placeholder="Your name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  placeholder="Your email"
                  name="email"
                  value={form.value}
                  onChange={handleChange}
                />
                <textarea
                  placeholder="Your Message"
                  rows="7"
                  value={form.message}
                  onChange={handleChange}
                ></textarea>
                <button
                  type="submit"
                  data-text="Send"
                  value="Send"
                  className="contact_button button"
                  onClick={handleSubmit}
                >
                  {loading ? "Sending..." : "Send"}
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    );
}

export default Contact