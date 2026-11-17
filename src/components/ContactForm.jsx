import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import { CONTACT_NEEDS, SOCIAL_MEDIA_LINKS } from "../assets/index";
import { useMotion } from "../lib/motion";

const EMPTY = { need: CONTACT_NEEDS[0], name: "", email: "", message: "" };

const ContactForm = () => {
  const [formData, setFormData] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);

  const scope = useRef(null);
  useMotion(scope);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const next = {};
    if (!formData.name.trim()) next.name = "Please enter your name.";
    if (!formData.email.trim()) next.email = "Please enter your email.";
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) next.email = "That email address looks incomplete. Check it and try again.";
    if (!formData.message.trim()) next.message = "Please add a few words about the project.";
    return next;
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
      // The existing EmailJS template reads name, email and message,
      // so the project type is added to the top of the message.
      await emailjs.send(
        "service_twmtgeh",
        "template_h7f68f6",
        {
          name: formData.name,
          email: formData.email,
          need: formData.need,
          message: `What they need: ${formData.need}\n\n${formData.message}`,
        },
        "Kj3bSdLE-rS69fWsM",
      );
      toast.success("Message sent. I'll get back to you soon.");
      setFormData(EMPTY);
    } catch (error) {
      console.error("Failed to send email:", error);
      toast.error("Couldn't send your message. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  const fieldClasses =
    "w-full rounded-[10px] border border-line-strong bg-page px-3.5 py-[11px] text-base font-normal text-ink outline-none transition placeholder:text-[#7a869c] focus:border-accent focus:bg-surface focus:ring-4 focus:ring-accent-soft";
  const errorClasses = "text-sm font-normal text-[#c0262d]";

  return (
    <section
      ref={scope}
      id="contact"
      aria-labelledby="contact-title"
      className="contact-band relative overflow-hidden py-[72px] text-navy-muted md:py-28"
    >
      <div className="page grid items-start gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <div className="grid gap-3.5">
          <span data-reveal className="eyebrow !text-teal-light">Contact</span>
          <h2 id="contact-title" data-split className="section-title !text-white">
            Let&apos;s build something that lasts.
          </h2>
          <p data-reveal className="max-w-[58ch] text-lg">
            Tell me what you&apos;re building, or what needs fixing. I&apos;ll reply with honest next steps.
          </p>

          <div data-reveal className="mt-7 grid border-t border-white/15">
            {SOCIAL_MEDIA_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-4 border-b border-white/15 py-4 font-semibold text-white transition-all hover:pl-1.5 hover:text-teal-light"
              >
                {link.label}
                <span className="inline-flex items-center gap-1 text-sm font-normal text-navy-muted">
                  {link.handle} <FiArrowUpRight aria-hidden="true" />
                </span>
              </a>
            ))}
          </div>
        </div>

        <form
          onSubmit={sendEmail}
          noValidate
          data-reveal
          className="grid gap-[18px] rounded-3xl bg-surface p-[22px] text-ink-body shadow-form sm:p-8"
        >
          <p className="text-xl font-bold tracking-[-0.02em] text-ink">Tell me about your project</p>

          <fieldset>
            <legend className="mb-2 text-sm font-semibold text-ink">What do you need?</legend>
            <div className="flex flex-wrap gap-2">
              {CONTACT_NEEDS.map((need) => (
                <label key={need} className="cursor-pointer">
                  <input
                    type="radio"
                    name="need"
                    value={need}
                    checked={formData.need === need}
                    onChange={handleChange}
                    className="peer sr-only"
                  />
                  <span className="inline-block rounded-full border border-line-strong px-3.5 py-2 text-sm font-medium transition hover:border-accent peer-checked:border-accent peer-checked:bg-accent peer-checked:text-white peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-accent">
                    {need}
                  </span>
                </label>
              ))}
            </div>
          </fieldset>

          <div className="grid gap-4 sm:grid-cols-2">
            <label htmlFor="name" className="grid gap-1.5 text-sm font-semibold text-ink">
              Your name
              <input
                id="name"
                name="name"
                autoComplete="name"
                placeholder="Jane Smith"
                value={formData.name}
                onChange={handleChange}
                aria-invalid={Boolean(errors.name)}
                className={fieldClasses}
              />
              {errors.name && <span className={errorClasses}>{errors.name}</span>}
            </label>
            <label htmlFor="email" className="grid gap-1.5 text-sm font-semibold text-ink">
              Work email
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="jane@company.com"
                value={formData.email}
                onChange={handleChange}
                aria-invalid={Boolean(errors.email)}
                className={fieldClasses}
              />
              {errors.email && <span className={errorClasses}>{errors.email}</span>}
            </label>
          </div>

          <label htmlFor="message" className="grid gap-1.5 text-sm font-semibold text-ink">
            About the project
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="What you're building, where it stands today, and when you'd like to launch."
              value={formData.message}
              onChange={handleChange}
              aria-invalid={Boolean(errors.message)}
              className={`${fieldClasses} min-h-[120px] resize-y`}
            />
            {errors.message && <span className={errorClasses}>{errors.message}</span>}
          </label>

          <div className="flex flex-wrap items-center justify-between gap-3">
            <small className="text-[13px] text-ink-muted">Your message goes straight to my inbox.</small>
            <button type="submit" disabled={isSending} data-magnetic="0.1" className="btn btn-primary group disabled:cursor-not-allowed disabled:opacity-60">
              {isSending ? "Sending…" : "Send message"}
              {!isSending && <FiArrowRight className="transition-transform group-hover:translate-x-1" />}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
