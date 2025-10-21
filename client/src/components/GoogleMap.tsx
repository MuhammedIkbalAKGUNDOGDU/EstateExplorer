import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { useRef, useEffect } from "react";

interface GoogleMapProps {
  center: google.maps.LatLngLiteral;
  zoom: number;
  className?: string;
}

const MapComponent = ({ center, zoom, className }: GoogleMapProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current && window.google && window.google.maps) {
      const map = new window.google.maps.Map(ref.current, {
        center,
        zoom,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: [
          {
            featureType: "poi",
            elementType: "labels",
            stylers: [{ visibility: "off" }],
          },
        ],
      });

      // Modern AdvancedMarkerElement kullan (eğer mevcut ise)
      if (
        window.google.maps.marker &&
        window.google.maps.marker.AdvancedMarkerElement
      ) {
        const markerElement = document.createElement("div");
        markerElement.innerHTML = `
          <div style="
            width: 40px;
            height: 40px;
            background: #3B82F6;
            border: 4px solid white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 2px 8px rgba(0,0,0,0.3);
          ">
            <div style="
              width: 20px;
              height: 20px;
              background: white;
              border-radius: 50%;
            "></div>
          </div>
        `;

        new window.google.maps.marker.AdvancedMarkerElement({
          position: center,
          map: map,
          title: "Bingöl Merkez - Premier Real Estate",
          content: markerElement,
        });
      } else {
        // Fallback: Eski Marker kullan
        new window.google.maps.Marker({
          position: center,
          map: map,
          title: "Bingöl Merkez - Premier Real Estate",
          icon: {
            url:
              "data:image/svg+xml;charset=UTF-8," +
              encodeURIComponent(`
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="18" fill="#3B82F6" stroke="white" stroke-width="4"/>
                <path d="M20 8C14.477 8 10 12.477 10 18C10 25 20 32 20 32C20 32 30 25 30 18C30 12.477 25.523 8 20 8Z" fill="white"/>
                <circle cx="20" cy="18" r="4" fill="#3B82F6"/>
              </svg>
            `),
            scaledSize: new window.google.maps.Size(40, 40),
          },
        });
      }
    }
  }, [center, zoom]);

  return <div ref={ref} className={className} />;
};

const render = (status: Status) => {
  switch (status) {
    case Status.LOADING:
      return (
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Harita yükleniyor...</p>
          </div>
        </div>
      );
    case Status.FAILURE:
      return (
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <div className="text-red-500 mb-4">
              <svg
                className="h-12 w-12 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 19.5c-.77.833.192 2.5 1.732 2.5z"
                />
              </svg>
            </div>
            <p className="text-muted-foreground">Harita yüklenemedi</p>
            <p className="text-sm text-muted-foreground mt-2">
              Bingöl Merkez - Premier Real Estate Ofisi
            </p>
          </div>
        </div>
      );
    default:
      return null;
  }
};

export default function GoogleMap({ center, zoom, className }: GoogleMapProps) {
  // Geçerli bir Google Maps API key kullanın
  const apiKey =
    import.meta.env.VITE_GOOGLE_MAPS_API_KEY ||
    "AIzaSyBvOkBw3cJ3n2qE8vF7gH9iK1lM4nO6pQ8";

  return (
    <Wrapper apiKey={apiKey} render={render} libraries={["marker"]}>
      <MapComponent center={center} zoom={zoom} className={className} />
    </Wrapper>
  );
}
