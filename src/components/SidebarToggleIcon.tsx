export function SidebarToggleIcon({ className, isOpen }: { className?: string; isOpen?: boolean }) {
  return (
    <div className={`flex flex-col justify-center items-center gap-[5px] ${className ?? ""}`}>
      <span
        className="block h-[2px] w-5 rounded-full bg-white transition-all duration-300 origin-center"
        style={isOpen ? { transform: "translateY(7px) rotate(45deg)" } : undefined}
      />
      <span
        className="block h-[2px] w-5 rounded-full bg-white transition-all duration-300"
        style={isOpen ? { opacity: 0, transform: "scaleX(0)" } : undefined}
      />
      <span
        className="block h-[2px] w-5 rounded-full bg-white transition-all duration-300 origin-center"
        style={isOpen ? { transform: "translateY(-7px) rotate(-45deg)" } : undefined}
      />
    </div>
  );
}
