// main.js - Shared functionality for DataFog Studios™
// Optimized for performance, mobile-first, seamless UX

document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const initMobileMenu = () => {
        const header = document.querySelector('.header');
        const navLinks = document.querySelector('.nav-links');
        
        if (!navLinks || !header) return;

        const hamburger = document.createElement('button');
        hamburger.className = 'hamburger';
        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
        hamburger.setAttribute('aria-label', 'Toggle menu');
        hamburger.style.cssText = 'display:none;background:none;border:none;font-size:1.8rem;color:inherit;cursor:pointer;padding:0.5rem;';

        header.querySelector('.nav-container').insertBefore(hamburger, navLinks);

        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = hamburger.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });

        const checkWidth = () => {
            if (window.innerWidth <= 768) {
                hamburger.style.display = 'block';
            } else {
                hamburger.style.display = 'none';
                navLinks.classList.remove('active');
            }
        };

        checkWidth();
        window.addEventListener('resize', checkWidth);
    };

    // Header scroll effect
    const initHeaderScroll = () => {
        const header = document.querySelector('.header');
        if (!header) return;
        let lastScroll = 0;

        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            if (currentScroll <= 0) {
                header.style.boxShadow = '0 4px 30px rgba(0,0,0,0.08)';
            } else if (currentScroll > lastScroll && currentScroll > 100) {
                header.style.transform = 'translateY(-100%)';
            } else {
                header.style.transform = 'translateY(0)';
                header.style.boxShadow = '0 8px 30px rgba(0,0,0,0.15)';
            }
            lastScroll = currentScroll;
        });
    };

    // Wishlist cross-tab sync
    window.addEventListener('storage', (e) => {
        if (e.key === 'wishlist') {
            location.reload();
        }
    });

    initMobileMenu();
    initHeaderScroll();
});

// Mobile menu styles
const mobileStyles = document.createElement('style');
mobileStyles.textContent = `
    @media (max-width: 768px) {
        .nav-links {
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: var(--light-card);
            flex-direction: column;
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.4s ease;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
        .nav-links.active {
            max-height: 500px;
            padding: 1rem 0;
        }
        .nav-links a {
            padding: 1rem 2rem;
            margin: 0;
            text-align: center;
            border-bottom: 1px solid var(--border);
        }
        .nav-buttons {
            display: none;
        }
    }
`;
document.head.appendChild(mobileStyles);