import { useEffect, useRef, useState } from "react";
import { buildBookingWidgetUrl } from "../../lib/tracker";

/**
 * Embebe el pos_booking_widget en un iframe pasando lead_uid + UTMs del
 * navegador como query params. Auto-redimensiona escuchando los mensajes
 * `widget_height` que postea el widget vía postMessage.
 */
const WIDGET_BASE_URL =
  process.env.NEXT_PUBLIC_BOOKING_WIDGET_URL || "http://localhost:5174";

const DEFAULT_SLUG = "llorona";

const MIN_HEIGHT = 400;
const MAX_HEIGHT = 1800;

export default function BookingWidget({
  slug = DEFAULT_SLUG,
  eventTypeSlug,
  initialHeight = 600,
}) {
  const [src, setSrc] = useState("");
  const [height, setHeight] = useState(initialHeight);
  const iframeRef = useRef(null);

  useEffect(() => {
    const url = buildBookingWidgetUrl(WIDGET_BASE_URL, slug, eventTypeSlug);
    setSrc(url);
  }, [slug, eventTypeSlug]);

  useEffect(() => {
    function handleMessage(event) {
      const data = event?.data;
      if (!data || typeof data !== "object") return;
      if (data.source !== "booking-widget") return;

      if (data.type === "widget_height" && typeof data.height === "number") {
        const clamped = Math.max(MIN_HEIGHT, Math.min(MAX_HEIGHT, data.height));
        setHeight((prev) => (Math.abs(prev - clamped) > 4 ? clamped : prev));
      }
    }
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  if (!src) {
    return (
      <div
        style={{
          height: initialHeight,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#94a3b8",
        }}
      >
        Cargando widget…
      </div>
    );
  }

  return (
    <iframe
      ref={iframeRef}
      src={src}
      title="Reserva en La Llorona Cantina"
      style={{
        width: "100%",
        height,
        border: 0,
        borderRadius: 12,
        background: "#fff",
        display: "block",
        transition: "height 200ms ease-out",
      }}
    />
  );
}
