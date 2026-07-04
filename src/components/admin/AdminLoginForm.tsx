"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export function AdminLoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    setLoading(false);

    if (!res.ok) {
      const data = await res.json();
      setError(data.error ?? "Giriş başarısız");
      return;
    }

    const from = searchParams.get("from") ?? "/admin/blog";
    router.push(from);
    router.refresh();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-surface-container-low px-4">
      <div className="w-full max-w-md bg-surface rounded-2xl p-8 shadow-level-2">
        <h1 className="text-headline-md font-headline-md text-primary mb-2">
          Admin Girişi
        </h1>
        <p className="text-body-md text-on-surface-variant mb-8">
          Kerem Teknik Servis blog yönetim paneli
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-label-md font-label-md text-primary mb-2">
              E-posta
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-[12px] bg-surface-container-high border border-outline-variant focus:border-primary outline-none"
            />
          </div>
          <div>
            <label className="block text-label-md font-label-md text-primary mb-2">
              Şifre
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-[12px] bg-surface-container-high border border-outline-variant focus:border-primary outline-none"
            />
          </div>
          {error && (
            <p className="text-error text-sm bg-error-container px-3 py-2 rounded-lg">
              {error}
            </p>
          )}
          <button
            type="submit"
            disabled={loading}
            className="bg-cta text-white py-3 rounded-[12px] font-button text-button hover:bg-secondary-container transition-colors disabled:opacity-50"
          >
            {loading ? "Giriş yapılıyor..." : "Giriş Yap"}
          </button>
        </form>
      </div>
    </div>
  );
}
