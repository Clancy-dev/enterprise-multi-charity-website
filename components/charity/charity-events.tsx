import { Calendar, MapPin } from "lucide-react";
import type { Event } from "@/lib/data";

export function CharityEvents({ events }: { events: Event[] }) {
  if (events.length === 0) {
    return (
      <p className="py-8 text-center text-sm text-muted-foreground">
        No upcoming events at this time.
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {events.map((event) => {
        const date = new Date(event.date);
        const formatted = date.toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        });

        return (
          <div
            key={event.id}
            className="flex gap-4 rounded-xl border border-border bg-card p-5 shadow-sm"
          >
            <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-lg bg-primary/10 text-primary">
              <span className="text-lg font-bold leading-none">
                {date.getDate()}
              </span>
              <span className="mt-0.5 text-[10px] font-semibold uppercase">
                {date.toLocaleDateString("en-US", { month: "short" })}
              </span>
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-card-foreground">
                {event.title}
              </h4>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {event.description}
              </p>
              <div className="mt-2 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5" />
                  {formatted}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5" />
                  {event.location}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
