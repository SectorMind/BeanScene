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
    const modalButtonSingIn = document.querySelector('.sing-in');
    const modalButton = document.querySelectorAll('.button');
    modalButton.forEach((element) => element.addEventListener('click', openModal));

    modalButtonSingIn.addEventListener('click', openModal);
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

    /* slider-rewues */

    const swiper = new Swiper('.testimonials__slider', {
        // Optional parameters
        // direction: 'vertical',
        // loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.testimonials__next',
            prevEl: '.testimonials__prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });

    
    // mask for tel

    const telInputs = document.querySelectorAll('input[type="tel"]');
    telInputs.forEach(el => console.log(el));
    const im = new Inputmask('+7 (999) 999-99-99');
    im.mask(telInputs);

})();