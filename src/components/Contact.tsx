import { useState, useEffect } from "react";
import ScrollAnimation from "./ScrollAnimation";
import { Button } from "./ui/button";
import { Phone, Mail, MapPin, CheckCircle2 } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="pt-4 pb-20 md:pb-32 bg-background/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation
          animation="fade-up"
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black mb-4 text-foreground tracking-tighter uppercase italic">
            Get In <span className="text-blue-600">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed font-medium">
            Ready to transform your space? Contact us today for a free quote and
            professional consultation.
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto items-start">
          {/* Info Side */}
          <div className="space-y-4">
            {[
              {
                icon: Phone,
                title: "Phone",
                detail: "+256 000 000 000",
                sub: "Mon-Sun: 7AM - 9PM",
                color: "bg-blue-600/10 text-blue-600",
              },
              {
                icon: Mail,
                title: "Email",
                detail: "info@albert-international.com",
                sub: "We respond within 24 hours",
                color: "bg-emerald-600/10 text-emerald-600",
              },
              {
                icon: MapPin,
                title: "Service Area",
                detail: "Greater Kampala Metro Area",
                sub: "Free estimates available",
                color: "bg-muted text-muted-foreground",
              },
            ].map((item, i) => (
              <ScrollAnimation key={i} animation="fade-right" delay={i * 100}>
                <div className="flex items-center gap-5 p-6 rounded-[2rem] bg-card border border-border shadow-sm hover:shadow-xl transition-all duration-300">
                  <div
                    className={`h-14 w-14 rounded-2xl ${item.color} flex items-center justify-center flex-shrink-0 shadow-inner`}
                  >
                    <item.icon className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-lg font-black text-foreground tracking-tight">
                      {item.detail}
                    </p>
                    <p className="text-xs text-muted-foreground font-bold uppercase tracking-wide">
                      {item.sub}
                    </p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>

          {/* Form Side */}
          <ScrollAnimation animation="fade-left" delay={200}>
            <div className="rounded-[3rem] border border-border bg-card p-8 md:p-10 shadow-2xl shadow-blue-900/5">
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
    setStatus("sending");
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 1500);
  }

  const inputStyles =
    "w-full px-6 py-4 rounded-2xl border border-border bg-muted/50 text-foreground focus:outline-none focus:ring-4 focus:ring-blue-600/10 focus:border-blue-600 focus:bg-background transition-all placeholder:text-muted-foreground/50 font-medium";
  const labelStyles =
    "block text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-2 ml-2";

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className={labelStyles}>
            Your Name
          </label>
          <input
            required
            value={formData.name}
            onChange={(e) => update("name", e.target.value)}
            type="text"
            id="name"
            className={inputStyles}
            placeholder="John Doe"
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelStyles}>
            Phone Number
          </label>
          <input
            value={formData.phone}
            onChange={(e) => update("phone", e.target.value)}
            type="tel"
            id="phone"
            className={inputStyles}
            placeholder="+256..."
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className={labelStyles}>
          Email Address
        </label>
        <input
          required
          value={formData.email}
          onChange={(e) => update("email", e.target.value)}
          type="email"
          id="email"
          className={inputStyles}
          placeholder="john@example.com"
        />
      </div>

      <div>
        <label htmlFor="message" className={labelStyles}>
          Project Details
        </label>
        <textarea
          required
          value={formData.message}
          onChange={(e) => update("message", e.target.value)}
          id="message"
          rows={4}
          className={`${inputStyles} resize-none`}
          placeholder="Tell us what you need cleaned..."
        />
      </div>

      <Button
        type="submit"
        className="w-full py-8 bg-blue-600 hover:bg-blue-700 text-white font-black uppercase tracking-[0.2em] rounded-2xl shadow-xl shadow-blue-600/20 transition-all active:scale-[0.98] disabled:opacity-70"
        size="lg"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Processing..." : "Send Message"}
      </Button>

      {status === "success" && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 p-5 bg-emerald-500/10 text-emerald-500 rounded-2xl border border-emerald-500/20"
        >
          <CheckCircle2 className="h-6 w-6 flex-shrink-0" />
          <p className="text-xs font-black uppercase tracking-wider">
            Message received! Our team will contact you shortly.
          </p>
        </motion.div>
      )}
    </form>
  );
}
