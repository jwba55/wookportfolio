/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

// Tech icon click handlers: show description in small modal
document.addEventListener('DOMContentLoaded', function () {
    const techItems = document.querySelectorAll('.portfolio-modal .tech-item');
    const techModalEl = document.getElementById('techInfoModal');
    if (!techModalEl) return;
    const techModal = new bootstrap.Modal(techModalEl);
    const techModalTitle = techModalEl.querySelector('.modal-title');
    const techModalBody = document.getElementById('techInfoModalBody');

    techItems.forEach(item => {
        item.style.cursor = 'pointer';
        item.addEventListener('click', function (e) {
            const tech = item.getAttribute('data-tech') || '';
            const desc = item.getAttribute('data-desc') || '';
            techModalTitle.textContent = tech;
            techModalBody.textContent = desc;
            techModal.show();
        });
    });

    // Detail links (상세보기) inside portfolio modals
    const detailLinks = document.querySelectorAll('.portfolio-modal .detail-link');
    function processDesc(desc) {
        // Normalize and trim
        let s = String(desc || '').replace(/\r/g, '').trim();
        if (!s) return '';
        // Split into paragraphs by a blank line
        const paras = s.split(/\n\s*\n/);
        const html = paras.map(p => {
            // For each paragraph, convert each new line into <br>
            // Also ensure list markers starting with '-' are preserved as lines
            const lines = p.split(/\n/).map(l => l.replace(/^\s*-\s*/, '- '));
            return '<p>' + lines.join('<br>') + '</p>';
        }).join('');
        return html;
    }

    detailLinks.forEach(link => {
        link.style.cursor = 'pointer';
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const title = link.getAttribute('data-title') || '상세 설명';
            const desc = link.getAttribute('data-desc') || '';
            techModalTitle.textContent = title;
            // Render processed HTML so that '-' and newlines show as line breaks
            techModalBody.innerHTML = processDesc(desc);
            techModal.show();
        });
    });

    // Move each modal's "링크:" `ul.list-inline` directly under that modal's first media (image or video)
    // This avoids editing multiple HTML blocks — it relocates the existing link lists at runtime.
    const modalBodies = document.querySelectorAll('.portfolio-modal .modal-body');
    modalBodies.forEach(modal => {
        const uls = modal.querySelectorAll('ul.list-inline');
        let targetUl = null;
        uls.forEach(ul => {
            // Robust detection: check textContent OR an h5 child with '링크'
            const hasText = ul.textContent && ul.textContent.indexOf('링크') !== -1;
            const h5 = ul.querySelector('h5');
            const hasH5 = h5 && h5.textContent && h5.textContent.indexOf('링크') !== -1;
            if (hasText || hasH5) {
                targetUl = ul;
            }
        });
        if (targetUl) {
            // Find the first media element (image or video) inside the modal
            const firstMedia = modal.querySelector('img.img-fluid, video.img-fluid');
            if (firstMedia) {
                // If the UL is already immediately after the media, skip
                if (firstMedia.nextElementSibling !== targetUl) {
                    firstMedia.insertAdjacentElement('afterend', targetUl);
                }
            }
        }
    });

    // Convert anchors inside the moved '링크' ULs into Bootstrap buttons
    modalBodies.forEach(modal => {
        const uls = modal.querySelectorAll('ul.list-inline');
        uls.forEach(ul => {
            const h5 = ul.querySelector('h5');
            if (h5 && h5.textContent && h5.textContent.indexOf('링크') !== -1) {
                const anchors = ul.querySelectorAll('a[href]');
                anchors.forEach(a => {
                    // Add Bootstrap sizing class and a custom class for refined styling
                    a.classList.add('btn', 'btn-sm', 'tech-link-btn', 'me-2');
                    // Remove inline color attributes if any
                    a.removeAttribute('style');
                });
                // If anchors are nested (e.g., inside an <ol>), move them so they appear
                // right after the <h5> heading inside this UL, which places the buttons
                // visually next to the "링크:" label.
                const heading = ul.querySelector('h5');
                if (heading) {
                    anchors.forEach(a => {
                        if (a.parentElement !== ul || heading.nextElementSibling !== a) {
                            heading.insertAdjacentElement('afterend', a);
                        }
                    });
                }
            }
        });
    });

    // If there's a '차별화 기능' trigger button, make it scroll to the specific 상세보기 anchor
    const diffBtn = document.getElementById('diffFeatureBtn');
    const authDetail = document.getElementById('authDetail');
    if (diffBtn && authDetail) {
        diffBtn.addEventListener('click', function (e) {
            e.preventDefault();
            // Smooth scroll to the 상세보기 anchor
            try {
                authDetail.scrollIntoView({ behavior: 'smooth', block: 'start' });
            } catch (err) {
                // fallback
                authDetail.scrollIntoView();
            }
            // After scrolling, trigger the detail-link click to open the modal
            window.setTimeout(function () {
                authDetail.click();
                // move focus to the anchor for accessibility
                authDetail.focus && authDetail.focus();
            }, 600);
        });
    }
});
