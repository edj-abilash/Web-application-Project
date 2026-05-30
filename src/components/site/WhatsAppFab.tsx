import { MessageCircle } from "lucide-react";

export function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/918019713947?text=Hi%2C%20I%27d%20like%20to%20book%20an%20appointment."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full bg-teal text-teal-foreground grid place-items-center shadow-elevated hover:scale-110 transition-transform animate-pulse"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
