import hero1 from '@assets/generated_images/Modern_luxury_home_exterior_5be75001.png';
import hero2 from '@assets/generated_images/Urban_apartment_building_exterior_c98a66bb.png';
import hero3 from '@assets/generated_images/Suburban_family_home_exterior_4ff00161.png';
import hero4 from '@assets/generated_images/Waterfront_luxury_villa_125c4e27.png';
import interior1 from '@assets/generated_images/Modern_living_room_interior_3d7c503e.png';
import interior2 from '@assets/generated_images/Contemporary_kitchen_interior_180d2f35.png';
import interior3 from '@assets/generated_images/Luxury_master_bedroom_interior_69a4de25.png';

export interface Property {
  id: string;
  title_en: string;
  title_tr: string;
  title_ar: string;
  description_en: string;
  description_tr: string;
  description_ar: string;
  price: number;
  imageUrl: string;
  images: string[];
  beds: number;
  baths: number;
  size_sqm: number;
  type: 'sale' | 'rent';
  location: string;
  location_tr: string;
  location_ar: string;
  amenities: string[];
}

export const properties: Property[] = [
  {
    id: '1',
    title_en: 'Modern Luxury Villa',
    title_tr: 'Modern Lüks Villa',
    title_ar: 'فيلا فاخرة حديثة',
    description_en: 'Stunning contemporary villa with panoramic city views, featuring high-end finishes and smart home technology throughout.',
    description_tr: 'Panoramik şehir manzaralı muhteşem çağdaş villa, yüksek kaliteli malzemeler ve akıllı ev teknolojisi ile donatılmıştır.',
    description_ar: 'فيلا معاصرة مذهلة مع إطلالات بانورامية على المدينة، تتميز بتشطيبات راقية وتكنولوجيا المنزل الذكي في جميع أنحائها.',
    price: 1250000,
    imageUrl: hero1,
    images: [hero1, interior1, interior2, interior3],
    beds: 4,
    baths: 3,
    size_sqm: 350,
    type: 'sale',
    location: 'Downtown, City Center',
    location_tr: 'Şehir Merkezi',
    location_ar: 'وسط المدينة',
    amenities: ['Pool', 'Garage', 'Garden', 'Smart Home', 'Security System'],
  },
  {
    id: '2',
    title_en: 'Urban Penthouse Apartment',
    title_tr: 'Şehir Çatı Katı Dairesi',
    title_ar: 'شقة بنتهاوس حضرية',
    description_en: 'Exclusive penthouse with floor-to-ceiling windows, modern kitchen, and access to premium building amenities.',
    description_tr: 'Tavandan tabana pencereler, modern mutfak ve premium bina olanaklarına erişim ile özel çatı katı.',
    description_ar: 'بنتهاوس حصري مع نوافذ من الأرض إلى السقف ومطبخ حديث ووصول إلى المرافق الممتازة للمبنى.',
    price: 3500,
    imageUrl: hero2,
    images: [hero2, interior2, interior1, interior3],
    beds: 2,
    baths: 2,
    size_sqm: 120,
    type: 'rent',
    location: 'Marina District',
    location_tr: 'Marina Bölgesi',
    location_ar: 'منطقة المارينا',
    amenities: ['Gym', 'Pool', 'Concierge', 'Parking', 'Balcony'],
  },
  {
    id: '3',
    title_en: 'Charming Suburban Home',
    title_tr: 'Büyüleyici Banliyö Evi',
    title_ar: 'منزل ضاحية ساحر',
    description_en: 'Perfect family home in a quiet neighborhood with spacious rooms, large backyard, and excellent schools nearby.',
    description_tr: 'Sakin bir mahallede geniş odalar, büyük arka bahçe ve yakınlarda mükemmel okullar ile mükemmel aile evi.',
    description_ar: 'منزل عائلي مثالي في حي هادئ مع غرف واسعة وفناء خلفي كبير ومدارس ممتازة قريبة.',
    price: 585000,
    imageUrl: hero3,
    images: [hero3, interior1, interior3, interior2],
    beds: 3,
    baths: 2,
    size_sqm: 220,
    type: 'sale',
    location: 'Green Valley',
    location_tr: 'Yeşil Vadi',
    location_ar: 'الوادي الأخضر',
    amenities: ['Garden', 'Garage', 'Fireplace', 'Patio'],
  },
  {
    id: '4',
    title_en: 'Waterfront Luxury Estate',
    title_tr: 'Sahil Kenarı Lüks Malikane',
    title_ar: 'عقار فاخر على الواجهة البحرية',
    description_en: 'Breathtaking waterfront property with private beach access, infinity pool, and luxurious outdoor living spaces.',
    description_tr: 'Özel plaj erişimi, sonsuzluk havuzu ve lüks açık yaşam alanları ile nefes kesici sahil kenarı mülkü.',
    description_ar: 'عقار مذهل على الواجهة البحرية مع وصول خاص إلى الشاطئ ومسبح لا نهائي ومساحات معيشة خارجية فاخرة.',
    price: 2850000,
    imageUrl: hero4,
    images: [hero4, interior2, interior1, interior3],
    beds: 5,
    baths: 4,
    size_sqm: 450,
    type: 'sale',
    location: 'Coastal Boulevard',
    location_tr: 'Sahil Bulvarı',
    location_ar: 'الجادة الساحلية',
    amenities: ['Beach Access', 'Pool', 'Gym', 'Wine Cellar', 'Home Theater'],
  },
  {
    id: '5',
    title_en: 'Contemporary City Loft',
    title_tr: 'Çağdaş Şehir Loft',
    title_ar: 'دور علوي معاصر في المدينة',
    description_en: 'Industrial-chic loft with exposed brick, high ceilings, and an open-concept design perfect for modern living.',
    description_tr: 'Açıkta tuğla, yüksek tavanlar ve modern yaşam için mükemmel açık konsept tasarım ile endüstriyel-şık loft.',
    description_ar: 'لوفت صناعي أنيق مع طوب مكشوف وأسقف عالية وتصميم مفتوح مثالي للحياة العصرية.',
    price: 2800,
    imageUrl: interior1,
    images: [interior1, interior2, interior3, hero2],
    beds: 1,
    baths: 1,
    size_sqm: 85,
    type: 'rent',
    location: 'Arts District',
    location_tr: 'Sanat Bölgesi',
    location_ar: 'حي الفنون',
    amenities: ['Hardwood Floors', 'Exposed Brick', 'Modern Kitchen'],
  },
  {
    id: '6',
    title_en: 'Elegant Family Residence',
    title_tr: 'Zarif Aile Rezidansı',
    title_ar: 'مسكن عائلي أنيق',
    description_en: 'Beautifully maintained home with classic architecture, updated interiors, and a perfect blend of comfort and style.',
    description_tr: 'Klasik mimari, güncellenmiş iç mekanlar ve konfor ile stilin mükemmel karışımı ile güzel bakımlı ev.',
    description_ar: 'منزل محافظ عليه بشكل جميل مع هندسة معمارية كلاسيكية وتصميمات داخلية محدثة ومزيج مثالي من الراحة والأناقة.',
    price: 720000,
    imageUrl: interior3,
    images: [interior3, interior1, interior2, hero3],
    beds: 4,
    baths: 3,
    size_sqm: 280,
    type: 'sale',
    location: 'Riverside Heights',
    location_tr: 'Nehir Kenarı Tepeleri',
    location_ar: 'مرتفعات النهر',
    amenities: ['Updated Kitchen', 'Master Suite', 'Finished Basement', 'Deck'],
  },
  {
    id: '7',
    title_en: 'Modern Downtown Studio',
    title_tr: 'Modern Şehir Merkezi Stüdyo',
    title_ar: 'استوديو حديث في وسط المدينة',
    description_en: 'Stylish studio apartment in the heart of the city, walking distance to shops, restaurants, and entertainment.',
    description_tr: 'Şehrin kalbinde şık stüdyo daire, mağazalar, restoranlar ve eğlence merkezlerine yürüme mesafesinde.',
    description_ar: 'شقة استوديو أنيقة في قلب المدينة، على مسافة قريبة من المحلات التجارية والمطاعم والترفيه.',
    price: 1600,
    imageUrl: interior2,
    images: [interior2, interior1, hero2],
    beds: 1,
    baths: 1,
    size_sqm: 45,
    type: 'rent',
    location: 'Downtown Core',
    location_tr: 'Şehir Merkezi',
    location_ar: 'قلب المدينة',
    amenities: ['Modern Appliances', 'Storage', 'Laundry'],
  },
  {
    id: '8',
    title_en: 'Spacious Garden Villa',
    title_tr: 'Geniş Bahçeli Villa',
    title_ar: 'فيلا حديقة واسعة',
    description_en: 'Magnificent villa surrounded by lush gardens, featuring outdoor entertainment areas and premium finishes throughout.',
    description_tr: 'Yemyeşil bahçelerle çevrili muhteşem villa, açık hava eğlence alanları ve her yerde premium malzemeler ile.',
    description_ar: 'فيلا رائعة محاطة بحدائق خضراء، تتميز بمناطق ترفيهية خارجية وتشطيبات ممتازة في جميع أنحائها.',
    price: 980000,
    imageUrl: hero1,
    images: [hero1, interior1, interior2, interior3],
    beds: 4,
    baths: 3,
    size_sqm: 320,
    type: 'sale',
    location: 'Garden District',
    location_tr: 'Bahçe Bölgesi',
    location_ar: 'منطقة الحدائق',
    amenities: ['Large Garden', 'Pool', 'BBQ Area', 'Garage', 'Security'],
  },
];
