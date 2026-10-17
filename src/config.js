export const clinic = {
  name: 'Consultorio Médico del Dr. Álvaro Pascuales',
  doctor: 'Dr. Álvaro Pascuales',
  address: 'Av. Jama, Jama, Ecuador',
  phoneDisplay: '+593 99 058 5737',
  phoneDigits: '593990585737',
  rating: '5.0',
  reviewCount: 5,
  // Add only verified profile URLs before publishing.
  social: { facebook: '', instagram: '', linkedin: '' },
  // Replace with the clinic's verified Google Maps place URL when available.
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Consultorio+M%C3%A9dico+Dr.+%C3%81lvaro+Pascuales+Jama+Ecuador'
}
export const whatsappUrl = (message = 'Hola, quisiera obtener información sobre el consultorio del Dr. Álvaro Pascuales.') =>
  `https://wa.me/${clinic.phoneDigits}?text=${encodeURIComponent(message)}`