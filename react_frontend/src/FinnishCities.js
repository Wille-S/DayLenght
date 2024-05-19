const FinnishCities = [
    "akaa",
    "alajärvi",
    "alavieska",
    "alavus",
    "asikkala",
    "askola",
    "aura",
    "brändö",
    "eckerö",
    "enonkoski",
    "enontekiö",
    "espoo",
    "eura",
    "eurajoki",
    "evijärvi",
    "finström",
    "forssa",
    "föglö",
    "geta",
    "haapajärvi",
    "haapavesi",
    "hailuoto",
    "halsua",
    "hamina",
    "hammarland",
    "hankasalmi",
    "hanko",
    "harjavalta",
    "hartola",
    "hattula",
    "hausjärvi",
    "heinola",
    "heinävesi",
    "helsinki",
    "hirvensalmi",
    "hollola",
    "huittinen",
    "humppila",
    "hyrynsalmi",
    "hyvinkää",
    "hämeenkyrö",
    "hämeenlinna",
    "ii",
    "iisalmi",
    "iitti",
    "ikaalinen",
    "ilmajoki",
    "ilomantsi",
    "imatra",
    "inari",
    "inkoo",
    "isojoki",
    "isokyrö",
    "janakkala",
    "joensuu",
    "jokioinen",
    "jomala",
    "joroinen",
    "joutsa",
    "juuka",
    "juupajoki",
    "juva",
    "jyväskylä",
    "jämijärvi",
    "jämsä",
    "järvenpää",
    "kaarina",
    "kaavi",
    "kajaani",
    "kalajoki",
    "kangasala",
    "kangasniemi",
    "kankaanpää",
    "kannonkoski",
    "kannus",
    "karijoki",
    "karkkila",
    "karstula",
    "karvia",
    "kaskinen",
    "kauhajoki",
    "kauhava",
    "kauniainen",
    "kaustinen",
    "keitele",
    "kemi",
    "kemijärvi",
    "keminmaa",
    "kemiönsaari",
    "kempele",
    "kerava",
    "keuruu",
    "kihniö",
    "kinnula",
    "kirkkonummi",
    "kitee",
    "kittilä",
    "kiuruvesi",
    "kivijärvi",
    "kokemäki",
    "kokkola",
    "kolari",
    "konnevesi",
    "kontiolahti",
    "korsnäs",
    "koski tl",
    "kotka",
    "kouvola",
    "kristiinankaupunki",
    "kruunupyy",
    "kuhmo",
    "kuhmoinen",
    "kumlinge",
    "kuopio",
    "kuortane",
    "kurikka",
    "kustavi",
    "kuusamo",
    "kyyjärvi",
    "kärkölä",
    "kärsämäki",
    "kökar",
    "lahti",
    "laihia",
    "laitila",
    "lapinjärvi",
    "lapinlahti",
    "lappajärvi",
    "lappeenranta",
    "lapua",
    "laukaa",
    "lemi",
    "lemland",
    "lempäälä",
    "leppävirta",
    "lestijärvi",
    "lieksa",
    "lieto",
    "liminka",
    "liperi",
    "lohja",
    "loimaa",
    "loppi",
    "loviisa",
    "luhanka",
    "lumijoki",
    "lumparland",
    "luoto",
    "luumäki",
    "maalahti",
    "maarianhamina – mariehamn",
    "marttila",
    "masku",
    "merijärvi",
    "merikarvia",
    "miehikkälä",
    "mikkeli",
    "muhos",
    "multia",
    "muonio",
    "mustasaari",
    "muurame",
    "mynämäki",
    "myrskylä",
    "mäntsälä",
    "mänttä-vilppula",
    "mäntyharju",
    "naantali",
    "nakkila",
    "nivala",
    "nokia",
    "nousiainen",
    "nurmes",
    "nurmijärvi",
    "närpiö",
    "orimattila",
    "oripää",
    "orivesi",
    "oulainen",
    "oulu",
    "outokumpu",
    "padasjoki",
    "paimio",
    "paltamo",
    "parainen",
    "parikkala",
    "parkano",
    "pedersöre",
    "pelkosenniemi",
    "pello",
    "perho",
    "pertunmaa",
    "petäjävesi",
    "pieksämäki",
    "pielavesi",
    "pietarsaari",
    "pihtipudas",
    "pirkkala",
    "polvijärvi",
    "pomarkku",
    "pori",
    "pornainen",
    "porvoo",
    "posio",
    "pudasjärvi",
    "pukkila",
    "punkalaidun",
    "puolanka",
    "puumala",
    "pyhtää",
    "pyhäjoki",
    "pyhäjärvi",
    "pyhäntä",
    "pyhäranta",
    "pälkäne",
    "pöytyä",
    "raahe",
    "raasepori",
    "raisio",
    "rantasalmi",
    "ranua",
    "rauma",
    "rautalampi",
    "rautavaara",
    "rautjärvi",
    "reisjärvi",
    "riihimäki",
    "ristijärvi",
    "rovaniemi",
    "ruokolahti",
    "ruovesi",
    "rusko",
    "rääkkylä",
    "saarijärvi",
    "salla",
    "salo",
    "saltvik",
    "sastamala",
    "sauvo",
    "savitaipale",
    "savonlinna",
    "savukoski",
    "seinäjoki",
    "sievi",
    "siikainen",
    "siikajoki",
    "siikalatva",
    "siilinjärvi",
    "simo",
    "sipoo",
    "siuntio",
    "sodankylä",
    "soini",
    "somero",
    "sonkajärvi",
    "sotkamo",
    "sottunga",
    "sulkava",
    "sund",
    "suomussalmi",
    "suonenjoki",
    "sysmä",
    "säkylä",
    "taipalsaari",
    "taivalkoski",
    "taivassalo",
    "tammela",
    "tampere",
    "tervo",
    "tervola",
    "teuva",
    "tohmajärvi",
    "toholampi",
    "toivakka",
    "tornio",
    "turku",
    "tuusniemi",
    "tuusula",
    "tyrnävä",
    "ulvila",
    "urjala",
    "utajärvi",
    "utsjoki",
    "uurainen",
    "uusikaarlepyy",
    "uusikaupunki",
    "vaala",
    "vaasa",
    "valkeakoski",
    "vantaa",
    "varkaus",
    "vehmaa",
    "vesanto",
    "vesilahti",
    "veteli",
    "vieremä",
    "vihti",
    "viitasaari",
    "vimpeli",
    "virolahti",
    "virrat",
    "vårdö",
    "vöyri",
    "ylitornio",
    "ylivieska",
    "ylöjärvi",
    "ypäjä",
    "ähtäri",
    "äänekoski"
]

export default FinnishCities;