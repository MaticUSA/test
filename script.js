// NEED HELP? JOIN FOR SUPPORT: https://discord.gg/heu5cEjnHA

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function () {
    // Loading Screen
    const loadingScreen = document.querySelector('.loading-screen');
    window.addEventListener('load', () => {
        setTimeout(() => {
            if (loadingScreen) {
                loadingScreen.classList.add('hidden');
            }
        }, 500);
    });

    // Custom Cursor
    const cursor = document.querySelector('.custom-cursor');

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';

        // Check if cursor is over a dark section
        const element = document.elementFromPoint(e.clientX, e.clientY);
        if (element) {
            const darkSections = element.closest('.status-section, .gallery-section, .join-section, .loading-screen');
            if (darkSections) {
                cursor.classList.add('white');
            } else {
                cursor.classList.remove('white');
            }
        }
    });

    // Cursor hover effect on interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .menu-icon, .language-selector');

    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('hover');
        });

        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
        });
    });

    // Apply Configuration
    if (typeof CONFIG !== 'undefined') {
        applyConfig();
    }

    // Mobile Menu Toggle
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
    const mobileMenuClose = document.getElementById('mobileMenuClose');
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');

    function openMobileMenu() {
        mobileMenu.classList.add('active');
        mobileMenuOverlay.classList.add('active');
        mobileMenuToggle.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeMobileMenu() {
        mobileMenu.classList.remove('active');
        mobileMenuOverlay.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', openMobileMenu);
    }

    if (mobileMenuClose) {
        mobileMenuClose.addEventListener('click', closeMobileMenu);
    }

    if (mobileMenuOverlay) {
        mobileMenuOverlay.addEventListener('click', closeMobileMenu);
    }

    // Close menu when clicking on a link - will be re-attached after config loads
    function attachMobileMenuCloseListeners() {
        const links = document.querySelectorAll('.mobile-menu-link');
        links.forEach(link => {
            // Remove existing listener if any
            link.removeEventListener('click', closeMobileMenu);
            // Add new listener
            link.addEventListener('click', () => {
                closeMobileMenu();
            });
        });
    }
    
    // Initial attachment
    if (mobileMenuLinks.length > 0) {
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });
    }

    // Navigation smooth scroll - only for same-page anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            // Only intercept same-page anchors (just #section, not page.html#section)
            if (href.startsWith('#') && !href.includes('.')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
            // External links (like index.html or index.html#join) work normally
        });
    });

    // Side navigation dots interaction
    const navDots = document.querySelectorAll('.nav-dot');
    const sections = document.querySelectorAll('section[id]');

    // Update active dot on scroll
    function updateActiveDot() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navDots.forEach((dot, index) => {
            dot.classList.remove('active');
            if (index === 0 && current === 'home') {
                dot.classList.add('active');
            } else if (index === 1 && current === 'about') {
                dot.classList.add('active');
            } else if (index === 2 && current === 'server') {
                dot.classList.add('active');
            } else if (index === 3 && current === 'join') {
                dot.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveDot);
    updateActiveDot();

    // Nav dot click handlers
    navDots.forEach(dot => {
        dot.addEventListener('click', () => {
            const section = dot.getAttribute('data-section');
            if (section) {
                document.querySelector(`#${section}`)?.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Parallax effect for background text
    window.addEventListener('scroll', () => {
        const bgText = document.querySelector('.bg-text');
        if (bgText) {
            const scrolled = window.pageYOffset;
            bgText.style.transform = `translate(-50%, ${-50 + scrolled * 0.1}%)`;
        }
    });

    // Character image subtle animation
    const characterImage = document.querySelector('.character-image');
    if (characterImage) {
        window.addEventListener('mousemove', (e) => {
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;
            const xPos = (clientX / innerWidth - 0.5) * 20;
            const yPos = (clientY / innerHeight - 0.5) * 20;
            characterImage.style.transform = `translate(${xPos}px, ${yPos}px)`;
        });
    }

    // Navbar Copy Button
    const navCopyBtn = document.getElementById('navCopyBtn');
    if (navCopyBtn) {
        navCopyBtn.addEventListener('click', () => {
            const serverIp = document.querySelector('.nav-ip-text').textContent;
            navigator.clipboard.writeText(serverIp).then(() => {
                // Show copied feedback
                const originalHTML = navCopyBtn.innerHTML;
                navCopyBtn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>`;
                navCopyBtn.style.color = 'var(--primary-red)';

                setTimeout(() => {
                    navCopyBtn.innerHTML = originalHTML;
                    navCopyBtn.style.color = '';
                }, 1500);
            }).catch(err => {
                console.error('Failed to copy: ', err);
            });
        });
    }
});

function applyConfig() {
    // 1. COLORS
    const root = document.documentElement;
    root.style.setProperty('--primary-red', CONFIG.colors.primary);
    root.style.setProperty('--paper', CONFIG.colors.background);
    root.style.setProperty('--black', CONFIG.colors.text);
    root.style.setProperty('--light-gray', CONFIG.colors.secondaryText);
    root.style.setProperty('--white', CONFIG.colors.white);

    // 2. GENERAL
    document.title = CONFIG.general.pageTitle;
    
    // Logo - update from config if needed
    const logoElements = document.querySelectorAll('.nav-left .logo, .nav-left .logo-link, .nav-left a, .mobile-menu-header .logo');
    logoElements.forEach(logoElement => {
        if (logoElement && CONFIG.general) {
            if (CONFIG.general.logoImage) {
                logoElement.innerHTML = `<img src="${CONFIG.general.logoImage}" alt="${CONFIG.general.logoText || 'Logo'}">`;
            } else if (CONFIG.general.logoText) {
                logoElement.textContent = CONFIG.general.logoText;
            }
        }
        // Ensure nav-left logo is a link (mobile menu logo stays as div)
        if (logoElement.closest('.nav-left') && logoElement.tagName !== 'A') {
            const logoLink = document.createElement('a');
            logoLink.href = 'index.html';
            logoLink.className = 'logo-link';
            logoLink.innerHTML = logoElement.innerHTML || logoElement.textContent;
            logoElement.parentNode.replaceChild(logoLink, logoElement);
        } else if (logoElement.closest('.nav-left')) {
            logoElement.href = logoElement.href || 'index.html';
            logoElement.className = 'logo-link';
        }
    });

    // Server IP
    const navIpText = document.querySelector('.nav-ip-text');
    if (navIpText && CONFIG.general.serverIp) {
        navIpText.textContent = CONFIG.general.serverIp;
    }

    // Hide/Show navbar links based on enabled status
    const jobsLinks = document.querySelectorAll('.nav-center a[href*="jobs.html"], .mobile-menu-nav a[href*="jobs.html"]');
    const staffLinks = document.querySelectorAll('.nav-center a[href*="staff.html"], .mobile-menu-nav a[href*="staff.html"]');
    
    if (CONFIG.jobs && CONFIG.jobs.enabled === false) {
        jobsLinks.forEach(link => {
            if (link) link.style.display = 'none';
        });
    }
    
    if (CONFIG.staff && CONFIG.staff.enabled === false) {
        staffLinks.forEach(link => {
            if (link) link.style.display = 'none';
        });
    }

    // Mobile menu close handler - attach to all mobile menu links
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            const mobileMenu = document.getElementById('mobileMenu');
            const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
            const mobileMenuToggle = document.getElementById('mobileMenuToggle');
            if (mobileMenu) mobileMenu.classList.remove('active');
            if (mobileMenuOverlay) mobileMenuOverlay.classList.remove('active');
            if (mobileMenuToggle) mobileMenuToggle.classList.remove('active');
            document.body.style.overflow = '';
        });
    });


    // 3. HERO SECTION
    const heroLabel = document.querySelector('.hero-label');
    if (heroLabel) heroLabel.textContent = CONFIG.hero.label;

    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) heroTitle.textContent = CONFIG.hero.title;

    const heroDesc = document.querySelector('.hero-description');
    if (heroDesc) heroDesc.textContent = CONFIG.hero.description;

    const heroBtnPrimary = document.querySelector('.hero-actions .btn-primary');
    if (heroBtnPrimary) {
        heroBtnPrimary.textContent = CONFIG.hero.primaryButtonText;
        heroBtnPrimary.href = CONFIG.hero.primaryButtonLink;
    }

    const heroBtnSecondary = document.querySelector('.hero-actions .btn-secondary');
    if (heroBtnSecondary) {
        heroBtnSecondary.textContent = CONFIG.hero.secondaryButtonText;
        heroBtnSecondary.href = CONFIG.hero.secondaryButtonLink;
    }

    const heroFeatures = document.querySelectorAll('.hero-features .feature-item');
    if (heroFeatures.length === CONFIG.hero.features.length) {
        heroFeatures.forEach((item, index) => {
            const label = item.querySelector('.feature-label');
            const value = item.querySelector('.feature-value');
            if (label) label.textContent = CONFIG.hero.features[index].label;
            if (value) value.textContent = CONFIG.hero.features[index].value;
        });
    }

    const charImg = document.querySelector('.character-image');
    if (charImg) charImg.src = CONFIG.hero.characterImage;

    // SHOWCASE SECTION
    const showcaseSection = document.querySelector('.showcase-section');
    if (CONFIG.showcase && CONFIG.showcase.enabled !== false) {
        if (showcaseSection) showcaseSection.style.display = 'block';

        const showcaseTitle = document.querySelector('.showcase-title');
        if (showcaseTitle) showcaseTitle.textContent = CONFIG.showcase.title;

        const showcaseDesc = document.querySelector('.showcase-description');
        if (showcaseDesc) showcaseDesc.textContent = CONFIG.showcase.description;

        const showcaseLink = document.querySelector('#showcaseVideoLink');
        const showcaseThumbnail = document.querySelector('#showcaseThumbnail');
        
        if (showcaseLink && showcaseThumbnail && CONFIG.showcase.videoUrl && CONFIG.showcase.videoUrl.trim()) {
            const videoUrl = CONFIG.showcase.videoUrl.trim();
            
            // Extract video ID from URL
            const match = videoUrl.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/);
            if (match && match[1]) {
                const videoId = match[1];
                
                // Set YouTube video URL
                showcaseLink.href = videoUrl;
                
                // Set YouTube thumbnail (maxresdefault for highest quality)
                showcaseThumbnail.src = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
                showcaseThumbnail.alt = `Watch video on YouTube`;
                
                // Fallback to default thumbnail if maxresdefault doesn't exist
                showcaseThumbnail.onerror = function() {
                    this.src = `https://img.youtube.com/vi/${videoId}/0.jpg`;
                };
            }
        } else {
            // Hide showcase if no video URL
            if (showcaseLink) {
                showcaseLink.style.display = 'none';
            }
        }
    } else {
        if (showcaseSection) showcaseSection.style.display = 'none';
    }

    // 4. SOCIAL SECTION
    const socialLabel = document.querySelector('.social-label');
    if (socialLabel) socialLabel.textContent = CONFIG.social.label;

    const socialTitle = document.querySelector('.social-title');
    if (socialTitle) socialTitle.textContent = CONFIG.social.title;

    const socialGrid = document.querySelector('.social-grid');
    if (socialGrid) {
        socialGrid.innerHTML = ''; // Clear existing

        const SOCIAL_ICONS = {
            "DISCORD": `<svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9.5 8.5c0 .8-.7 1.5-1.5 1.5S6.5 9.3 6.5 8.5 7.2 7 8 7s1.5.7 1.5 1.5zM17.5 8.5c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5S15.2 7 16 7s1.5.7 1.5 1.5z" />
                <path d="M20.3 3.7C17.4 2 14 2 12 2s-5.4 0-8.3 1.7C1.5 5.3 0 9.6 0 14c0 2.2.7 4.2 2 5.7.5.6 1.5.9 2.3.6l1.5-.6c.8 1.1 2 1.8 3.2 1.8h6c1.2 0 2.4-.7 3.2-1.8l1.5.6c.8.3 1.8 0 2.3-.6 1.3-1.5 2-3.5 2-5.7 0-4.4-1.5-8.7-3.7-10.3z" />
            </svg>`,
            "TWITTER": `<svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
            </svg>`,
            "TIKTOK": `<svg width="50" height="50" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
            </svg>`,
            "INSTAGRAM": `<svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>`,
            "YOUTUBE": `<svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
            </svg>`
        };

        // Default icon if not found
        const DEFAULT_ICON = `<svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
        </svg>`;

        CONFIG.social.cards.forEach((card, index) => {
            const rotation = [-0.5, 0.3, 0.4, -0.3][index % 4];
            const div = document.createElement('div');
            div.className = 'social-card';
            div.style.transform = `rotate(${rotation}deg)`;

            const iconSvg = SOCIAL_ICONS[card.name.toUpperCase()] || DEFAULT_ICON;

            div.innerHTML = `
                <div class="social-icon">
                    ${iconSvg}
                </div>
                <div class="social-info">
                    <h3 class="social-name">${card.name}</h3>
                    <a href="${card.link}" class="social-link">${card.buttonText}</a>
                </div>
            `;
            socialGrid.appendChild(div);
        });
    }

    // 5. SERVER STATUS
    const statusLabel = document.querySelector('.status-card.main-status .status-label');
    if (statusLabel) statusLabel.textContent = CONFIG.status.label;

    const statusValue = document.querySelector('.status-card.main-status .status-value');
    if (statusValue) statusValue.textContent = CONFIG.status.value;

    const statusItems = document.querySelectorAll('.status-item');
    if (statusItems.length >= 2) {
        statusItems[0].querySelector('.status-key').textContent = CONFIG.status.playersLabel;
        statusItems[0].querySelector('.status-val').textContent = CONFIG.status.playersValue;
        statusItems[1].querySelector('.status-key').textContent = CONFIG.status.queueLabel;
        statusItems[1].querySelector('.status-val').textContent = CONFIG.status.queueValue;
    }

    const statusCards = document.querySelectorAll('.status-card:not(.main-status)');
    if (statusCards.length === CONFIG.status.cards.length) {
        statusCards.forEach((card, index) => {
            const num = card.querySelector('.status-number');
            const txt = card.querySelector('.status-text');
            if (num) num.textContent = CONFIG.status.cards[index].number;
            if (txt) txt.textContent = CONFIG.status.cards[index].text;
        });
    }

    // 6. ABOUT SECTION
    const aboutLabel = document.querySelector('.about-label');
    if (aboutLabel) aboutLabel.textContent = CONFIG.about.label;

    const aboutTitle = document.querySelector('.about-title');
    if (aboutTitle) aboutTitle.textContent = CONFIG.about.title;

    const aboutTexts = document.querySelectorAll('.about-text-content');
    if (aboutTexts.length >= 2) {
        aboutTexts[0].textContent = CONFIG.about.paragraph1;
        aboutTexts[1].textContent = CONFIG.about.paragraph2;
    }

    const aboutStats = document.querySelectorAll('.about-stat');
    if (aboutStats.length === CONFIG.about.stats.length) {
        aboutStats.forEach((stat, index) => {
            stat.querySelector('.stat-num').textContent = CONFIG.about.stats[index].number;
            stat.querySelector('.stat-text').textContent = CONFIG.about.stats[index].text;
        });
    }

    const aboutBoxTitle = document.querySelector('.about-highlight-box h3');
    if (aboutBoxTitle) aboutBoxTitle.textContent = CONFIG.about.boxTitle;

    const aboutList = document.querySelector('.about-list');
    if (aboutList) {
        aboutList.innerHTML = '';
        CONFIG.about.boxList.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            aboutList.appendChild(li);
        });
    }

    // 7. HOW TO JOIN
    const howtoSubtitle = document.querySelector('.howto-subtitle');
    if (howtoSubtitle) howtoSubtitle.textContent = CONFIG.howto.subtitle;

    const howtoTitle = document.querySelector('.howto-title');
    if (howtoTitle) howtoTitle.textContent = CONFIG.howto.title;

    const howtoTimeline = document.querySelector('.howto-timeline');
    if (howtoTimeline) {
        howtoTimeline.innerHTML = '';
        CONFIG.howto.steps.forEach(step => {
            const div = document.createElement('div');
            div.className = 'timeline-item';
            div.innerHTML = `
                <div class="timeline-marker">${step.number}</div>
                <div class="timeline-content">
                    <h3>${step.title}</h3>
                    <p>${step.description}</p>
                </div>
            `;
            howtoTimeline.appendChild(div);
        });
    }

    // 8. FEATURES
    const featuresTitle = document.querySelector('.features-title');
    if (featuresTitle) featuresTitle.textContent = CONFIG.features.title;

    const featuresSubtitle = document.querySelector('.features-subtitle');
    if (featuresSubtitle) featuresSubtitle.textContent = CONFIG.features.subtitle;

    const mainFeatureTitle = document.querySelector('.feature-card-large h3');
    if (mainFeatureTitle) mainFeatureTitle.textContent = CONFIG.features.mainFeature.title;

    const mainFeatureDesc = document.querySelector('.feature-card-large p');
    if (mainFeatureDesc) mainFeatureDesc.textContent = CONFIG.features.mainFeature.description;

    // We need to handle the smaller feature cards. The HTML has 1 large and 5 small.
    // The config has 1 main and a list of 5.
    // We'll target the small cards.
    const featureCards = document.querySelectorAll('.feature-card');
    if (featureCards.length === CONFIG.features.list.length) {
        featureCards.forEach((card, index) => {
            card.querySelector('h3').textContent = CONFIG.features.list[index].title;
            card.querySelector('p').textContent = CONFIG.features.list[index].description;
        });
    }

    // 9. GALLERY
    const galleryLabel = document.querySelector('.gallery-left .gallery-label');
    if (galleryLabel) galleryLabel.textContent = CONFIG.gallery.label;

    const galleryTitle = document.querySelector('.gallery-title');
    if (galleryTitle) galleryTitle.textContent = CONFIG.gallery.title;

    const galleryDesc = document.querySelector('.gallery-description');
    if (galleryDesc) galleryDesc.textContent = CONFIG.gallery.description;

    const galleryItems = document.querySelectorAll('.gallery-item');
    if (galleryItems.length === CONFIG.gallery.images.length) {
        galleryItems.forEach((item, index) => {
            const img = item.querySelector('img');
            const label = item.querySelector('.gallery-label');
            if (img) img.src = CONFIG.gallery.images[index].src;
            if (label) label.textContent = CONFIG.gallery.images[index].label;
        });
    }

    const galleryLeftImg = document.querySelector('.gallery-left-image');
    if (galleryLeftImg && CONFIG.gallery.leftImage) {
        galleryLeftImg.src = CONFIG.gallery.leftImage;
    }

    // 10. NEWS
    const newsDate = document.querySelector('.news-date');
    if (newsDate) newsDate.textContent = CONFIG.news.date;

    const newsTitle = document.querySelector('.news-title');
    if (newsTitle) newsTitle.textContent = CONFIG.news.title;

    // Main Article
    const mainArticle = document.querySelector('.news-article.main-article');
    if (mainArticle) {
        mainArticle.querySelector('img').src = CONFIG.news.mainArticle.image;
        mainArticle.querySelector('.article-badge').textContent = CONFIG.news.mainArticle.badge;
        mainArticle.querySelector('.article-category').textContent = CONFIG.news.mainArticle.category;
        mainArticle.querySelector('.article-headline').textContent = CONFIG.news.mainArticle.headline;
        mainArticle.querySelector('.article-excerpt').textContent = CONFIG.news.mainArticle.excerpt;
        mainArticle.querySelector('.article-author').textContent = CONFIG.news.mainArticle.author;
        mainArticle.querySelector('.article-time').textContent = CONFIG.news.mainArticle.time;
    }

    // Side Articles
    const sideArticles = document.querySelectorAll('.news-sidebar .news-item');
    if (sideArticles.length === CONFIG.news.sideArticles.length) {
        sideArticles.forEach((item, index) => {
            const img = item.querySelector('img');
            if (img && CONFIG.news.sideArticles[index].image) img.src = CONFIG.news.sideArticles[index].image;

            item.querySelector('.news-item-category').textContent = CONFIG.news.sideArticles[index].category;
            item.querySelector('h4').textContent = CONFIG.news.sideArticles[index].headline;
            item.querySelector('.news-item-time').textContent = CONFIG.news.sideArticles[index].time;
        });
    }

    // 11. INFO
    const infoLeft = document.querySelector('.info-block-left');
    if (infoLeft) {
        infoLeft.querySelector('.info-label').textContent = CONFIG.info.leftBlock.label;
        infoLeft.querySelector('.info-text').textContent = CONFIG.info.leftBlock.text;
    }

    const infoRight = document.querySelector('.info-block-right');
    if (infoRight) {
        infoRight.querySelector('.info-label').textContent = CONFIG.info.rightBlock.label;
        infoRight.querySelector('.info-text').textContent = CONFIG.info.rightBlock.text;
    }

    // 12. JOIN
    const joinTitle = document.querySelector('.join-title');
    if (joinTitle) joinTitle.textContent = CONFIG.join.title;

    const joinText = document.querySelector('.join-text');
    if (joinText) joinText.textContent = CONFIG.join.text;

    const joinBtns = document.querySelectorAll('.join-actions a');
    if (joinBtns.length >= 2) {
        joinBtns[0].textContent = CONFIG.join.discordButton;
        joinBtns[0].href = CONFIG.join.discordLink || "#";
        joinBtns[1].textContent = CONFIG.join.infoButton;
        joinBtns[1].href = CONFIG.join.infoLink || "#";
    }


    // 13. FOOTER
    const footerLogo = document.querySelector('.footer-logo');
    if (footerLogo) footerLogo.textContent = CONFIG.footer.logo;

    const footerText = document.querySelector('.footer-text');
    if (footerText) footerText.textContent = CONFIG.footer.text;

    const footerRight = document.querySelector('.footer-right p');
    if (footerRight) footerRight.textContent = CONFIG.footer.copyright;

    const footerLinks = document.querySelectorAll('.footer-center a');
    if (footerLinks.length === CONFIG.footer.links.length) {
        footerLinks.forEach((link, index) => {
            link.textContent = CONFIG.footer.links[index].text;
            link.href = CONFIG.footer.links[index].url;
        });
    }

    // 14. COPY IP
    const copyBtn = document.getElementById('copyIpBtn');
    const toast = document.getElementById('copyToast');

    if (copyBtn && toast) {
        copyBtn.addEventListener('click', () => {
            const ip = CONFIG.general.serverIp || "play.lsrp.com";
            const msg = CONFIG.general.copyIpMessage || "Copied!";

            navigator.clipboard.writeText(ip).then(() => {
                toast.textContent = msg;
                toast.classList.add('show');
                setTimeout(() => {
                    toast.classList.remove('show');
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy: ', err);
            });
        });
    }
}

// Jobs Page Support
function applyJobsConfig() {
    if (!CONFIG.jobs) return;

    // Jobs Hero Section
    const jobsLabel = document.querySelector('.jobs-label');
    if (jobsLabel) jobsLabel.textContent = CONFIG.jobs.hero.label;

    const jobsTitle = document.querySelector('.jobs-title');
    if (jobsTitle) jobsTitle.textContent = CONFIG.jobs.hero.title;

    const jobsDescription = document.querySelector('.jobs-description');
    if (jobsDescription) jobsDescription.textContent = CONFIG.jobs.hero.description;

    // Function to create job card
    function createJobCard(job) {
        return `
            <div class="job-card">
                <div class="job-image-container">
                    <img src="${job.image}" alt="${job.title}" class="job-image">
                </div>
                <div class="job-content-wrapper">
                    <h3 class="job-title">${job.title}</h3>
                    <div class="job-salary">${job.salary}</div>
                    <p class="job-description">${job.description}</p>
                    <div class="job-details">
                        <div class="job-tags">
                            ${job.tags.map(tag => `<span class="job-tag">${tag}</span>`).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    // Legal Jobs
    const legalSection = document.querySelectorAll('.jobs-category')[0];
    if (legalSection && CONFIG.jobs.legal) {
        legalSection.querySelector('.category-badge').textContent = CONFIG.jobs.legal.badge;
        legalSection.querySelector('.category-title').textContent = CONFIG.jobs.legal.title;
        legalSection.querySelector('.category-description').textContent = CONFIG.jobs.legal.description;

        const legalGrid = legalSection.querySelector('.jobs-grid');
        if (legalGrid) {
            legalGrid.innerHTML = CONFIG.jobs.legal.jobs.map(job => createJobCard(job)).join('');
        }
    }

    // Illegal Jobs
    const illegalSection = document.querySelectorAll('.jobs-category')[1];
    if (illegalSection && CONFIG.jobs.illegal) {
        illegalSection.querySelector('.category-badge').textContent = CONFIG.jobs.illegal.badge;
        illegalSection.querySelector('.category-title').textContent = CONFIG.jobs.illegal.title;
        illegalSection.querySelector('.category-description').textContent = CONFIG.jobs.illegal.description;

        const illegalGrid = illegalSection.querySelector('.jobs-grid');
        if (illegalGrid) {
            illegalGrid.innerHTML = CONFIG.jobs.illegal.jobs.map(job => createJobCard(job)).join('');
        }
    }

    // Services Jobs
    const servicesSection = document.querySelectorAll('.jobs-category')[2];
    if (servicesSection && CONFIG.jobs.services) {
        servicesSection.querySelector('.category-badge').textContent = CONFIG.jobs.services.badge;
        servicesSection.querySelector('.category-title').textContent = CONFIG.jobs.services.title;
        servicesSection.querySelector('.category-description').textContent = CONFIG.jobs.services.description;

        const servicesGrid = servicesSection.querySelector('.jobs-grid');
        if (servicesGrid) {
            servicesGrid.innerHTML = CONFIG.jobs.services.jobs.map(job => createJobCard(job)).join('');
        }
    }

    // CTA Section
    const ctaTitle = document.querySelector('.cta-title');
    if (ctaTitle) ctaTitle.textContent = CONFIG.jobs.cta.title;

    const ctaDescription = document.querySelector('.cta-description');
    if (ctaDescription) ctaDescription.textContent = CONFIG.jobs.cta.description;

    const ctaButton = document.querySelector('.jobs-cta .btn-primary');
    if (ctaButton) {
        ctaButton.textContent = CONFIG.jobs.cta.buttonText;
        ctaButton.href = CONFIG.jobs.cta.buttonLink;
    }
}

// Check if we're on jobs page and apply jobs config
if (document.querySelector('.jobs-hero')) {
    document.addEventListener('DOMContentLoaded', function () {
        if (typeof CONFIG !== 'undefined') {
            applyJobsConfig();
        }
    });
}

// Apply Ticker Configuration
function applyTickerConfig() {
    const tickerWrapper = document.querySelector('.ticker-wrapper');
    if (tickerWrapper && CONFIG.ticker) {
        if (CONFIG.ticker.enabled === false) {
            tickerWrapper.classList.add('hidden');
        } else {
            const tickerContent = document.querySelector('.ticker-content');
            const tickerText = CONFIG.ticker.text || "WELCOME TO LOS SANTOS ROLEPLAY";
            
            // Create a very long repeated text with separator to ensure no gaps
            // Repeat the text many times (50x) to fill the screen continuously
            const separator = " ★ ";
            const repeatedText = Array(50).fill(tickerText).join(separator);
            
            // Clear existing content
            tickerContent.innerHTML = '';
            
            // Create 3 identical spans with the repeated text for seamless infinite scrolling
            for (let i = 0; i < 3; i++) {
                const span = document.createElement('span');
                span.className = 'ticker-text';
                span.textContent = repeatedText;
                tickerContent.appendChild(span);
            }
            
            // Set animation duration if speed is configured
            // Lower speed value = slower animation (more seconds)
            if (CONFIG.ticker.speed) {
                // Convert speed to animation duration
                // Lower speed number = longer duration = slower animation
                // Formula: duration = 960 / (speed / 2.5)
                // speed 2.5 = 960s (~16 min), speed 5 = 480s, speed 10 = 240s
                const baseDuration = 960; // Base duration for very slow readable speed
                const speedRatio = CONFIG.ticker.speed / 2.5; // Normalize to base speed of 2.5
                const duration = baseDuration / speedRatio;
                tickerContent.style.animationDuration = `${Math.max(480, Math.min(1600, duration))}s`;
            } else {
                // Default very slow speed if not configured
                tickerContent.style.animationDuration = `960s`;
            }
        }
    }
}

// Call ticker config on load
if (typeof CONFIG !== 'undefined' && CONFIG.ticker) {
    document.addEventListener('DOMContentLoaded', applyTickerConfig);
}
