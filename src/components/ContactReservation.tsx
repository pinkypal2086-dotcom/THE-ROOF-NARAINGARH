import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Calendar,
  Users,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  ChevronDown
} from "lucide-react";
import { ReservationData } from "../types";

export default function ContactReservation() {
  const [activeBookingMethod, setActiveBookingMethod] = useState<"whatsapp" | "online">("whatsapp");
  const [formData, setFormData] = useState<ReservationData>({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    guests: 2,
    specialRequests: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [bookingCode, setBookingCode] = useState("");
  const [validationError, setValidationError] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "guests" ? parseInt(value) || 2 : value,
    }));
    setValidationError(""); // clear mistakes as customer types
  };

  const getWhatsAppBookingText = () => {
    const nameStr = formData.name.trim() ? formData.name.trim() : "(Not specified)";
    const phoneStr = formData.phone.trim() ? formData.phone.trim() : "(Not specified)";
    const dateStr = formData.date ? formData.date : "(Not selected)";
    const timeStr = formData.time ? formData.time : "(Not selected)";
    const reqStr = formData.specialRequests.trim() ? formData.specialRequests.trim() : "None";

    const text = `Hi The Roof Naraingarh, I would like to reserve a table:\n\n👤 *Name*: ${nameStr}\n📞 *Phone*: ${phoneStr}\n👥 *Guests*: ${formData.guests} person(s)\n📅 *Date*: ${dateStr}\n🕒 *Time*: ${timeStr}\n✨ *Special Request*: ${reqStr}\n\nPlease check live availability for us. Thank you!`;
    return `https://wa.me/919258581616?text=${encodeURIComponent(text)}`;
  };

  const handleWhatsAppBook = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setValidationError("Please enter your name.");
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      setValidationError("Please enter a valid 10-digit mobile number.");
      return;
    }
    if (!formData.date) {
      setValidationError("Please select your desired date.");
      return;
    }
    if (!formData.time) {
      setValidationError("Please select a preferred time slot.");
      return;
    }

    setValidationError("");
    setIsSubmitting(true);

    const link = getWhatsAppBookingText();

    // Trigger opening of WhatsApp with beautiful simulated redirect feedback
    setTimeout(() => {
      const code = `WA-${Math.floor(100000 + Math.random() * 900000)}`;
      setBookingCode(code);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Save redirection
      const a = document.createElement("a");
      a.href = link;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.click();
    }, 1200);
  };

  const handleBookTable = (e: React.FormEvent) => {
    e.preventDefault();

    // Custom validations
    if (!formData.name.trim()) {
      setValidationError("Please enter your name.");
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      setValidationError("Please enter a valid 10-digit mobile number.");
      return;
    }
    if (!formData.date) {
      setValidationError("Please select a reservation date.");
      return;
    }
    if (!formData.time) {
      setValidationError("Please select a convenient time slot.");
      return;
    }

    setIsSubmitting(true);

    // Simulate server side registration with timeouts
    setTimeout(() => {
      // Create random beautiful confirmation code
      const code = `TR-${Math.floor(100000 + Math.random() * 900000)}`;
      setBookingCode(code);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setValidationError("");
    }, 1500);
  };

  const handleResetForm = () => {
    setFormData({
      name: "",
      phone: "",
      email: "",
      date: "",
      time: "",
      guests: 2,
      specialRequests: "",
    });
    setSubmitSuccess(false);
  };

  return (
    <section id="contact" className="py-24 bg-charcoal-950 relative">
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-gold-900/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Segment titles */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-gold-400">
            Bookings & Visit Guide
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-white mt-2">
            Connect & <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-500 font-brand">Reservations</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-gold-500 to-gold-300 mx-auto mt-4 rounded-full" />
        </div>

        {/* Content columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Coordinates details & Live Map Embed */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-24">
            <div className="p-8 rounded-2xl bg-charcoal-900 border border-gold-900/15 shadow-xl space-y-6">
              
              <div>
                <h3 className="font-brand font-extrabold text-xl text-white mb-2">Location & Contact</h3>
                <p className="font-sans text-xs text-charcoal-300 font-light">
                  Find us situated at Naraingarh's premium landmark right on the CHD-Nahan expressway.
                </p>
              </div>

              {/* Address detail layout */}
              <div className="flex items-start space-x-4">
                <div className="p-2 sm:p-2.5 rounded-lg bg-gold-950/60 border border-gold-400/20 text-gold-400 flex-shrink-0 mt-0.5">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="font-brand font-bold text-xs font-mono tracking-wider uppercase text-gold-400 mb-1">Visit Address</h4>
                  <a
                    href="https://maps.google.com/?q=The+Roof+Near+Sharma+Ice+Factory+CHD-Nahan+Road+Naraingarh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-sm text-charcoal-100 font-light hover:text-gold-300 transition-colors block"
                  >
                    Near Sharma Ice Factory, CHD-Nahan Road, Naraingarh, Haryana 134203, India
                  </a>
                </div>
              </div>

              {/* Phone contact details */}
              <div className="flex items-start space-x-4">
                <div className="p-2 sm:p-2.5 rounded-lg bg-gold-950/60 border border-gold-400/20 text-gold-400 flex-shrink-0 mt-0.5">
                  <Phone size={18} />
                </div>
                <div>
                  <h4 className="font-brand font-bold text-xs font-mono tracking-wider uppercase text-gold-400 mb-1">Direct Call Line</h4>
                  <div className="space-y-1">
                    <a
                      href="tel:+919258581616"
                      className="font-sans text-sm text-charcoal-100 hover:text-gold-300 transition-colors font-semibold block"
                    >
                      +91 92585 81616
                    </a>
                    <a
                      href="tel:+919258581717"
                      className="font-sans text-sm text-charcoal-100 hover:text-gold-300 transition-colors font-semibold block"
                    >
                      +91 92585 81717
                    </a>
                  </div>
                </div>
              </div>

              {/* Email contact details */}
              <div className="flex items-start space-x-4">
                <div className="p-2 sm:p-2.5 rounded-lg bg-gold-950/60 border border-gold-400/20 text-gold-400 flex-shrink-0 mt-0.5">
                  <Mail size={18} />
                </div>
                <div>
                  <h4 className="font-brand font-bold text-xs font-mono tracking-wider uppercase text-gold-400 mb-1">Email Inquiries</h4>
                  <a
                    href="mailto:info@theroofnaraingarh.com"
                    className="font-sans text-sm text-charcoal-100 hover:text-gold-300 transition-colors font-light block"
                  >
                    info@theroofnaraingarh.com
                  </a>
                </div>
              </div>

              {/* Operating hours details */}
              <div className="flex items-start space-x-4">
                <div className="p-2 sm:p-2.5 rounded-lg bg-gold-950/60 border border-gold-400/20 text-gold-400 flex-shrink-0 mt-0.5">
                  <Clock size={18} />
                </div>
                <div>
                  <h4 className="font-brand font-bold text-xs font-mono tracking-wider uppercase text-gold-400 mb-1">Active Hours</h4>
                  <p className="font-sans text-sm text-charcoal-100 font-medium">Daily: 11:00 AM – 11:00 PM</p>
                  <p className="font-sans text-[11px] text-charcoal-400 font-light mt-0.5">
                    Open all days, including national holidays.
                  </p>
                </div>
              </div>

            </div>

            {/* Embedded maps Iframe card */}
            <div className="rounded-2xl overflow-hidden border border-gold-900/15 shadow-xl h-64 bg-charcoal-900 bg-radial-gradient">
              <iframe
                src="https://maps.google.com/maps?q=Near%20Sharma%20Ice%20Factory,%20CHD-Nahan%20Road,%20Naraingarh,%20Haryana%20134203&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="105%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="The Roof Naraingarh maps physical geolocation location"
              ></iframe>
            </div>
          </div>

          {/* Right Column: Reservation Interactive form panels */}
          <div className="lg:col-span-7 h-full">
            <div className="p-8 sm:p-10 rounded-2xl bg-charcoal-900 border border-gold-400/15 shadow-2xl relative overflow-hidden h-full flex flex-col justify-center">
              
              {!submitSuccess ? (
                <>
                  <div className="mb-6">
                    <span className="font-mono text-[9px] font-bold text-gold-400 bg-gold-950/50 px-2 py-0.5 rounded border border-gold-900/20 uppercase tracking-widest inline-block flex-shrink-0">
                      Secure Booking Desk
                    </span>
                    <h3 className="font-brand font-extrabold text-2xl text-white mt-1.5 leading-tight">
                      Reserve Your Fine Table
                    </h3>
                    <p className="font-sans text-xs text-charcoal-300 font-light mt-1">
                      Choose your booking preference. Booking via <strong className="text-gold-400 font-semibold">WhatsApp</strong> gets processed & confirmed instantly by our desk.
                    </p>
                  </div>

                  {/* Channel Choice Tabs */}
                  <div className="grid grid-cols-2 p-1 bg-charcoal-950 border border-gold-900/20 rounded-xl mb-6">
                    <button
                      type="button"
                      onClick={() => {
                        setActiveBookingMethod("whatsapp");
                        setValidationError("");
                      }}
                      className={`py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-200 flex items-center justify-center space-x-2 cursor-pointer ${
                        activeBookingMethod === "whatsapp"
                          ? "bg-gradient-to-r from-emerald-600 to-emerald-500 text-white shadow-lg font-extrabold"
                          : "text-charcoal-400 hover:text-charcoal-200"
                      }`}
                    >
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                      </span>
                      <span>💬 WhatsApp (Instant)</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setActiveBookingMethod("online");
                        setValidationError("");
                      }}
                      className={`py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-200 flex items-center justify-center space-x-2 cursor-pointer ${
                        activeBookingMethod === "online"
                          ? "bg-gradient-to-r from-gold-600 to-gold-400 text-charcoal-950 shadow-lg font-extrabold"
                          : "text-charcoal-400 hover:text-charcoal-200"
                      }`}
                    >
                      <Calendar size={12} />
                      <span>📝 Online Request</span>
                    </button>
                  </div>

                  {/* Errors display banner */}
                  {validationError && (
                    <div className="mb-6 p-4 rounded-xl bg-red-950/50 border border-red-500/20 flex items-start space-x-2 text-red-200 text-xs sm:text-sm">
                      <AlertCircle size={18} className="text-red-400 flex-shrink-0 mt-0.5" />
                      <span>{validationError}</span>
                    </div>
                  )}

                  {/* Main Form Fields */}
                  <form onSubmit={activeBookingMethod === "whatsapp" ? handleWhatsAppBook : handleBookTable} className="space-y-4">
                    
                    {/* First row: Name & Phone number */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-brand text-xs font-bold text-gold-300 uppercase tracking-wider mb-1.5">
                          Your Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="e.g. Ramesh Kumar"
                          className="w-full bg-charcoal-950 border border-gold-900/30 focus:border-gold-400/80 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block font-brand text-xs font-bold text-gold-300 uppercase tracking-wider mb-1.5">
                          Mobile Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          maxLength={10}
                          placeholder="e.g. 9876543210"
                          className="w-full bg-charcoal-950 border border-gold-900/30 focus:border-gold-400/80 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    {/* Second row: Email (optional) & Guests SELECT */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-brand text-xs font-bold text-gold-300 uppercase tracking-wider mb-1.5">
                          Email Address (Optional)
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="e.g. client@domain.com"
                          className="w-full bg-charcoal-950 border border-gold-900/30 focus:border-gold-400/80 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block font-brand text-xs font-bold text-gold-300 uppercase tracking-wider mb-1.5">
                          Number of Guests *
                        </label>
                        <div className="relative">
                          <select
                            name="guests"
                            value={formData.guests}
                            onChange={handleInputChange}
                            className="w-full bg-charcoal-950 border border-gold-900/30 focus:border-gold-400/80 rounded-xl px-4 py-3 text-sm text-white focus:outline-none appearance-none cursor-pointer transition-colors"
                          >
                            <option value={1}>1 Guest</option>
                            <option value={2}>2 Guests (Couple)</option>
                            <option value={3}>3 Guests</option>
                            <option value={4}>4 Guests (Standard Family)</option>
                            <option value={5}>5 Guests</option>
                            <option value={6}>6 Guests (Large Table)</option>
                            <option value={8}>8+ Guests (Celebration/Party)</option>
                          </select>
                          <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-gold-400 pointer-events-none" />
                        </div>
                      </div>
                    </div>

                    {/* Third row: Date & Time slots */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-brand text-xs font-bold text-gold-300 uppercase tracking-wider mb-1.5">
                          Reservation Date *
                        </label>
                        <div className="relative">
                          <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleInputChange}
                            className="w-full bg-charcoal-950 border border-gold-900/30 focus:border-gold-400/80 rounded-xl px-4 py-3 text-sm text-white focus:outline-none cursor-pointer transition-colors"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block font-brand text-xs font-bold text-gold-300 uppercase tracking-wider mb-1.5">
                          Time Slot *
                        </label>
                        <div className="relative">
                          <select
                            name="time"
                            value={formData.time}
                            onChange={handleInputChange}
                            className="w-full bg-charcoal-950 border border-gold-900/30 focus:border-gold-400/80 rounded-xl px-4 py-3 text-sm text-white focus:outline-none appearance-none cursor-pointer transition-colors"
                          >
                            <option value="">Select Time Slot</option>
                            <option value="11:30 AM">11:30 AM (Morning/Lunch)</option>
                            <option value="12:30 PM">12:30 PM</option>
                            <option value="01:30 PM">1:30 PM</option>
                            <option value="03:00 PM">3:00 PM (Mid-day snack)</option>
                            <option value="05:30 PM">5:30 PM (Sunset tea)</option>
                            <option value="07:30 PM">7:30 PM (Evening/Dinner)</option>
                            <option value="08:30 PM">8:30 PM</option>
                            <option value="09:30 PM">9:30 PM</option>
                          </select>
                          <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-gold-400 pointer-events-none" />
                        </div>
                      </div>
                    </div>

                    {/* Special requirements */}
                    <div>
                      <label className="block font-brand text-xs font-bold text-gold-300 uppercase tracking-wider mb-1.5">
                        Special Requests (Optional)
                      </label>
                      <textarea
                        name="specialRequests"
                        value={formData.specialRequests}
                        onChange={handleInputChange}
                        rows={3}
                        placeholder="Specify Jain Food, cake arrangement, high-chair requirement, or birthday decor options..."
                        className="w-full bg-charcoal-950 border border-gold-900/30 focus:border-gold-400/80 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-gold-500/20 transition-colors resize-none"
                      ></textarea>
                    </div>

                    {/* Call to action Submit buttons */}
                    <div className="pt-2">
                      {activeBookingMethod === "whatsapp" ? (
                        <div className="space-y-4">
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-4 bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 hover:from-emerald-500 hover:to-emerald-400 text-white rounded-full font-sans font-extrabold text-sm tracking-widest uppercase cursor-pointer hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] active:scale-98 transition-all disabled:opacity-50 flex items-center justify-center space-x-2"
                          >
                            {isSubmitting ? (
                              <>
                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                <span>Generating WhatsApp Message...</span>
                              </>
                            ) : (
                              <>
                                <span>💬 Book Instantly via WhatsApp</span>
                              </>
                            )}
                          </button>
                          
                          {/* Mini helpful guide */}
                          <p className="text-center font-sans text-[10px] text-charcoal-400 leading-normal">
                            👉 Clicking will automatically open WhatsApp with a beautiful, pre-prepared reservation request.
                          </p>
                        </div>
                      ) : (
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full py-4 bg-gradient-to-r from-gold-600 via-gold-500 to-gold-400 text-charcoal-950 rounded-full font-sans font-extrabold text-sm tracking-widest uppercase cursor-pointer hover:shadow-[0_0_20px_rgba(222,184,116,0.5)] active:scale-98 transition-all disabled:opacity-50 flex items-center justify-center space-x-2"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="w-5 h-5 border-2 border-charcoal-950 border-t-transparent rounded-full animate-spin" />
                              <span>Securing Table...</span>
                            </>
                          ) : (
                            <>
                              <Calendar size={16} />
                              <span>Confirm Online Reservation</span>
                            </>
                          )}
                        </button>
                      )}
                    </div>

                  </form>

                  {/* WhatsApp Quick Chat Direct option */}
                  <div className="mt-4 p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                    <div className="space-y-0.5">
                      <span className="font-brand font-bold text-emerald-300 uppercase tracking-wider block">Prefer direct quick chat?</span>
                      <p className="text-charcoal-300 font-light text-[11px]">Skip form details and text our booking manager directly on mobile.</p>
                    </div>
                    <a
                      href="https://wa.me/919258581616?text=Hi!%20I%20want%20to%20reserve%20a%20table%20for%20a%20delicious%20meal%20at%20The%20Roof%20Naraingarh."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold rounded-lg uppercase tracking-wide text-[10px] inline-flex items-center space-x-1 transition-colors flex-shrink-0 text-center justify-center cursor-pointer"
                    >
                      <span>Chat Direct Now</span>
                    </a>
                  </div>
                </>
              ) : (
                /* High Fidelity Confirmation modal display screen */
                <div className="text-center py-8 animate-fade-in space-y-6">
                  <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto shadow-xl animate-bounce ${
                    activeBookingMethod === "whatsapp" 
                      ? "bg-emerald-950/70 border border-emerald-400/40 text-emerald-400 shadow-[0_0_25px_rgba(16,185,129,0.3)]" 
                      : "bg-gold-950/70 border border-gold-400/40 text-gold-300 shadow-[0_0_25px_rgba(222,184,116,0.3)]"
                  }`}>
                    {activeBookingMethod === "whatsapp" ? (
                      <CheckCircle2 size={40} className="text-emerald-400" />
                    ) : (
                      <CheckCircle2 size={40} className="text-gold-300" />
                    )}
                  </div>

                  <div>
                    <h3 className="font-brand font-black text-2xl text-white">
                      {activeBookingMethod === "whatsapp" ? "WhatsApp Link Ready!" : "Table Registered Successfully!"}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-charcoal-200 mt-2">
                      {activeBookingMethod === "whatsapp" 
                        ? "We've generated your custom reservation chat text and initiated opening WhatsApp." 
                        : "Your table reservation request has been registered instantly on our servers. We look forward to serving you!"}
                    </p>
                  </div>

                  {/* Visual receipt context card */}
                  <div className={`max-w-md mx-auto p-6 rounded-2xl bg-charcoal-950 text-left space-y-4 shadow-xl border ${
                    activeBookingMethod === "whatsapp" ? "border-emerald-900/40" : "border-gold-900/30"
                  }`}>
                    <div className="flex justify-between items-center border-b border-charcoal-800 pb-3">
                      <span className="text-xs font-mono text-charcoal-400">Booking Passcode:</span>
                      <strong className={`text-sm font-mono ${activeBookingMethod === "whatsapp" ? "text-emerald-400" : "text-gold-300"}`}>{bookingCode}</strong>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-xs">
                      <div>
                        <span className="text-charcoal-400 block mb-0.5">Guest Name:</span>
                        <span className="text-white font-semibold">{formData.name}</span>
                      </div>
                      <div>
                        <span className="text-charcoal-400 block mb-0.5">Contact Number:</span>
                        <span className="text-white font-semibold">{formData.phone}</span>
                      </div>
                      <div>
                        <span className="text-charcoal-400 block mb-0.5 font-mono">Date Selected:</span>
                        <span className="text-white font-semibold">{formData.date}</span>
                      </div>
                      <div>
                        <span className="text-charcoal-400 block mb-0.5">Time Slot Booking:</span>
                        <span className="text-white font-semibold">{formData.time}</span>
                      </div>
                      <div className="col-span-2">
                        <span className="text-charcoal-400 block mb-0.5">Party Size:</span>
                        <span className="text-white font-semibold">{formData.guests} Guests</span>
                      </div>
                    </div>

                    {formData.specialRequests && (
                      <div className="border-t border-charcoal-800 pt-3 text-xs">
                        <span className="text-charcoal-400 block mb-1">Special instructions requested:</span>
                        <p className="italic text-charcoal-200 font-light truncate">"{formData.specialRequests}"</p>
                      </div>
                    )}
                  </div>

                  {activeBookingMethod === "whatsapp" ? (
                    <div className="space-y-4">
                      <p className="font-sans text-xs text-charcoal-300 leading-normal max-w-sm mx-auto">
                        ⚠️ **Popup Blocked?** If WhatsApp chat didn't open automatically, click the button below to dispatch your booking details manually:
                      </p>
                      <a
                        href={getWhatsAppBookingText()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mx-auto max-w-xs py-3.5 px-6 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white rounded-full font-sans font-extrabold text-xs tracking-widest uppercase flex items-center justify-center space-x-2 transition-all shadow-md cursor-pointer"
                      >
                        <span>🚀 Launch WhatsApp Manually</span>
                      </a>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center space-x-2 text-[10px] font-mono text-gold-400/80">
                      <Sparkles size={12} />
                      <span>A confirmation SMS has also been dispatched!</span>
                    </div>
                  )}

                  {/* Button resets */}
                  <div className="flex flex-col sm:flex-row gap-3 items-center justify-center pt-4">
                    <button
                      onClick={handleResetForm}
                      className="px-6 py-2.5 bg-charcoal-800 hover:bg-charcoal-700 text-charcoal-200 rounded-full text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      Make Another Table Booking
                    </button>
                    <a
                      href="https://wa.me/919258581616"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2.5 bg-gradient-to-r from-gold-600 to-gold-400 text-charcoal-950 font-sans font-bold text-xs rounded-full uppercase tracking-wider block text-center cursor-pointer"
                    >
                      Chat with Staff Now
                    </a>
                  </div>

                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
