import { ReactNode } from "react";

interface PageTitleProps {
  title: string;
  subtitle?: ReactNode;
  className?: string;
}

export function PageTitle({ title, subtitle, className = "" }: PageTitleProps) {
  return (
    <div className={`mb-12 mt-4 ${className}`}>
      <div>
        <h1 className="text-4xl font-bold text-[#4ec9b0] mb-2">
          {title}
        </h1>
        
        {subtitle && (
          <div className="text-[#d4d4d4] text-lg">
            {subtitle}
          </div>
        )}
      </div>
    </div>
  );
}
