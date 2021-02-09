const tempArticles = [
  {
    _id: 1,
    keyword: "парк",
    title: "Национальное дос",
    text: "В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе. ",
    date: "01/01/2021",
    source: "Источник",
    link: "http://qwerty.ru",
    image: "https://img1.fonwall.ru/o/is/river-foam-stones-shrubs.jpeg",
    owner: "qwer"
  },
  {
    _id: 2,
    keyword: "природа",
    title: "Лесные огоньки: история одной фотографии",
    text: "Фотограф отвлеклась от освещения суровой политической реальности Мексики, чтобы запечатлеть ускользающую красоту одного из местных чудес природы.",
    date: "01/01/2021",
    source: "Источник",
    link: "http://qwerty.ru",
    image: "https://img1.fonwall.ru/o/is/river-foam-stones-shrubs.jpeg",
    owner: "qwer"
  },
  {
    _id: 3,
    keyword: "отдых",
    title: "Первозданная тайга»: новый фотопроект Игоря Шпиленка",
    text: "Знаменитый фотограф снимает первозданные леса России, чтобы рассказать о необходимости их сохранения. В этот раз он отправился в Двинско-Пинежскую тайгу, где klfdshglkj lsjdglk jglsaj gsagj ajg;ls jg;s   sd;gk;dslkg;l   ;skgs;gk",
    date: "01/01/2021",
    source: "Источник",
    link: "http://qwerty.ru",
    image: "https://img1.fonwall.ru/o/is/river-foam-stones-shrubs.jpeg",
    owner: "qwer"
  },
  {
    _id: 4,
    keyword: "природа",
    title: "Национальное достояние - парки",
    text: "Знаменитый фотограф снимает первозданные леса России, чтобы рассказать о необходимости их сохранения. В этот раз он отправился в Двинско-Пинежскую тайгу, где klfdshglkj lsjdglk jglsaj gsagj ajg;ls jg;s   sd;gk;dslkg;l   ;skgs;gk",
    date: "01/01/2021",
    source: "Источник",
    link: "http://qwerty.ru",
    image: "https://img1.fonwall.ru/o/is/river-foam-stones-shrubs.jpeg",
    owner: "qwer"
  },
  {
    _id: 5,
    keyword: "природа",
    title: "Национальное достояние - парки",
    text: "Знаменитый фотограф снимает первозданные леса России, чтобы рассказать о необходимости их сохранения. В этот раз он отправился в Двинско-Пинежскую тайгу, где klfdshglkj lsjdglk jglsaj gsagj ajg;ls jg;s   sd;gk;dslkg;l   ;skgs;gk",
    date: "01/01/2021",
    source: "Источник",
    link: "http://qwerty.ru",
    image: "https://img1.fonwall.ru/o/is/river-foam-stones-shrubs.jpeg",
    owner: "qwer"
  },
  {
    _id: 6,
    keyword: "парк",
    title: "Национальное достояние - парки",
    text: "В 2016 году Америка отмечала lkjlkjhgjhgj hjg jhgj g jhgjhgjhg gjhg jhgj hg jhg jhg jhgj j kjl kjljlkjkhk jh kjhk khkjhkjhkjh kjhk hkjh kjhk kjh kjh kважный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе. ",
    date: "01/01/2021",
    source: "Источник",
    link: "http://qwerty.ru",
    image: "https://img1.fonwall.ru/o/is/river-foam-stones-shrubs.jpeg",
    owner: "qwer"
  },
  {
    _id: 7,
    keyword: "отдых",
    title: "Национальное достояние - парки",
    text: "В 2016 году Америка отмечала lkjlkjhgjhgj hjg jhgj g jhgjhgjhg gjhg jhgj hg jhg jhg jhgj j kjl kjljlkjkhk jh kjhk khkjhkjhkjh kjhk hkjh kjhk kjh kjh kважный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе. ",
    date: "01/01/2021",
    source: "Источник",
    link: "http://qwerty.ru",
    image: "https://img1.fonwall.ru/o/is/river-foam-stones-shrubs.jpeg",
    owner: "qwer"
  },
  {
    _id: 8,
    keyword: "оидых",
    title: "Национальное достояние - парки",
    text: "В 2016 году Америка отмечала lkjlkjhgjhgj hjg jhgj g jhgjhgjhg gjhg jhgj hg jhg jhg jhgj j kjl kjljlkjkhk jh kjhk khkjhkjhkjh kjhk hkjh kjhk kjh kjh kважный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе. ",
    date: "01/01/2021",
    source: "Источник",
    link: "http://qwerty.ru",
    image: "https://img1.fonwall.ru/o/is/river-foam-stones-shrubs.jpeg",
    owner: "qwer"
  },
  {
    _id: 9,
    keyword: "парк",
    title: "Национальное достояние - парки",
    text: "В 2016 году Америка отмечала lkjlkjhgjhgj hjg jhgj g jhgjhgjhg gjhg jhgj hg jhg jhg jhgj j kjl kjljlkjkhk jh kjhk khkjhkjhkjh kjhk hkjh kjhk kjh kjh kважный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе. ",
    date: "01/01/2021",
    source: "Источник",
    link: "http://qwerty.ru",
    image: "https://img1.fonwall.ru/o/is/river-foam-stones-shrubs.jpeg",
    owner: "qwer"
  },
  {
    _id: 10,
    keyword: "парк",
    title: "Национальное достояние - парки",
    text: "В 2016 году Америка отмечала lkjlkjhgjhgj hjg jhgj g jhgjhgjhg gjhg jhgj hg jhg jhg jhgj j kjl kjljlkjkhk jh kjhk khkjhkjhkjh kjhk hkjh kjhk kjh kjh kважный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе. ",
    date: "01/01/2021",
    source: "Источник",
    link: "http://qwerty.ru",
    image: "https://img1.fonwall.ru/o/is/river-foam-stones-shrubs.jpeg",
    owner: "qwer"
  },
  {
    _id: 11,
    keyword: "парк",
    title: "Национальное достояние - парки",
    text: "В 2016 году Америка отмечала lkjlkjhgjhgj hjg jhgj g jhgjhgjhg gjhg jhgj hg jhg jhg jhgj j kjl kjljlkjkhk jh kjhk khkjhkjhkjh kjhk hkjh kjhk kjh kjh kважный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе. ",
    date: "01/01/2021",
    source: "Источник",
    link: "http://qwerty.ru",
    image: "https://img1.fonwall.ru/o/is/river-foam-stones-shrubs.jpeg",
    owner: "qwer"
  },

]

export default tempArticles;
