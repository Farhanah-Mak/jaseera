import './ContactStyles.css'
import { aldrich } from "@/app/fonts";

const Contact = () => {
    return (
      <div className="contact">
        <section className="contact_container">
          <div className="contact_left">
            <h1 className={`${aldrich.className} + contact_title`}>
              Contact us
            </h1>
            <div>
              <p>Dammam, Saudi Arabia</p>
              <p>+966 591698112</p>
              <p>jaseeraengineering@gmail.com</p>
            </div>
          </div>
          <div className="contact_right">
            <form action="#" className="contact_form">
              <div className="contact_box">
                <input type="text" placeholder="Your name" />
                <input type="email" placeholder="Your email" />
                <textarea placeholder="Your Message"></textarea>
                <button
                  type="button"
                  value="Send"
                  className="contact_button button"
                >
                  Send Messages
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    );
}

export default Contact