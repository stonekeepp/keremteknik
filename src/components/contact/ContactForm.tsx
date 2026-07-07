"use client";

import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
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
      <div className="bg-gradient-to-br from-primary/5 to-cta/5 rounded-2xl p-8 md:p-10 border border-primary/10 text-center">
        <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-cta/10 flex items-center justify-center">
          <Icon name="check_circle" className="w-10 h-10 text-cta" />
        </div>
        <p className="text-headline-sm font-headline-sm text-primary mb-2">
          Talebiniz alındı!
        </p>
        <p className="text-body-md text-on-surface-variant max-w-sm mx-auto">
          En kısa sürede sizinle iletişime geçeceğiz. Acil durumlar için
          telefon veya WhatsApp hattımızı kullanabilirsiniz.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <Input
        label="Ad Soyad"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        error={errors.name}
        autoComplete="name"
      />
      <Input
        label="Telefon"
        type="tel"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
        error={errors.phone}
        autoComplete="tel"
      />
      <div>
        <label
          htmlFor="service-type"
          className="block text-label-md font-label-md text-primary mb-2"
        >
          Hizmet Türü
        </label>
        <select
          id="service-type"
          value={form.serviceType}
          onChange={(e) => setForm({ ...form, serviceType: e.target.value })}
          className="w-full px-4 py-3 rounded-xl bg-surface-container-high border border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
        >
          <option value="">Seçiniz</option>
          {CONTACT_SERVICE_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        {errors.serviceType && (
          <p className="text-error text-sm mt-1" role="alert">
            {errors.serviceType}
          </p>
        )}
      </div>
      <Textarea
        label="Mesaj"
        rows={4}
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        error={errors.message}
      />
      <Button type="submit" className="w-full mt-1">
        <Icon name="send" className="w-5 h-5" />
        Talebi Gönder
      </Button>
    </form>
  );
}
