export interface BlogPost {
  id: string;
  title_en: string;
  title_tr: string;
  title_ar: string;
  excerpt_en: string;
  excerpt_tr: string;
  excerpt_ar: string;
  content_en: string;
  content_tr: string;
  content_ar: string;
  author: string;
  publishDate: string;
  category: string;
  imageUrl: string;
  tags: string[];
  readTime: number; // in minutes
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title_en: "10 Tips for First-Time Home Buyers",
    title_tr: "İlk Kez Ev Alacaklar İçin 10 İpucu",
    title_ar: "10 نصائح لمشتري المنازل لأول مرة",
    excerpt_en:
      "Buying your first home is an exciting milestone. Here are essential tips to help you navigate the process successfully.",
    excerpt_tr:
      "İlk evinizi almak heyecan verici bir dönüm noktasıdır. Süreci başarıyla yönetmenize yardımcı olacak temel ipuçları.",
    excerpt_ar:
      "شراء منزلك الأول هو معلم مثير. إليك نصائح أساسية لمساعدتك في التنقل في العملية بنجاح.",
    content_en: `
      <h2>1. Determine Your Budget</h2>
      <p>Before you start looking at homes, it's crucial to understand how much you can afford. Consider your income, existing debts, and monthly expenses.</p>
      
      <h2>2. Get Pre-approved for a Mortgage</h2>
      <p>Getting pre-approved gives you a clear picture of your budget and shows sellers you're a serious buyer.</p>
      
      <h2>3. Research Neighborhoods</h2>
      <p>Location is everything in real estate. Research crime rates, school districts, commute times, and future development plans.</p>
      
      <h2>4. Work with a Real Estate Agent</h2>
      <p>A good agent can guide you through the process, negotiate on your behalf, and help you avoid common pitfalls.</p>
      
      <h2>5. Don't Skip the Home Inspection</h2>
      <p>A professional inspection can reveal hidden problems that could cost you thousands of dollars later.</p>
      
      <h2>6. Consider Future Needs</h2>
      <p>Think about your long-term plans. Will you need more space for a growing family? Is the location suitable for your career?</p>
      
      <h2>7. Factor in Additional Costs</h2>
      <p>Beyond the purchase price, consider closing costs, property taxes, insurance, maintenance, and utilities.</p>
      
      <h2>8. Be Patient</h2>
      <p>Finding the right home takes time. Don't rush into a decision you might regret later.</p>
      
      <h2>9. Negotiate Wisely</h2>
      <p>Everything is negotiable in real estate. Work with your agent to make competitive but reasonable offers.</p>
      
      <h2>10. Plan for the Future</h2>
      <p>Think about resale value and potential appreciation when making your decision.</p>
    `,
    content_tr: `
      <h2>1. Bütçenizi Belirleyin</h2>
      <p>Ev aramaya başlamadan önce, ne kadar ödeyebileceğinizi anlamak çok önemlidir. Gelirinizi, mevcut borçlarınızı ve aylık giderlerinizi göz önünde bulundurun.</p>
      
      <h2>2. Mortgage Ön Onayı Alın</h2>
      <p>Ön onay almak, bütçenizin net bir resmini verir ve satıcılara ciddi bir alıcı olduğunuzu gösterir.</p>
      
      <h2>3. Mahalleleri Araştırın</h2>
      <p>Konum emlakta her şeydir. Suç oranları, okul bölgeleri, işe gidip gelme süreleri ve gelecekteki gelişim planlarını araştırın.</p>
      
      <h2>4. Bir Emlak Acentesi ile Çalışın</h2>
      <p>İyi bir acente sizi süreç boyunca yönlendirebilir, sizin adınıza pazarlık yapabilir ve yaygın tuzaklardan kaçınmanıza yardımcı olabilir.</p>
      
      <h2>5. Ev Muayenesini Atlama</h2>
      <p>Profesyonel bir muayene, daha sonra binlerce dolara mal olabilecek gizli problemleri ortaya çıkarabilir.</p>
      
      <h2>6. Gelecekteki İhtiyaçları Düşünün</h2>
      <p>Uzun vadeli planlarınızı düşünün. Büyüyen bir aile için daha fazla alana ihtiyacınız olacak mı? Konum kariyeriniz için uygun mu?</p>
      
      <h2>7. Ek Maliyetleri Hesaba Katın</h2>
      <p>Satın alma fiyatının ötesinde, kapanış maliyetleri, emlak vergileri, sigorta, bakım ve faturaları göz önünde bulundurun.</p>
      
      <h2>8. Sabırlı Olun</h2>
      <p>Doğru evi bulmak zaman alır. Daha sonra pişman olabileceğiniz bir karara acele etmeyin.</p>
      
      <h2>9. Akıllıca Pazarlık Yapın</h2>
      <p>Emlakta her şey pazarlığa açıktır. Rekabetçi ama makul teklifler yapmak için acentenizle çalışın.</p>
      
      <h2>10. Gelecek İçin Plan Yapın</h2>
      <p>Kararınızı verirken yeniden satış değeri ve potansiyel değer artışını düşünün.</p>
    `,
    content_ar: `
      <h2>1. حدد ميزانيتك</h2>
      <p>قبل أن تبدأ في البحث عن المنازل، من المهم أن تفهم كم يمكنك تحمل تكلفته. ضع في اعتبارك دخلك والديون الموجودة والنفقات الشهرية.</p>
      
      <h2>2. احصل على موافقة مسبقة للرهن العقاري</h2>
      <p>الحصول على موافقة مسبقة يعطيك صورة واضحة عن ميزانيتك ويظهر للبائعين أنك مشتري جاد.</p>
      
      <h2>3. ابحث عن الأحياء</h2>
      <p>الموقع هو كل شيء في العقارات. ابحث عن معدلات الجريمة ومناطق المدارس وأوقات التنقل وخطط التطوير المستقبلية.</p>
      
      <h2>4. اعمل مع وكيل عقاري</h2>
      <p>يمكن لوكيل جيد أن يرشدك خلال العملية ويتفاوض نيابة عنك ويساعدك على تجنب المآزق الشائعة.</p>
      
      <h2>5. لا تتخطى فحص المنزل</h2>
      <p>يمكن للفحص المهني أن يكشف عن مشاكل مخفية قد تكلفك آلاف الدولارات لاحقاً.</p>
      
      <h2>6. فكر في الاحتياجات المستقبلية</h2>
      <p>فكر في خططك طويلة المدى. هل ستحتاج إلى مساحة أكبر لعائلة متنامية؟ هل الموقع مناسب لمسيرتك المهنية؟</p>
      
      <h2>7. ضع في اعتبارك التكاليف الإضافية</h2>
      <p>بالإضافة إلى سعر الشراء، ضع في اعتبارك تكاليف الإغلاق وضرائب الممتلكات والتأمين والصيانة والمرافق.</p>
      
      <h2>8. كن صبوراً</h2>
      <p>العثور على المنزل المناسب يستغرق وقتاً. لا تتعجل في قرار قد تندم عليه لاحقاً.</p>
      
      <h2>9. تفاوض بحكمة</h2>
      <p>كل شيء قابل للتفاوض في العقارات. اعمل مع وكيلك لتقديم عروض تنافسية ولكن معقولة.</p>
      
      <h2>10. خطط للمستقبل</h2>
      <p>فكر في قيمة إعادة البيع والإمكانات المستقبلية عند اتخاذ قرارك.</p>
    `,
    author: "Sarah Johnson",
    publishDate: "2024-01-15",
    category: "Buying Guide",
    imageUrl: "/Modern_luxury_home_exterior_5be75001.png",
    tags: ["first-time buyer", "home buying", "real estate tips"],
    readTime: 8,
  },
  {
    id: "2",
    title_en: "Real Estate Market Trends 2024",
    title_tr: "2024 Emlak Piyasa Trendleri",
    title_ar: "اتجاهات سوق العقارات 2024",
    excerpt_en:
      "Explore the latest trends shaping the real estate market in 2024 and what they mean for buyers and sellers.",
    excerpt_tr:
      "2024 yılında emlak piyasasını şekillendiren en son trendleri keşfedin ve bunların alıcılar ve satıcılar için ne anlama geldiğini öğrenin.",
    excerpt_ar:
      "استكشف أحدث الاتجاهات التي تشكل سوق العقارات في عام 2024 وما تعنيه للمشترين والبائعين.",
    content_en: `
      <h2>Technology Integration</h2>
      <p>Virtual reality tours, AI-powered property matching, and blockchain transactions are revolutionizing how we buy and sell homes.</p>
      
      <h2>Sustainable Living</h2>
      <p>Green homes with energy-efficient features are becoming increasingly popular as buyers prioritize environmental responsibility.</p>
      
      <h2>Remote Work Impact</h2>
      <p>The shift to remote work has changed location preferences, with many buyers prioritizing home offices and suburban living.</p>
      
      <h2>Interest Rate Fluctuations</h2>
      <p>Understanding how interest rates affect affordability and market dynamics is crucial for making informed decisions.</p>
      
      <h2>Urban vs Suburban</h2>
      <p>The balance between urban convenience and suburban space continues to evolve as lifestyle preferences change.</p>
    `,
    content_tr: `
      <h2>Teknoloji Entegrasyonu</h2>
      <p>Sanal gerçeklik turları, AI destekli mülk eşleştirme ve blockchain işlemleri ev alıp satma şeklimizi devrim niteliğinde değiştiriyor.</p>
      
      <h2>Sürdürülebilir Yaşam</h2>
      <p>Enerji verimli özelliklere sahip yeşil evler, alıcılar çevresel sorumluluğu önceliklendirdikçe giderek daha popüler hale geliyor.</p>
      
      <h2>Uzaktan Çalışmanın Etkisi</h2>
      <p>Uzaktan çalışmaya geçiş, konum tercihlerini değiştirdi ve birçok alıcı ev ofisleri ve banliyö yaşamını önceliklendiriyor.</p>
      
      <h2>Faiz Oranı Dalgalanmaları</h2>
      <p>Faiz oranlarının uygun fiyatlılığı ve piyasa dinamiklerini nasıl etkilediğini anlamak, bilinçli kararlar vermek için çok önemlidir.</p>
      
      <h2>Şehir vs Banliyö</h2>
      <p>Şehir konforu ile banliyö alanı arasındaki denge, yaşam tarzı tercihleri değiştikçe gelişmeye devam ediyor.</p>
    `,
    content_ar: `
      <h2>تكامل التكنولوجيا</h2>
      <p>جولات الواقع الافتراضي ومطابقة العقارات المدعومة بالذكاء الاصطناعي ومعاملات البلوك تشين تقوم بثورة في طريقة شراء وبيع المنازل.</p>
      
      <h2>العيش المستدام</h2>
      <p>المنازل الخضراء ذات الميزات الموفرة للطاقة أصبحت شائعة بشكل متزايد حيث يعطي المشترون الأولوية للمسؤولية البيئية.</p>
      
      <h2>تأثير العمل عن بُعد</h2>
      <p>التحول إلى العمل عن بُعد غير تفضيلات الموقع، حيث يعطي العديد من المشترين الأولوية لمكاتب المنزل والعيش في الضواحي.</p>
      
      <h2>تقلبات أسعار الفائدة</h2>
      <p>فهم كيفية تأثير أسعار الفائدة على القدرة على تحمل التكاليف وديناميكيات السوق أمر بالغ الأهمية لاتخاذ قرارات مدروسة.</p>
      
      <h2>الحضرية مقابل الضواحي</h2>
      <p>التوازن بين راحة المدينة ومساحة الضواحي يستمر في التطور مع تغير تفضيلات نمط الحياة.</p>
    `,
    author: "Michael Chen",
    publishDate: "2024-01-10",
    category: "Market Analysis",
    imageUrl: "/Modern_luxury_home_exterior_5be75001.png",
    tags: ["market trends", "2024", "real estate analysis"],
    readTime: 6,
  },
  {
    id: "3",
    title_en: "Home Staging Tips for Quick Sales",
    title_tr: "Hızlı Satış İçin Ev Staging İpuçları",
    title_ar: "نصائح لتجهيز المنزل للبيع السريع",
    excerpt_en:
      "Learn professional home staging techniques that can help you sell your property faster and for a better price.",
    excerpt_tr:
      "Mülkünüzü daha hızlı ve daha iyi bir fiyata satmanıza yardımcı olabilecek profesyonel ev staging tekniklerini öğrenin.",
    excerpt_ar:
      "تعلم تقنيات تجهيز المنزل المهنية التي يمكن أن تساعدك في بيع ممتلكاتك بشكل أسرع وبسعر أفضل.",
    content_en: `
      <h2>Declutter and Depersonalize</h2>
      <p>Remove personal items and excess furniture to help buyers envision themselves living in the space.</p>
      
      <h2>Maximize Natural Light</h2>
      <p>Open curtains, clean windows, and add mirrors to make rooms feel brighter and more spacious.</p>
      
      <h2>Neutral Color Palette</h2>
      <p>Use neutral colors for walls and furniture to appeal to the widest range of potential buyers.</p>
      
      <h2>Create Inviting Spaces</h2>
      <p>Arrange furniture to create conversation areas and highlight the best features of each room.</p>
      
      <h2>Professional Photography</h2>
      <p>High-quality photos are essential for online listings and can significantly impact buyer interest.</p>
    `,
    content_tr: `
      <h2>Dağınıklığı Giderin ve Kişiselleştirmeyi Kaldırın</h2>
      <p>Alıcıların kendilerini bu alanda yaşarken hayal etmelerine yardımcı olmak için kişisel eşyaları ve fazla mobilyaları kaldırın.</p>
      
      <h2>Doğal Işığı Maksimize Edin</h2>
      <p>Perdeleri açın, pencereleri temizleyin ve odaların daha parlak ve ferah hissetmesi için aynalar ekleyin.</p>
      
      <h2>Nötr Renk Paleti</h2>
      <p>En geniş potansiyel alıcı yelpazesine hitap etmek için duvarlar ve mobilyalar için nötr renkler kullanın.</p>
      
      <h2>Davetkar Alanlar Yaratın</h2>
      <p>Her odanın en iyi özelliklerini vurgulamak ve sohbet alanları yaratmak için mobilyaları düzenleyin.</p>
      
      <h2>Profesyonel Fotoğrafçılık</h2>
      <p>Yüksek kaliteli fotoğraflar çevrimiçi ilanlar için çok önemlidir ve alıcı ilgisini önemli ölçüde etkileyebilir.</p>
    `,
    content_ar: `
      <h2>أزل الفوضى وإزالة الطابع الشخصي</h2>
      <p>أزل العناصر الشخصية والأثاث الزائد لمساعدة المشترين على تصور أنفسهم يعيشون في المساحة.</p>
      
      <h2>قم بتعظيم الضوء الطبيعي</h2>
      <p>افتح الستائر ونظف النوافذ وأضف المرايا لجعل الغرف تبدو أكثر إشراقاً واتساعاً.</p>
      
      <h2>لوحة ألوان محايدة</h2>
      <p>استخدم ألواناً محايدة للجدران والأثاث لجذب أوسع نطاق من المشترين المحتملين.</p>
      
      <h2>أنشئ مساحات جذابة</h2>
      <p>رتب الأثاث لإنشاء مناطق محادثة وإبراز أفضل ميزات كل غرفة.</p>
      
      <h2>التصوير المهني</h2>
      <p>الصور عالية الجودة ضرورية للقوائم عبر الإنترنت ويمكن أن تؤثر بشكل كبير على اهتمام المشترين.</p>
    `,
    author: "Emma Rodriguez",
    publishDate: "2024-01-05",
    category: "Selling Guide",
    imageUrl: "/Modern_luxury_home_exterior_5be75001.png",
    tags: ["home staging", "selling tips", "real estate"],
    readTime: 5,
  },
];
