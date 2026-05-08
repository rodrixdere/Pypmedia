import { useEffect, useRef } from 'react'
import type { ContactInfo } from '../../types'

interface MapEmbedProps {
  coordinates: ContactInfo['coordinates']
  address: string
}

export default function MapEmbed({ coordinates, address }: MapEmbedProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<any>(null)

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return

    import('leaflet').then((L) => {
      if (!mapRef.current || mapInstanceRef.current) return

      delete (L.Icon.Default.prototype as any)._getIconUrl
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
        iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
      })

      const map = L.map(mapRef.current, {
        center: coordinates,
        zoom: 14,
        zoomControl: false,
        scrollWheelZoom: false,
      })

      mapInstanceRef.current = map

      // ✅ Positron: claro, minimalista, contrasta con el sitio oscuro
      L.tileLayer(
        'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          subdomains: 'abcd',
          maxZoom: 20,
        }
      ).addTo(map)

      // Marcador gold — ajustado para mapa claro (borde oscuro visible)
      const goldIcon = L.divIcon({
        className: '',
        html: `
          <div style="
            width: 32px;
            height: 32px;
            background: #C9A96E;
            border: 2px solid #1a1a1a;
            border-radius: 50% 50% 50% 0;
            transform: rotate(-45deg);
            box-shadow: 0 2px 12px rgba(0,0,0,0.3);
          "></div>
        `,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32],
      })

      L.marker(coordinates, { icon: goldIcon })
        .addTo(map)
        .bindPopup(
          `<div style="font-family: 'DM Sans', sans-serif; color: #0A0A0A; font-size: 13px;">
            <strong>P&P Media CR</strong><br/>${address}
          </div>`
        )

      L.control.zoom({ position: 'bottomright' }).addTo(map)
    })

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
        mapInstanceRef.current = null
      }
    }
  }, [coordinates, address])

  return (
    <div
      ref={mapRef}
      className="w-full h-full"
      style={{ minHeight: '340px' }}
    />
  )
}