export const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-background border-t border-border py-8">

      {/* Decorative Analytics Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.06]">
        <svg
          className="absolute left-10 bottom-6 w-32 h-32 text-primary"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          {/* Bar Chart */}
          <rect x="3" y="10" width="3" height="10" />
          <rect x="10" y="6" width="3" height="14" />
          <rect x="17" y="3" width="3" height="17" />
        </svg>

        <svg
          className="absolute right-16 bottom-10 w-28 h-28 text-primary"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          {/* Pie Chart */}
          <path d="M11 2a10 10 0 1 0 10 10h-9z" />
          <path d="M13 2v9h9A10 10 0 0 0 13 2z" />
        </svg>

        <svg
          className="absolute left-1/2 bottom-4 w-36 h-24 text-primary -translate-x-1/2"
          viewBox="0 0 100 40"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
        >
          {/* Line Chart */}
          <polyline points="0,30 20,20 40,25 60,10 80,18 100,5" />
        </svg>
      </div>

      {/* Footer Content */}
      <div className="section-container relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-center md:text-left">

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()}{" "}
            <span className="font-medium text-foreground">
              G Manideep Reddy
            </span>
            . All rights reserved.
          </p>

          <p className="text-sm text-muted-foreground">
            Built with{" "}
            <span className="text-foreground font-medium">React</span>,{" "}
            <span className="text-foreground font-medium">Vite</span> &{" "}
            <span className="text-foreground font-medium">Tailwind CSS</span>.
          </p>

        </div>
      </div>
    </footer>
  )
}
