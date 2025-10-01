import React, { useState } from "react";
import TopBanner from "../components/TopBanner";
import { Map, MapPin, PhoneCall } from "lucide-react";
import { MdEmail } from "react-icons/md";
import emailjs from "@emailjs/browser";

const Contact = () => {
  // Form state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      from_name: `${firstName} ${lastName}`,
      from_email: email,
      subject: subject,
      message: message,
      to_email: "itspreetamverma@gmail.com",
      to_name: "VoltBull",
    };

    const publicKey = import.meta.env.VITE_PUBLIC_KEY;
    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;

    emailjs.send(serviceId, templateId, templateParams, { publicKey }).then(
      () => {
        setFormSubmitted(true);
        setFirstName("");
        setLastName("");
        setEmail("");
        setSubject("");
        setMessage("");
        setLoading(false);
      },
      (error) => {
        console.error("Email send failed:", error.text);
        setLoading(false);
      }
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <TopBanner
        backgroundImage="/images/bike1.jpg"
        staticText="We are Listening Always"
        words={["Get in touch", "Connect with us", "Stay updated", "Join us"]}
      />

      <div className="flex flex-col items-start justify-center py-16 px-4 lg:px-10 xl:px-40 gap-y-6">
        <h1 className="text-3xl md:text-5xl text-left font-extrabold">
          For More Information Contact Us!
        </h1>
        <p className="text-slate-500">
          We’re here to help. Whether you’re a customer with a question or a
          business looking to partner with us, we look forward to hearing from
          you.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8 w-full">
          {/* Left side - Company Info */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold mb-4">
              VOLTBULL ENERGY PRIVATE LIMITED
            </h2>

            {/* Office Address */}
            <div className="flex flex-col md:flex-row justify-center md:justify-start items-center gap-4 group transition-colors">
              <MapPin className="w-10 h-10 text-[#FF0000]" />
              <div className="text-center md:text-left">
                <h2 className="font-bold group-hover:text-[#FF0000] transition-colors">
                  Office Address
                </h2>
                <p className="text-slate-500">
                  Shop No. 410, 4th Floor, HillTown Plaza, Ringroad Char Rasta,
                  Nr. Amar Javan Circle, Nikol, Ahmedabad - 382350, Gujarat.
                  INDIA
                </p>
              </div>
            </div>

            {/* Warehouse Address */}
            <div className="flex flex-col md:flex-row justify-center md:justify-start items-center gap-4 group transition-colors">
              <Map className="w-10 h-10 text-[#FF0000]" />
              <div className="text-center md:text-left">
                <h2 className="font-bold group-hover:text-[#FF0000] transition-colors">
                  Warehouse Address
                </h2>
                <p className="text-slate-500">
                  PLOT NO 57, NARNARAYAN IND PARK 2, DASKROI, KUBADTHAL,
                  Ahmedabad, Gujarat, 382430
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex flex-col md:flex-row justify-center md:justify-start items-center gap-4 group transition-colors">
              <PhoneCall className="w-6 h-6 text-[#FF0000]" />
              <div className="mt-2 text-center">
                <a href="tel:+91 99985 00154">
                  <span className="font-bold">+91 99985 00154</span>
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col md:flex-row justify-center md:justify-start items-center gap-4 group transition-colors">
              <MdEmail className="w-8 h-8 text-[#FF0000]" />
              <div className="mt-2 text-center">
                <a href="mailto:Info@voltbull.in">
                  <span className="font-bold">Info@voltbull.in</span>
                </a>
                <br />
                <a href="mailto:account@voltbull.in">
                  <span className="font-bold">account@voltbull.in</span>
                </a>
              </div>
            </div>

            {/* Google Map */}
            <div className="relative w-full h-40 sm:h-24 md:h-32 lg:h-[150px] xl:h-[200px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.784579838061!2d72.67499991542838!3d23.038368884845287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e87003d924985%3A0x829c1fad541331d9!2sVoltBull%20Battery!5e0!3m2!1sen!2sin!4v1695543000000!5m2!1sen!2sin"
                className="absolute top-0 left-0 w-full h-full"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Right side - Form */}
          <div>
            {formSubmitted ? (
              <div className="flex flex-col text-green-500 justify-center items-center p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold mb-2">
                  Form Submitted Successfully!
                </h2>
                <p>Thank you for contacting us. We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={sendEmail} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm text-slate-500 font-medium mb-1">
                    Name <span className="text-[#FF0000]">*</span>
                  </label>
                  <div className="flex gap-4">
                    <div className="w-1/2">
                      <input
                        type="text"
                        placeholder="First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-1 focus:ring-[#FF0000]"
                      />
                    </div>
                    <div className="w-1/2">
                      <input
                        type="text"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-1 focus:ring-[#FF0000]"
                      />
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm text-slate-500 font-medium mb-1">
                    Email <span className="text-[#FF0000]">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-1 focus:ring-[#FF0000]"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm text-slate-500 font-medium mb-1">
                    Subject <span className="text-[#FF0000]">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-1 focus:ring-[#FF0000]"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm text-slate-500 font-medium mb-1">
                    Message <span className="text-[#FF0000]">*</span>
                  </label>
                  <textarea
                    rows="4"
                    placeholder="Your Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-1 focus:ring-[#FF0000]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#FF0000] text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Submit"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
