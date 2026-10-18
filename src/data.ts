export type Service = { id: string; category: string; name: string; description: string; price: number; duration: number; image: string };

export const demoServices: Service[] = [
  { id: 'signature-cut', category: 'Gents', name: 'Signature Cut', description: 'A considered consultation, precision cut and refined finish.', price: 3500, duration: 60, image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1200&q=85' },
  { id: 'dimensional-colour', category: 'Colour', name: 'Dimensional Colour', description: 'Bespoke tone and placement designed around you.', price: 12500, duration: 180, image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1200&q=85' },
  { id: 'ritual-treatment', category: 'Treatments', name: 'Restorative Ritual', description: 'A restorative treatment with a quiet, polished finish.', price: 6500, duration: 75, image: 'https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&w=1200&q=85' },
  { id: 'event-styling', category: 'Styling', name: 'Event Styling', description: 'Modern occasion hair with an editorial sensibility.', price: 8500, duration: 90, image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=1200&q=85' },
];

export const portfolio = [
  { title: 'Soft dimension', tag: 'Colour', image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=85' },
  { title: 'Sculpted crop', tag: 'Gents', image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=1200&q=85' },
  { title: 'Quiet volume', tag: 'Styling', image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1200&q=85' },
  { title: 'Modern texture', tag: 'Cut', image: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=1200&q=85' },
  { title: 'Evening form', tag: 'Occasion', image: 'https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=1200&q=85' },
];
