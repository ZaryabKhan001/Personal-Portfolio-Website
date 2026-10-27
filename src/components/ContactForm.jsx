
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { FiSend, FiMail, FiMessageSquare } from "react-icons/fi";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear the error for the field being edited
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validate = () => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = "Please enter your name.";
    }

    if (!formData.email.trim()) {
      errors.email = "Please enter your email.";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim()) {
      errors.message = "Please tell me a little about your inquiry.";
    }

    return errors;
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSending(true);

    try {
      await emailjs.send(
        "service_twmtgeh",
        "template_h7f68f6",
        formData,
        "Kj3bSdLE-rS69fWsM"
      );

      toast.success("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Failed to send email:", error);
      toast.error("Couldn't send your message. Please try again.");
      // Keep the form data so the user doesn't lose their message.
    } finally {
      setIsSending(false);
    }
  };

  const inputClasses =
    "w-full rounded-xl border border-white/10 bg-[#0d1119] px-4 py-3.5 text-sm text-white placeholder:text-gray-500 outline-none transition focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/10";

  const errorClasses = "mt-2 text-sm text-rose-400";

  return (
    <section id="contact" className="w-full max-w-5xl py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Section heading */}
        <div className="mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Get in touch
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Let's build something{" "}
            <span className="text-gray-500">meaningful.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
            Have an interesting problem, a product idea, or an engineering
            opportunity? I'd love to hear what you're working on.
          </p>
        </div>

        {/* Contact layout */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Left information panel */}
          <div className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-xl text-cyan-400">
              <FiMessageSquare />
            </div>

            <h3 className="text-xl font-semibold text-white">
              Have a project in mind?
            </h3>

            <p className="mt-3 text-sm leading-7 text-gray-400">
              I'm interested in solving meaningful problems, collaborating
              with thoughtful teams, and building products that make a
              difference.
            </p>

            <div className="mt-8 border-t border-white/10 pt-6">
              <div className="flex items-center gap-3 text-gray-300">
                <FiMail className="text-lg text-cyan-400" />
                <span className="text-sm">Send me a message</span>
              </div>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                Fill out the form and I'll get back to you as soon as I can.
              </p>
            </div>

            <div className="mt-auto pt-10">
              <p className="font-mono text-xs text-gray-500">
                OPEN TO INTERESTING CHALLENGES
              </p>
            </div>
          </div>

          {/* Contact form */}
          <form
            onSubmit={sendEmail}
            noValidate
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8"
          >
            <div className="mb-6">
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Your name
              </label>

              <input
                type="text"
                name="name"
                id="name"
                placeholder="John Doe"
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "name-error" : undefined}
                className={inputClasses}
              />

              {errors.name && (
                <p id="name-error" className={errorClasses}>
                  {errors.name}
                </p>
              )}
            </div>

            <div className="mb-6">
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Email address
              </label>

              <input
                type="email"
                name="email"
                id="email"
                placeholder="john@example.com"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "email-error" : undefined}
                className={inputClasses}
              />

              {errors.email && (
                <p id="email-error" className={errorClasses}>
                  {errors.email}
                </p>
              )}
            </div>

            <div className="mb-7">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                How can I help?
              </label>

              <textarea
                name="message"
                id="message"
                placeholder="Tell me about your idea, project, or opportunity..."
                rows={5}
                value={formData.message}
                onChange={handleChange}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={
                  errors.message ? "message-error" : undefined
                }
                className={`${inputClasses} resize-y`}
              />

              {errors.message && (
                <p id="message-error" className={errorClasses}>
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSending}
              className="flex w-full items-center justify-center gap-3 rounded-xl bg-cyan-400 px-5 py-4 font-semibold text-gray-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isSending ? "Sending your message..." : "Send Message"}

              {!isSending && <FiSend />}
            </button>

            <p className="mt-4 text-center text-xs leading-5 text-gray-500">
              Your message will be sent directly to my inbox.
            </p>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactForm;
