import { useState } from "react";
import ScrollAnimation from "./ScrollAnimation";
import { Button } from "./ui/button";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation animation="fade-up" className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your space? Contact us today for a free quote.
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Info Side */}
          <ScrollAnimation animation="fade-right">
            <div className="space-y-8">
              <ContactInfoItem
                icon={<Phone className="h-6 w-6 text-blue-500" />}
                title="Phone"
                detail="(555) 123-4567"
                sub="Mon-Sun: 7AM - 9PM"
              />
              <ContactInfoItem
                icon={<Mail className="h-6 w-6 text-blue-500" />}
                title="Email"
                detail="info@albertuganda.com"
                sub="We respond within 24 hours"
              />
              <ContactInfoItem
                icon={<MapPin className="h-6 w-6 text-blue-500" />}
                title="Service Area"
                detail="Greater Metro Area"
                sub="Free estimates available"
              />
            </div>
          </ScrollAnimation>

          {/* Form Side with Glassmorphism */}
          <ScrollAnimation animation="fade-left" delay={200}>
            <div className="rounded-[2rem] border border-white/20 bg-white/5 backdrop-blur-md p-8 shadow-xl">
              <ContactForm />
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const update = (k: string, v: string) =>
    setFormData((s) => ({ ...s, [k]: v }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Safety check for Formspree endpoint
    const formId = import.meta.env.VITE_FORMSPREE_FORM_ID;
    const customEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;

    const endpoint =
      customEndpoint || (formId ? `https://formspree.io/f/${formId}` : null);

    // Fallback: Mailto link if no endpoint is configured
    if (!endpoint) {
      const to = "ocenmoses76@gmail.com";
      const subject = `Website Inquiry from ${formData.name}`;
      const body = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage: ${formData.message}`;
      window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setStatus("success");
      return;
    }

    setStatus("sending");

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("Form Error:", err);
      setStatus("error");
    }
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <label className="text-sm font-semibold ml-1">Name</label>
        <input
          value={formData.name}
          onChange={(e) => update("name", e.target.value)}
          type="text"
          className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
          placeholder="John Doe"
          required
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold ml-1">Email</label>
        <input
          value={formData.email}
          onChange={(e) => update("email", e.target.value)}
          type="email"
          className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
          placeholder="john@example.com"
          required
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold ml-1">Message</label>
        <textarea
          value={formData.message}
          onChange={(e) => update("message", e.target.value)}
          rows={4}
          className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"
          placeholder="How can we help you?"
          required
        />
      </div>

      <Button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 rounded-xl font-bold transition-all transform active:scale-[0.98]"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </Button>

      {status === "success" && (
        <p className="text-green-400 text-sm text-center">
          ✓ Message sent successfully!
        </p>
      )}
      {status === "error" && (
        <p className="text-red-400 text-sm text-center">
          ✕ Failed to send. Please try again.
        </p>
      )}
    </form>
  );
}

function ContactInfoItem({
  icon,
  title,
  detail,
  sub,
}: {
  icon: React.ReactNode;
  title: string;
  detail: string;
  sub: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="h-12 w-12 rounded-2xl bg-blue-500/10 flex items-center justify-center flex-shrink-0 border border-blue-500/20">
        {icon}
      </div>
      <div>
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-muted-foreground">{detail}</p>
        <p className="text-xs text-muted-foreground/60 mt-0.5">{sub}</p>
      </div>
    </div>
  );
}
