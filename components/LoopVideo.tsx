// /Users/hectoremilio/Proyectos/nextjs/lallorona/lloronaNext180223/components/LoopVideo.tsx
export default function LoopVideo({
  className = '',
  width = 1080,
  height = 1920,
  priority = false, // pon true si es hero (arriba de todo)
}: {
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}) {
  return (
    <div
      className={className}
      style={{
        width: '100%',
        maxWidth: width,
        aspectRatio: `${width}/${height}`,
      }}
      aria-label="Video decorativo loop"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        // si NO es hero, deja el preload por defecto o "metadata"
        preload={priority ? 'auto' : 'metadata'}
        poster="/cumple_cover.jpg"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
          borderRadius: 12,
        }}
      >
        {/* <source src="/media/video.webm" type="video/webm" /> */}
        <source src="/video-stream.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
