const popes = [
    {
      number: 1,
      name: "البابا مرقس",
    },
    {
      number: 2,
      name: "البابا أنيانوس",
    },
    {
      number: 3,
      name: "البابا ميليوس",
    },
    {
      number: 4,
      name: "البابا كرذوذوس",
    },
    {
      number: 5,
      name: "البابا بريموس",
    }, 
    {
      number: 6,
      name: "البابا يسطس",
    },
    {
      number: 7,
      name: "البابا أومانيوس",
    },
    {
      number: 8,
      name: "البابا مرقيانوس",
    },
    {
      number: 9,
      name: "البابا كلاديانوس",
    },
    {
      number: 10,
      name: "البابا أغريبينوس",
    },
    {
      number: 11,
      name: "البابا يوليانوس",
    },
    {
      number: 12,
      name: "البابا ديمتريوس الأول",
    },
    {
      number: 13,
      name: "البابا ياروكلاس",
    },
    {
      number: 14,
      name: "البابا ديونسيوس",
    },
    {
      number: 15,
      name: "البابا مكسيموس",
    },
    {
      number: 16,
      name: "البابا ثاؤنا",
    },
    {
      number: 17,
      name: "البابا بطرس الأول",
    },
    {
      number: 18,
      name: "البابا أرشلاوس",
    },
    {
      number: 19,
      name: "البابا ألكسندروس الأول",
    },
    {
      number: 20,
      name: "البابا أثناسيوس الأول",
    },
    {
      number: 21,
      name: "البابا بطرس الثاني",
    },
    {
      number: 22,
      name: "البابا تيموثاوس الأول",
    },
    {
      number: 23,
      name: "البابا ثاؤفيلس",
    },
    {
      number: 24,
      name: "البابا كيرلس الأول",
    },
    {
      number: 25,
      name: "البابا ديسقورس الأول",
    },
    {
      number: 26,
      name: "البابا تيموثاوس الثاني",
    },
    {
      number: 27,
      name: "البابا بطرس الثالث",
    },
    {
      number: 28,
      name: "البابا أثناسيوس الثاني",
    },
    {
      number: 29,
      name: "البابا يوأنس الأول",
    },
    {
      number: 30,
      name: "البابا يوأنس الثاني",
    },
    {
      number: 31,
      name: "البابا ديسقورس الثاني",
    },
    {
      number: 32,
      name: "البابا تيموثاوس الثالث",
    },
    {
      number: 33,
      name: "البابا ثيودوسيوس الأول",
    },
    {
      number: 34,
      name: "البابا بطرس الرابع",
    },
    {
      number: 35,
      name: "البابا دميان",
    },
    {
      number: 36,
      name: "البابا أنسطاسيوس",
    },
    {
      number: 37,
      name: "البابا أندرونيقوس",
    },
    {
      number: 38,
      name: "البابا بنيامين الأول",
    },
    {
      number: 39,
      name: "البابا أغاثون",
    },
    {
      number: 40,
      name: "البابا يوأنس الثالث",
    },
    {
      number: 41,
      name: "البابا إسحق",
    },
    {
      number: 42,
      name: "البابا سيمون الأول",
    },
    {
      number: 43,
      name: "البابا الكسندروس الثاني",
    },
    {
      number: 44,
      name: "البابا قزمان الأول",
    },
    {
      number: 45,
      name: "البابا ثيؤذوروس الأول	",
    },
    {
      number: 46,
      name: "البابا خائيل الأول",
    },
    {
      number: 47,
      name: "البابا مينا الأول",
    },
    {
      number: 48,
      name: "البابا يؤانس الرابع",
    },
    {
      number: 49,
      name: "البابا مرقس الثاني",
    },
    {
      number: 50,
      name: "البابا يعقوب",
    },
    {
      number: 51,
      name: "البابا سيمون الثاني",
    },
    {
      number: 52,
      name: "البابا يوساب الأول",
    },
    {
      number: 53,
      name: "البابا خائيل الثاني",
    },
    {
      number: 54,
      name: "البابا قزمان الثاني",
    },
    {
      number: 55,
      name: "البابا شنوده الأول",
    },
    {
      number: 56,
      name: "البابا ميخائيل الأول",
    },
    {
      number: 57,
      name: "البابا غبريال الأول",
    },
    {
      number: 58,
      name: "البابا قزمان الثالث",
    },
    {
      number: 59,
      name: "البابا مكاريوس الأول",
    },
    {
      number: 60,
      name: "البابا ثاؤفانيوس",
    },
    {
      number: 61,
      name: "البابا مينا الثاني",
    },
    {
      number: 62,
      name: "البابا ابرآم",
    },
    {
      number: 63,
      name: "البابا فيلوثاؤس",
    },
    {
      number: 64,
      name: "البابا زكريا",
    },
    {
      number: 65,
      name: "البابا شنودة الثاني",
    },
    {
      number: 66,
      name: "البابا خرسطوذولس",
    },
    {
      number: 67,
      name: "البابا كيرلس الثاني",
    },
    {
      number: 68,
      name: "البابا ميخائيل الثاني",
    },
    {
      number: 69,
      name: "البابا مكاريوس الثاني",
    },
    {
      number: 70,
      name: "البابا غبريال الثاني",
    },
    {
      number: 71,
      name: "البابا ميخائيل الثالث",
    },
    {
      number: 72,
      name: "البابا يؤانس الخامس",
    },
    {
      number: 73,
      name: "البابا مرقص الثالث",
    },
    {
      number: 74,
      name: "البابا يوأنس السادس",
    },
    {
      number: 75,
      name: "البابا كيرلس الثالث",
    },
    {
      number: 76,
      name: "البابا أثناسيوس الثالث",
    },
    {
      number: 77,
      name: "البابا غبريال الثالث",
    },
    {
      number: 78,
      name: "البابا يوأنس السابع",
    },
    {
      number: 79,
      name: "البابا ثيؤدوسيوس الثاني",
    },
    {
      number: 80,
      name: "البابا يوأنس الثامن",
    },
    {
      number: 81,
      name: "البابا يوأنس التاسع",
    },
    {
      number: 82,
      name: "البابا بنيامين الثاني",
    },
    {
      number: 83,
      name: "البابا بطرس الخامس",
    },
    {
      number: 84,
      name: "البابا مرقس الرابع",
    },
    {
      number: 85,
      name: "البابا يوأنس العاشر",
    },
    {
      number: 86,
      name: "البابا غبريال الرابع",
    },
    {
      number: 87,
      name: "البابا متاؤس الأول",
    },
    {
      number: 88,
      name: "البابا غبريال الخامس",
    },
    {
      number: 89,
      name: "البابا يوأنس الحادي عشر",
    },
    {
      number: 90,
      name: "البابا متاؤس الثاني",
    },
    {
      number: 91,
      name: "البابا غبريال السادس",
    },
    {
      number: 92,
      name: "البابا ميخائيل الرابع",
    },
    {
      number: 93,
      name: "البابا يوأنس الثاني عشر",
    },
    {
      number: 94,
      name: "البابا يوأنس الثالث عشر",
    },
    {
      number: 95,
      name: "البابا غبريال السابع",
    },
    {
      number: 96,
      name: "البابا يوأنس الرابع عشر",
    },
    {
      number: 97,
      name: "البابا غبريال الثامن",
    },
    {
      number: 98,
      name: "البابا مرقس الخامس",
    },
    {
      number: 99,
      name: "البابا يوأنس الخامس عشر",
    },
    {
      number: 100,
      name: "البابا متاؤس الثالث",
    },
    {
      number: 101,
      name: "البابا مرقس السادس",
    },
    {
      number: 102,
      name: "البابا متاؤس الرابع",
    },
    {
      number: 103,
      name: "البابا يوأنس السادس عشر",
    },
    {
      number: 104,
      name: "البابا بطرس السادس",
    },
    {
      number: 105,
      name: "البابا يوأنس السابع عشر",
    },
    {
      number: 106,
      name: "البابا مرقس السابع",
    },
    {
      number: 107,
      name: "لبابا يوأنس الثامن عشر",
    },
    {
      number: 108,
      name: "البابا مرقس الثامن",
    },
    {
      number: 109,
      name: "البابا بطرس السابع",
    },
    {
      number: 110,
      name: "البابا كيرلس الرابع",
    },
    {
      number: 111,
      name: "البابا ديمتريوس الثاني",
    },
    {
      number: 112,
      name: "البابا كيرلس الخامس",
    },
    {
      number: 113,
      name: "البابا يوأنس التاسع عشر",
    },
    {
      number: 114,
      name: "البابا مكاريوس الثالث",
    },
    {
      number: 115,
      name: "البابا يوساب الثاني",
    },
    {
      number: 116,
      name: "البابا كيرلس السادس",
    },
    {
      number: 117,
      name: "البابا شنوده الثالث",
    },
    {
      number: 117,
      name: "البابا شنوده الثالث",
    },
  ];
