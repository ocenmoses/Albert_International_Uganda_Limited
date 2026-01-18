import { useState } from "react";
import ScrollAnimation from "./ScrollAnimation";
import { Button } from "./ui/button";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation animation="fade-up" className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your space? Contact us today for a free quote
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <ScrollAnimation animation="fade-right">
            <div className="space-y-6">
              <ScrollAnimation animation="fade-up" delay={0}>
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-muted-foreground">(555) 123-4567</p>
                    <p className="text-sm text-muted-foreground">
                      Mon-Sun: 7AM - 9PM
                    </p>
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="fade-up" delay={100}>
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">
                      info@Albert International Uganda Limited.com
                    </p>
                    <p className="text-sm text-muted-foreground">
                      We respond within 24 hours
                    </p>
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="fade-up" delay={200}>
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Service Area</h3>
                    <p className="text-muted-foreground">Greater Metro Area</p>
                    <p className="text-sm text-muted-foreground">
                      Free estimates available
                    </p>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-left" delay={200}>
            <div className="rounded-lg border bg-card p-8">
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

  const FORMSPREE_ENDPOINT =
    (import.meta.env as any).VITE_FORMSPREE_ENDPOINT ||
    ((import.meta.env as any).VITE_FORMSPREE_FORM_ID
      ? `https://formspree.io/f/${
          (import.meta.env as any).VITE_FORMSPREE_FORM_ID
        }`
      : "");

  const update = (k: string, v: string) =>
    setFormData((s) => ({ ...s, [k]: v }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      return;
    }

    if (!FORMSPREE_ENDPOINT) {
      const to = "ocenmoses76@gmail.com";
      const subject = `Contact from ${formData.name || "Website"}`;
      const body = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\n${formData.message}`;
      window.location.href = `mailto:${to}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
      setStatus("success");
      return;
    }

    setStatus("sending");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
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
        console.error("Form submit failed:", await res.text());
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Name
        </label>
        <input
          value={formData.name}
          onChange={(e) => update("name", e.target.value)}
          type="text"
          id="name"
          className="w-full px-4 py-2 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          placeholder="Your name"
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email
        </label>
        <input
          value={formData.email}
          onChange={(e) => update("email", e.target.value)}
          type="email"
          id="email"
          className="w-full px-4 py-2 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          placeholder="your.email@example.com"
          required
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-2">
          Phone
        </label>
        <input
          value={formData.phone}
          onChange={(e) => update("phone", e.target.value)}
          type="tel"
          id="phone"
          className="w-full px-4 py-2 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          placeholder="(555) 123-4567"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message
        </label>
        <textarea
          value={formData.message}
          onChange={(e) => update("message", e.target.value)}
          id="message"
          rows={4}
          className="w-full px-4 py-2 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
          placeholder="Tell us about your cleaning needs..."
          required
        />
      </div>

      <Button
        type="submit"
        className="w-full"
        size="lg"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </Button>

      {status === "success" && (
        <p className="text-sm text-green-600">
          Message sent — we'll be in touch soon.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-600">
          There was an error sending your message. Please try again.
        </p>
      )}
    </form>
  );
}
