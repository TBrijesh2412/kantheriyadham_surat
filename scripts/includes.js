/**
 * site-wide loader injection
 */
(function() {
    const loaderHTML = `
    <div id="kh-site-loader" class="kh-loader-wrap">
        <div class="loader-particles">
            <div class="particle"></div><div class="particle"></div><div class="particle"></div><div class="particle"></div><div class="particle"></div><div class="particle"></div>
            <div class="particle"></div><div class="particle"></div><div class="particle"></div><div class="particle"></div><div class="particle"></div><div class="particle"></div>
            <div class="particle"></div><div class="particle"></div>
        </div>
        <div class="kh-loader-content">
            <div class="om-container">
                <div class="rotating-ring"></div>
                <div class="kh-loader-logo">
                    <img src="./Updated_Img/LOGO.jpg" alt="Logo">
                </div>
            </div>
            <div class="kh-loader-text">
                <span class="kh-brand-top">SHREE</span>
                <span class="kh-brand-main">KANTHERIYADHAM</span>
                <div class="loading-status">
                    <div class="status-dot"></div>
                    <span class="status-text">LOADING...</span>
                </div>
            </div>
        </div>
    </div>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap');
        .kh-loader-wrap { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: radial-gradient(circle at center, #8B1914 0%, #4a0807 100%); display: flex; align-items: center; justify-content: center; z-index: 999999; transition: all 1s cubic-bezier(0.65, 0, 0.35, 1); overflow: hidden; font-family: 'Outfit', sans-serif; }
        .loader-particles { position: absolute; width: 100%; height: 100%; overflow: hidden; pointer-events: none; }
        .loader-particles .particle { position: absolute; width: 6px; height: 6px; background: radial-gradient(circle, #ff9800, #ff6f00); border-radius: 50%; box-shadow: 0 0 8px rgba(255, 152, 0, 0.8), 0 0 15px rgba(255, 152, 0, 0.5); animation: floatParticle 5s infinite ease-in-out; opacity: 0; }
        .loader-particles .particle:nth-child(1) { left: 10%; animation-delay: 0s; animation-duration: 4s; }
        .loader-particles .particle:nth-child(2) { left: 25%; animation-delay: 1s; animation-duration: 5s; }
        .loader-particles .particle:nth-child(3) { left: 40%; animation-delay: 2s; animation-duration: 3.5s; }
        .loader-particles .particle:nth-child(4) { left: 65%; animation-delay: 0.5s; animation-duration: 5.5s; }
        .loader-particles .particle:nth-child(5) { left: 80%; animation-delay: 1.5s; animation-duration: 4.5s; }
        .loader-particles .particle:nth-child(6) { left: 15%; animation-delay: 2.5s; animation-duration: 4.2s; }
        @keyframes floatParticle { 
            0% { transform: translateY(100vh) scale(0.5); opacity: 0; }
            20% { opacity: 1; }
            50% { transform: translateY(50vh) scale(1.2); }
            80% { opacity: 0.7; }
            100% { transform: translateY(-10vh) scale(0.3); opacity: 0; }
        }
        .kh-loader-content { 
            position: relative; 
            width: 100%; 
            height: 100%; 
            display: flex; 
            flex-direction: column; 
            align-items: center; 
            justify-content: center;
            padding: 20px;
            box-sizing: border-box;
        }
        .om-container { 
            position: relative;
            width: 220px; 
            height: 220px; 
            display: flex; 
            align-items: center; 
            justify-content: center; 
            z-index: 10; 
            margin-bottom: 20px;
        }
        .rotating-ring { position: absolute; width: 100%; height: 100%; border: 2px solid transparent; border-top-color: #D48B01; border-bottom-color: #D48B01; border-radius: 50%; animation: rotateRing 3s linear infinite; }
        .rotating-ring::after { content: ''; position: absolute; inset: 15px; border: 1px solid rgba(212, 139, 1, 0.2); border-radius: 50%; }
        @keyframes rotateRing { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .kh-loader-logo { width: 120px; height: 120px; z-index: 2; border-radius: 50%; overflow: hidden; border: 2px solid rgba(212, 139, 1, 0.5); box-shadow: 0 0 30px rgba(212, 139, 1, 0.3); animation: logoPulse 2s ease-in-out infinite; }
        .kh-loader-logo img { width: 100%; height: 100%; object-fit: cover; }
        @keyframes logoPulse { 0%, 100% { transform: scale(1); box-shadow: 0 0 30px rgba(212, 139, 1, 0.3); } 50% { transform: scale(1.05); box-shadow: 0 0 50px rgba(212, 139, 1, 0.5); } }
        .kh-loader-text { 
            position: relative;
            text-align: center; 
            color: white; 
            z-index: 10; 
            display: flex; 
            flex-direction: column; 
            align-items: center; 
        }
        .kh-brand-top { display: block; font-size: 0.9rem; letter-spacing: 8px; font-weight: 300; opacity: 0.7; margin-bottom: 0.5rem; }
        .kh-brand-main { display: block; font-family: 'Outfit', sans-serif; font-size: 2.5rem; font-weight: 900; letter-spacing: 2px; background: linear-gradient(90deg, #fff, #D48B01, #fff); background-size: 200% auto; -webkit-background-clip: text; -webkit-text-fill-color: transparent; animation: shimmer 3s linear infinite; }
        @keyframes shimmer { to { background-position: 200% center; } }
        .loading-status { margin-top: 1.5rem; display: flex; align-items: center; gap: 0.8rem; background: rgba(255, 255, 255, 0.05); padding: 0.6rem 1.2rem; border-radius: 50px; border: 1px solid rgba(255, 255, 255, 0.1); }
        .status-dot { width: 8px; height: 8px; background: #D48B01; border-radius: 50%; box-shadow: 0 0 10px #D48B01; animation: pulseDot 1.5s infinite; }
        @keyframes pulseDot { 0%, 100% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.5); opacity: 0.5; } }
        .status-text { color: rgba(255, 255, 255, 0.6); font-size: 0.8rem; font-weight: 600; letter-spacing: 1px; }
        .kh-loader-wrap.loaded { opacity: 0; visibility: hidden; transform: scale(1.2); }

        @media (max-height: 600px), (max-width: 480px) {
            .om-container { width: 160px; height: 160px; margin-bottom: 10px; }
            .kh-loader-logo { width: 90px; height: 90px; }
            .kh-brand-main { font-size: 1.8rem; }
            .kh-brand-top { font-size: 0.7rem; letter-spacing: 4px; }
            .loading-status { margin-top: 1rem; padding: 0.4rem 1rem; }
        }
    </style>
    `;
    
    // Inject loader
    const container = document.createElement('div');
    container.id = 'kh-loader-container';
    container.innerHTML = loaderHTML;
    
    // Inject as early as possible
    if (document.body) {
        document.body.prepend(container);
    } else {
        document.documentElement.appendChild(container);
    }

    window.addEventListener('load', () => {
        const loader = document.getElementById('kh-site-loader');
        if (loader) {
            loader.classList.add('loaded');
            setTimeout(() => {
                const c = document.getElementById('kh-loader-container');
                if (c) c.remove();
            }, 1100);
        }
    });
})();

/**
 * includes.js — Shared Navbar & Footer Loader
 * Optimized for production: handles animations, timing issues, and URL matching.
 */
(function () {
    /* ── 0. Guard: Prevent double initialization ── */
    if (window.KH_NAV_INITIALIZED) return;
    window.KH_NAV_INITIALIZED = true;

    'use strict';

    /* ── 0.1. Lucide Icons Injection ── */
    (function injectLucide() {
        if (window.lucide) return;
        var script = document.createElement('script');
        script.src = 'https://unpkg.com/lucide@latest';
        script.onload = function() {
            if (window.lucide) window.lucide.createIcons();
        };
        document.head.appendChild(script);
    })();

    /* ── 1. Helper: Inject shared file into placeholder ── */
    function loadInclude(placeholderId, file, callback) {
        var el = document.getElementById(placeholderId);
        if (!el) return;

        fetch(file)
            .then(function (r) {
                if (!r.ok) throw new Error(file + ' not found');
                return r.text();
            })
            .then(function (html) {
                // Using innerHTML for better stability and debugging
                el.innerHTML = html;
                
                if (callback) callback();

                // Trigger Scroll Reveal on newly injected elements after a tiny delay
                setTimeout(function () {
                    var newElems = el.querySelectorAll('.sr');
                    Array.prototype.forEach.call(newElems, function(item) {
                        item.classList.add('is-visible');
                    });
                    // Refresh Lucide Icons for new content
                    if (window.lucide) window.lucide.createIcons();
                }, 100);
            })
            .catch(function (e) {
                console.warn('[includes.js]', e.message);
            });
    }

    /* ── 2. Helper: Highlight active page in nav ── */
    function highlightActiveNav() {
        var path = window.location.pathname.split('/').pop();
        // Smarter URL Matching (handles extensionless paths and root)
        var page = path;
        if (!page || !page.includes('.')) {
            page = 'index.html';
        }

        /* Media sub-pages group */
        var mediaPages = [
            'photo-gallery.html', 'video-gallery.html',
            'media-audio.html', 'media-wallpaper.html', 'news.html'
        ];

        var nav = document.getElementById('mainNav');
        if (!nav) return;

        // Performance: Cache links
        var allLinks = nav.querySelectorAll('.nav-links a');
        
        Array.prototype.forEach.call(allLinks, function (a) {
            var href = a.getAttribute('href');
            if (href === page) {
                a.style.color = 'var(--primary)';
                a.style.fontWeight = '700';
            }
            // Highlight "Media" parent
            if (a.classList.contains('has-dropdown') && mediaPages.indexOf(page) !== -1) {
                a.style.color = 'var(--primary)';
                a.style.fontWeight = '700';
            }
            // Style Donate buttons globally
            if (a.classList.contains('nav-donate')) {
                a.style.color = 'var(--primary)';
                a.style.fontWeight = '700';
            }
        });
    }

    /* ── 3. Helper: Visitor Counter initialization ── */
    function initVisitorCounter() {
        const numEl = document.getElementById('f-visitor-num');
        const counterEl = document.getElementById('f-visitor-counter');
        if (!numEl) return;

        const BASE_COUNT = 74200;
        const namespace = 'kantheriyadham.website.v1';
        const key = 'visits';
        const url = 'https://api.countapi.xyz/hit/' + namespace + '/' + key;

        function formatNum(num) {
            return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }

        // ── Step 1: Immediate Local Update for "Instant" feel ──
        let cachedHits = parseInt(localStorage.getItem('khd_cached_total') || BASE_COUNT);
        
        // Optimistically increment locally for immediate feedback on reload
        cachedHits++;
        
        // Show current cached or base count immediately
        numEl.textContent = formatNum(cachedHits);
        if (counterEl) counterEl.style.display = 'flex';

        // ── Step 2: Fetch Global Count & Sync ──
        fetch(url)
            .then(function(r) { return r.json(); })
            .then(function(data) {
                const newTotal = data.value + BASE_COUNT;
                // If our local optimistic count is higher (due to rapid reloads), keep it, 
                // otherwise sync to the server's global total.
                const finalTotal = Math.max(newTotal, cachedHits);
                numEl.textContent = formatNum(finalTotal);
                localStorage.setItem('khd_cached_total', finalTotal);
            })
            .catch(function() {
                // Save the incremented local total if API fails
                localStorage.setItem('khd_cached_total', cachedHits);
            });
    }

    /* ── 4. Helper: Mobile Menu logic ── */
    function initMobileMenu() {
        const toggle = document.getElementById('mobileToggle');
        const close  = document.getElementById('mobileClose');
        const menu   = document.getElementById('navMenu');
        const overlay = document.getElementById('navOverlay');
        if (!toggle || !menu) return;

        const openMenu = function() {
            menu.classList.add('active');
            if (overlay) overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        };

        const closeMenu = function() {
            menu.classList.remove('active');
            if (overlay) overlay.classList.remove('active');
            document.body.style.overflow = '';
        };

        toggle.addEventListener('click', openMenu);
        if (close) close.addEventListener('click', closeMenu);
        if (overlay) overlay.addEventListener('click', closeMenu);

        // Close on link click
        var menuLinks = menu.querySelectorAll('.nav-links a:not(.has-dropdown)');
        Array.prototype.forEach.call(menuLinks, function(link) {
            link.addEventListener('click', closeMenu);
        });

        // Dropdown toggle for touch devices
        var hasDropdowns = menu.querySelectorAll('.has-dropdown');
        Array.prototype.forEach.call(hasDropdowns, function(dropdown) {
            dropdown.addEventListener('click', function(e) {
                if (window.innerWidth <= 1024) {
                    e.preventDefault();
                    e.stopPropagation(); // Stop double triggers

                    // Optional: Close other open dropdowns for cleaner UX
                    Array.prototype.forEach.call(hasDropdowns, function(other) {
                        if (other !== dropdown) {
                            other.parentElement.classList.remove('active');
                        }
                    });

                    this.parentElement.classList.toggle('active');
                }
            });
        });
    }

    /* ── 6. Divine Light Particle System ── */
    function initBackgroundParticles() {
        const container = document.createElement('div');
        container.id = 'bg-particles-container';
        container.style.cssText = 'position:fixed; top:0; left:0; width:100%; height:100%; pointer-events:none; z-index:-1; overflow:hidden;';
        document.body.appendChild(container);

        const particleCount = window.innerWidth < 768 ? 15 : 30;
        
        for (let i = 0; i < particleCount; i++) {
            createParticle(container);
        }
    }

    function createParticle(container) {
        const particle = document.createElement('div');
        const size = Math.random() * 6 + 2;
        const left = Math.random() * 100;
        const duration = Math.random() * 10 + 10;
        const delay = Math.random() * 20;

        particle.style.cssText = `
            position: absolute;
            bottom: -20px;
            left: ${left}%;
            width: ${size}px;
            height: ${size}px;
            background: radial-gradient(circle, rgba(255, 152, 0, 0.4) 0%, rgba(212, 139, 1, 0) 70%);
            border-radius: 50%;
            opacity: 0;
            box-shadow: 0 0 10px rgba(255, 152, 0, 0.2);
            animation: floatUpContinuous ${duration}s linear ${delay}s infinite;
        `;

        container.appendChild(particle);
    }

    // Add keyframes for continuous floating
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
        @keyframes floatUpContinuous {
            0% { transform: translateY(0) scale(0.5); opacity: 0; }
            20% { opacity: 0.6; }
            50% { transform: translateY(-50vh) translateX(20px) scale(1); opacity: 0.3; }
            80% { opacity: 0.6; }
            100% { transform: translateY(-110vh) translateX(-20px) scale(0.5); opacity: 0; }
        }
    `;
    document.head.appendChild(styleSheet);

    /* ── 5. FINAL EXECUTION (Single source of truth) ── */
    function runFinalInit() {
        // ... (existing observer logic) ...
        initBackgroundParticles();
        
        // --- 5a. Smart Revelation Engine (IntersectionObserver) ---
        var observerOptions = {
            root: null,
            rootMargin: '0px 0px -50px 0px',
            threshold: 0.1
        };

        var revealCallback = function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        };

        var observer = new IntersectionObserver(revealCallback, observerOptions);

        window.refreshScrollReveal = function() {
            var srs = document.querySelectorAll('.sr:not(.is-visible)');
            Array.prototype.forEach.call(srs, function(el) {
                observer.observe(el);
            });
        };

        window.refreshScrollReveal();

        setTimeout(function() {
            var allSrs = document.querySelectorAll('.sr');
            Array.prototype.forEach.call(allSrs, function(el) {
                el.classList.add('is-visible');
            });
        }, 3000);

        // --- 5b. Dynamic Includes ---
        loadInclude('social-connect-root', 'social-connect.html');

        loadInclude('site-nav', 'navbar.html', function() {
            highlightActiveNav();
            initMobileMenu();
            initKathaModal();
        });

    function initKathaModal() {
        const modal = document.getElementById('kathaModal');
        const floatBtn = document.getElementById('floatingKathaBtn');
        const closeBtn = document.getElementById('kathaModalClose');
        const overlay = document.getElementById('kathaModalOverlay');

        if (!modal) return;

        const openModal = (e) => {
            if (e) e.preventDefault();
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
            // Refresh Lucide icons in modal
            if (window.lucide) window.lucide.createIcons();
        };

        const closeModal = () => {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        };

        if (floatBtn) floatBtn.addEventListener('click', openModal);

        if (closeBtn) closeBtn.addEventListener('click', closeModal);
        if (overlay) overlay.addEventListener('click', closeModal);

        // Close on Esc
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeModal();
        });
    }

        loadInclude('site-footer', 'footer.html', initVisitorCounter);

        document.body.classList.add('page-loaded');
    }

    // Smooth page reveal on load
    window.addEventListener('load', function() {
        document.body.style.opacity = '1';
    });

    // Handle various ready states (Prevents missing navbar if DOM is already ready)
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', runFinalInit);
    } else {
        runFinalInit();
    }

})();
