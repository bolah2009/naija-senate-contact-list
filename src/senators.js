const senateList = [
  {
    state: 'Abia',
    data: [
      {
        name: 'Sen. E. Abaribe',
        fullName: 'Abaribe Enyinnaya Harcourt',
        phone: '08033129452',
        email: 'enyiabaribe@yahoo.com',
        district: 'Abia South',
      },
      {
        name: 'Sen. O. Kalu',
        fullName: 'Orji Uzor Kalu',
        phone: '08034000001',
        email: 'okalu@orjikalu.com',
        district: 'Abia North',
      },
      {
        name: 'Sen. T. Orji',
        fullName: 'Theodore Ahamefule Orji',
        phone: '07082800000',
        email: 'senatortaorji@gmail.com',
        district: 'Abia Central',
      },
    ],
  },
  {
    state: 'Adamawa',
    data: [
      {
        name: 'Sen. B. Yaroe',
        fullName: 'Binos Dauda Yaroe',
        phone: '08034050460',
        email: 'bdyaroe@gmail.com',
        district: 'Adamawa South',
      },
      {
        name: 'Sen. I. Abbo',
        fullName: 'Ishaku Elisha cliff Abbo',
        phone: '08066285112',
        email: 'faradugun@gmail.com',
        district: 'Adamawa North',
      },
      {
        name: 'Sen. A. Ahmed',
        fullName: 'Aishatu Dahiru Ahmed',
        email: 'aishatu.ahmed@nass.gov.ng',
        district: 'Adamawa Central',
      },
    ],
  },
  {
    state: 'Akwa Ibom',
    data: [
      {
        name: 'Sen. B. Akpan',
        fullName: 'Bassey Albert Akpan',
        phone: '08055555188',
        email: 'akpanalbert@hotmail.com',
        district: 'Akwa Ibom North East',
      },
      {
        name: 'Sen. A. Eyakenyi',
        fullName: 'Akon Eyakanyi',
        phone: '08035054282',
        email: 'konssie@yahoo.com',
        district: 'Akwa Ibom South',
      },
      {
        name: 'Sen. C. Ekpeyong',
        fullName: 'Chris Ekpenyong',
        phone: '08027785234',
        email: 'chrisekpesg@yahoo.com',
        district: 'Akwa Ibom North West',
      },
    ],
  },
  {
    state: 'Anambra',
    data: [
      {
        name: 'Sen. I. Ubah',
        fullName: 'Ifeanyi Uba',
        phone: '09096655596',
        email: 'senatorifeanyiubah@gmail.com',
        district: 'Anambra South',
      },
      {
        name: 'Sen. E. Uche',
        fullName: 'Uche Lilian Ekwunife',
        phone: '08037620002',
        email: 'u.ekwunife@yahoo.com',
        district: 'Anambra Central',
      },
      {
        name: 'Sen. A. Oduah',
        fullName: 'Stella Adaeze Oduah',
        phone: '08055084340',
        email: 'senatorstella@gmail.com',
        district: 'Anambra North',
      },
    ],
  },
  {
    state: 'Bauchi',
    data: [
      {
        name: 'Sen. H. Jika',
        fullName: 'Halliru Dauda Jika',
        phone: '08038666690',
        email: 'jikahalliru@gmail.com',
        district: 'Bauchi Central',
      },
      {
        name: 'Sen. A. Bulkachuwa',
        fullName: 'Adamu Mohammed Bulkachuwa',
        email: 'adamu.bulkachuwa@nass.gov.ng',
        district: 'Bauchi North',
      },
      {
        name: 'Sen. L. Gamau',
        fullName: 'Lawal Yahaya Gumau',
        email: 'lawal.gumau@nass.gov.ng',
        district: 'Bauchi South',
      },
    ],
  },
  {
    state: 'Bayelsa',
    data: [
      {
        name: 'Sen. O. Ewhrudjakpo',
        fullName: 'Lawrence Ewhrudjakpor',
        phone: '09031352791',
        email: 'ogagadick@gmail.com',
        district: 'Bayelsa West',
      },
      {
        name: 'Sen. D. Diri',
        fullName: 'Douye Diri',
        phone: '08036668698',
        email: 'douyediri@gmail.com',
        district: 'Bayelsa Central',
      },
      {
        name: 'Sen. D. Biobarakuma',
        fullName: 'Biobarakuma Degi-Eremienyo',
        phone: '08033104612',
        email: 'bwdegi@yahoo.com',
        district: 'Bayelsa East',
      },
    ],
  },
  {
    state: 'Benue',
    data: [
      {
        name: 'Sen. E. Orker-Jev',
        fullName: 'Emmanuel Orker-Jev',
        email: 'emmanuel.orkerjev@nass.gov.ng',
        district: 'Benue North West',
      },
      {
        name: 'Sen. S. Gabriel',
        fullName: 'Gabriel Suswam',
        phone: '08188821440',
        email: 'Gabtorsuawam1@yahoo.com',
        district: 'Benue North East',
      },
      {
        name: 'Sen A. Morro',
        fullName: 'Abba Moro',
        phone: '08068870606',
        email: 'abahmoro@yahoo.com',
        district: 'Benue South',
      },
    ],
  },
  {
    state: 'Borno',
    data: [
      {
        name: 'Sen. A. Kyari',
        fullName: 'Abubakar Kyari',
        phone: '08022907124',
        email: 'abubakar.kyari@nass.gov.ng',
        district: 'Borno North',
      },
      {
        name: 'Sen. K. Shettima',
        fullName: 'Kashim Shettima',
        phone: '08034459047',
        email: 'kashimshettima@gmail.com',
        district: 'Borno Central',
      },
      {
        name: 'Sen. M. Ndume',
        fullName: 'Mohammed Ali Ndume',
        phone: '08109480004',
        email: 'mohammed.ndume@nass.gov.ng',
        district: 'Borno South',
      },
    ],
  },
  {
    state: 'Cross River',
    data: [
      {
        name: 'Sen. R. Oko',
        fullName: 'Rose Okoji Oko',
        phone: '08033328026',
        email: 'rose.oko@nass.gov.ng',
        district: 'Cross River North',
      },
      {
        name: 'Sen. G. Bassey',
        fullName: 'Gershom Bassey',
        phone: '08034444555',
        email: 'gershombassey@gmail.com',
        district: 'Cross River South',
      },
      {
        name: 'Sen. S. Onor',
        fullName: 'Sandy Onor',
        phone: '08030998460',
        email: 'irunandu@yahoo.com',
        district: 'Cross River Central',
      },
    ],
  },
  {
    state: 'Delta',
    data: [
      {
        name: 'Sen. O. Omo-Agege',
        fullName: 'Ovie Omo-Agege',
        phone: '07033399937',
        email: 'senator.ovieomoagege@gmail.com',
        district: 'Delta Central',
      },
      {
        name: 'Sen. J. Manager',
        fullName: 'James Manager',
        phone: '08143103829',
        email: 'jamesmanager2013@gmail.com',
        district: 'Delta South',
      },
      {
        name: 'Sen. P. Nwaoboshi',
        fullName: 'Peter Nwaoboshi',
        phone: '08037200999',
        email: 'pnwaoboshi@yahoo.com',
        district: 'Delta North',
      },
    ],
  },
  {
    state: 'Ebonyi',
    data: [
      {
        name: 'Sen. M. Nnachi',
        fullName: 'Michael Ama Nnachi',
        phone: '08034528595',
        email: 'michaelamannachi@gmail.com',
        district: 'Ebonyi South',
      },
      {
        name: 'Sen. J. Ogba',
        fullName: 'Obinna Joseph Ogba',
        phone: '08037791346',
        email: 'onwaigboasa@yahoo.com',
        district: 'Ebonyi Central',
      },
      {
        name: 'Sen. S. Egwu',
        fullName: 'Sam Egwu',
        phone: '08039665848',
        email: 'drsamominyiegwu@gmail.com',
        district: 'Ebonyi North',
      },
    ],
  },
  {
    state: 'Edo',
    data: [
      {
        name: 'Sen. C. Ordia',
        fullName: 'Clifford Ordia',
        phone: '08038403877',
        email: 'engineercliffordordia@gmail.com',
        district: 'Edo Central',
      },
      {
        name: 'Sen. F. Alimikhena',
        fullName: 'Francis Alimikkhena',
        phone: '08155555884',
        email: 'falimikhena@yahoo.com',
        district: 'Edo North',
      },
      {
        name: 'Sen. M. Urhoghide',
        fullName: 'Mathew A. Urhoghide',
        phone: '08033855557',
        email: 'matthewurhoghide@yahoo.com',
        district: 'Edo South',
      },
    ],
  },
  {
    state: 'Ekiti',
    data: [
      {
        name: 'Sen. A. Adeyeye',
        fullName: 'Prince Dayo Adeyeye',
        phone: '08023051100',
        email: 'dadeyeye34@gmail.com',
        district: 'Ekiti South',
      },
      {
        name: 'Sen. O. Adetumbi',
        fullName: 'Olubunmi Adetunmbi',
        phone: '08064487689',
        email: 'senator.adetunmbi@gmail.com',
        district: 'Ekiti North',
      },
      {
        name: 'Sen. M. Bamidele',
        fullName: 'Michael Opeyemi Bamidele',
        phone: '080911112',
        email: 'amicusng@gmail.com',
        district: 'Ekiti Central',
      },
    ],
  },
  {
    state: 'Enugu',
    data: [
      {
        name: ' Sen. C. Nnamani',
        fullName: 'Chimaroke Nnamani',
        phone: '08022255522',
        email: 'ebeanoglobal875@gmail.com ',
        district: 'Enugu East',
      },
      {
        name: 'Sen. Ikweremadu',
        fullName: 'Ike Ekweremadu',
        phone: '08075757000',
        email: 'ikeekweremadu@yahoo.com',
        district: 'Enugu West',
      },
      {
        name: 'Sen. C. Utazi',
        fullName: 'Chukwuka Utazi',
        phone: '08037226187',
        email: 'chukwuka.utazi@nass.gov.ng',
        district: 'Enugu North',
      },
    ],
  },
  {
    state: 'Federal Capital Territory',
    data: [
      {
        name: ' Sen. P. Aduda',
        fullName: 'Philip Taminu Aduda',
        phone: '08034509106',
        email: 'philipaduda2@yahoo.com',
        district: 'Federal Capital Territory',
      },
    ],
  },
  {
    state: 'Gombe',
    data: [
      {
        name: 'Sen. A. Kilawangs',
        fullName: 'Amos Bulus Kilawangs',
        email: 'amos.kilawangs@nass.gov.ng',
        district: 'Gombe South',
      },
      {
        name: 'Sen. D. Mohammed',
        fullName: 'Mohammed Goje Danjuma',
        phone: '07068686699',
        email: 'mdgoje1@gmail.com',
        district: 'Gombe Central',
      },
      {
        name: 'Sen. S. Alkali',
        fullName: 'Saidu Ahmed Alkali',
        phone: '08026032222',
        email: 'saidualkali905@gmail.com',
        district: 'Gombe North',
      },
    ],
  },
  {
    state: 'Imo',
    data: [
      {
        name: 'Sen. E. Onyewuchi',
        fullName: 'Onyewuchi Francis',
        phone: '08032012132',
        email: 'ezeonyewuchi@gmail.com',
        district: 'Imo East',
      },
      {
        name: 'Sen. R. Okorocha',
        fullName: 'Rochas Okorocha',
        phone: '07067777077',
        email: 'rochas.okorocha@nass.gov.ng',
        district: 'Imo West',
      },
      {
        name: 'Sen. B. Uwajumogu',
        fullName: 'Ben Uwajumogu',
        email: 'benjamin.uwajumogu@nass.gov.ng',
        district: 'Imo North',
      },
    ],
  },
  {
    state: 'Jigawa',
    data: [
      {
        name: 'Sen. D. Sankara',
        fullName: 'Danladi Abdullahi Sankara',
        phone: '08037032577',
        email: 'dsankara@yahoo.co.uk',
        district: 'Jigawa North West',
      },
      {
        name: 'Sen. S. Mohammed',
        fullName: 'Mohammed Sabo Nakudu',
        phone: '08022902648',
        email: 'nakudu@yahoo.com',
        district: 'Jigawa South West',
      },
      {
        name: 'Sen. I. Hadejia',
        fullName: 'Ibrahim Hassan Hadejia',
        phone: '07054177706',
        email: 'ibrahim.hadejia@nass.gov.ng',
        district: 'Jigawa North East',
      },
    ],
  },
  {
    state: 'Kaduna',
    data: [
      {
        name: 'Sen. S. Kwari',
        fullName: 'Suleiman Abdu Kwari',
        phone: '08033019005',
        email: 'suleimankwari@yahoo.com',
        district: 'Kaduna North',
      },
      {
        name: 'Sen. U. Sani',
        fullName: 'Uba Sani',
        phone: '08099111119',
        email: 'ubasani@aol.com',
        district: 'Kaduna Central',
      },
      {
        name: "Sen. D. La'ah",
        fullName: 'Danjuma Laah',
        phone: '08118887772',
        email: 'laah.danjuma@yahoo.com',
        district: 'Kaduna South',
      },
    ],
  },
  {
    state: 'Kano',
    data: [
      {
        name: 'Sen. K. Gaya',
        fullName: 'Kabiru Ibrahim Gaya',
        email: 'kabiru.gaya@nass.gov.ng',
        district: 'Kano South',
      },
      {
        name: 'Sen. I. Jibrin',
        fullName: 'Ibrahim Barau Jibrin',
        email: 'ibrahim.jibrin@nass.gov.ng',
        district: 'Kano North',
      },
      {
        name: 'Sen. I. Shekarau',
        fullName: 'Ibrahim Shekarau',
        phone: '08099199111',
        email: 'ishekarau55@yahoo.com',
        district: 'Kano Central',
      },
    ],
  },
  {
    state: 'Katsina',
    data: [
      {
        name: 'Sen. A. Babba-Kaita',
        email: 'ahmad.babba@nass.gov.ng',
        district: 'Katsina North',
      },
      {
        name: 'Sen. B. Mandiya',
        fullName: 'Bello Mandiya',
        email: 'bellom2001@yahoo.com',
        district: 'Katsina South',
      },
      {
        name: 'Sen. K. Barkiya',
        fullName: 'Kabir Barkiya',
        phone: '08138360742',
        email: 'barkamazadu00@yahoo.com',
        district: 'Katsina Central',
      },
    ],
  },
  {
    state: 'Kebbi',
    data: [
      {
        name: 'Sen. M. Aliero',
        fullName: 'Muhammad Adamu Aliero',
        phone: '07066847000',
        email: 'senatoraliero@yahoo.com',
        district: 'Kebbi Central',
      },
      {
        name: 'Sen. Y. Abdullahi',
        fullName: 'Yahaya Abdullahi',
        email: 'yahaya.abdullahi@nass.gov.ng',
        district: 'Kebbi North',
      },
      {
        name: "Sen. B. Na'Allah",
        fullName: "Bala Ibn Na'Allah",
        phone: '08039639999',
        email: 'bala.naallah@nass.gov.ng',
        district: 'Kebbi South',
      },
    ],
  },
  {
    state: 'Kogi',
    data: [
      {
        name: 'Sen. J. Isah',
        fullName: 'Isah Jibrin',
        phone: '08185651909',
        email: 'isahj@ymail.com',
        district: 'Kogi East',
      },
      {
        name: 'Sen. O. Yakubu',
        fullName: 'Yakubu Oseni',
        phone: '07032642674',
        email: 'yakubu.oseni75@yahoo.com',
        district: 'Kogi Central',
      },
      {
        name: 'Sen. D. Melaye',
        fullName: 'Dino Melaye',
        phone: '08111111555',
        email: 'otunbadino1@gmail.com',
        district: 'Kogi West',
      },
    ],
  },
  {
    state: 'Kwara',
    data: [
      {
        name: 'Sen. A. Yisa',
        fullName: 'Oyelola Yisa Ashiru',
        phone: '07055221111',
        email: 'ylashiru@gmail.com',
        district: 'Kwara South',
      },
      {
        name: 'Sen. S. Umar',
        email: 'sadiq.umar@nass.gov.ng',
        district: 'Kwara North',
      },
      {
        name: 'Sen. I. Olorigbigbe',
        fullName: 'Ibrahim Yahaya Oloriegbe',
        phone: '08033581695',
        email: 'oloridoc@yahoo.com',
        district: 'Kwara Central',
      },
    ],
  },
  {
    state: 'Lagos',
    data: [
      {
        name: 'Sen. Oluremi Tinubu',
        fullName: 'Oluremi Shade Tinubu',
        phone: '08095300251',
        email: 'info@oluremitinubu.com',
        district: 'Lagos Central',
      },
      {
        name: 'Sen. S. Osinowo',
        fullName: 'Osinowo Sikiru Adebayo',
        phone: '08033049369',
        email: 'bayoosinowo@gmail.com',
        district: 'Lagos East',
      },
      {
        name: 'Sen. S. Adeola',
        fullName: 'Adeola Solomon Olamilekan',
        phone: '08074000040',
        email: 'adeolaolamilekan2005@yahoo.com',
        district: 'Lagos West',
      },
    ],
  },
  {
    state: 'Nasarawa',
    data: [
      {
        name: 'Sen. A. Adamu',
        fullName: 'Abdullahi Adamu',
        phone: '08065186557',
        email: 'abdullahi.adamu@nass.gov.ng',
        district: 'Nasarawa West',
      },
      {
        name: 'Sen. G. Awkashiki',
        fullName: 'Godiya Akwashiki',
        phone: '08099321703',
        email: 'godiyaakwashiki123@gmail.com',
        district: 'Nasarawa North',
      },
      {
        name: 'Sen. U. Almakura',
        fullName: 'Tanko Al-Makura',
        phone: '08077253989',
        email: 'tankoalmakura@yahoo.co.uk',
        district: 'Nasarawa South',
      },
    ],
  },
  {
    state: 'Niger',
    data: [
      {
        name: 'Sen. Aliyu Abdullahi',
        fullName: 'Aliyu Shabi Abdullah',
        phone: '08052046555',
        email: 'draliyuabdullahii@gmail.com',
        district: 'Niger North',
      },
      {
        name: 'Sen. M. Bima',
        fullName: 'Mohammed Bima',
        phone: '08173479797',
        email: 'sangibima@gmail.com',
        district: 'Niger South',
      },
      {
        name: 'Sen. M. Musa',
        fullName: 'Mohammed Sani Musa',
        phone: '08033114615',
        email: 'Sani_313@hotmail.com',
        district: 'Niger East',
      },
    ],
  },
  {
    state: 'Ogun',
    data: [
      {
        name: 'Sen. R. Mustapha',
        fullName: 'Lekan Mustapha',
        phone: '08033047403',
        email: 'adeoshy@gmail.com',
        district: 'Ogun East',
      },
      {
        name: 'Sen. I. Amosun',
        fullName: 'Ibikunle Amosun',
        phone: '08033213993',
        email: 'amks2@yahoo.com',
        district: 'Ogun Central',
      },
      {
        name: 'Sen. T. Odebiyi',
        fullName: 'Tolu Odebiyi',
        phone: '08036058080',
        email: 'toluodebiyi@gmail.com',
        district: 'Ogun West',
      },
    ],
  },
  {
    state: 'Ondo',
    data: [
      {
        name: 'Sen. A. Akinyelure',
        fullName: 'Ayo Akinyelure',
        phone: '08091707000',
        email: 'akinyelure1@yahoo.com',
        district: 'Ondo Central',
      },
      {
        name: 'Sen. N. Tofowomo',
        fullName: 'Tofowomo Nicholas Olubukola',
        phone: '08054546666',
        email: 'tofowomo_1960@yahoo.com',
        district: 'Ondo South',
      },
      {
        name: 'Sen. R. Boroffice',
        fullName: 'Robert Ajayi Boroffice',
        phone: '08176406557',
        email: 'rboroffice@yahoo.com',
        district: 'Ondo North',
      },
    ],
  },
  {
    state: 'Osun',
    data: [
      {
        name: 'Sen. S. Basiru',
        fullName: 'Surajudeen Ajibola Basiru',
        phone: '08034753343',
        email: 'ajibolabasiru@hotmail.com',
        district: 'Osun Central',
      },
      {
        name: 'Sen. F. Fadahunsi',
        fullName: 'Francis Fadahunsi',
        phone: '08052242211',
        email: 'adefadahunsi19@gmail.com',
        district: 'Osun East',
      },
      {
        name: 'Sen. A. Oriolowo',
        fullName: 'Adelere Oriolowo',
        phone: '08033565979',
        email: 'yemlee12@gmail.com',
        district: 'Osun West',
      },
    ],
  },
  {
    state: 'Oyo',
    data: [
      {
        name: 'Sen. T. Folarin',
        fullName: 'Teslim Kolawale Folarin',
        phone: '08033160587',
        email: 'teslimkfolarin@yahoo.com',
        district: 'Oyo Central',
      },
      {
        name: 'Sen. B. Omotayo',
        fullName: 'Buhari Abdulfatai Omotayo',
        phone: '08037053375',
        email: 'rabab1004@yahoo.com',
        district: 'Oyo North',
      },
      {
        name: 'Sen. A. Balogun',
        fullName: 'Ademola Kola Balogun',
        phone: '08132956057',
        email: 'kbalogun7707@gmail.com',
        district: 'Oyo South',
      },
    ],
  },
  {
    state: 'Plateau',
    data: [
      {
        name: 'Senator I. Longjan',
        fullName: 'Ignatius Datong Longjan',
        phone: '07044442045',
        email: 'talk2longjan@gmail.com',
        district: 'Plateau South',
      },
      {
        name: 'Sen. H. Dimka',
        fullName: 'Hezekiah Ayuba Dimka',
        phone: '08033359443',
        email: 'dewansamson4@gmail.com',
        district: 'Plateau Central',
      },
      {
        name: 'Sen. I. Gyang',
        fullName: 'Istifanus Dung Gyang',
        phone: '08097777712',
        email: 'dridgyang@gmail.com',
        district: 'Plateau North',
      },
    ],
  },
  {
    state: 'Rivers',
    data: [
      {
        name: 'Sen. B. Apiafi',
        fullName: 'Betty Apiafi',
        email: 'betty.apiafi@nass.gov.ng',
        district: 'Rivers West',
      },
      {
        name: 'Sen. G. Sekibo',
        fullName: 'George Thompson Sekibo',
        email: 'george.sekibo@nass.gov.ng',
        district: 'Rivers East',
      },
      {
        name: 'Sen. B. Mpigi',
        fullName: 'Barinada Barry Mpigi',
        phone: '08037419000',
        email: 'mpigib@yahoo.com',
        district: 'Rivers South East',
      },
    ],
  },
  {
    state: 'Sokoto',
    data: [
      {
        name: 'Sen. A. Gobir',
        fullName: 'Abdullahi Gobir',
        email: 'abdullahi.gobir@nass.gov.ng',
        district: 'Sokoto East',
      },
      {
        name: 'Sen. A. Tambuwal',
        fullName: 'Abubakar Shehu Tambuwal',
        phone: '07069619523',
        email: 'abubakarshehu5225@gmail.com',
        district: 'Sokoto South',
      },
      {
        name: 'Sen. A. Wamakko',
        fullName: 'Aliyu Magatakarda Wamakko',
        phone: '07033181818',
        email: 'amwamakko@yahoo.com',
        district: 'Sokoto North',
      },
    ],
  },
  {
    state: 'Taraba',
    data: [
      {
        name: 'Sen. E. Bwacha',
        fullName: 'Emmanuel Bwacha',
        phone: '07063795588',
        email: 'info@senatorbwacha.com',
        district: 'Taraba South',
      },
      {
        name: 'Sen. Shuaibu Isa Lau	',
        fullName: 'Shuaibu Isa Lau',
        email: 'shuaibu.lau@nass.gov.ng',
        district: 'Taraba North',
      },
      {
        name: 'Sen. Y. Yusuf',
        fullName: 'Yusuf Abubakar Yusuf',
        phone: '08033109493',
        email: 'yusufawakili@gmail.com',
        district: 'Taraba Central',
      },
    ],
  },
  {
    state: 'Yobe',
    data: [
      {
        name: 'Sen. A. Lawan',
        fullName: 'Ahmad Ibrahim Lawan',
        phone: '07055090323',
        district: 'Yobe North',
      },
      {
        name: 'Sen. I. Gaidam',
        fullName: 'Ibrahim Gaidam',
        phone: '08036591699',
        email: 'ibrahim.gaidam@nass.gov.ng',
        district: 'Yobe East',
      },
      {
        name: 'Sen. I. Bomai',
        fullName: 'Ibrahim Mohammed Bomai',
        email: 'ibrahim.bomami@nass.gov.ng',
        district: 'Yobe South',
      },
    ],
  },
  {
    state: 'Zamfara',
    data: [
      {
        name: 'Sen. A. Yari',
        fullName: "Abdul'aziz Abubakar Yari",
        phone: '08033412454',
        email: 'yariabdulazeez@gmail.com',
        district: 'Zamfara West',
      },
      {
        name: 'Sen. H. Gusau',
        fullName: 'Hassan Mohammed Gusau',
        email: 'hassan.gusau@nass.gov.ng',
        district: 'Zamfara Central',
      },
      {
        name: 'Sen. K. Tijjani',
        fullName: 'Kaura Yahaya Tijjani',
        phone: '08186567173',
        email: 'tykaura@yahoo.com',
        district: 'Zamfara North',
      },
    ],
  },
];

export default senateList;
