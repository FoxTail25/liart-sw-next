
const header_menu = [
    {
        nameHref: ["НОВОСТИ", '/news/1_ru'],
        subMenu: [
            {
                name: "Архив новостей",
                href: "/archive_news"
            }
        ]
    },
    {
        nameHref: ["О БИБЛИОТЕКЕ", '/about'],
        subMenu: [
            {
                name: 'Адрес и время работы РГБИ',
                href: '/about/about_library/16'
            },
            {
                name: 'Запись читателей',
                href: '/about/about_library/18'
            },
            {
                name: 'Общая информация',
                href: '/about/about_library/19'
            },
            {
                name: 'Из истории РГБИ',
                href: '/about/about_library/20'
            },
            {
                name: 'Структура библиотеки',
                href: '/about/departments'
            },
            {
                name: 'Реквизиты библиотеки',
                href: '/about/about_library/22'
            },
            {
                name: 'Нормативные документы',
                href: '/about/regulations'
            },
            {
                name: 'Попечительский совет',
                href: '/about/about_library/45'
            },
            {
                name: 'Противодействие коррупции',
                href: '/about/anti_corruption'
            },
            {
                name: '3D панорамы библиотеки',
                href: '/about/3D_panoramas_of_the_library'
            },
        ]
    },
    {
        nameHref: ["УСЛУГИ", '/services/7'],
        data_set: 'services',
        subMenu: [
            {
                name: 'Платные',
                href: '/services/112'
            },
            {
                name: 'Бесплатные',
                href: '/services/7'
            }
        ]
    },
    {   
        nameHref: ["ФОНДЫ", '/funds'],
        data_set: 'funds',
        subMenu: [
            {
                name: 'Основной фонд',
                href: '/funds/fund_name/12'
            },
            {
                name: 'Справочно-информационный фонд',
                href: '/funds/fund_name/58'
            },
            {
                name: 'Фонд изобразительных материалов',
                href: '/funds/fund_name/61'
            },
            {
                name: 'Фонд отдела Абонемента',
                href: '/funds/fund_name/62'
            },
            {
                name: 'Фонд газетных вырезок и театральных программ',
                href: '/funds/fund_name/59'
            },
            {
                name: 'Видеофонд',
                href: '/funds/fund_name/60'
            },
            {
                name: 'Фонд изданий на микрофишах',
                href: '/funds/fund_name/63'
            },
            {
                name: 'Архивный фонд',
                href: '/funds/fund_name/1790'
            }
        ]
    },
    {
        nameHref: ["КАТАЛОГИ", '/catalogs/14'],
        data_set: 'catalogs',
        subMenu: [
            {name: 'Электронный каталог',
            href: 'http://opac.liart.ru/opacg/nog.htm',
            target:"_blank"
            },
            {name: 'Предметный каталог',
            href: 'https://liart.ru/predm/i2.htm',
            target:"_blank"
            },
            {name: 'Карточные каталоги',
            href: '/catalogs/69'
            }
        ]
    },
    {
        nameHref: ["ЭЛЕКТРОННЫЕ РЕСУРСЫ", '/electronic_resources'],
        data_set: 'electonic_resources',
        subMenu: [
            {
                name: 'Базы данных',
                href: '/electronic_resources/database'
            },
            {
                name: 'Электронный каталог',
                href: 'http://opac.liart.ru/opacg/nog.htm'
            },
        ]
    },
    {
        nameHref: ["КОНТАКТЫ", '/contacts/13'],
        subMenu: null
    },
]

export default header_menu