import type { Perfume, Planet } from './types'

import baccaratImg from './assets/baccarat.webp'
import chanceImg from './assets/chance.jpg'
import cocoImg from './assets/coco.webp'
import grandSoirImg from './assets/grand_soir.webp'
import laVieImg from './assets/la_vie.webp'
import monGuerlainImg from './assets/mon_guerlain.webp'
import oudWoodImg from './assets/oud_wood.webp'
import tobaccoImg from './assets/tobacco.webp'
import encreNoireImg from './assets/encre_noire.webp'
import terreImg from './assets/terre.webp'
import jadoreImg from './assets/jadore.webp'
import rose31Img from './assets/rose31.jpg'
import blackOrchidImg from './assets/black_orchid.jpg'

import baccarat2 from './assets/baccarat2.webp'; import baccarat3 from './assets/baccarat3.webp'; import baccarat4 from './assets/baccarat4.webp';
import chance2 from './assets/chance2.webp'; import chance3 from './assets/chance3.webp'; import chance4 from './assets/chance4.webp';
import coco2 from './assets/coco2.webp'; import coco3 from './assets/coco3.webp'; import coco4 from './assets/coco4.webp';
import grandSoir2 from './assets/grand_soir2.webp'; import grandSoir3 from './assets/grand_soir3.webp'; import grandSoir4 from './assets/grand_soir4.webp';
import laVie2 from './assets/la_vie2.avif'; import laVie3 from './assets/la_vie3.webp'; import laVie4 from './assets/la_vie4.jpg'; // Обрати внимание: avif, webp, jpg
import monGuerlain2 from './assets/mon_guerlain2.webp'; import monGuerlain3 from './assets/mon_guerlain3.jpg'; import monGuerlain4 from './assets/mon_guerlain4.webp';
import oudWood2 from './assets/oud_wood2.webp'; import oudWood3 from './assets/oud_wood3.webp'; import oudWood4 from './assets/oud_wood4.webp';
import tobacco2 from './assets/tobacco2.webp'; import tobacco3 from './assets/tobacco3.webp'; import tobacco4 from './assets/tobacco4.webp';
import encreNoire2 from './assets/encre_noire2.webp'; import encreNoire3 from './assets/encre_noire3.webp'; import encreNoire4 from './assets/encre_noire4.webp';
import terre2 from './assets/terre2.webp'; import terre3 from './assets/terre3.webp'; import terre4 from './assets/terre4.webp';
import jadore2 from './assets/jadore2.webp'; import jadore3 from './assets/jadore3.jpg'; import jadore4 from './assets/jadore4.webp';
import rose31_2 from './assets/rose31_2.webp'; import rose31_3 from './assets/rose31_3.webp'; import rose31_4 from './assets/rose31_4.webp';
import blackOrchid2 from './assets/black_orchid2.webp'; import blackOrchid3 from './assets/black_orchid3.webp'; import blackOrchid4 from './assets/black_orchid4.webp';


export const PLANETS: Planet[] = [
  {
    id: 'sun', name: 'Sun', symbol: '☉', tagline: 'Vitality & Identity', color: '#FF9B21', glowColor: 'rgba(255, 155, 33, 0.45)',
    gradient: 'radial-gradient(circle at 32% 30%, #FFE87A, #FF9B21 45%, #C44800)',
    description: 'The Sun governs your core identity, ego, and radiant life force. These solar fragrances amplify your confidence and magnetism.', accentColor: '#FF9B21',
  },
  {
    id: 'moon', name: 'Moon', symbol: '☽', tagline: 'Emotion & Intuition', color: '#B0B8D4', glowColor: 'rgba(176, 184, 212, 0.4)',
    gradient: 'radial-gradient(circle at 32% 30%, #E8EBF8, #B0B8D4 45%, #5A6080)',
    description: 'The Moon governs your emotions, instincts, and inner world. Lunar fragrances soothe and align your emotional tides.', accentColor: '#B0B8D4',
  },
  {
    id: 'venus', name: 'Venus', symbol: '♀', tagline: 'Love & Beauty', color: '#E8A0BF', glowColor: 'rgba(232, 160, 191, 0.45)',
    gradient: 'radial-gradient(circle at 32% 30%, #FFD4E8, #E8A0BF 45%, #9A4070)',
    description: 'Venus governs love, beauty, and sensual pleasure. These fragrances enhance your natural charm and invite admiration.', accentColor: '#E8A0BF',
  },
  {
    id: 'mars', name: 'Mars', symbol: '♂', tagline: 'Passion & Drive', color: '#E05040', glowColor: 'rgba(224, 80, 64, 0.4)',
    gradient: 'radial-gradient(circle at 32% 30%, #FF8060, #E05040 45%, #7A1010)',
    description: 'Mars governs passion, desire, and personal power. Martian fragrances ignite desire and project raw vitality.', accentColor: '#E05040',
  },
  {
    id: 'jupiter', name: 'Jupiter', symbol: '♃', tagline: 'Abundance & Luck', color: '#D4A050', glowColor: 'rgba(212, 160, 80, 0.4)',
    gradient: 'radial-gradient(circle at 32% 30%, #FFD880, #D4A050 45%, #8A5818)',
    description: 'Jupiter governs expansion, abundance, and good fortune. Jovian fragrances open doors and amplify prosperity.', accentColor: '#D4A050',
  },
  {
    id: 'saturn', name: 'Saturn', symbol: '♄', tagline: 'Wisdom & Structure', color: '#C8B870', glowColor: 'rgba(200, 184, 112, 0.4)',
    gradient: 'radial-gradient(circle at 32% 30%, #EAD890, #C8B870 45%, #786828)',
    description: 'Saturn governs wisdom, discipline, and long-term achievement. Saturnian fragrances ground and anchor your purpose.', accentColor: '#C8B870',
  },
]

export const PERFUMES: Perfume[] = [
  // ===== SUN =====
  {
    id: '1', name: 'Baccarat Rouge 540', brand: 'Maison Francis Kurkdjian', price: 24500, samplePrice: 650, size: '70ml Eau de Parfum', planet: 'Sun',
    imageUrl: baccaratImg, thumbnails: [baccaratImg, baccarat2, baccarat3, baccarat4],
    notes: { top: ['Saffron', 'Jasmine'], heart: ['Amberwood', 'Ambergris'], base: ['Fir Resin', 'Cedar'] },
    description: 'A luminous and sophisticated scent that leaves an unforgettable sillage. Its amber-floral signature with a mineral-woody shimmer embodies a new form of sensuality.',
    zodiacMatch: ['Sun in Leo ♌', 'Sun in Aries ♈', 'Sun in Sagittarius ♐'], moonMatch: 'Also compatible with Moon in Fire signs', matchPercent: 94, categories: ['Floral', 'Musky & Sensual', 'For Romance'],
  },
  {
    id: '7', name: 'Chance Eau Tendre', brand: 'Chanel', price: 14200, samplePrice: 420, size: '100ml Eau de Toilette', planet: 'Sun',
    imageUrl: chanceImg, thumbnails: [chanceImg, chance2, chance3, chance4],
    notes: { top: ['Grapefruit', 'Quince'], heart: ['Hyacinth', 'White Musk'], base: ['Iris', 'Teak Wood', 'Amber'] },
    description: 'Fresh, romantic, and eternally feminine. A tender expression of Chanel\'s iconic Chance.',
    zodiacMatch: ['Sun in Gemini ♊', 'Sun in Libra ♎', 'Moon in Aquarius ♒'], moonMatch: 'Also compatible with Venus in Gemini', matchPercent: 82, categories: ['Floral', 'Sweet & Gourmand', 'For Self-Love'],
  },
  // ===== MOON =====
  {
    id: '2', name: 'La Vie Est Belle', brand: 'Lancôme', price: 8900, samplePrice: 350, size: '75ml Eau de Parfum', planet: 'Moon',
    imageUrl: laVieImg, thumbnails: [laVieImg, laVie2, laVie3, laVie4],
    notes: { top: ['Black Currant', 'Pear'], heart: ['Iris', 'Jasmine', 'Rose'], base: ['Patchouli', 'Vanilla', 'Praline'] },
    description: 'A radiant blend of iris and vanilla that glows with warmth and femininity.',
    zodiacMatch: ['Moon in Cancer ♋', 'Moon in Pisces ♓', 'Venus in Taurus ♉'], moonMatch: 'Also compatible with Sun in Leo', matchPercent: 87, categories: ['Floral', 'Sweet & Gourmand', 'For Self-Love'],
  },
  {
    id: '4', name: 'Mon Guerlain', brand: 'Guerlain', price: 7200, samplePrice: 280, size: '50ml Eau de Parfum', planet: 'Moon',
    imageUrl: monGuerlainImg, thumbnails: [monGuerlainImg, monGuerlain2, monGuerlain3, monGuerlain4],
    notes: { top: ['French Lavender', 'Bergamot'], heart: ['Sambac Jasmine', 'Vanilla Tahitensis'], base: ['Sandalwood', 'Cashmeran'] },
    description: 'A luminous lavender-vanilla fragrance born from Angelina Jolie\'s vision of freedom and sensuality.',
    zodiacMatch: ['Moon in Pisces ♓', 'Venus in Taurus ♉', 'Sun in Cancer ♋'], moonMatch: 'Also compatible with Venus in Virgo', matchPercent: 91, categories: ['Floral', 'Sweet & Gourmand', 'For Romance', 'For Self-Love'],
  },
  // ===== VENUS =====
  {
    id: '3', name: 'Coco Mademoiselle', brand: 'Chanel', price: 16800, samplePrice: 500, size: '100ml Eau de Parfum', planet: 'Venus',
    imageUrl: cocoImg, thumbnails: [cocoImg, coco2, coco3, coco4],
    notes: { top: ['Orange', 'Bergamot', 'Grapefruit'], heart: ['Rose', 'Jasmine', 'Ylang-Ylang'], base: ['Patchouli', 'Vetiver', 'White Musk'] },
    description: 'A daring, free-spirited fragrance for the modern woman.',
    zodiacMatch: ['Venus in Gemini ♊', 'Venus in Aquarius ♒', 'Sun in Libra ♎'], moonMatch: 'Also compatible with Ascendant in Libra', matchPercent: 89, categories: ['Floral', 'Musky & Sensual'],
  },
  {
    id: '5', name: 'Rose 31', brand: 'Le Labo', price: 19500, samplePrice: 580, size: '50ml Eau de Parfum', planet: 'Venus',
    imageUrl: rose31Img, thumbnails: [rose31Img, rose31_2, rose31_3, rose31_4],
    notes: { top: ['Cumin', 'Oud'], heart: ['Turkish Rose', 'Geranium'], base: ['Vetiver', 'Cedar', 'Cistus'] },
    description: 'A labyrinthine rose — masculine yet feminine, earthy yet ethereal.',
    zodiacMatch: ['Venus in Scorpio ♏', 'Venus in Aries ♈', 'Mars in Taurus ♉'], moonMatch: 'Also compatible with Moon in Scorpio', matchPercent: 85, categories: ['Floral', 'Musky & Sensual', 'For Romance'],
  },
  {
    id: '8', name: 'J\'adore', brand: 'Dior', price: 12500, samplePrice: 380, size: '100ml Eau de Parfum', planet: 'Venus',
    imageUrl: jadoreImg, thumbnails: [jadoreImg, jadore2, jadore3, jadore4],
    notes: { top: ['Pear', 'Melon', 'Magnolia'], heart: ['Rose', 'Jasmine', 'Lily of the Valley'], base: ['Musk', 'Vanilla', 'Blackberry'] },
    description: 'An iconic floral bouquet that embodies absolute femininity.',
    zodiacMatch: ['Venus in Libra ', 'Venus in Taurus ♉', 'Moon in Pisces ♓'], moonMatch: 'Also compatible with Sun in Cancer', matchPercent: 92, categories: ['Floral', 'For Romance', 'For Self-Love'],
  },
  // ===== MARS =====
  {
    id: '9', name: 'Oud Wood', brand: 'Tom Ford', price: 28900, samplePrice: 750, size: '50ml Eau de Parfum', planet: 'Mars',
    imageUrl: oudWoodImg, thumbnails: [oudWoodImg, oudWood2, oudWood3, oudWood4],
    notes: { top: ['Rosewood', 'Cardamom'], heart: ['Oud', 'Sandalwood', 'Vetiver'], base: ['Tonka Bean', 'Amber', 'Vanilla'] },
    description: 'A rare, exotic blend of oud wood, sandalwood, and vetiver. Bold, smoky, and magnetic.',
    zodiacMatch: ['Mars in Aries ♈', 'Mars in Scorpio ♏', 'Sun in Leo ♌'], moonMatch: 'Also compatible with Venus in Capricorn', matchPercent: 88, categories: ['Musky & Sensual', 'For Romance'],
  },
  {
    id: '10', name: 'Black Orchid', brand: 'Tom Ford', price: 22400, samplePrice: 620, size: '50ml Eau de Parfum', planet: 'Mars',
    imageUrl: blackOrchidImg, thumbnails: [blackOrchidImg, blackOrchid2, blackOrchid3, blackOrchid4],
    notes: { top: ['Truffle', 'Ylang-Ylang', 'Bergamot'], heart: ['Black Orchid', 'Lotus Wood', 'Spices'], base: ['Patchouli', 'Vanilla', 'Dark Chocolate'] },
    description: 'Luxurious, sensual, and darkly seductive.',
    zodiacMatch: ['Mars in Scorpio ♏', 'Venus in Scorpio ♏', 'Moon in Capricorn ♑'], moonMatch: 'Also compatible with Sun in Aries', matchPercent: 86, categories: ['Musky & Sensual', 'For Romance'],
  },
  // ===== JUPITER =====
  {
    id: '11', name: 'Grand Soir', brand: 'Maison Francis Kurkdjian', price: 26800, samplePrice: 700, size: '70ml Eau de Parfum', planet: 'Jupiter',
    imageUrl: grandSoirImg, thumbnails: [grandSoirImg, grandSoir2, grandSoir3, grandSoir4],
    notes: { top: ['Labdanum', 'Benzoin'], heart: ['Amber', 'Vanilla'], base: ['Tonka Bean', 'White Musk'] },
    description: 'A radiant amber fragrance that evokes the warmth of a grand evening.',
    zodiacMatch: ['Jupiter in Sagittarius ♐', 'Jupiter in Pisces ', 'Sun in Leo ♌'], moonMatch: 'Also compatible with Venus in Taurus', matchPercent: 93, categories: ['Sweet & Gourmand', 'For Romance'],
  },
  {
    id: '12', name: 'Tobacco Vanille', brand: 'Tom Ford', price: 31200, samplePrice: 820, size: '50ml Eau de Parfum', planet: 'Jupiter',
    imageUrl: tobaccoImg, thumbnails: [tobaccoImg, tobacco2, tobacco3, tobacco4],
    notes: { top: ['Tobacco Leaf', 'Spices'], heart: ['Tonka Bean', 'Tobacco Blossom', 'Vanilla'], base: ['Cacao', 'Dried Fruits', 'Woody Notes'] },
    description: 'An opulent, sweet, and spicy composition.',
    zodiacMatch: ['Jupiter in Taurus ♉', 'Jupiter in Leo ♌', 'Venus in Sagittarius ♐'], moonMatch: 'Also compatible with Mars in Capricorn', matchPercent: 90, categories: ['Sweet & Gourmand', 'Musky & Sensual'],
  },
  // ===== SATURN =====
  {
    id: '13', name: 'Terre d\'Hermès', brand: 'Hermès', price: 11800, samplePrice: 390, size: '100ml Eau de Toilette', planet: 'Saturn',
    imageUrl: terreImg, thumbnails: [terreImg, terre2, terre3, terre4],
    notes: { top: ['Orange', 'Grapefruit', 'Flint'], heart: ['Geranium', 'Black Pepper', 'Pelargonium'], base: ['Vetiver', 'Cedar', 'Benzoin'] },
    description: 'A symbol of the connection between earth and sky.',
    zodiacMatch: ['Saturn in Capricorn ♑', 'Saturn in Aquarius ♒', 'Sun in Virgo '], moonMatch: 'Also compatible with Moon in Taurus', matchPercent: 87, categories: ['Musky & Sensual', 'For Self-Love'],
  },
  {
    id: '14', name: 'Encre Noire', brand: 'Lalique', price: 4200, samplePrice: 180, size: '100ml Eau de Toilette', planet: 'Saturn',
    imageUrl: encreNoireImg, thumbnails: [encreNoireImg, encreNoire2, encreNoire3, encreNoire4],
    notes: { top: ['Bergamot', 'Grapefruit', 'Elemi'], heart: ['Vetiver', 'Cypress', 'Cashmere Wood'], base: ['Musk', 'Amber', 'Incense'] },
    description: 'A dark, mysterious, and deeply masculine fragrance.',
    zodiacMatch: ['Saturn in Capricorn ♑', 'Moon in Scorpio ♏', 'Sun in Virgo '], moonMatch: 'Also compatible with Venus in Aquarius', matchPercent: 84, categories: ['Musky & Sensual', 'For Self-Love'],
  },
]