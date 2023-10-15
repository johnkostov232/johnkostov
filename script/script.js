'use strict'

// TouchScreen check

const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    IOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.IOS() ||
            isMobile.Opera() ||
            isMobile.Windows()
        );
    }
};

if (isMobile.any()) {
    document.body.classList.add('_touch');
} else {
    document.body.classList.add('_pc');
}

// Scroll

const menuLinks = document.querySelectorAll('.menu__link');

if (menuLinks.length > 0) {
    menuLinks.forEach (menuLink => {
        menuLink.addEventListener('click', onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top 
            + scrollY - document.querySelector('header').offsetHeight - 15;

            if(iconMenu.classList.contains('_active')) {
                document.body.classList.remove('_lock');
                iconMenu.classList.remove('_active');
                headerList.classList.remove('_active');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    };
}

// Burger

const iconMenu = document.querySelector(".menu__icon");
const headerList = document.querySelector(".header__list");

if (iconMenu) {
    iconMenu.addEventListener('click', function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        headerList.classList.toggle('_active');
    });
}

// icon btns

const VK = document.querySelector('.vk');
const VKrect = document.querySelector('.vk__rect')
const VKpath = document.querySelector('.vk__path')

const Telegram = document.querySelector('.telegram')
const TelegramRect = document.querySelector('.telegram__rect')
const TelegramPath1 = document.querySelector('.telegram__path1')
const TelegramPath2 = document.querySelector('.telegram__path2')
const TelegramPath3 = document.querySelector('.telegram__path3')

const Steam = document.querySelector('.steam')
const SteamRect = document.querySelector('.steam__rect')
const SteamPath = document.querySelector('.steam__path')

// VK

VK.addEventListener('mouseover', e => {
    VKrect.classList.add('icon__fill__interactive')
    VKpath.classList.add('icon__fill__aditional')
});

VK.addEventListener('mouseout', e => {
    VKrect.classList.remove('icon__fill__interactive')
    VKpath.classList.remove('icon__fill__aditional')
})

// Telegram

Telegram.addEventListener('mouseover', e => {
    TelegramRect.classList.add('icon__fill__interactive')
    TelegramPath1.classList.add('icon__fill__aditional')
    TelegramPath2.classList.add('icon__fill__background')
    TelegramPath3.classList.add('icon__fill__interactive')
});

Telegram.addEventListener('mouseout', e => {
    TelegramRect.classList.remove('icon__fill__interactive')
    TelegramPath1.classList.remove('icon__fill__aditional')
    TelegramPath2.classList.remove('icon__fill__background')
    TelegramPath3.classList.remove('icon__fill__interactive')
});

//Steam 

Steam.addEventListener('mouseover', e => {
    SteamRect.classList.add('icon__fill__interactive')
    SteamPath.classList.add('icon__fill__aditional')
});

Steam.addEventListener('mouseout', e => {
    SteamRect.classList.remove('icon__fill__interactive')
    SteamPath.classList.remove('icon__fill__aditional')
});