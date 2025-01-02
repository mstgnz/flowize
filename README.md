# flowize

### Proje Açıklaması
Bu proje, Trello, Jira ve Bitrix24'ün en iyi özelliklerini birleştiren modern bir proje yönetim aracıdır. Frontend Angular ile geliştirilecek, backend tarafında Go ve Hasura (GraphQL) kullanılacak, veritabanı olarak PostgreSQL tercih edilecektir.

### Temel Özellikler
- **Kanban Board Yönetimi**
  - Sürükle-bırak kart yönetimi
  - Özelleştirilebilir kolonlar
  - Kart etiketleri ve renklendirilmesi
  - Alt görevler oluşturma

- **Proje Yönetimi**
  - Çoklu proje desteği
  - Sprint planlama ve yönetimi
  - Zaman takibi
  - Gantt şeması görünümü
  - Raporlama ve analiz araçları
  - Çalışma süresi takibi (İşe başlama/bitirme zamanları)
  - İş akışı otomasyonu (Workflow)
  - Tekrarlanan görevler
  - Proje şablonları
  - Bağımlı görevler yönetimi
  - Kaynak yönetimi ve bütçeleme
  - Risk yönetimi ve takibi
  - Proje maliyet hesaplaması
  - Çoklu proje karşılaştırma
  - Özelleştirilebilir proje metrikleri
  - AI destekli görev tahminleme
  - Otomatik iş dağılımı

- **CRM ve İş Yönetimi**
  - Müşteri yönetimi
  - Satış hunisi takibi
  - Teklif ve fatura oluşturma
  - İş süreçleri otomasyonu
  - Müşteri iletişim geçmişi
  - E-ticaret entegrasyonu
  - Pazarlama kampanyası yönetimi
  - Müşteri segmentasyonu
  - Otomatik e-posta pazarlama
  - Sosyal medya entegrasyonu
  - Müşteri destek sistemi
  - Çağrı merkezi entegrasyonu

- **Takım İşbirliği**
  - Gerçek zamanlı bildirimler
  - Yorum ve tartışma sistemi
  - Dosya paylaşımı
  - Takım üyeleri yönetimi
  - Rol tabanlı yetkilendirme
  - Özel ve genel sohbet odaları
  - Görüntülü görüşme desteği
  - Miro entegrasyonu ile beyaz tahta özelliği
  - Takvim ve toplantı yönetimi
  - Anket oluşturma
  - Bilgi bankası (Knowledge base)
  - Sesli notlar
  - Ekran paylaşımı
  - Çeviri desteği
  - AI destekli toplantı özetleme
  - Otomatik görev atama
  - Ekip performans analizi
  - Mood tracking (Takım motivasyon takibi)

- **İnsan Kaynakları**
  - Çalışan profilleri
  - İzin yönetimi
  - Vardiya planlama
  - Performans değerlendirme
  - İş başvurusu takibi
  - Maaş ve bordro yönetimi
  - Eğitim yönetimi
  - Yetenek havuzu
  - Kariyer planlama
  - Çalışan öneri sistemi
  - Oryantasyon süreç yönetimi
  - İK analytics ve raporlama

- **Güvenlik ve Uyumluluk**
  - KVKK uyumluluğu
  - GDPR uyumluluğu
  - İki faktörlü kimlik doğrulama
  - SSO (Single Sign-On) desteği
  - IP bazlı erişim kontrolü
  - Veri şifreleme
  - Güvenlik log analizi
  - Denetim kayıtları

- **Raporlama ve Analytics**
  - Özelleştirilebilir dashboardlar
  - AI destekli veri analizi
  - Otomatik rapor oluşturma
  - Gerçek zamanlı metrikler
  - Veri görselleştirme araçları
  - Tahmine dayalı analitik
  - Excel/PDF export

- **Versiyon Kontrol Entegrasyonları**
  - GitHub Entegrasyonu
    - Repository bağlantısı
    - Issue takibi
    - Pull request yönetimi
    - Commit geçmişi
    - Code review süreci
    - GitHub Actions entegrasyonu
    - GitHub Projects entegrasyonu
    - GitHub Wiki entegrasyonu
    - GitHub Security entegrasyonu
  - GitLab Entegrasyonu
    - Repository yönetimi
    - Issue ve merge request takibi
    - CI/CD pipeline entegrasyonu
    - GitLab Pages desteği
    - GitLab Wiki entegrasyonu
    - GitLab Security entegrasyonu
    - GitLab Container Registry
  - Bitbucket Entegrasyonu
    - Repository yönetimi
    - Issue ve pull request takibi
    - Bitbucket Pipelines entegrasyonu
    - Bitbucket Wiki entegrasyonu
    - Bitbucket Cloud güvenlik taraması
    - Jira entegrasyonu

### Teknik Altyapı
- **Frontend (Angular)**
  - Material Design UI
  - NGRX state yönetimi
  - Responsive tasarım
  - PWA desteği
  - WebRTC entegrasyonu (görüntülü görüşme için)
  - Çevrimdışı çalışma desteği
  - Çoklu dil desteği
  - Electron ile masaüstü uygulama
  - React Native ile mobil uygulama
  - Progressive Web App (PWA)
  - Tema özelleştirme
  - Erişilebilirlik standartları
  - Performans optimizasyonu

- **Backend**
  - Go API servisleri
    - Kullanıcı yönetimi
    - Yetkilendirme
    - Bildirim servisi
    - Dosya yönetimi
    - Sohbet servisi
    - WebRTC sinyal sunucusu
  - Hasura GraphQL
    - CRUD operasyonları
    - Gerçek zamanlı abonelikler
    - Otomatik API oluşturma
  - CDN servisi
    - Dosya yükleme/indirme yönetimi
    - Güvenli dosya erişimi
    - Dosya önbelleğe alma
  - Elasticsearch entegrasyonu
  - RabbitMQ mesaj kuyruğu
  - Kubernetes orchestration
  - Service mesh mimarisi
  - AI/ML servisleri
  - Blockchain entegrasyonu
  - Mikroservis mimarisi

- **Veritabanı**
  - PostgreSQL
  - Veritabanı migration yönetimi
  - Yedekleme ve geri yükleme sistemi
  - Redis (sohbet ve oturum yönetimi için)

- **DevOps ve Altyapı**
  - CI/CD pipeline
  - Docker konteynerizasyon
  - Kubernetes orchestration
  - Otomatik ölçeklendirme
  - Log yönetimi ve analizi
  - Performans izleme
  - Felaket kurtarma planı

### Geliştirme Yol Haritası
1. **Faz 1: Temel Altyapı**
   - Veritabanı şeması tasarımı
   - Go backend temel yapısının kurulumu
   - Hasura entegrasyonu
   - Angular projesi kurulumu ve temel yapılandırma
   - CDN servis altyapısının kurulumu

2. **Faz 2: Temel Özellikler**
   - Kullanıcı yönetimi ve kimlik doğrulama
   - Kanban board temel işlevleri
   - Proje oluşturma ve yönetim
   - Temel kart işlemleri
   - Çalışma süresi takip sistemi

3. **Faz 3: İleri Seviye Özellikler**
   - Sprint yönetimi
   - Raporlama sistemi
   - Zaman takibi
   - Dosya yönetimi ve CDN entegrasyonu
   - Sohbet sistemi altyapısı

4. **Faz 4: İşbirliği Özellikleri**
   - Gerçek zamanlı bildirimler
   - Yorum sistemi
   - Aktivite akışı
   - E-posta bildirimleri
   - Görüntülü görüşme sistemi
   - Miro entegrasyonu

5. **Faz 5: Optimizasyon ve Geliştirmeler**
   - Performans iyileştirmeleri
   - UI/UX geliştirmeleri
   - Test kapsamının artırılması
   - Dokümantasyon
   - Güvenlik testleri ve iyileştirmeleri

### Katkıda Bulunma
Bu proje açık kaynaklıdır ve katkılarınıza açıktır. Her türlü geri bildirim ve katkı için issues açabilir veya pull request gönderebilirsiniz.

### Lisans
Bu proje Apache Lisansı altında lisanslanmıştır. Daha fazla detay için [LICENSE](LICENSE) dosyasına bakınız.
