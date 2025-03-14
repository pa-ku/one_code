import { ReactNode } from "react";

export default function Button({
  children,
  msjOnHover,
  ...props
}: {
  msjOnHover: string;
  children: ReactNode;
  
}) {
  return (
    <button
      className="relative group flex items-center flex-row gap-1 justify-center rounded text-accent p-1"
      {...props}
    >
      {children}
      <p
        className={`group-hover:opacity-100 opacity-0 top-8 pointer-events-none z-10  duration-300 absolute left-0 border-background-100 border w-max bg-black rounded-lg p-2`}
      >
        {msjOnHover}
      </p>
    </button>
  );
}
