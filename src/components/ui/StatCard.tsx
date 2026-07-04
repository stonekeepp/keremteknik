type StatCardProps = {
  value: string;
  label: string;
  icon?: string;
};

export function StatCard({ value, label, icon }: StatCardProps) {
  return (
    <div className="text-center p-6 rounded-2xl glass-card shadow-premium-sm">
      {icon && (
        <span className="material-symbols-outlined text-gold text-3xl mb-2 block">
          {icon}
        </span>
      )}
      <div className="text-headline-md font-headline-md text-primary mb-1">
        {value}
      </div>
      <div className="text-body-md text-on-surface-variant">{label}</div>
    </div>
  );
}
