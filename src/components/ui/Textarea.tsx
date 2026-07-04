import { cn } from "@/lib/utils/cn";

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  error?: string;
};

export function Textarea({
  label,
  error,
  id,
  className,
  ...props
}: TextareaProps) {
  const inputId = id ?? label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div>
      <label
        htmlFor={inputId}
        className="block text-label-md font-label-md text-primary mb-2"
      >
        {label}
      </label>
      <textarea
        id={inputId}
        className={cn(
          "w-full px-4 py-3 rounded-xl bg-surface-container-high border border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none resize-none transition-colors",
          error && "border-error",
          className,
        )}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${inputId}-error` : undefined}
        {...props}
      />
      {error && (
        <p id={`${inputId}-error`} className="text-error text-sm mt-1" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
