import Image from "next/image";

export function CharityGallery({ gallery, name }: { gallery: string[]; name: string }) {
  if (gallery.length === 0) {
    return (
      <p className="py-8 text-center text-sm text-muted-foreground">
        No gallery images available.
      </p>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {gallery.map((src, i) => (
        <div
          key={`gallery-${i}`}
          className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border"
        >
          <Image
            src={src || "/placeholder.svg"}
            alt={`${name} gallery image ${i + 1}`}
            fill
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}
