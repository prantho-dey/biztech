/** animation page list
 * 1 ==> Multiple page =>  Multiple page aniation script here
 * 2 ==> Home version One => home version one aniation script here
 * 3 ==> Home version Two => home version two aniation script here
 * 4 ==> Home version Three => home version three aniation script here
 * 5 ==> Home version Four => home version Four aniation script here
 * 6 ==> Home version Five => home version Five aniation script here
 * 7 ==> About US  aniation script here
 * 8 ==> Services  aniation script here
 * 9 ==> Pricing-plan  aniation script here
 * 10 ==> Team  aniation script here
 * */

/**
 * 1 ==> Multiple page =>  Multiple page aniation script here
 * 1.1=> counter animation script
 * 1.2=> footer v1 & v2 animation script
 * 1.3=> home two about animation script
 * 1.4=> inner page banner animation script
 * 1.5=> inner page header animation script
 * 1.6=> inner page Title animation script
 * 1.7=> inner page Title animation script
 * 1.8=> inner page Title animation script
 * 1.9=> Section animation script
 */

// Locomotive initialization
let locoScroll
locoScroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    smartphone: {
        smooth: true,
    },
})
locoScroll.on('scroll', ScrollTrigger.update)

// Locomative Scroll to top
function scrollToTop() {
    const progress = document.getElementById('progress')
    progress.addEventListener('click', (event) => {
        event.preventDefault()
        locoScroll.scrollTo('top', {
            duration: 1000,
            offset: 0,
            easing: [0.25, 0.0, 0.35, 1.0],
        })
    })
    locoScroll.on('scroll', (i) => {
        const scrollProgress = document.querySelector('.progress')
        const HomeTwo = document.querySelector('.home-v2')
        const HomeThree = document.querySelector('.home-v3')
        const HomeFour = document.querySelector('.home-v4')
        if (i.scroll.y > 100) {
            scrollProgress.classList.add('setvissible')
            const caclHeight =
                document.querySelector('[data-scroll-container]').scrollHeight -
                document.documentElement.clientHeight
            let scrollValue = Math.round((i.scroll.y * 100) / caclHeight)
            if (HomeTwo) {
                scrollProgress.style.background = `conic-gradient(#BE123C  ${scrollValue}% , #fafafa ${scrollValue}%)`
                scrollProgress.classList.add('red-icon')
            } else if (HomeThree) {
                scrollProgress.style.background = `conic-gradient(#6d28d9  ${scrollValue}% , #fafafa ${scrollValue}%)`
                scrollProgress.classList.add('purple-icon')
            } else if (HomeFour) {
                scrollProgress.style.background = `conic-gradient(#059669  ${scrollValue}% , #fafafa ${scrollValue}%)`
                scrollProgress.classList.add('green-icon')
            } else {
                scrollProgress.style.background = `conic-gradient(#1D4ED8  ${scrollValue}% , #fafafa ${scrollValue}%)`
            }
        } else {
            scrollProgress.classList.remove('setvissible')
            scrollProgress.style.background = `conic-gradient(#1D4ED8  0% , #fafafa 0%)`
        }
    })
}

scrollToTop() // Comment this line if you don't want to use the scroll to top button

// Sticky header
function stickyHeader() {
    const stickyId = document.querySelector('.header-area')
    if (stickyId) {
        locoScroll.on('scroll', (i) => {
            if (i.scroll.y > 245) {
                stickyId.classList.add('sticky-header')
            } else {
                stickyId.classList.remove('sticky-header')
            }
        })
    }
}
stickyHeader() // Comment this line if you don't want to use the sticky header

// ScrollTrigger initialization
ScrollTrigger.scrollerProxy('[data-scroll-container]', {
    scrollTop(value) {
        return arguments.length
            ? locoScroll.scrollTo(value, 0, 0)
            : locoScroll.scroll.instance.scroll.y
    },
    getBoundingClientRect() {
        return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
        }
    },
    pinType: document.querySelector('[data-scroll-container]').style.transform
        ? 'transform'
        : 'fixed',
})

/** 1.1=> counter animation script
 * =================================
 */
const CounterOne = document.getElementsByClassName('counter-section')
if (CounterOne.length) {
    var odometer = gsap
        .timeline({
            scrollTrigger: {
                trigger: '.counter-section',
                start: 'top 85%',
                end: '50%',
                scroller: '[data-scroll-container]',
            },
        })
        .from('.counter-wrap', {
            scale: '0.8',
            y: 50,
            opacity: 0,
            stagger: 0.2,
            duration: 0.8,
            ease: 'power2',
        })
    odometer.add(function () {
        var odo = $('.odometer')
        odo.each(function () {
            var countNumber = $(this).attr('data-count')
            $(this).html(countNumber)
        })
    }, '-=1')
}
/** 1.2=> footer v1 & v2 animation script
 * =================================
 */
const footerOne = document.querySelectorAll('.ftr-v1')
if (footerOne.length) {
    let footerOne = gsap
        .timeline({ defaults: { duration: 0.8, ease: 'power2' } })
        .from('.ftr-l-stgr', { y: 50, opacity: 0 })
        .from('.ftr-single-menu h4', { y: 50, opacity: 0 }, '-=.5')
        .from(
            '.ftr-single-menu ul li',
            { y: 50, opacity: 0, stagger: 0.3 },
            '-=.5'
        )
        .from('.ftr-single-menu2 h4', { y: 50, opacity: 0 }, '-=2.2')
        .from(
            '.ftr-single-menu2 ul li',
            { y: 50, opacity: 0, stagger: 0.3 },
            '-=2'
        )
        .from(
            '.ftr-single-menu-3 .str-item',
            { y: 50, opacity: 0, stagger: 0.3 },
            '-=2.2'
        )
        .from('.ftr1-copy-right', { y: 50, opacity: 0 }, '-=1.8')
        .from('.ftr1-copy-right p', { x: -50, opacity: 0 }, '-=1.6')
        .from('.ftr1-copy-right ul', { x: 50, opacity: 0 }, '-=1.6')

    ScrollTrigger.create({
        trigger: '.ftr-v1',
        start: 'top 85%',
        scroller: '[data-scroll-container]',
        animation: footerOne,
    })
}
/** 1.3=> home two about animation script
 * =================================
 */
const HomeTwoAbout = document.querySelectorAll('.home-two-about')
if (HomeTwoAbout.length) {
    let homeTwoAbout = gsap
        .timeline({ defaults: { duration: 1, ease: 'back' } })
        .from(
            '.home-two-abt-yoyo',
            { yPercent: -100, scale: 2, opacity: 0 },
            '-=0.1'
        )
        .from('.home-two-abt-yoyo', { xPercent: 40 }, '-=0.4')
        .from('.home-two-abt-cnt', { x: 30, scale: '0.9', opacity: 0 }, '-=1')

    ScrollTrigger.create({
        trigger: '.home-two-about',
        start: 'top 90%',
        end: 'bottom 20%',
        scroller: '[data-scroll-container]',
        animation: homeTwoAbout,
        scrub: true,
    })
}
/** 1.4=> inner page banner animation script
 * =================================
 */
const InnerPageBanner = document.querySelectorAll('.inner-page-banner')
if (InnerPageBanner.length) {
    let innerPageBanner = gsap.timeline({
        defaults: { duration: 1, ease: 'back' },
    })
    innerPageBanner.from('.inner-page-bnr-title-sttr', {
        y: 100,
        scale: 0.8,
        opacity: 0,
        stagger: 0.3,
    })
}
/** 1.5=> inner page header animation script
 * =================================
 */
const InnerPageHeader = document.querySelectorAll('.inner-page-header')
if (InnerPageHeader.length) {
    let innerPageHeader = gsap.timeline({
        defaults: { duration: 1, ease: 'back' },
    })
    innerPageHeader.from('.header-wrapper', { y: -100, opacity: 0, delay: 1 })
}
/** 1.6=> inner page Title animation script
 * =================================
 */
const HeadingTitle = document.querySelectorAll('.title-sttr')
if (HeadingTitle.length) {
    let innerAboutTestimonial = gsap
        .timeline({ defaults: { duration: 0.8, ease: 'power2' } })
        .from('.title-sttr', { y: 60, scale: 0.8, opacity: 0, stagger: 0.3 })
    ScrollTrigger.create({
        trigger: '.title-sttr',
        start: 'top 75%',
        scroller: '[data-scroll-container]',
        animation: innerAboutTestimonial,
    })
}
/** 1.7=> inner page Title animation script
 * =================================
 */
const singleCard = document.querySelectorAll('.single-card-sttr')
if (singleCard.length) {
    let singleCardGsap = gsap
        .timeline({ defaults: { duration: 0.8, ease: 'power2' } })
        .from('.single-card-sttr', {
            y: 70,
            scale: 0.9,
            opacity: 0,
            stagger: 0.3,
        })
    ScrollTrigger.create({
        trigger: '.single-card-sttr',
        start: 'top 75%',
        scroller: '[data-scroll-container]',
        animation: singleCardGsap,
    })
}
/** 1.8=> inner page Title animation script
 * =================================
 */
const singleCardTwo = document.querySelectorAll('.single-card-sttr-two')
if (singleCardTwo.length) {
    let singleCardGsap = gsap
        .timeline({ defaults: { duration: 0.8, ease: 'power2' } })
        .from('.single-card-sttr-two', {
            y: 70,
            scale: 0.9,
            opacity: 0,
            stagger: 0.3,
        })
    ScrollTrigger.create({
        trigger: '.single-card-sttr-two',
        start: 'top 75%',
        scroller: '[data-scroll-container]',
        animation: singleCardGsap,
    })
}
/** 1.9=> Section animation script
 * =================================
 */
const section = document.querySelectorAll('.section-animi')
if (section.length) {
    let sectionAnimi = gsap
        .timeline({ defaults: { duration: 0.8, ease: 'power2' } })
        .from('.section-animi', { y: 70, opacity: 0, stagger: 0.3 })
    ScrollTrigger.create({
        trigger: '.section-animi',
        start: 'top 75%',
        scroller: '[data-scroll-container]',
        animation: sectionAnimi,
    })
}
/** 1.10=> inner page Title two animation script
 * =================================
 */
const titleTwo = document.querySelectorAll('.title-sttr2')
if (titleTwo.length) {
    let titleTwoGsap = gsap
        .timeline({ defaults: { duration: 0.8, ease: 'power2' } })
        .from('.title-sttr2', { y: 50, scale: 0.9, opacity: 0, stagger: 0.3 })
    ScrollTrigger.create({
        trigger: '.title-sttr2',
        start: 'top 75%',
        scroller: '[data-scroll-container]',
        animation: titleTwoGsap,
    })
}
/**
 * 2 ==> Home version One => home version one aniation script here
 * ==================================================================
 */
const homeOne = document.getElementsByClassName('home-v1')
if (homeOne.length) {
    let HomeOneBanner = gsap.timeline({
        defaults: { duration: 0.8, ease: 'power2' },
    })
    HomeOneBanner.from('.header-area .logo', { x: 40, opacity: 0 })
        .from('.main-menu', { y: -80, opacity: 0 }, '-=.7')
        .from(
            '.header-right-wrap .strager-item',
            { x: -40, opacity: 0 },
            '-=.5'
        )
        .from('.home-banner-anim1', { x: -50, opacity: 0, stagger: 0.4 }, '-=1')
        .from(
            '.banner-thumb-one',
            {
                x: -20,
                scale: '0.8',
                opacity: 0,
                stagger: 0.4,
                ease: 'back',
                duration: 1.2,
            },
            '-=1.5'
        )
        .from(
            '.banner-thumb-one .popup-video',
            { scale: '1.3', x: 10, opacity: 0, ease: 'bounce' },
            '-=1'
        )

    let sectionCard = gsap
        .timeline({ defaults: { duration: 0.8, ease: 'power2' } })
        .from('.section-title-stgr', { y: 50, opacity: 0, stagger: 0.6 })

    ScrollTrigger.create({
        trigger: '.section-card',
        start: 'top 75%',
        scroller: '[data-scroll-container]',
        animation: sectionCard,
    })
    let sectionCardItem = gsap
        .timeline({ defaults: { duration: 0.8, ease: 'power2' } })
        .from(
            '.section-card-item',
            { scale: '0.8', y: 50, opacity: 0, stagger: 0.3, ease: 'back' },
            '-=.5'
        )

    ScrollTrigger.create({
        trigger: '.section-card-item',
        start: 'top 80%',
        scroller: '[data-scroll-container]',
        animation: sectionCardItem,
    })
    let h1AboutCard = gsap
        .timeline({ defaults: { duration: 0.8, ease: 'power2' } })
        .from('.h1-about-image', {
            scale: '0.6',
            opacity: 0,
            duration: 1.2,
            ease: 'back',
        })
        .from(
            '.h1-about-content-stgr',
            { y: 50, opacity: 0, stagger: 0.3 },
            '-=1'
        )

    ScrollTrigger.create({
        trigger: '#h1-about-section',
        start: 'top 75%',
        scroller: '[data-scroll-container]',
        animation: h1AboutCard,
    })
    let h1PricingSection = gsap
        .timeline({ defaults: { duration: 0.8, ease: 'power2' } })
        .from('.section-pri-title-stgr', { y: 50, opacity: 0, stagger: 0.6 })
        .from(
            '.section-pricing-item',
            { scale: '0.8', y: 50, opacity: 0, stagger: 0.2, ease: 'back' },
            '-=1'
        )

    ScrollTrigger.create({
        trigger: '#h1-price-section',
        start: 'top 75%',
        scroller: '[data-scroll-container]',
        animation: h1PricingSection,
    })
    let h1ChooseUs = gsap
        .timeline({ defaults: { duration: 0.8, ease: 'power2' } })
        .from('.h1-chose-us-content', { x: -50, opacity: 0, stagger: 0.3 })
        .from(
            '.h1-chose-us-image',
            { scale: '0.8', x: 50, opacity: 0, ease: 'back', duration: 1.2 },
            '-=1.6'
        )

    ScrollTrigger.create({
        trigger: '#h1-choose-us',
        start: 'top 75%',
        scroller: '[data-scroll-container]',
        animation: h1ChooseUs,
    })

    let h1Testimonial = gsap
        .timeline({ defaults: { duration: 0.8, ease: 'power2' } })
        .from('.h1-testimonial-title-stgr', { y: 50, opacity: 0, stagger: 0.3 })
        .from(
            '#h1-testimonial-card',
            { scale: '0.8', y: 50, opacity: 0, stagger: 0.3, ease: 'back' },
            '-=1'
        )

    ScrollTrigger.create({
        trigger: '.h1-testimonial',
        start: 'top 75%',
        scroller: '[data-scroll-container]',
        animation: h1Testimonial,
    })

    let h1GetInTouch = gsap
        .timeline({ defaults: { duration: 0.8, ease: 'power2' } })
        .from('.h1-get-in-touch-image', {
            y: 50,
            scale: '0.7',
            duration: 1.2,
            opacity: 0,
            ease: 'back',
        })
        .from('.get-touch-cnt-stgr', { y: 50, opacity: 0, stagger: 0.3 }, '-=1')

    ScrollTrigger.create({
        trigger: '.h1-get-in-touch',
        start: 'top 75%',
        scroller: '[data-scroll-container]',
        animation: h1GetInTouch,
    })
}

/**
 * 3 ==> Home version Two => home version two aniation script here
 * ==================================================================
 */
const homeTwo = document.getElementsByClassName('home-v2')
if (homeTwo.length) {
    let HomeTwoBanner = gsap.timeline({
        defaults: { duration: 0.8, ease: 'power2' },
    })

    HomeTwoBanner.from('.home2-bnr-content-animi', {
        y: 50,
        opacity: 0,
        stagger: 0.4,
        delay: 0.5,
    })
        .from('.home2-bnr-img', { scale: 0.8, opacity: 0, ease: 'back' }, '-=1')
        .from('.header-v2-area', { y: -100, opacity: 0 }, '-=0.5')
        .from(
            '.banne-v2-shape',
            { xPercent: 20, opacity: 0, duration: 1 },
            '-=.5'
        )

    let homeTwoSuport = gsap
        .timeline({ defaults: { duration: 0.8, ease: 'back' } })
        .from('.home-two-suport-stgr', {
            scale: '0.8',
            y: 50,
            opacity: 0,
            stagger: 0.3,
        })

    ScrollTrigger.create({
        trigger: '.home-two-suport-stgr',
        start: 'top 80%',
        scroller: '[data-scroll-container]',
        animation: homeTwoSuport,
    })

    let h2servicetitlestr = gsap
        .timeline({ defaults: { duration: 0.8, ease: 'power2' } })
        .from('.h2-service-title-str', {
            scale: '0.8',
            y: 50,
            opacity: 0,
            stagger: 0.4,
        })

    ScrollTrigger.create({
        trigger: '.h2-service-title-str',
        start: 'top 80%',
        scroller: '[data-scroll-container]',
        animation: h2servicetitlestr,
    })
    let h2servicecontstr = gsap
        .timeline({ defaults: { duration: 0.8, ease: 'back' } })
        .from('.h2-service-cnt-str', {
            scale: '0.8',
            y: 50,
            opacity: 0,
            stagger: 0.3,
        })

    ScrollTrigger.create({
        trigger: '.h2-service-cnt-str',
        start: 'top 80%',
        scroller: '[data-scroll-container]',
        animation: h2servicecontstr,
    })
    let h2contStgr = gsap
        .timeline({ defaults: { duration: 0.8, ease: 'back' } })
        .from('.h2-choce-sec .container', { y: 50, opacity: 0 })
        .from('.h2-cont-stgr', { y: 50, opacity: 0, stagger: 0.3 }, '-=1')

    ScrollTrigger.create({
        trigger: '.h2-choce-sec',
        start: 'top 80%',
        scroller: '[data-scroll-container]',
        animation: h2contStgr,
    })
    let titleStr = gsap
        .timeline({ defaults: { duration: 0.8, ease: 'back' } })
        .from('.title-str', { scale: '0.8', y: 50, opacity: 0, stagger: 0.3 })
        .from('.h2-testimonial', { y: 100, opacity: 0 }, '-=1')

    ScrollTrigger.create({
        trigger: '.h2-testimonial',
        start: 'top 70%',
        scroller: '[data-scroll-container]',
        animation: titleStr,
    })
    let H2blog = gsap
        .timeline({ defaults: { duration: 0.8, ease: 'back' } })
        .from('.h2-blog-title-str', {
            scale: '0.8',
            y: 50,
            opacity: 0,
            stagger: 0.3,
        })
        .from('.h2-blog-sttr', { y: 50, opacity: 0, stagger: 0.4 }, '-=1')

    ScrollTrigger.create({
        trigger: '.h2-blog-section',
        start: 'top 70%',
        scroller: '[data-scroll-container]',
        animation: H2blog,
    })
    let H2contactSection = gsap
        .timeline({ defaults: { duration: 0.8, ease: 'back' } })
        .from('.contact-title-str', {
            scale: '0.8',
            x: -50,
            opacity: 0,
            stagger: 0.3,
        })
        .from('.h2-contact-from', { scale: '0.8', x: -50, opacity: 0 }, '-=1')
        .from('.h2-location', { x: 50, opacity: 0 }, '-=0.3')
        .from('.location-pin', { y: -50, scale: '1.3', opacity: 0 }, '-=0.3')

    ScrollTrigger.create({
        trigger: '#h2-contact-section',
        start: 'top 70%',
        scroller: '[data-scroll-container]',
        animation: H2contactSection,
    })
}

/**
 * 4 ==> Home version Three => home version three aniation script here
 * ==================================================================
 */
const homeThree = document.getElementsByClassName('home-v3')
if (homeThree.length) {
    let HomeThreeBanner = gsap.timeline({
        defaults: { duration: 0.8, ease: 'power2' },
    })

    HomeThreeBanner.from('.ber-title-srt', {
        x: -50,
        opacity: 0,
        stagger: 0.3,
        delay: 0.5,
    })
        .from('.h3-bnr-r-img > img', { x: 50, opacity: 0, duration: 1 }, '-=1')
        .from('.header-v3', { y: -100, opacity: 0 }, '-=0.5')
        .from(
            '.user-yoyo',
            { scale: '0', xPercent: -10, opacity: 0, yoyo: true, ease: 'back' },
            '-=0.5'
        )

    let HomeThreeBannerBCard = gsap
        .timeline({ defaults: { duration: 0.8, ease: 'power2' } })
        .from('.h3-bnr-b-card', { y: 50, opacity: 0, stagger: 0.3 })
    ScrollTrigger.create({
        trigger: '.h3-bnr-b-card',
        start: 'top 75%',
        scroller: '[data-scroll-container]',
        animation: HomeThreeBannerBCard,
    })
    let HomeThreeAboutUs = gsap
        .timeline({ defaults: { duration: 0.8, ease: 'power2' } })
        .from('.h3-about-content-str', { y: 50, opacity: 0, stagger: 0.2 })
        .from('.h3-about-image', { x: -30, scale: 0.8, opacity: 0 }, '-=1')
    ScrollTrigger.create({
        trigger: '.home-v3-aboutUs',
        start: 'top 70%',
        scroller: '[data-scroll-container]',
        animation: HomeThreeAboutUs,
    })
    let HomeThreeCounter = gsap
        .timeline({ defaults: { duration: 0.8, ease: 'power2' } })
        .from('.h3-counter-wrap', { y: 50, opacity: 0, stagger: 0.2 })
    ScrollTrigger.create({
        trigger: '.h3-counter-wrap',
        start: 'top 75%',
        scroller: '[data-scroll-container]',
        animation: HomeThreeCounter,
    })
    let whyChooseSection = gsap
        .timeline({ defaults: { duration: 0.8, ease: 'power2' } })
        .from('.h3-choose-sttr', { x: -50, opacity: 0, stagger: 0.2 })
        .from(
            '.why-choose-img',
            { x: 50, scale: '0.8', opacity: 0, ease: 'back' },
            '-=1'
        )
    ScrollTrigger.create({
        trigger: '.why-choose-section',
        start: 'top 75%',
        scroller: '[data-scroll-container]',
        animation: whyChooseSection,
    })
    let keyFeatureSection = gsap
        .timeline({ defaults: { duration: 0.8, ease: 'power2' } })
        .from('.key-feature-title-sttr', { x: -50, opacity: 0, stagger: 0.2 })
        .from('.key-list-sttr', { x: -50, opacity: 0, stagger: 0.2 }, '-=1')
    ScrollTrigger.create({
        trigger: '.key-feature-section',
        start: 'top 75%',
        scroller: '[data-scroll-container]',
        animation: keyFeatureSection,
    })
    let h3ClientSection = gsap
        .timeline({ defaults: { duration: 0.8, ease: 'power2' } })
        .from('.h3-client-section', { y: 50, opacity: 0 })
    ScrollTrigger.create({
        trigger: '.h3-client-section',
        start: 'top 75%',
        scroller: '[data-scroll-container]',
        animation: h3ClientSection,
    })
    let h3PriceSectionArea = gsap
        .timeline({ defaults: { duration: 0.8, ease: 'power2' } })
        .from('.h3-price-title-str', {
            y: 50,
            scale: 0.8,
            stagger: 0.2,
            opacity: 0,
        })
        .from(
            '.pricing4-single-card',
            { y: 50, scale: 0.9, stagger: 0.3, opacity: 0 },
            '-=0.5'
        )
    ScrollTrigger.create({
        trigger: '.h3-price-section-area',
        start: 'top 75%',
        scroller: '[data-scroll-container]',
        animation: h3PriceSectionArea,
    })
    let h3TestimonialArea = gsap
        .timeline({ defaults: { duration: 0.8, ease: 'power2' } })
        .from('.h3-testi-title-str', {
            y: 50,
            scale: 0.8,
            stagger: 0.2,
            opacity: 0,
        })
        .from(
            '.h3-testimonial-slider',
            { y: 100, stagger: 0.2, opacity: 0 },
            '-=0.5'
        )
    ScrollTrigger.create({
        trigger: '.h3-testimonial-area',
        start: 'top 75%',
        scroller: '[data-scroll-container]',
        animation: h3TestimonialArea,
    })
    let h3BlogSection = gsap
        .timeline({ defaults: { duration: 0.8, ease: 'power2' } })
        .from('.h3-blog-title-sttr', {
            y: 50,
            scale: 0.8,
            stagger: 0.3,
            opacity: 0,
        })
        .from(
            '.h3-blog-card-sttr',
            { y: 50, scale: 0.8, stagger: 0.3, opacity: 0 },
            '-=0.5'
        )
    ScrollTrigger.create({
        trigger: '.h3-blog-section',
        start: 'top 75%',
        scroller: '[data-scroll-container]',
        animation: h3BlogSection,
    })
}
/**
 * 5 ==> Home version Four => home version Four aniation script here
 * ==================================================================
 */
const homefour = document.getElementsByClassName('home-v4')
if (homefour.length) {
    let HomefourBanner = gsap.timeline({
        defaults: { duration: 0.8, ease: 'power2' },
    })

    HomefourBanner.from('.h4-bnr-sttr', {
        x: -50,
        opacity: 0,
        stagger: 0.3,
        delay: 0.3,
    })
        .from(
            '.h4-bnr-img',
            { width: '0%', objectPosition: 'top left', opacity: 0 },
            '-=1'
        )
        .from('.h4-bnr-play', { scale: 0, ease: 'back', opacity: 0 }, '-=0.5')
        .from(
            '.header-area-v4 .container',
            { y: -50, ease: 'back', opacity: 0 },
            '-=1'
        )

    let HomeFourBannerBCard = gsap
        .timeline({ defaults: { duration: 0.8, ease: 'power2' } })
        .from('.h4-choose-title', {
            y: 50,
            scale: 0.8,
            opacity: 0,
            stagger: 0.3,
        })
        .from(
            '.h4-choose-card-sttr',
            { y: 50, scale: 0.8, opacity: 0, stagger: 0.3 },
            '-=0.5'
        )
    ScrollTrigger.create({
        trigger: '.h4-choose-area',
        start: 'top 75%',
        scroller: '[data-scroll-container]',
        animation: HomeFourBannerBCard,
    })
    let HomeFourAbout = gsap
        .timeline({ defaults: { duration: 0.8, ease: 'power2' } })
        .from('.h4-about-cnt-sttr', {
            x: -50,
            scale: 0.8,
            opacity: 0,
            stagger: 0.3,
        })
        .from('.h4-about-mdl', { y: -50, scale: 0.8, opacity: 0 }, '-=1')
        .from('.h4-about-left', { x: 200, scale: 0.9, opacity: 0 }, '-=.5')
        .from('.h4-about-right', { x: -200, opacity: 0, scale: 0.9 }, '-=.5')
    ScrollTrigger.create({
        trigger: '.h4-about-area',
        start: 'top 75%',
        scroller: '[data-scroll-container]',
        animation: HomeFourAbout,
    })
    let HomeFourService = gsap
        .timeline({ defaults: { duration: 0.8, ease: 'power2' } })
        .from('.h4-service-title', {
            y: -0,
            scale: 0.8,
            opacity: 0,
            stagger: 0.3,
        })
        .from('.h4-service-card-wrap', { y: 50, opacity: 0 }, '-=0.5')
    ScrollTrigger.create({
        trigger: '.h4-service-area',
        start: 'top 75%',
        scroller: '[data-scroll-container]',
        animation: HomeFourService,
    })
    let HomeFourSucessRatio = gsap
        .timeline({ defaults: { duration: 0.8, ease: 'power2' } })
        .from('.h4-sucess-ratio-conts-sttr', {
            x: 50,
            scale: 0.8,
            opacity: 0,
            stagger: 0.3,
        })
        .from(
            '.h4-contact-mdl',
            { scale: 0.8, opacity: 0, ease: 'back' },
            '-=1'
        )
        .from(
            '.h4-sucess-ratio-top-img',
            { y: -100, scale: 0.4, opacity: 0, ease: 'back' },
            '-=0.5'
        )
        .from(
            '.h4-sucess-ratio-btm-img',
            { y: 100, scale: 0.4, opacity: 0, ease: 'back' },
            '-=0.5'
        )

    ScrollTrigger.create({
        trigger: '.success-ratio-area',
        start: 'top 75%',
        scroller: '[data-scroll-container]',
        animation: HomeFourSucessRatio,
    })
    let HomeFourprice = gsap
        .timeline({ defaults: { duration: 0.8, ease: 'power2' } })
        .from('.h4-pricing-title-sttr', {
            y: 50,
            scale: 0.8,
            opacity: 0,
            stagger: 0.3,
        })
        .from(
            '.pricing-plan6-card-sttr',
            { y: 50, opacity: 0, stagger: 0.3, ease: 'back' },
            '-=1'
        )

    ScrollTrigger.create({
        trigger: '.h4-pricing-plan',
        start: 'top 75%',
        scroller: '[data-scroll-container]',
        animation: HomeFourprice,
    })
    let HomeFourBlog = gsap
        .timeline({ defaults: { duration: 0.8, ease: 'power2' } })
        .from('.h4-blog-title-sttr', {
            y: 50,
            scale: 0.8,
            opacity: 0,
            stagger: 0.3,
        })
        .from(
            '.h4-single-blog-card',
            { y: 50, opacity: 0, stagger: 0.3, ease: 'back' },
            '-=0.3'
        )

    ScrollTrigger.create({
        trigger: '.h4-blog-area',
        start: 'top 75%',
        scroller: '[data-scroll-container]',
        animation: HomeFourBlog,
    })
    let HomeFourClient = gsap
        .timeline({ defaults: { duration: 0.8, ease: 'power2' } })
        .from('.h4-client-area .container', { y: 50, scale: 0.8, opacity: 0 })

    ScrollTrigger.create({
        trigger: '.h4-client-area',
        start: 'top 75%',
        scroller: '[data-scroll-container]',
        animation: HomeFourClient,
    })
}
/**
 * 6 ==> Home version Five => home version Five aniation script here
 * ==================================================================
 */
const homefive = document.getElementsByClassName('home-v5')
if (homefive.length) {
    let HomeFiveTeam = gsap
        .timeline({ defaults: { duration: 0.8, ease: 'power2' } })
        .from('.h5-team-card', { y: 50, scale: 0.8, opacity: 0, stagger: 0.3 })
    ScrollTrigger.create({
        trigger: '.h5-team-card',
        start: 'top 75%',
        scroller: '[data-scroll-container]',
        animation: HomeFiveTeam,
    })
    let HomeFiveWork = gsap
        .timeline({ defaults: { duration: 0.8, ease: 'power2' } })
        .from('.h5-work-sttr', { x: 50, scale: 0.8, opacity: 0, stagger: 0.3 })
        .from('.h5-work-img-top', { y: 50, opacity: 0, ease: 'back' }, '-=1')
        .from('.h5-work-img-btm', { y: -50, opacity: 0, ease: 'back' }, '-=0.8')
        .from(
            '.h5-work-right',
            { x: -100, opacity: 0, scale: 0.8, ease: 'back' },
            '-=0.6'
        )
    ScrollTrigger.create({
        trigger: '.h5-work-area',
        start: 'top 75%',
        scroller: '[data-scroll-container]',
        animation: HomeFiveWork,
    })

    let HomeFiveService = gsap
        .timeline({ defaults: { duration: 0.8, ease: 'power2' } })
        .from('.h5-service-title-sttr', {
            y: 50,
            scale: 0.8,
            opacity: 0,
            stagger: 0.3,
        })
        .from(
            '.h5-service-card',
            { y: 50, scale: 0.8, opacity: 0, stagger: 0.3 },
            '-=0.5'
        )
    ScrollTrigger.create({
        trigger: '.h5-service-area',
        start: 'top 75%',
        scroller: '[data-scroll-container]',
        animation: HomeFiveService,
    })

    let HomeFivePricing = gsap
        .timeline({ defaults: { duration: 0.8, ease: 'power2' } })
        .from('.h5-pricing-content-sttr', {
            x: -50,
            scale: 0.8,
            opacity: 0,
            stagger: 0.3,
        })
        .from('.h5-pricing-card', { y: 50, opacity: 0, stagger: 0.3 }, '-=0.5')

    ScrollTrigger.create({
        trigger: '.h5-pricing-area',
        start: 'top 75%',
        scroller: '[data-scroll-container]',
        animation: HomeFivePricing,
    })
    let HomeFiveTestimonials = gsap
        .timeline({ defaults: { duration: 0.8, ease: 'power2' } })
        .from('.h5-testimonial-title-sttr', {
            y: 50,
            scale: 0.8,
            stagger: 0.3,
            opacity: 0,
        })
        .from('.h5-testimonial-slider', { y: 50, opacity: 0 })
    ScrollTrigger.create({
        trigger: '.h5-testimonial-area',
        start: 'top 75%',
        scroller: '[data-scroll-container]',
        animation: HomeFiveTestimonials,
    })
    let HomeFiveBlog = gsap
        .timeline({ defaults: { duration: 0.8, ease: 'power2' } })
        .from('.h5-blog-title-srrt', {
            y: 50,
            scale: 0.8,
            stagger: 0.3,
            opacity: 0,
        })
        .from('.h5-blog-card', { y: 50, scale: 0.8, stagger: 0.3, opacity: 0 })
    ScrollTrigger.create({
        trigger: '.h5-blog-area',
        start: 'top 75%',
        scroller: '[data-scroll-container]',
        animation: HomeFiveBlog,
    })
    let HomeFivePartner = gsap
        .timeline({ defaults: { duration: 0.8, ease: 'power2' } })
        .from('.h5-prtner-slider', { y: 50, opacity: 0 })
    ScrollTrigger.create({
        trigger: '.h5-prtner-area',
        start: 'top 75%',
        scroller: '[data-scroll-container]',
        animation: HomeFivePartner,
    })
}
/**
 * 7 ==> About US  aniation script here
 * ==================================================================
 */
const aboutUs = document.getElementsByClassName('inr-about-us')
if (aboutUs.length) {
    let innerAbout = gsap
        .timeline({ defaults: { duration: 0.8, ease: 'power2' } })
        .from('.about-content-sttr', {
            x: 50,
            scale: 0.8,
            opacity: 0,
            stagger: 0.3,
        })
        .from(
            '.inr-about-img',
            { y: 50, scale: 0.8, opacity: 0, ease: 'back' },
            '-=0.5'
        )
    ScrollTrigger.create({
        trigger: '.h5-team-card',
        start: 'top 75%',
        scroller: '[data-scroll-container]',
        animation: innerAbout,
    })
}
/**
 * 8 ==> Services  aniation script here
 * ==================================================================
 */
const inrServices = document.getElementsByClassName('inr-services')
if (inrServices.length) {
    let servicesChooseus = gsap
        .timeline({ defaults: { duration: 0.8, ease: 'power2' } })
        .from('.chosse-us-sttr', {
            x: 50,
            scale: 0.8,
            opacity: 0,
            stagger: 0.3,
        })
    ScrollTrigger.create({
        trigger: '.services-choose-us',
        start: 'top 75%',
        scroller: '[data-scroll-container]',
        animation: servicesChooseus,
    })
}
/**
 * 9 ==> Pricing-plan  aniation script here
 * ==================================================================
 */
const inrPricingPlan = document.getElementsByClassName('pricing-plan')
if (inrPricingPlan.length) {
    let ChoosePricePlan = gsap
        .timeline({ defaults: { duration: 0.8, ease: 'power2' } })
        .from('.c-title-price', { x: 50, scale: 0.8, opacity: 0 })
        .from(
            '.pricing-plan6-card-sttr',
            { y: 50, scale: 0.8, opacity: 0, stagger: 0.3 },
            '-=0.3'
        )
    ScrollTrigger.create({
        trigger: '.Choose-Price-Plan',
        start: 'top 75%',
        scroller: '[data-scroll-container]',
        animation: ChoosePricePlan,
    })
    let PaymentMethod = gsap
        .timeline({ defaults: { duration: 0.8, ease: 'power2' } })
        .from('.py-title-sttr', { y: 50, scale: 0.8, opacity: 0, stagger: 0.3 })
        .from(
            '.payment-icon',
            { x: -50, scale: 0.8, opacity: 0, stagger: 0.3 },
            '-=0.2'
        )
    ScrollTrigger.create({
        trigger: '.payment-options',
        start: 'top 75%',
        scroller: '[data-scroll-container]',
        animation: PaymentMethod,
    })
}
/**
 * 10 ==> Team  aniation script here
 * ==================================================================
 */
const inrTeam = document.getElementsByClassName('team-area')
if (inrTeam.length) {
    let dscArea = gsap
        .timeline({ defaults: { duration: 0.8, ease: 'power2' } })
        .from('.stagger-text-sttr', {
            x: -100,
            scale: 0.9,
            opacity: 0,
            stagger: 0.3,
            delay: 1,
        })
        .from(
            '.team-dsc-image img',
            { y: -50, scale: 0.9, opacity: 0, stagger: 0.3 },
            '-=1'
        )
    ScrollTrigger.create({
        trigger: '.team-dsc-area',
        start: 'top 75%',
        scroller: '[data-scroll-container]',
        animation: dscArea,
    })
}
/**
 * 11 ==> Comming Soon  aniation script here
 * ==================================================================
 */
const commingSoon = document.getElementsByClassName('comming-soon')
if (commingSoon.length) {
    let commingSoonGsap = gsap
        .timeline({ defaults: { duration: 0.8, ease: 'power2' } })
        .from('.cmsn-title-sttr', { y: 100, opacity: 0, stagger: 0.3 })
        .from('.cmsn-image', { scale: 0.5, opacity: 0 }, '-=0.5')
}
/**
 * 12 ==> Error page aniation script here
 * ==================================================================
 */
const error = document.getElementsByClassName('inr-error')
if (error.length) {
    let errorGsap = gsap
        .timeline({ defaults: { duration: 0.8, ease: 'power2' } })
        .from('.inr-error-img', {
            y: 100,
            scale: 0.8,
            opacity: 0,
            stagger: 0.3,
            delay: 1,
        })
        .from('.inr-error-ttl', { y: 50, opacity: 0 }, '-=0.5')
}
/**
 * 13 ==> Error page aniation script here
 * ==================================================================
 */
const thankYou = document.getElementsByClassName('inr-error')
if (error.thankYou) {
    let thanksGsap = gsap
        .timeline({ defaults: { duration: 0.8, ease: 'power2' } })
        .from('.inr-error-img', {
            y: 100,
            scale: 0.8,
            opacity: 0,
            stagger: 0.3,
            delay: 1,
        })
        .from('.inr-error-ttl', { y: 50, opacity: 0 }, '-=0.5')
}
/**
 * 14 ==> demo aniation script here
 * ==================================================================
 */
const DemoHeading = document.getElementsByClassName('demo-heading')
if (DemoHeading.length) {
    let demoHeading = gsap
        .timeline({ defaults: { duration: 0.8, ease: 'power2' } })
        .from('.demo-heading-left', { x: -100, scale: 0.9, opacity: 0 })
        .from(
            '.demo-heading-text h3',
            { x: 100, scale: 0.9, opacity: 0, stagger: 0.3 },
            '-=.5'
        )
        .from(
            '.demo-heading-text p',
            { x: 100, scale: 0.9, opacity: 0, stagger: 0.3 },
            '-=1'
        )
    ScrollTrigger.create({
        trigger: '.home-demo',
        start: 'top 80%',
        scroller: '[data-scroll-container]',
        animation: demoHeading,
    })
}
const DemoHeadingTwo = document.getElementsByClassName('demo-heading')
if (DemoHeadingTwo.length) {
    let demoHeadingTwo = gsap
        .timeline({ defaults: { duration: 0.8, ease: 'power2' } })
        .from('.demo-heading-left-two', { x: -100, scale: 0.9, opacity: 0 })
        .from(
            '.demo-heading-text-two h3',
            { x: 100, scale: 0.9, opacity: 0, stagger: 0.3 },
            '-=.5'
        )
        .from(
            '.demo-heading-text-two p',
            { x: 100, scale: 0.9, opacity: 0, stagger: 0.3 },
            '-=1'
        )
    ScrollTrigger.create({
        trigger: '.inner-demo',
        start: 'top 80%',
        scroller: '[data-scroll-container]',
        animation: demoHeadingTwo,
    })
}
const targetDemoTrested = document.getElementsByClassName('target-demo-trested')
if (targetDemoTrested.length) {
    let demoTrasted = gsap
        .timeline({ defaults: { duration: 0.8, ease: 'power2' } })
        .from('.dtc-stgr', { y: 100, scale: 0.9, opacity: 0, stagger: 0.3 })
        .from(
            '.demo-trasted-image',
            { y: 100, scale: 0.9, opacity: 0, stagger: 0.3 },
            '-=.5'
        )
    ScrollTrigger.create({
        trigger: '.target-demo-trested',
        start: 'top 80%',
        scroller: '[data-scroll-container]',
        animation: demoTrasted,
    })
}
const demoIncludeHeading = document.getElementsByClassName('demo-incluted')
if (demoIncludeHeading.length) {
    let demoIncludeHeadingGsap = gsap
        .timeline({ defaults: { duration: 0.8, ease: 'power2' } })
        .from('.dih-str', { y: 100, scale: 0.9, opacity: 0, stagger: 0.3 })
        .from(
            '.dit-str',
            { y: 100, scale: 0.9, opacity: 0, stagger: 0.3 },
            '-=.5'
        )
    ScrollTrigger.create({
        trigger: '.demo-incluted',
        start: 'top 80%',
        scroller: '[data-scroll-container]',
        animation: demoIncludeHeadingGsap,
    })
}
const featureDemoArea = document.getElementsByClassName('feature-area')
if (featureDemoArea.length) {
    let featureDemoGsap = gsap
        .timeline({ defaults: { duration: 0.8, ease: 'power2' } })
        .from('.feature-heading-sttr', {
            y: 100,
            scale: 0.9,
            opacity: 0,
            stagger: 0.3,
        })
        .from('.feature-image-sttr', { y: 100, scale: 0.9, opacity: 0 }, '-=.5')
    ScrollTrigger.create({
        trigger: '.feature-area',
        start: 'top 80%',
        scroller: '[data-scroll-container]',
        animation: featureDemoGsap,
    })
}
const darkLightArea = document.getElementsByClassName('dark-light-area')
if (darkLightArea.length) {
    let darkLightAreaGsap = gsap
        .timeline({ defaults: { duration: 0.8, ease: 'power2' } })
        .from('.dla-heading-sttr', {
            y: 100,
            scale: 0.9,
            opacity: 0,
            stagger: 0.3,
        })
        .from('.dla-image', { y: 100, scale: 0.9, opacity: 0 }, '-=.5')
    ScrollTrigger.create({
        trigger: '.dark-light-area',
        start: 'top 80%',
        scroller: '[data-scroll-container]',
        animation: darkLightAreaGsap,
    })
}
const demoPurceArea = document.getElementsByClassName('demo-purcese-area')
if (demoPurceArea.length) {
    let demoPurceAreaGsap = gsap
        .timeline({ defaults: { duration: 0.8, ease: 'power2' } })
        .from('.demo-purcese-area', {
            y: 100,
            scale: 0.9,
            opacity: 0,
            stagger: 0.3,
        })

    ScrollTrigger.create({
        trigger: '.demo-purcese-area',
        start: 'top 95%',
        scroller: '[data-scroll-container]',
        animation: demoPurceAreaGsap,
    })
}
// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
ScrollTrigger.addEventListener('refresh', () => locoScroll.update())
ScrollTrigger.refresh()

locoScroll.on('scroll', ScrollTrigger.update)

new ResizeObserver(() => locoScroll.update()).observe(
    document.querySelector('[data-scroll-container]')
)
