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
});
