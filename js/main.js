(function () {

    /* burger menu */
    document.addEventListener('click', burgerInit);

    function burgerInit(e) {
        const burgerIcon = e.target.closest('.burger-icon');
        const burgerNavLink = e.target.closest('.nav__link');

        if (!burgerIcon && !burgerNavLink) return;

        if (document.documentElement.clientWidth > 900) return;
        // if (burgerIcon) {
        //     e.preventDefault()
        // }

        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu');
        } else {
            document.body.classList.remove('body--opened-menu');
        }
    }

    /* Modal window */
    const modal = document.querySelector('.modal');
    const modalButton = document.querySelector('.about__img-button');

    modalButton.addEventListener('click', openModal);
    modal.addEventListener('click', closeModal);

    function openModal(e) {
        e.preventDefault();
        document.body.classList.toggle('body--opened-modal');
    }

    function closeModal(e) {
        e.preventDefault();

        const target = e.target;

        if (target.closest('.modal__cancel') || target.classList.contains('modal')) {
            document.body.classList.remove('body--opened-modal');
        }
    }

    document.addEventListener('keydown', event => {
        if (event.key === 'Escape') {
            document.body.classList.remove('body--opened-modal');
        }
    });

    /* tabs */

    const tabControls = document.querySelector('.tab-controls');

    tabControls.addEventListener('click', toggleTab);

    function toggleTab(e) {
        const tabControl = e.target.closest('.tab-controls__link');

        if (!tabControl) return;
        e.preventDefault();
        if (tabControl.classList.contains('tab-controls__link--active')) return;

        const tabContentID = tabControl.getAttribute('href');
        const tabContent = document.querySelector(tabContentID);
        const activeControl = document.querySelector('.tab-controls__link--active');
        const activeContent = document.querySelector('.tab-content--show');

        if (activeControl) {
            activeControl.classList.remove('tab-controls__link--active');
        }
        if (activeContent) {
            activeContent.classList.remove('tab-content--show');
        }

        tabControl.classList.add('tab-controls__link--active');
        tabContent.classList.add('tab-content--show');
    }

    /* accordion */

    const accordionLists = document.querySelectorAll('.accordion-list');

    accordionLists.forEach(el => {

        // document.querySelector('.accordion-list__item--opened .accordion-list__content').style.maxHeight = document.querySelector('.accordion-list__item--opened .accordion-list__content').scrollHeight + 'px';

        el.addEventListener('click', (e) => {

            const accordionList = e.currentTarget;
            const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened');
            const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content');

            const accordionControl = e.target.closest('.accordion-list__control');
            if (!accordionControl) return;
            e.preventDefault();
            const accordionItem = accordionControl.parentElement;
            const accordionContent = accordionControl.nextElementSibling;

            if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
                accordionOpenedItem.classList.remove('accordion-list__item--opened');
                accordionOpenedContent.style.maxHeight = null;
            }
            accordionItem.classList.toggle('accordion-list__item--opened');

            if (accordionItem.classList.contains('accordion-list__item--opened')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            } else {
                accordionContent.style.maxHeight = null;
            }
        });
    })

    /* slider-gallery */

    const swiper = new Swiper('.gallery__slider', {

        spaceBetween: 15,
        slidesPerView: 2,

        // Optional parameters
        // direction: 'vertical',
        // loop: true,

        // If we need pagination
        pagination: {
            el: '.gallery__pagination',
            type: 'fraction'
        },

        // Navigation arrows
        navigation: {
            nextEl: '.gallery__next',
            prevEl: '.gallery__prev',
        },

        // And if we need scrollbar
        // scrollbar: {
        //     el: '.swiper-scrollbar',
        // },

        breakpoints: {
            // when window width is >= 320px
            // 320: {
            //     slidesPerView: 2,
            //     spaceBetween: 20
            // },
            // when window width is >= 640px
            601: {
                slidesPerView: 3,
            },
            801: {
                spaceBetween: 32,
            },
            1101: {
                slidesPerView: 4,
            },
        }
    });

    /* slider-reviews */
    
    new Swiper('.testimonials__slider', {

        spaceBetween: 0,
        slidesPerView: 1,
        centeredSlides: true,

        // Optional parameters
        // direction: 'vertical',
        // loop: true,

        // If we need pagination
        // pagination: {
            //     el: '.gallery__pagination',
        //     type: 'fraction'
        // },

        // Navigation arrows
        navigation: {
            nextEl: '.testimonials__next',
            prevEl: '.testimonials__prev',
        },

        // And if we need scrollbar
        // scrollbar: {
        //     el: '.swiper-scrollbar',
        // },

        breakpoints: {
            // when window width is >= 320px
            // 320: {
            //     slidesPerView: 2,
            //     spaceBetween: 20
            // },
            // when window width is >= 640px
            901: {
                slidesPerView: 1.5,
            },
            1101: {
                slidesPerView: 2.1,
            }
        },

        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },
    });
    
    // mask for tel

    const telInputs = document.querySelectorAll('input[type="tel"]');
    telInputs.forEach(el => console.log(el));
    const im = new Inputmask('+7 (999) 999-99-99');
    im.mask(telInputs);

})();