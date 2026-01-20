const sidebars = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Введение',
    },
    {
      type: 'category',
      label: 'Приборы',
      items: [
        {
          type: 'doc',
          id: 'pribory/tacheometry',
          label: 'Тахеометр: быстрый старт',
        },
        {
          type: 'doc',
          id: 'pribory/nivelir',
          label: 'Работа с нивелиром',
        },
        {
          type: 'doc',
           id: 'pribory/gnss-priemnik', // Имя файла без .md
           label: 'Работа с GNSS-приёмником', // Название в меню
        },
      ],
    },
    {
      type: 'category',
      label: 'Методики измерений',
      items: [
        {
          type: 'doc',
          id: 'metodiki/geodezicheskie-seti',
          label: 'Построение геодезических сетей',
        },
        {
         type: 'doc',
         id: 'metodiki/sovremennye-metody',
         label: 'Современные методы и технологии',
        },
        {
         type: 'doc',
         id: 'metodiki/prodolnoe-nivelirovanie',
         label: 'Продольное нивелирование трассы',
        },
      ],
    },
    {
      type: 'category',
      label: 'Обработка в ПО',
      items: [
        {
          type: 'doc',
          id: 'obrabotka/autocad-basics',
          label: 'Основы работы в AutoCAD',
        },
      ],
    },
    {
      type: 'category',
      label: '📋 Организация работ',
      items: [
        {
         type: 'doc',
         id: 'organizaciya-rabot/etapy-izyskanij',
         label: 'Этапы и документооборот',
        },
      ],
    },
    {
      type: 'category',
      label: 'Нормативы и поверки',
      items: [
        {
          type: 'doc',
          id: 'normativi/poverki-priborov',
          label: 'Сроки и процедура поверок',
        },
      ],
    },
    {
      type: 'category',
      label: 'Справочник',
      items: [
        {
          type: 'doc',
          id: 'spravochnik/glossary',
          label: 'Глоссарий терминов',
        },
        {
          type: 'doc',
          id: 'spravochnik/formuly',
          label: 'Основные формулы',
        },
      ],
    },
    {
      type: 'doc',
      id: 'soobschestvo/index',
      label: 'Для сообщества',
    },
  ],
};

export default sidebars;