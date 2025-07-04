/**
 * Ramen Bowl - Authentic Japanese Ramen Restaurant Website
 * 
 * This is the main TypeScript file that creates a complete single-page application
 * for a traditional Japanese ramen restaurant. The application features:
 * - Responsive design with mobile navigation
 * - Interactive menu display
 * - Customer testimonials
 * - Restaurant history and philosophy
 * - Smooth scrolling navigation
 * - Modern Japanese typography and styling
 * 
 * @author Ramen Bowl Development Team
 * @version 1.0.0
 * @created 2025
 */

// Import global styles for the application
import './style.css'

/**
 * Main application function that creates and renders the complete Ramen Bowl website
 * This function generates all the HTML structure for the single-page application
 * including navigation, hero section, menu, reviews, about section, and footer
 * 
 * @returns {void} No return value - directly manipulates DOM
 */
function createRamenHouseApp(): void {
  // Get the main app container element where all content will be rendered
  const app = document.querySelector<HTMLDivElement>('#app')!
  
  // Generate the complete HTML structure for the ramen restaurant website
  app.innerHTML = `
    <!-- Navigation Bar -->
    <!-- Responsive navigation with Japanese and English branding -->
    <nav class="navbar">
      <div class="nav-container">
        <!-- Logo with Japanese and English text -->
        <div class="logo">
          <span class="logo-jp">らーめん丼</span>
          <span class="logo-en">Ramen Bowl</span>
        </div>
        <!-- Mobile hamburger menu toggle button -->
        <button class="mobile-menu-toggle" aria-label="メニューを開く">
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
        </button>
        <!-- Main navigation menu -->
        <ul class="nav-menu">
          <li><a href="#home">ホーム</a></li>
          <li><a href="#menu">メニュー</a></li>
          <li><a href="#about">について</a></li>
          <li><a href="#contact">お問い合わせ</a></li>
        </ul>
      </div>
    </nav>

    <!-- Hero Section -->
    <!-- Main landing section with restaurant introduction -->
    <section class="hero" id="home">
      <div class="hero-content">
        <!-- Decorative Japanese pattern background -->
        <div class="japanese-pattern"></div>
        <!-- Main headline with Japanese and English text -->
        <h1 class="hero-title">
          <span class="title-jp">本格的な日本のらーめん</span>
          <span class="title-en">Authentic Japanese Ramen Experience</span>
        </h1>
        <!-- Descriptive subtitle about the restaurant's heritage -->
        <p class="hero-subtitle">三代に渡り受け継がれる伝統の味と現代的な技術が融合した、心も体も温まる至極の一杯をお届けします</p>
        <!-- Restaurant quality badges -->
        <div class="hero-badges">
          <span class="badge">創業1952年</span>
          <span class="badge">職人の技</span>
          <span class="badge">毎日手打ち</span>
          <span class="badge">無添加スープ</span>
        </div>
        <!-- Key statistics about the restaurant -->
        <div class="hero-stats">
          <div class="stat">
            <span class="stat-number">70+</span>
            <span class="stat-label">年の歴史</span>
          </div>
          <div class="stat">
            <span class="stat-number">5000+</span>
            <span class="stat-label">日々のお客様</span>
          </div>
          <div class="stat">
            <span class="stat-number">24h</span>
            <span class="stat-label">スープ煮込み</span>
          </div>
        </div>
        <!-- Call-to-action button to view menu -->
        <button class="cta-button">メニューを見る</button>
      </div>
      <!-- Decorative elements with animations -->
      <div class="hero-decoration">
        <div class="steam-animation"></div>
        <!-- Floating food emoji elements for visual appeal -->
        <div class="floating-elements">
          <div class="floating-bowl">🍜</div>
          <div class="floating-chopsticks">🥢</div>
          <div class="floating-noodles">🍝</div>
        </div>
      </div>
    </section>

    <!-- Daily Specials Banner -->
    <!-- Scrolling ticker with today's special offers and information -->
    <section class="daily-specials">
      <div class="container">
        <!-- Animated ticker displaying current specials and promotions -->
        <div class="specials-ticker">
          <span>🔥 本日限定: 特製九州豚骨ラーメン - 20時間煮込みスープ ¥1,500（限定30食）</span>
          <span>🌟 新登場: 鶏白湯つけ麺 - 濃厚鶏スープと特製太麺 ¥1,300</span>
          <span>📞 お持ち帰り・デリバリー対応 - 03-1234-5678</span>
          <span>💎 プレミアム会員様10%OFF - 会員登録で特典多数</span>
        </div>
      </div>
    </section>

    <!-- Philosophy Section -->
    <!-- Restaurant's philosophy and core values -->
    <section class="philosophy">
      <div class="container">
        <h2 class="section-title">
          <span class="title-jp">らーめん道</span>
          <span class="title-en">Our Philosophy</span>
        </h2>
        <div class="philosophy-content">
          <!-- Text explaining the restaurant's approach to ramen -->
          <div class="philosophy-text">
            <h3>一杯一杯に込められた想い</h3>
            <p>らーめんは単なる食べ物ではありません。それは日本の心、職人の魂、そして食べる人への愛情が込められた芸術作品です。</p>
            <p>当店では、厳選された国産小麦を使用した自家製麺、24時間以上じっくりと煮込んだスープ、そして季節の野菜を使った具材にこだわり、お客様に最高の体験をお届けしています。</p>
          </div>
          <!-- Three core pillars of the restaurant's philosophy -->
          <div class="philosophy-pillars">
            <div class="pillar">
              <div class="pillar-icon">🌾</div>
              <h4>厳選素材</h4>
              <p>国産小麦100%使用</p>
            </div>
            <div class="pillar">
              <div class="pillar-icon">🔥</div>
              <h4>伝統製法</h4>
              <p>24時間煮込みスープ</p>
            </div>
            <div class="pillar">
              <div class="pillar-icon">❤️</div>
              <h4>心のこもった</h4>
              <p>おもてなし精神</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Menu Section -->
    <!-- Showcase of signature ramen dishes with detailed descriptions -->
    <section class="featured-menu" id="menu">
      <div class="container">
        <h2 class="section-title">
          <span class="title-jp">こだわりのメニュー</span>
          <span class="title-en">Signature Ramen Collection</span>
        </h2>
        <!-- Introduction to the menu collection -->
        <div class="menu-intro">
          <p>三代に渡り受け継がれる秘伝のレシピと現代の技術が融合した、当店自慢のラーメンコレクション。各々が独自の個性と深い味わいを持つ、職人魂の結晶です。</p>
        </div>
        <!-- Grid layout displaying different ramen options -->
        <div class="menu-grid">
          <!-- Most popular dish - Shoyu Ramen -->
          <div class="menu-item featured">
            <div class="menu-badge">人気No.1</div>
            <div class="menu-image">
              <img src="https://images.unsplash.com/photo-1555126634-323283e090fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="醤油ラーメン - Shoyu Ramen Bowl" />
            </div>
            <h3>醤油ラーメン</h3>
            <p class="menu-desc">伝統的な醤油ベースのスープに手打ち麺。鶏ガラと野菜の旨味が調和した、当店創業以来の看板メニュー。</p>
            <!-- Flavor profile indicators -->
            <div class="menu-details">
              <span class="spice-level">辛さ: ★☆☆</span>
              <span class="richness">濃厚度: ★★☆</span>
            </div>
            <span class="price">¥850</span>
          </div>
          <!-- Miso Ramen option -->
          <div class="menu-item">
            <div class="menu-image">
              <img src="https://images.unsplash.com/photo-1623341214825-9f4f963727da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="味噌ラーメン - Miso Ramen Bowl" />
            </div>
            <h3>味噌ラーメン</h3>
            <p class="menu-desc">信州産味噌を使用した濃厚スープと特製チャーシュー。コクと旨味が絶妙に調和した北海道スタイルの逸品。</p>
            <div class="menu-details">
              <span class="spice-level">辛さ: ★★☆</span>
              <span class="richness">濃厚度: ★★★</span>
            </div>
            <span class="price">¥950</span>
          </div>
          <!-- Premium Tonkotsu Ramen -->
          <div class="menu-item premium">
            <div class="menu-badge">プレミアム</div>
            <div class="menu-image">
              <img src="https://images.unsplash.com/photo-1591814468924-caf88d1232e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="豚骨ラーメン - Tonkotsu Ramen Bowl" />
            </div>
            <h3>豚骨ラーメン</h3>
            <p class="menu-desc">24時間煮込んだ濃厚豚骨スープ。九州直送の豚骨を使用し、職人が丁寧に作り上げた至極の白湯スープ。</p>
            <div class="menu-details">
              <span class="spice-level">辛さ: ★☆☆</span>
              <span class="richness">濃厚度: ★★★</span>
            </div>
            <span class="price">¥1,050</span>
          </div>
          <!-- Light and refined Shio Ramen -->
          <div class="menu-item">
            <div class="menu-image">
              <img src="https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="塩ラーメン - Shio Ramen Bowl" />
            </div>
            <h3>塩ラーメン</h3>
            <p class="menu-desc">あっさりとした塩味で素材本来の旨味を活かした清湯スープ。上品な味わいが特徴の、玄人好みの一杯。</p>
            <div class="menu-details">
              <span class="spice-level">辛さ: ☆☆☆</span>
              <span class="richness">濃厚度: ★☆☆</span>
            </div>
            <span class="price">¥800</span>
          </div>
          <!-- New style Tsukemen -->
          <div class="menu-item new">
            <div class="menu-badge">新作</div>
            <div class="menu-image">
              <img src="https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="つけ麺 - Tsukemen" />
            </div>
            <h3>つけ麺</h3>
            <p class="menu-desc">濃厚スープに太麺をつけて味わう新感覚スタイル。魚介と豚骨の旨味が凝縮された、食べ応え抜群の逸品。</p>
            <div class="menu-details">
              <span class="spice-level">辛さ: ★★☆</span>
              <span class="richness">濃厚度: ★★★</span>
            </div>
            <span class="price">¥1,200</span>
          </div>
          <!-- Special Chashu Ramen with extra pork -->
          <div class="menu-item special">
            <div class="menu-badge">特製</div>
            <div class="menu-image">
              <img src="https://images.unsplash.com/photo-1617093727343-374698b1b08d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="チャーシュー麺 - Chashu Ramen" />
            </div>
            <h3>チャーシュー麺</h3>
            <p class="menu-desc">特製チャーシューをたっぷりのせた贅沢な一杯。柔らかく煮込んだ豚肉の旨味がスープに溶け込んだ至福の味わい。</p>
            <div class="menu-details">
              <span class="spice-level">辛さ: ★☆☆</span>
              <span class="richness">濃厚度: ★★★</span>
            </div>
            <span class="price">¥1,350</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Customer Reviews Section -->
    <!-- Display authentic customer testimonials to build trust -->
    <section class="reviews">
      <div class="container">
        <h2 class="section-title">
          <span class="title-jp">お客様の声</span>
          <span class="title-en">Customer Testimonials</span>
        </h2>
        <!-- Introduction explaining the testimonials -->
        <div class="reviews-intro">
          <p>70年以上に渡り、多くのお客様に愛され続けている当店。皆様からいただいた温かいお言葉をご紹介いたします。</p>
        </div>
        <!-- Grid of customer review cards -->
        <div class="reviews-grid">
          <!-- Featured review from long-time customer -->
          <div class="review-card featured-review">
            <div class="reviewer-info">
              <div class="reviewer-avatar">田</div>
              <div class="reviewer-details">
                <div class="reviewer-name">田中 健一さん</div>
                <div class="reviewer-type">常連客 - 15年</div>
              </div>
            </div>
            <div class="stars">★★★★★</div>
            <p>"学生時代から通い続けて15年。変わらぬ味と温かいおもてなしに、いつも心が癒されます。特に豚骨ラーメンのスープは他では味わえない深い旨味があります。家族のような存在のお店です。"</p>
            <div class="review-date">2024年12月</div>
          </div>
          <!-- Review from food blogger -->
          <div class="review-card">
            <div class="reviewer-info">
              <div class="reviewer-avatar">佐</div>
              <div class="reviewer-details">
                <div class="reviewer-name">佐藤 美咲さん</div>
                <div class="reviewer-type">グルメブロガー</div>
              </div>
            </div>
            <div class="stars">★★★★★</div>
            <p>"プロの目から見ても、ここまで完成度の高いラーメンはなかなかありません。特製チャーシューの柔らかさ、麺の食感、すべてが調和した芸術品のような一杯です。"</p>
            <div class="review-date">2024年11月</div>
          </div>
          <!-- Review from culinary professional -->
          <div class="review-card">
            <div class="reviewer-info">
              <div class="reviewer-avatar">鈴</div>
              <div class="reviewer-details">
                <div class="reviewer-name">鈴木 翔太さん</div>
                <div class="reviewer-type">料理研究家</div>
              </div>
            </div>
            <div class="stars">★★★★☆</div>
            <p>"職人の技術と愛情が込められた手打ち麺は絶品です。伝統を守りながらも革新を続ける姿勢に敬服します。つけ麺は特に素晴らしく、新しいラーメン体験でした。"</p>
            <div class="review-date">2024年10月</div>
          </div>
          <!-- Review from local family customer -->
          <div class="review-card">
            <div class="reviewer-info">
              <div class="reviewer-avatar">山</div>
              <div class="reviewer-details">
                <div class="reviewer-name">山田 花子さん</div>
                <div class="reviewer-type">地元住民</div>
              </div>
            </div>
            <div class="stars">★★★★★</div>
            <p>"子供の頃から家族でお世話になっています。今では私の子供も一緒に通っています。三世代で愛され続ける味は、まさに地域の宝物です。"</p>
            <div class="review-date">2024年12月</div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <!-- Restaurant's history, heritage, and craftsmanship details -->
    <section class="about" id="about">
      <div class="container">
        <div class="about-content">
          <div class="about-text">
            <h2 class="section-title">
              <span class="title-jp">私たちの物語</span>
              <span class="title-en">Our Heritage Story</span>
            </h2>
            <!-- Timeline showing restaurant's evolution through three generations -->
            <div class="story-timeline">
              <!-- First generation - founding -->
              <div class="timeline-item">
                <div class="timeline-year">1952年</div>
                <div class="timeline-content">
                  <h4>創業</h4>
                  <p>初代店主・山田太郎が東京下町で小さなラーメン屋台から始まりました。戦後復興の中、人々に温かい一杯を提供したいという想いから始まった小さな夢でした。</p>
                </div>
              </div>
              <!-- Second generation - evolution -->
              <div class="timeline-item">
                <div class="timeline-year">1978年</div>
                <div class="timeline-content">
                  <h4>二代目継承</h4>
                  <p>息子の山田次郎が店を継承し、伝統の味を守りながら新しい技術を取り入れました。この時期に現在の看板メニューである豚骨ラーメンが完成しました。</p>
                </div>
              </div>
              <!-- Third generation - modernization -->
              <div class="timeline-item">
                <div class="timeline-year">2010年</div>
                <div class="timeline-content">
                  <h4>三代目始動</h4>
                  <p>現店主・山田三郎が三代目として就任。フランス料理での修行経験を活かし、伝統を保ちながらモダンな要素を融合させた新しいらーめんスタイルを確立しました。</p>
                </div>
              </div>
            </div>
            <!-- Detailed craftsmanship information -->
            <div class="craftsmanship">
              <h3>職人のこだわり</h3>
              <!-- Four key aspects of the restaurant's craftsmanship -->
              <div class="craft-points">
                <div class="craft-point">
                  <strong>自家製麺:</strong> 国産小麦100%使用、毎朝手打ちで作る自慢の麺
                </div>
                <div class="craft-point">
                  <strong>スープ:</strong> 24時間以上かけて丁寧に煮込む秘伝のスープ
                </div>
                <div class="craft-point">
                  <strong>チャーシュー:</strong> 3日間かけて仕込む、とろける食感の特製チャーシュー
                </div>
                <div class="craft-point">
                  <strong>野菜:</strong> 地元農家直送の新鮮野菜を毎日厳選
                </div>
              </div>
            </div>
          </div>
          <!-- Visual representation of the restaurant -->
          <div class="about-image">
            <div class="chef-illustration">👨‍🍳</div>
            <!-- Key statistics about the restaurant -->
            <div class="about-stats">
              <div class="stat-item">
                <span class="stat-number">3</span>
                <span class="stat-label">世代</span>
              </div>
              <div class="stat-item">
                <span class="stat-number">70+</span>
                <span class="stat-label">年の歴史</span>
              </div>
              <div class="stat-item">
                <span class="stat-number">100%</span>
                <span class="stat-label">手作り</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <!-- Contact information and business details -->
    <footer class="footer" id="contact">
      <div class="container">
        <div class="footer-content">
          <!-- Restaurant name and address -->
          <div class="footer-section">
            <h3>らーめん丼</h3>
            <p>〒100-0001<br>東京都千代田区千代田1-1-1</p>
          </div>
          <!-- Operating hours -->
          <div class="footer-section">
            <h3>営業時間</h3>
            <p>月〜金: 11:00 - 22:00<br>土日祝: 10:00 - 23:00</p>
          </div>
          <!-- Contact information -->
          <div class="footer-section">
            <h3>お問い合わせ</h3>
            <p>TEL: 03-1234-5678<br>Email: info@ramenbowl.jp</p>
          </div>
        </div>
        <!-- Copyright notice -->
        <div class="footer-bottom">
          <p>&copy; 2025 らーめん丼 Ramen Bowl. All rights reserved.</p>
        </div>
      </div>
    </footer>
    
    <!-- Scroll to Top Button -->
    <!-- Fixed position button for easy navigation back to top -->
    <button class="scroll-to-top" id="scrollToTop">
      ↑
    </button>
  `
}

/**
 * Initialize the application
 * This function call renders the complete Ramen Bowl website
 */
createRamenHouseApp()

/**
 * Smooth scrolling navigation handler
 * Handles click events on navigation links to provide smooth scrolling to sections
 * 
 * @param {Event} e - The click event object
 */
document.addEventListener('click', (e) => {
  const target = e.target as HTMLElement
  // Check if clicked element is an anchor link with hash reference
  if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
    e.preventDefault()
    const targetId = target.getAttribute('href')?.substring(1)
    const targetElement = document.getElementById(targetId || '')
    if (targetElement) {
      // Smooth scroll to the target section
      targetElement.scrollIntoView({ behavior: 'smooth' })
    }
  }
})

/**
 * Call-to-action button functionality
 * Handles the "View Menu" button click to scroll to menu section
 * 
 * @param {Event} e - The click event object
 */
document.addEventListener('click', (e) => {
  const target = e.target as HTMLElement
  // Check if the clicked element is the CTA button
  if (target.classList.contains('cta-button')) {
    const menuSection = document.querySelector('.featured-menu')
    if (menuSection) {
      // Smooth scroll to the menu section
      menuSection.scrollIntoView({ behavior: 'smooth' })
    }
  }
})

/**
 * Scroll to top button functionality
 * Manages the visibility and behavior of the scroll-to-top button
 */
const scrollToTopBtn = document.getElementById('scrollToTop')
if (scrollToTopBtn) {
  /**
   * Show/hide scroll to top button based on scroll position
   * Button becomes visible when user scrolls down 300px or more
   */
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollToTopBtn.classList.add('visible')
    } else {
      scrollToTopBtn.classList.remove('visible')
    }
  })

  /**
   * Scroll to top when button is clicked
   * Provides smooth animation back to the top of the page
   */
  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  })
}

/**
 * Mobile menu functionality
 * Initializes and manages the responsive mobile navigation menu
 * 
 * Features:
 * - Toggle menu open/close on hamburger button click
 * - Close menu when navigation link is clicked
 * - Close menu when clicking outside the menu area
 * 
 * @returns {void} No return value
 */
function initMobileMenu(): void {
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle')
  const navMenu = document.querySelector('.nav-menu')
  const navLinks = document.querySelectorAll('.nav-menu a')

  // Log elements for debugging purposes
  console.log('Mobile menu elements:', { mobileMenuToggle, navMenu, navLinks })

  if (mobileMenuToggle && navMenu) {
    /**
     * Toggle mobile menu visibility
     * Adds/removes 'active' class to show/hide the mobile menu
     */
    mobileMenuToggle.addEventListener('click', () => {
      console.log('Mobile menu toggle clicked')
      mobileMenuToggle.classList.toggle('active')
      navMenu.classList.toggle('active')
    })

    /**
     * Close mobile menu when clicking on any navigation link
     * Improves user experience by automatically closing menu after selection
     */
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenuToggle.classList.remove('active')
        navMenu.classList.remove('active')
      })
    })

    /**
     * Close mobile menu when clicking outside the menu area
     * Provides intuitive interaction behavior for mobile users
     */
    document.addEventListener('click', (e) => {
      if (!mobileMenuToggle.contains(e.target as Node) && 
          !navMenu.contains(e.target as Node)) {
        mobileMenuToggle.classList.remove('active')
        navMenu.classList.remove('active')
      }
    })
  } else {
    console.error('Mobile menu elements not found!')
  }
}

/**
 * Initialize mobile menu on page load
 * Ensures mobile navigation is ready when the page loads
 */
initMobileMenu()
