/* Language sensitive data for Fourmilab calendar converter
Coding is UTF-8
This file is for French
*/
/* Fourmilab calendar converter initially developped by John Walker
Extraction of language sensitive data by Louis A. de Fouquières
M2020-01-12
*/
var Weekdays = new Array( "dimanche", "lundi", "mardi", "mercredi",
                          "jeudi", "vendredi", "samedi" );
var NormLeap = new Array("Année commune", "Année longue");
var ISLAMIC_WEEKDAYS = new Array("al-'ahad", "al-'ithnayn",
                                 "ath-thalatha'", "al-'arb`a'",
                                 "al-khamis", "al-jum`a", "as-sabt"),
	ARAB_DAY = "yawm ";
var PERSIAN_WEEKDAYS = new Array("Yekshanbeh", "Doshanbeh",
                                 "Seshhanbeh", "Chaharshanbeh",
                                 "Panjshanbeh", "Jomeh", "Shanbeh");
var MAYAN_HAAB_MONTHS = new Array("Pop", "Uo", "Zip", "Zotz", "Tzec", "Xul",
                                  "Yaxkin", "Mol", "Chen", "Yax", "Zac", "Ceh",
                                  "Mac", "Kankin", "Muan", "Pax", "Kayab", "Cumku", "Uayeb");
var MAYAN_TZOLKIN_MONTHS = new Array("Imix", "Ik", "Akbal", "Kan", "Chicchan",
                                     "Cimi", "Manik", "Lamat", "Muluc", "Oc",
                                     "Chuen", "Eb", "Ben", "Ix", "Men",
                                     "Cib", "Caban", "Etznab", "Cauac", "Ahau");
var INDIAN_CIVIL_WEEKDAYS = new Array(
    "ravivara", "somavara", "mangalavara", "budhavara",
    "brahaspativara", "sukravara", "sanivara");
var HEBREW_YEAR_TYPES = new Array(
	"Commune et défective (353 jours)",
	"Commune et régulière (354 jours)",
	"Commune et abondante (355 jours)",
	"Embolismique et défective (383 jours)",
	"Embolismique et régulière (384 jours)",
	"Embolismique et abondante (385 jours)",
	"Longueur d'année invalide: ",
	" jours.");
var CALENDAR_NAMES = {
	gregorian : "grégorien",
	julian 	: "julien",
	jd		: "jj",
	mjd		: "jjm",
	unixtime: "unix",
	iso		: "iso",
	excel	: "excel",
	excel1904: "excel1904",
	}
var ALERT_MSG = {
	Invalid_search_request	: "Champ de recherche invalide : ",
	In_search_request 	: "\" invalide dans champ de recherche",
	Invalid_calendar	: "Calendrier invalide \"",
	Invalid_Greg_date 	: "Date de calendrier grégorien invalide \"",
	Invalid_Jul_date  	: "Date de calendrier julien invalide \"",
	Invalid_JD			: "Jour julien invalide \"",
	Invalid_MJD			: "Jour julien modifié invalide \"",
	Invalid_Unix		: "Compteur Unix invalide \"",
	Invalid_ISO			: "Date ISO-8601 invalide \"",
	Invalid_EXL			: "Compteur Excel (1900/PC) invalide \"",
	Invalid_EXL04		: "Compteur Excel (1904/Mac) invalide \""
};