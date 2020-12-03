/* Language sensitive data for Fourmilab calendar converter
Coding is UTF-8
This file is for English
*/
/* Fourmilab calendar converter initially developped by John Walker
Extraction of language sensitive data by Louis A. de Fouquières
M2020-01-12
*/
var Weekdays = new Array( "Sunday", "Monday", "Tuesday", "Wednesday",
                          "Thursday", "Friday", "Saturday" );
var NormLeap = new Array("Normal year", "Leap year");
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
	"Common deficient (353 days)",
	"Common regular (354 days)",
	"Common complete (355 days)",
	"Embolismic deficient (383 days)",
	"Embolismic regular (384 days)",
	"Embolismic complete (385 days)",
	"Invalid year length: ",
	" days.");
var CALENDAR_NAMES = {
	gregorian : "gregorian",
	julian	: "julian",
	jd		: "jd",
	mjd		: "mjd",
	unixtime: "unixtime",
	iso		: "iso",
	excel	: "excel",
	excel1904: "excel1904",
};
var ALERT_MSG = {
	Invalid_search_request	: "Invalid search request: ",
	In_search_request 	: "\" in search request",
	Invalid_calendar	: "Invalid calendar \"",
	Invalid_Greg_date 	: "Invalid Gregorian date \"",
	Invalid_Jul_date  	: "Invalid Julian date \"",
	Invalid_JD			: "Invalid Julian day \"",
	Invalid_MJD			: "Invalid Modified Julian day \"",
	Invalid_Unix		: "Invalid Unix stamp \"",
	Invalid_ISO			: "Invalid ISO-8601 date \"",
	Invalid_EXL			: "Invalid Excel serial day (1900/PC) \"",
	Invalid_EXL04		: "Invalid Excel serial day (1904/Mac) \""
};