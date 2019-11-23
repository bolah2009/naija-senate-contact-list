const senateList = [
  {
    state: "ABIA",
    name: "Sen. E. Abaribe",
    phoneNo: "08033129452",
    email: "enyiabaribe@yahoo.com"
  },
  {
    state: "ABIA",
    name: "Sen. T. Orji",
    phoneNo: "07082800000",
    email: "senatortaorji@gmail.com"
  },
  {
    state: "ABIA",
    name: "Sen. O. Kalu",
    phoneNo: "08034000001",
    email: "okalu@orjikalu.com"
  },
  {
    state: "ADAMAWA",
    name: "Sen. B. Yaroe",
    phoneNo: "08034050460",
    email: "bdyaroe@gmail.com"
  },
  {
    state: "ADAMAWA",
    name: "Sen. I. Abbo",
    phoneNo: "08066285112",
    email: "faradugun@gmail.com"
  },
  {
    state: "ADAMAWA",
    name: "Sen. A. Ahmed",
    phoneNo: "",
    email: "aishatu.ahmed@nass.gov.ng"
  },
  {
    state: "AKWA IBOM",
    name: "Sen. B. Akpan",
    phoneNo: "08055555188",
    email: "akpanalbert@hotmail.com"
  },
  {
    state: "AKWA IBOM",
    name: "Sen. A. Eyakenyi",
    phoneNo: "08035054282",
    email: "konssie@yahoo.com"
  },
  {
    state: "AKWA IBOM",
    name: "Sen. C. Ekpeyong",
    phoneNo: "08027785234",
    email: "chrisekpesg@yahoo.com"
  },
  {
    state: "ANAMBRA",
    name: "Sen. I. Ubah",
    phoneNo: "09096655596",
    email: "senatorifeanyiubah@gmail.com"
  },
  {
    state: "ANAMBRA",
    name: "Sen. E. Uche",
    phoneNo: "08037620002",
    email: "u.ekwunife@yahoo.com"
  },
  {
    state: "ANAMBRA",
    name: "Sen. A. Oduah",
    phoneNo: "08055084340",
    email: "senatorstella@gmail.com"
  },
  {
    state: "Bauchi",
    name: "Sen. H. Jika",
    phoneNo: "08038666690",
    email: "jikahalliru@gmail.com"
  },
  {
    state: "Bauchi",
    name: "Sen. A. Bulkachuwa",
    phoneNo: "",
    email: "adamu.bulkachuwa@nass.gov.ng"
  },
  {
    state: "Bauchi",
    name: "Sen. L. Gamau",
    phoneNo: "",
    email: "lawal.gumau@nass.gov.ng"
  },
  {
    state: "BAYELSA",
    name: "Sen. O. EWHRUDJAKPO",
    phoneNo: "09031352791",
    email: "ogagadick@gmail.com"
  },
  {
    state: "BAYELSA",
    name: "Sen. D. Diri",
    phoneNo: "08036668698",
    email: "douyediri@gmail.com"
  },
  {
    state: "BAYELSA",
    name: "Sen. D. Wangagra",
    phoneNo: "",
    email: "degi.wangagha@nass.gov.ng"
  },
  {
    state: "BENUE",
    name: "Sen. E. Orker-Jev",
    phoneNo: "",
    email: "emmanuel.orkerjev@nass.gov.ng"
  },
  {
    state: "BENUE",
    name: "Sen A. Morro",
    phoneNo: "",
    email: "abahmoro@yahoo.com"
  },
  {
    state: "BORNO",
    name: "Sen. A. Kyari",
    phoneNo: "",
    email: "abubakar.kyari@nass.gov.ng"
  },
  {
    state: "BORNO",
    name: "Sen. K. Shettima",
    phoneNo: "08034459047",
    email: "kashimshettima@gmail.com"
  },
  {
    state: "BORNO",
    name: "Sen. M. Ndume",
    phoneNo: "08109480004",
    email: "mohammed.ndume@nass.gov.ng"
  },
  {
    state: "CROSS RIVER",
    name: "Sen. R. Oko",
    phoneNo: "",
    email: "rose.oko@nass.gov.ng"
  },
  {
    state: "CROSS RIVER",
    name: "Sen. G. Bassey",
    phoneNo: "08034444555",
    email: "gershombassey@gmail.com"
  },
  {
    state: "CROSS RIVER",
    name: "Sen. S. Onor",
    phoneNo: "08030998460",
    email: "irunandu@yahoo.com"
  },
  {
    state: "DELTA",
    name: "Sen. O. Omo-Agege",
    phoneNo: "07033399937",
    email: "senator.ovieomoagege@gmail.com"
  },
  {
    state: "DELTA",
    name: "Sen. J. Manager",
    phoneNo: "08143103829",
    email: "jamesmanager2013@gmail.com"
  },
  {
    state: "DELTA",
    name: "Sen. P. Nwaoboshi",
    phoneNo: "08037200999",
    email: "pnwaoboshi@yahoo.com"
  },
  {
    state: "EDO",
    name: "Sen. C. Ordia",
    phoneNo: "08038403877",
    email: "engineercliffordordia@gmail.com"
  },
  {
    state: "EDO",
    name: "Sen. F. Alimikhena",
    phoneNo: "08155555884",
    email: "falimikhena@yahoo.com"
  },
  {
    state: "EDO",
    name: "Sen. M. Urhoghide",
    phoneNo: "08033855557",
    email: "matthewurhoghide@yahoo.com"
  },
  {
    state: "EKITI",
    name: "Sen. A. Adeyeye",
    phoneNo: "08023051100",
    email: "dadeyeye34@gmail.com"
  },
  {
    state: "EKITI",
    name: "Sen. O. Adetumbi",
    phoneNo: "08064487689",
    email: "senator.adetunmbi@gmail.com"
  },
  {
    state: "EKITI",
    name: "Sen. M. Bamidele",
    phoneNo: "080911112",
    email: "amicusng@gmail.com"
  },
  {
    state: "ENUGU",
    name: "Sen. C. Nnamani",
    phoneNo: "08022255522",
    email: "ebeanoglobal875@gmail.com"
  },
  {
    state: "ENUGU",
    name: "Sen. Ikweremadu",
    phoneNo: "08075757000",
    email: "ikeekweremadu@yahoo.com"
  },
  {
    state: "ENUGU",
    name: "Sen. C. Utazi",
    phoneNo: "",
    email: "chukwuka.utazi@nass.gov.ng"
  },
  {
    state: "GOMBE",
    name: "Sen. A. Kilawangs",
    phoneNo: "",
    email: "amos.kilawangs@nass.gov.ng"
  },
  {
    state: "GOMBE",
    name: "Sen. D. Mohammed",
    phoneNo: "07068686699",
    email: "mdgoje1@gmail.com"
  },
  {
    state: "GOMBE",
    name: "Sen. S. Alkali",
    phoneNo: "08026032222",
    email: "saidualkali905@gmail.com"
  },
  {
    state: "EBONYI",
    name: "Sen. S. Egwu",
    phoneNo: "08039665848",
    email: "drsamominyiegwu@gmail.com"
  },
  {
    state: "EBONYI",
    name: "Sen. J. Ogba",
    phoneNo: "08037791346",
    email: "onwaigboasa@yahoo.com"
  },
  {
    state: "EBONYI",
    name: "Sen. M. Nnachi",
    phoneNo: "08034528595",
    email: "michaelamannachi@gmail.com"
  },
  {
    state: "IMO",
    name: "Sen. E. Onyewuchi",
    phoneNo: "08032012132",
    email: "ezeonyewuchi@gmail.com"
  },
  {
    state: "IMO",
    name: "Sen. R. Okorocha",
    phoneNo: "",
    email: "rochas.okorocha@nass.gov.ng"
  },
  {
    state: "IMO",
    name: "Sen. B. Uwajumogu",
    phoneNo: "",
    email: "benjamin.uwajumogu@nass.gov.ng"
  },
  {
    state: "JIGAWA",
    name: "Sen. D. Sankara",
    phoneNo: "08037032577",
    email: "dsankara@yahoo.co.uk"
  },
  {
    state: "JIGAWA",
    name: "Sen. S. Mohammed",
    phoneNo: "08022902648",
    email: "nakudu@yahoo.com"
  },
  {
    state: "JIGAWA",
    name: "Sen. I. Hadejia",
    phoneNo: "",
    email: "ibrahim.hadejia@nass.gov.ng"
  },
  {
    state: "KADUNA",
    name: "Sen. S. Kwari",
    phoneNo: "08033019005",
    email: "suleimankwari@yahoo.com"
  },
  {
    state: "KADUNA",
    name: "Sen. D. La'ah",
    phoneNo: "08118887772",
    email: "laah.danjuma@yahoo.com"
  },
  {
    state: "KANO",
    name: "Sen. K. Gaya",
    phoneNo: "",
    email: "kabiru.gaya@nass.gov.ng"
  },
  {
    state: "KANO",
    name: "Sen. I. Jibrin",
    phoneNo: "",
    email: "ibrahim.jibrin@nass.gov.ng"
  },
  {
    state: "KANO",
    name: "Sen. I. Shekarau",
    phoneNo: "08099199111",
    email: "ishekarau55@yahoo.com"
  },
  {
    state: "KATSINA",
    name: "Sen. A. Babba-Kaita",
    phoneNo: "",
    email: "ahmad.babba@nass.gov.ng"
  },
  {
    state: "KATSINA",
    name: "Sen. B. Mandiya",
    phoneNo: "",
    email: "bellom2001@yahoo.com"
  },
  {
    state: "KATSINA",
    name: "Sen. K. Barkiya",
    phoneNo: "08138360742",
    email: "barkamazadu00@yahoo.com"
  },
  {
    state: "KEBBI",
    name: "Sen. M. Aliero",
    phoneNo: "07066847000",
    email: "senatoraliero@yahoo.com"
  },
  {
    state: "KEBBI",
    name: "Sen. Y. Abdullahi",
    phoneNo: "",
    email: "yahaya.abdullahi@nass.gov.ng"
  },
  {
    state: "KEBBI",
    name: "Sen. B. Na'Allah",
    phoneNo: "",
    email: "bala.naallah@nass.gov.ng"
  },
  {
    state: "KOGI",
    name: "Sen. J. Isah",
    phoneNo: "08185651909",
    email: "isahj@ymail.com"
  },
  {
    state: "KOGI",
    name: "Sen. O. Yakubu",
    phoneNo: "07032642674",
    email: "yakubu.oseni75@yahoo.com"
  },
  {
    state: "KWARA",
    name: "Sen. A. Yisa",
    phoneNo: "07055221111",
    email: "ylashiru@gmail.com"
  },
  {
    state: "KWARA",
    name: "Sen. S. Umar",
    phoneNo: "",
    email: "sadiq.umar@nass.gov.ng"
  },
  {
    state: "KWARA",
    name: "Sen. I. 'Olorigbigbe",
    phoneNo: "08033581695",
    email: "oloridoc@yahoo.com"
  },
  {
    state: "LAGOS",
    name: "Sen. Oluremi Tinubu",
    phoneNo: "08095300251",
    email: "info@oluremitinubu.com"
  },
  {
    state: "LAGOS",
    name: "Sen. S. Osinowo",
    phoneNo: "08033049369",
    email: "bayoosinowo@gmail.com"
  },
  {
    state: "LAGOS",
    name: "Sen. S. Adeola",
    phoneNo: "08074000040",
    email: "adeolaolamilekan2005@yahoo.com"
  },
  {
    state: "NASARAWA",
    name: "Sen. A. Adamu",
    phoneNo: "",
    email: "abdullahi.adamu@nass.gov.ng"
  },
  {
    state: "NASARAWA",
    name: "Sen. G. Awkashiki",
    phoneNo: "08099321703",
    email: "godiyaakwashiki123@gmail.com"
  },
  {
    state: "NASARAWA",
    name: "Sen. U. Almakura",
    phoneNo: "08077253989",
    email: "tankoalmakura@yahoo.co.uk"
  },
  {
    state: "NIGER",
    name: "SEN. ALIYU ABDULLAHI - THE SPONSOR OF THE BILL",
    phoneNo: "08052046555",
    email: "draliyuabdullahii@gmail.com"
  },
  {
    state: "NIGER",
    name: "Sen. M. Bima",
    phoneNo: "08173479797",
    email: "sangibima@gmail.com"
  },
  {
    state: "NIGER",
    name: "Sen. M. Musa",
    phoneNo: "08033114615",
    email: "Sani_313@hotmail.com"
  },
  {
    state: "OGUN",
    name: "Sen. R. Mustapha",
    phoneNo: "08033047403",
    email: "adeoshy@gmail.com"
  },
  {
    state: "OGUN",
    name: "Sen. I. Amosun",
    phoneNo: "08033213993",
    email: "amks2@yahoo.com"
  },
  {
    state: "OGUN",
    name: "Sen. T. Odebiyi",
    phoneNo: "08036058080",
    email: "toluodebiyi@gmail.com"
  },
  {
    state: "ONDO",
    name: "Sen. A. Akinyelure",
    phoneNo: "08091707000",
    email: "akinyelure1@yahoo.com"
  },
  {
    state: "ONDO",
    name: "Sen. N. Tofowomo",
    phoneNo: "08054546666",
    email: "tofowomo_1960@yahoo.com"
  },
  {
    state: "ONDO",
    name: "Sen. R. Boroffice",
    phoneNo: "08176406557",
    email: "rboroffice@yahoo.com"
  },
  {
    state: "OSUN",
    name: "Sen. S. Basiru",
    phoneNo: "08034753343",
    email: "ajibolabasiru@hotmail.com"
  },
  {
    state: "OSUN",
    name: "Sen. F. Fadahunsi",
    phoneNo: "08052242211",
    email: "adefadahunsi19@gmail.com"
  },
  {
    state: "OSUN",
    name: "Sen. A. Oriolowo",
    phoneNo: "08033565979",
    email: "yemlee12@gmail.com"
  },
  {
    state: "OYO",
    name: "Sen. T. Folarin",
    phoneNo: "08033160587",
    email: "teslimkfolarin@yahoo.com"
  },
  {
    state: "OYO",
    name: "Sen. B. Omotayo",
    phoneNo: "08037053375",
    email: "rabab1004@yahoo.com"
  },
  {
    state: "OYO",
    name: "Sen. A. Balogun",
    phoneNo: "08132956057",
    email: "kbalogun7707@gmail.com"
  },
  {
    state: "PLATEAU",
    name: "Senator I. Longjan",
    phoneNo: "07044442045",
    email: "talk2longjan@gmail.com"
  },
  {
    state: "PLATEAU",
    name: "Sen. H. Dimka",
    phoneNo: "08033359443",
    email: "dewansamson4@gmail.com"
  },
  {
    state: "PLATEAU",
    name: "Sen. I. Gyang",
    phoneNo: "08097777712",
    email: "dridgyang@gmail.com"
  },
  {
    state: "RIVERS",
    name: "Sen. B. Apiafi",
    phoneNo: "",
    email: "betty.apiafi@nass.gov.ng"
  },
  {
    state: "RIVERS",
    name: "Sen. G. Sekibo",
    phoneNo: "",
    email: "george.sekibo@nass.gov.ng"
  },
  {
    state: "RIVERS",
    name: "Sen. B. Mpigi",
    phoneNo: "08037419000",
    email: "mpigib@yahoo.com"
  }
];

export default senateList;
