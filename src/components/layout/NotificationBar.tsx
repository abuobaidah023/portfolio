import { siteMeta } from "@/data";

export function NotificationBar() {
  return (
    <div className="fixed inset-x-0 top-0 z-[60] border-b border-border/40 bg-surface/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-center px-6 py-2.5 md:px-8">
        <p className="text-center text-[11px] leading-relaxed tracking-wide text-muted md:text-xs">
          <span className="text-accent">●</span>{" "}
          {siteMeta.notification}
        </p>
      </div>
    </div>
  );
}
