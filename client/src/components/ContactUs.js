import React, { Component } from "react";
import Footer from "./Footer";
import ContactUsForm from "./forms/ContactUsForm";
export class ContactUs extends Component {
  render() {

    return (
      <section class="Material-contact-section section-padding section-dark">
        <div class="container">
          <div class="row">
            <ContactUsForm></ContactUsForm>
            <div
              class="col-md-6 mt-3 contact-widget-section2 wow animated fadeInLeft"
              data-wow-delay=".2s"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15127.481342293786!2d73.7382435!3d18.5798836!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcb8abc91bdca4c48!2sLTI!5e0!3m2!1sen!2sin!4v1609916582337!5m2!1sen!2sin"
                width="100%"
                height={538}
                frameBorder={0}
                style={{ border: 0 }}
                allowFullScreen
                data-aos="fade-left"
                data-aos-duration={3000}
              />
            </div>
          </div>
        </div>

      </section>
    );
  }
}
export default ContactUs;