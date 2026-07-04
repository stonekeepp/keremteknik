"use client";

import { useState } from "react";
import { z } from "zod";
import { CONTACT_SERVICE_TYPES } from "@/lib/services/site";

const contactSchema = z.object({
  name: z.string().min(2, "Ad soyad en az 2 karakter olmalı"),
  phone: z.string().min(10, "Geçerli bir telefon girin"),
  serviceType: z.string().min(1, "Hizmet türü seçin"),
  message: z.string().min(5, "Mesaj en az 5 karakter olmalı"),
});

export function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    serviceType: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[String(err.path[0])] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-primary-fixed text-on-primary-fixed rounded-xl p-6 shadow-level-1">
        <p className="text-body-lg">
          Talebiniz alındı. En kısa sürede sizinle iletişime geçeceğiz.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <label className="block text-label-md font-label-md text-primary mb-2">
          Ad Soyad
        </label>
        <input
          type="text"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full px-4 py-3 rounded-[12px] bg-surface-container-high border border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
        />
        {errors.name && (
          <p className="text-error text-sm mt-1">{errors.name}</p>
        )}
      </div>
      <div>
        <label className="block text-label-md font-label-md text-primary mb-2">
          Telefon
        </label>
        <input
          type="tel"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className="w-full px-4 py-3 rounded-[12px] bg-surface-container-high border border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
        />
        {errors.phone && (
          <p className="text-error text-sm mt-1">{errors.phone}</p>
        )}
      </div>
      <div>
        <label className="block text-label-md font-label-md text-primary mb-2">
          Hizmet Türü
        </label>
        <select
          value={form.serviceType}
          onChange={(e) => setForm({ ...form, serviceType: e.target.value })}
          className="w-full px-4 py-3 rounded-[12px] bg-surface-container-high border border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
        >
          <option value="">Seçiniz</option>
          {CONTACT_SERVICE_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        {errors.serviceType && (
          <p className="text-error text-sm mt-1">{errors.serviceType}</p>
        )}
      </div>
      <div>
        <label className="block text-label-md font-label-md text-primary mb-2">
          Mesaj
        </label>
        <textarea
          rows={4}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full px-4 py-3 rounded-[12px] bg-surface-container-high border border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none resize-none"
        />
        {errors.message && (
          <p className="text-error text-sm mt-1">{errors.message}</p>
        )}
      </div>
      <button
        type="submit"
        className="bg-cta text-white px-8 py-4 rounded-[12px] font-button text-button hover:bg-secondary-container transition-colors shadow-sm"
      >
        Gönder
      </button>
    </form>
  );
}
