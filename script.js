/**
 * Deviant Dev - Interactive Scripts
 * Handles mobile navigation, hero showcase tabs, screenshot lightbox modal,
 * scrollspy navigation, and email copy-to-clipboard.
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Sticky Header Elevation on Scroll
    const header = document.querySelector('header');
    const handleScroll = () => {
        if (window.scrollY > 20) {
            header?.classList.add('scrolled');
        } else {
            header?.classList.remove('scrolled');
        }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // 2. Mobile Drawer Navigation
    const mobileToggle = document.querySelector('.mobile-toggle');
    const mobileDrawer = document.querySelector('.mobile-drawer');
    const mobileLinks = document.querySelectorAll('.mobile-drawer a');

    if (mobileToggle && mobileDrawer) {
        const toggleMenu = () => {
            const isOpen = mobileDrawer.classList.toggle('open');
            mobileToggle.classList.toggle('active', isOpen);
            document.body.style.overflow = isOpen ? 'hidden' : '';
        };

        const closeMenu = () => {
            mobileDrawer.classList.remove('open');
            mobileToggle.classList.remove('active');
            document.body.style.overflow = '';
        };

        mobileToggle.addEventListener('click', toggleMenu);
        mobileLinks.forEach(link => link.addEventListener('click', closeMenu));

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && mobileDrawer.classList.contains('open')) {
                closeMenu();
            }
        });
    }

    // 3. Smooth Anchor Scrolling & Scrollspy
    const navLinks = document.querySelectorAll('nav a[href^="#"], .mobile-drawer a[href^="#"]');
    const sections = document.querySelectorAll('section[id]');

    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId && targetId.startsWith('#')) {
                const target = document.querySelector(targetId);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    const updateScrollspy = () => {
        const scrollPosition = window.scrollY + 120;
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelectorAll('nav a').forEach(link => {
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    } else if (link.getAttribute('href')?.startsWith('#')) {
                        link.classList.remove('active');
                    }
                });
            }
        });
    };
    window.addEventListener('scroll', updateScrollspy, { passive: true });

    // 4. Hero Showcase Tab Switcher
    const showcaseTabs = document.querySelectorAll('.showcase-tab');
    const tabPanes = document.querySelectorAll('.tab-pane');

    showcaseTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetId = tab.getAttribute('data-target');
            if (!targetId) return;

            showcaseTabs.forEach(t => t.classList.remove('active'));
            tabPanes.forEach(p => p.classList.remove('active'));

            tab.classList.add('active');
            const targetPane = document.getElementById(targetId);
            if (targetPane) {
                targetPane.classList.add('active');
            }
        });
    });

    // 5. Lightbox Modal for Screenshots
    const imageModal = document.querySelector('.image-modal');
    const modalImg = document.querySelector('.modal-content');
    const modalClose = document.querySelector('.modal-close');

    window.openModal = function (src, alt) {
        if (!imageModal || !modalImg) return;
        modalImg.src = src;
        modalImg.alt = alt || 'Preview';
        imageModal.classList.add('open');
        document.body.style.overflow = 'hidden';
    };

    if (imageModal) {
        const closeModal = () => {
            imageModal.classList.remove('open');
            document.body.style.overflow = '';
        };

        modalClose?.addEventListener('click', closeModal);
        imageModal.addEventListener('click', (e) => {
            if (e.target === imageModal) closeModal();
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && imageModal.classList.contains('open')) {
                closeModal();
            }
        });
    }

    // Attach click handlers to any screenshot items without explicit inline onclick
    document.querySelectorAll('.screenshot-img').forEach(img => {
        if (!img.getAttribute('onclick')) {
            img.style.cursor = 'zoom-in';
            img.addEventListener('click', () => {
                window.openModal(img.src, img.alt);
            });
        }
    });

    // 6. Copy Email to Clipboard Helper
    const copyEmailButtons = document.querySelectorAll('.email-copy-btn');
    copyEmailButtons.forEach(btn => {
        btn.addEventListener('click', async () => {
            const email = btn.getAttribute('data-email') || 'info@deviantdev.co.uk';
            try {
                await navigator.clipboard.writeText(email);
                const originalHtml = btn.innerHTML;
                btn.innerHTML = `<i class="fas fa-check" style="color: #10b981;"></i> Copied to Clipboard!`;
                setTimeout(() => {
                    btn.innerHTML = originalHtml;
                }, 2200);
            } catch (err) {
                window.location.href = `mailto:${email}`;
            }
        });
    });
});