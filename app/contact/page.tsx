"use client";

import { useForm } from "react-hook-form";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  location: string;
  category: string;
  message: string;
}

export default function ContactPage() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    alert("Thank you! Uzhavu Tech team will reach out within 24 hours.");
    reset();
  };

  return (
    <div className="pt-32 pb-24 bg-agri-bg dark:bg-[#0A120A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-extrabold text-agri-dark dark:text-white mb-4">
            Get In Touch With Uzhavu Tech
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Have questions about field deployment, partnership opportunities, or demo setups? We are here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Info Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card p-8 rounded-3xl border border-agri-primary/20 space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Contact Info</h2>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-agri-light dark:bg-agri-dark rounded-xl text-agri-primary dark:text-agri-accent">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-semibold">Email Us</p>
                  <p className="text-sm font-bold text-gray-900 dark:text-white">contact@uzhavu.tech</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-agri-light dark:bg-agri-dark rounded-xl text-agri-primary dark:text-agri-accent">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-semibold">Phone / WhatsApp</p>
                  <p className="text-sm font-bold text-gray-900 dark:text-white">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-agri-light dark:bg-agri-dark rounded-xl text-agri-primary dark:text-agri-accent">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-semibold">Headquarters</p>
                  <p className="text-sm font-bold text-gray-900 dark:text-white">Tamil Nadu, India</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-agri-light dark:bg-agri-dark rounded-xl text-agri-primary dark:text-agri-accent">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-semibold">Hours</p>
                  <p className="text-sm font-bold text-gray-900 dark:text-white">Mon - Sat: 9:00 AM - 6:00 PM IST</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit(onSubmit)} className="glass-card p-8 rounded-3xl border border-agri-primary/20 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase mb-2">Full Name</label>
                  <input
                    {...register("name", { required: true })}
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-agri-primary"
                    placeholder="Tamizh Nilavan"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase mb-2">Email Address</label>
                  <input
                    {...register("email", { required: true })}
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-agri-primary"
                    placeholder="name@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase mb-2">Phone Number</label>
                  <input
                    {...register("phone")}
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-agri-primary"
                    placeholder="+91 9876543210"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase mb-2">Location / District</label>
                  <input
                    {...register("location")}
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-agri-primary"
                    placeholder="Coimbatore, Tamil Nadu"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase mb-2">Your Message</label>
                <textarea
                  {...register("message", { required: true })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-agri-primary"
                  placeholder="Tell us about your farm or inquiry..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full gradient-button text-white font-bold py-4 rounded-xl shadow-lg flex items-center justify-center gap-2"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>

        </div>

      </div>
    </div>
  );
}