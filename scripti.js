// जॉब डेटा (सभी सेक्टरों के लिए विस्तृत)
const jobs = [
    // बैंकिंग सेक्टर (6 जॉब्स)
    {
        id: 1,
        title: "IBPS SO (Specialist Officer)",
        department: "Institute of Banking Personnel Selection",
        type: "bank",
        vacancies: "600+",
        lastDate: "15 जनवरी 2025",
        qualification: "स्नातक/स्नातकोत्तर",
        link: "/ibps-so.html"
    },
    {
        id: 2,
        title: "SBI PO 2024",
        department: "State Bank of India",
        type: "bank",
        vacancies: "2000+",
        lastDate: "10 दिसंबर 2024",
        qualification: "स्नातक",
        link: "sbi-po.html"
    },
    {
        id: 3,
        title: "RBI Grade B",
        department: "Reserve Bank of India",
        type: "bank",
        vacancies: "150+",
        lastDate: "05 जनवरी 2025",
        qualification: "स्नातक (60% अंक)",
        link: "rbi-grade-b.html"
    },
    {
        id: 4,
        title: "NABARD Grade A",
        department: "National Bank for Agriculture and Rural Development",
        type: "bank",
        vacancies: "170+",
        lastDate: "20 दिसंबर 2024",
        qualification: "स्नातक (कृषि/वाणिज्य)",
        link: "nabard-grade-a.html"
    },
    {
        id: 5,
        title: "IBPS Clerk 2024",
        department: "Institute of Banking Personnel Selection",
        type: "bank",
        vacancies: "5000+",
        lastDate: "25 नवंबर 2024",
        qualification: "स्नातक",
        link: "ibps-clerk.html"
    },
    {
        id: 6,
        title: "RBI Assistant",
        department: "Reserve Bank of India",
        type: "bank",
        vacancies: "950+",
        lastDate: "15 दिसंबर 2024",
        qualification: "स्नातक (50% अंक)",
        link: "rbi-assistant.html"
    },

    // SSC सेक्टर (6 जॉब्स)
    {
        id: 7,
        title: "SSC CGL 2024",
        department: "Staff Selection Commission",
        type: "ssc",
        vacancies: "7500+",
        lastDate: "24 दिसंबर 2024",
        qualification: "स्नातक",
        link: "ssc-cgl.html"
    },
    {
        id: 8,
        title: "SSC CHSL 2024",
        department: "Staff Selection Commission",
        type: "ssc",
        vacancies: "4500+",
        lastDate: "15 दिसंबर 2024",
        qualification: "12वीं पास",
        link: "ssc-chsl.html"
    },
    {
        id: 9,
        title: "SSC GD Constable",
        department: "Staff Selection Commission",
        type: "ssc",
        vacancies: "25000+",
        lastDate: "31 दिसंबर 2024",
        qualification: "10वीं पास",
        link: "ssc-gd.html"
    },
    {
        id: 10,
        title: "SSC MTS 2024",
        department: "Staff Selection Commission",
        type: "ssc",
        vacancies: "8000+",
        lastDate: "10 जनवरी 2025",
        qualification: "10वीं पास",
        link: "ssc-mts.html"
    },
    {
        id: 11,
        title: "SSC Stenographer",
        department: "Staff Selection Commission",
        type: "ssc",
        vacancies: "1200+",
        lastDate: "05 जनवरी 2025",
        qualification: "12वीं पास",
        link: "ssc-steno.html"
    },
    {
        id: 12,
        title: "SSC JE 2024",
        department: "Staff Selection Commission",
        type: "ssc",
        vacancies: "1500+",
        lastDate: "20 दिसंबर 2024",
        qualification: "डिप्लोमा/डिग्री (इंजीनियरिंग)",
        link: "ssc-je.html"
    },

    // UPSC सेक्टर (5 जॉब्स)
    {
        id: 13,
        title: "UPSC Civil Services 2025",
        department: "Union Public Service Commission",
        type: "upsc",
        vacancies: "1000+",
        lastDate: "21 फरवरी 2025",
        qualification: "स्नातक",
        link: "upsc-cse.html"
    },
    {
        id: 14,
        title: "UPSC CDS 2024",
        department: "Union Public Service Commission",
        type: "upsc",
        vacancies: "350+",
        lastDate: "15 दिसंबर 2024",
        qualification: "स्नातक (सेना के लिए)",
        link: "upsc-cds.html"
    },
    {
        id: 15,
        title: "UPSC NDA 2024",
        department: "Union Public Service Commission",
        type: "upsc",
        vacancies: "400+",
        lastDate: "10 जनवरी 2025",
        qualification: "12वीं पास",
        link: "upsc-nda.html"
    },
    {
        id: 16,
        title: "UPSC IES/ISS",
        department: "Union Public Service Commission",
        type: "upsc",
        vacancies: "150+",
        lastDate: "05 जनवरी 2025",
        qualification: "स्नातकोत्तर (अर्थशास्त्र/सांख्यिकी)",
        link: "upsc-ies.html"
    },
    {
        id: 17,
        title: "UPSC CAPF 2024",
        department: "Union Public Service Commission",
        type: "upsc",
        vacancies: "500+",
        lastDate: "30 नवंबर 2024",
        qualification: "स्नातक",
        link: "upsc-capf.html"
    },

    // रेलवे सेक्टर (5 जॉब्स)
    {
        id: 18,
        title: "रेलवे ग्रुप डी",
        department: "भारतीय रेलवे",
        type: "railway",
        vacancies: "1,03,769",
        lastDate: "12 दिसंबर 2024",
        qualification: "10वीं/ITI",
        link: "railway-group-d.html"
    },
    {
        id: 19,
        title: "RRB NTPC 2024",
        department: "रेलवे भर्ती बोर्ड",
        type: "railway",
        vacancies: "35,000+",
        lastDate: "20 दिसंबर 2024",
        qualification: "स्नातक",
        link: "rrb-ntpc.html"
    },
    {
        id: 20,
        title: "RRB JE 2024",
        department: "रेलवे भर्ती बोर्ड",
        type: "railway",
        vacancies: "15,000+",
        lastDate: "10 जनवरी 2025",
        qualification: "डिप्लोमा/डिग्री (इंजीनियरिंग)",
        link: "rrb-je.html"
    },
    {
        id: 21,
        title: "RRB ALP 2024",
        department: "रेलवे भर्ती बोर्ड",
        type: "railway",
        vacancies: "25,000+",
        lastDate: "05 जनवरी 2025",
        qualification: "10वीं + ITI",
        link: "rrb-alp.html"
    },
    {
        id: 22,
        title: "RRB Technician",
        department: "रेलवे भर्ती बोर्ड",
        type: "railway",
        vacancies: "12,000+",
        lastDate: "15 दिसंबर 2024",
        qualification: "10वीं + ITI",
        link: "rrb-technician.html"
    },

    // रक्षा सेक्टर (5 जॉब्स)
    {
        id: 23,
        title: "भारतीय सेना सैनिक भर्ती",
        department: "भारतीय सेना",
        type: "defense",
        vacancies: "50,000+",
        lastDate: "31 दिसंबर 2024",
        qualification: "10वीं/12वीं पास",
        link: "indian-army.html"
    },
    {
        id: 24,
        title: "भारतीय वायु सेना AFCAT",
        department: "भारतीय वायु सेना",
        type: "defense",
        vacancies: "300+",
        lastDate: "10 जनवरी 2025",
        qualification: "स्नातक (60% अंक)",
        link: "afcat.html"
    },
    {
        id: 25,
        title: "भारतीय नौसेना MR/NMR",
        department: "भारतीय नौसेना",
        type: "defense",
        vacancies: "2,500+",
        lastDate: "20 दिसंबर 2024",
        qualification: "10वीं/12वीं पास",
        link: "indian-navy.html"
    },
    {
        id: 26,
        title: "BSF कांस्टेबल भर्ती",
        department: "सीमा सुरक्षा बल",
        type: "defense",
        vacancies: "5,000+",
        lastDate: "15 जनवरी 2025",
        qualification: "10वीं पास",
        link: "bsf-constable.html"
    },
    {
        id: 27,
        title: "CRPF ASI भर्ती",
        department: "केंद्रीय रिजर्व पुलिस बल",
        type: "defense",
        vacancies: "1,200+",
        lastDate: "05 जनवरी 2025",
        qualification: "स्नातक",
        link: "crpf-asi.html"
    },

    // केंद्र सरकार (5 जॉब्स)
    {
        id: 28,
        title: "LIC AAO 2024",
        department: "जीवन बीमा निगम",
        type: "central",
        vacancies: "500+",
        lastDate: "10 दिसंबर 2024",
        qualification: "स्नातक",
        link: "lic-aao.html"
    },
    {
        id: 29,
        title: "EPFO SSA",
        department: "कर्मचारी भविष्य निधि संगठन",
        type: "central",
        vacancies: "300+",
        lastDate: "20 नवंबर 2024",
        qualification: "12वीं पास",
        link: "epfo-ssa.html"
    },
    {
        id: 30,
        title: "FCI Manager",
        department: "भारतीय खाद्य निगम",
        type: "central",
        vacancies: "150+",
        lastDate: "05 जनवरी 2025",
        qualification: "स्नातक (60% अंक)",
        link: "fci-manager.html"
    },
    {
        id: 31,
        title: "SSC Scientific Assistant",
        department: "विज्ञान और प्रौद्योगिकी विभाग",
        type: "central",
        vacancies: "200+",
        lastDate: "15 दिसंबर 2024",
        qualification: "B.Sc (विज्ञान)",
        link: "scientific-assistant.html"
    },
    {
        id: 32,
        title: "AIIMS Nursing Officer",
        department: "अखिल भारतीय आयुर्विज्ञान संस्थान",
        type: "central",
        vacancies: "1,000+",
        lastDate: "31 दिसंबर 2024",
        qualification: "B.Sc Nursing",
        link: "aiims-nursing.html"
    }
];

// राज्य सरकार की नौकरियों का डेटा (प्रत्येक राज्य के लिए 15 जॉब्स)
const stateJobs = [
    // उत्तर प्रदेश (15 जॉब्स)
    {
        id: 101,
        title: "UPPSC PCS 2024",
        department: "उत्तर प्रदेश लोक सेवा आयोग",
        type: "state",
        state: "up",
        vacancies: "220+",
        lastDate: "05 जनवरी 2025",
        qualification: {
            main: "स्नातक डिग्री",
            details: [
                "किसी मान्यता प्राप्त विश्वविद्यालय से स्नातक",
                "अंतिम वर्ष के छात्र भी आवेदन कर सकते हैं",
                "आयु सीमा: 21-40 वर्ष (आरक्षण के अनुसार छूट)"
            ]
        },
        link: "uppsc-pcs.html",
        urgent: false
    },
    {
        id: 102,
        title: "UP Police Constable 2024",
        department: "उत्तर प्रदेश पुलिस",
        type: "state",
        state: "up",
        vacancies: "25,000+",
        lastDate: "20 दिसंबर 2024",
        qualification: {
            main: "12वीं पास",
            details: [
                "उत्तर प्रदेश के मूल निवासी",
                "ऊँचाई: पुरुष - 168 सेमी, महिला - 152 सेमी",
                "आयु: 18-25 वर्ष",
                "शारीरिक परीक्षण अनिवार्य"
            ]
        },
        link: "up-police.html",
        urgent: true
    },
    {
        id: 103,
        title: "UP TET 2024",
        department: "उत्तर प्रदेश शिक्षा विभाग",
        type: "state",
        state: "up",
        vacancies: "1,50,000",
        lastDate: "31 दिसंबर 2024",
        qualification: {
            main: "B.Ed/D.El.Ed + CTET/TET पास",
            details: [
                "प्राथमिक शिक्षक के लिए D.El.Ed + CTET/UP TET",
                "माध्यमिक शिक्षक के लिए B.Ed + विषय योग्यता",
                "आयु सीमा: 21-40 वर्ष",
                "UP Domicile अनिवार्य"
            ]
        },
        link: "up-tet.html",
        urgent: true
    },
    {
        id: 104,
        title: "UPSSSC Lekhpal",
        department: "उत्तर प्रदेश अधीनस्थ सेवा चयन आयोग",
        type: "state",
        state: "up",
        vacancies: "8,000+",
        lastDate: "15 जनवरी 2025",
        qualification: {
            main: "12वीं पास + कंप्यूटर ज्ञान",
            details: [
                "उत्तर प्रदेश के मूल निवासी",
                "आयु: 18-40 वर्ष",
                "लेखन परीक्षा और टाइपिंग टेस्ट अनिवार्य",
                "कंप्यूटर डिप्लोमा धारकों को प्राथमिकता"
            ]
        },
        link: "upsssc-lekhpal.html",
        urgent: false
    },
    {
        id: 105,
        title: "UP NHM Staff Nurse",
        department: "उत्तर प्रदेश स्वास्थ्य विभाग",
        type: "state",
        state: "up",
        vacancies: "3,500+",
        lastDate: "10 जनवरी 2025",
        qualification: {
            main: "GNM/B.Sc Nursing",
            details: [
                "भारतीय नर्सिंग काउंसिल से मान्यता प्राप्त डिग्री",
                "न्यूनतम 1 वर्ष का अनुभव",
                "आयु सीमा: 21-40 वर्ष",
                "UP Domicile अनिवार्य"
            ]
        },
        link: "up-nhm-nurse.html",
        urgent: true
    },
    // उत्तर प्रदेश के लिए 10 और जॉब्स जोड़ें...
    {
        id: 106,
        title: "UP Junior Engineer",
        department: "उत्तर प्रदेश सिंचाई विभाग",
        type: "state",
        state: "up",
        vacancies: "1,200+",
        lastDate: "05 जनवरी 2025",
        qualification: {
            main: "डिप्लोमा/डिग्री (सिविल इंजीनियरिंग)",
            details: [
                "उत्तर प्रदेश के मूल निवासी",
                "आयु: 21-40 वर्ष",
                "सरकारी पॉलिटेक्निक से डिप्लोमा",
                "अनुभव को प्राथमिकता"
            ]
        },
        link: "up-je.html",
        urgent: false
    },
    {
        id: 107,
        title: "UP Anganwadi Worker",
        department: "उत्तर प्रदेश महिला एवं बाल विकास विभाग",
        type: "state",
        state: "up",
        vacancies: "15,000+",
        lastDate: "20 दिसंबर 2024",
        qualification: {
            main: "8वीं/10वीं पास",
            details: [
                "महिला उम्मीदवार",
                "आयु: 18-45 वर्ष",
                "स्थानीय निवासी होना अनिवार्य",
                "सामाजिक कार्य में रुचि"
            ]
        },
        link: "up-anganwadi.html",
        urgent: true
    },
    {
        id: 108,
        title: "UP Forest Guard",
        department: "उत्तर प्रदेश वन विभाग",
        type: "state",
        state: "up",
        vacancies: "2,500+",
        lastDate: "10 जनवरी 2025",
        qualification: {
            main: "12वीं पास",
            details: [
                "ऊँचाई: पुरुष - 163 सेमी, महिला - 150 सेमी",
                "आयु: 18-28 वर्ष",
                "शारीरिक परीक्षण अनिवार्य",
                "स्थानीय भाषा का ज्ञान"
            ]
        },
        link: "up-forest.html",
        urgent: false
    },
    {
        id: 109,
        title: "UP High Court Clerk",
        department: "इलाहाबाद उच्च न्यायालय",
        type: "state",
        state: "up",
        vacancies: "1,800+",
        lastDate: "15 दिसंबर 2024",
        qualification: {
            main: "स्नातक (टाइपिंग ज्ञान)",
            details: [
                "हिंदी और अंग्रेजी टाइपिंग: 25 WPM",
                "आयु: 21-35 वर्ष",
                "कंप्यूटर ज्ञान अनिवार्य",
                "UP Domicile"
            ]
        },
        link: "up-hc-clerk.html",
        urgent: true
    },
    {
        id: 110,
        title: "UP Agriculture Officer",
        department: "उत्तर प्रदेश कृषि विभाग",
        type: "state",
        state: "up",
        vacancies: "500+",
        lastDate: "05 जनवरी 2025",
        qualification: {
            main: "B.Sc (कृषि)",
            details: [
                "कृषि विश्वविद्यालय से डिग्री",
                "आयु: 21-40 वर्ष",
                "कृषि अनुभव को प्राथमिकता",
                "UP Domicile"
            ]
        },
        link: "up-agri-officer.html",
        urgent: false
    },
    {
        id: 111,
        title: "UP B.Ed College Lecturer",
        department: "उत्तर प्रदेश उच्च शिक्षा विभाग",
        type: "state",
        state: "up",
        vacancies: "1,200+",
        lastDate: "20 दिसंबर 2024",
        qualification: {
            main: "स्नातकोत्तर + B.Ed + NET",
            details: [
                "संबंधित विषय में 55% अंक",
                "आयु: 21-40 वर्ष",
                "शिक्षण अनुभव को प्राथमिकता",
                "UP Domicile"
            ]
        },
        link: "up-bedd-lecturer.html",
        urgent: true
    },
    {
        id: 112,
        title: "UP Pharmacist",
        department: "उत्तर प्रदेश स्वास्थ्य विभाग",
        type: "state",
        state: "up",
        vacancies: "3,000+",
        lastDate: "10 जनवरी 2025",
        qualification: {
            main: "D.Pharma/B.Pharma",
            details: [
                "फार्मेसी काउंसिल से पंजीकरण",
                "आयु: 21-40 वर्ष",
                "अनुभव को प्राथमिकता",
                "UP Domicile"
            ]
        },
        link: "up-pharmacist.html",
        urgent: false
    },
    {
        id: 113,
        title: "UP Lab Technician",
        department: "उत्तर प्रदेश चिकित्सा स्वास्थ्य विभाग",
        type: "state",
        state: "up",
        vacancies: "2,500+",
        lastDate: "15 दिसंबर 2024",
        qualification: {
            main: "12वीं (विज्ञान) + DMLT",
            details: [
                "मान्यता प्राप्त संस्थान से डिप्लोमा",
                "आयु: 18-35 वर्ष",
                "प्रयोगशाला अनुभव",
                "UP Domicile"
            ]
        },
        link: "up-lab-tech.html",
        urgent: true
    },
    {
        id: 114,
        title: "UP Revenue Inspector",
        department: "उत्तर प्रदेश राजस्व विभाग",
        type: "state",
        state: "up",
        vacancies: "1,500+",
        lastDate: "05 जनवरी 2025",
        qualification: {
            main: "स्नातक",
            details: [
                "कंप्यूटर ज्ञान अनिवार्य",
                "आयु: 21-40 वर्ष",
                "लेखन परीक्षा अनिवार्य",
                "UP Domicile"
            ]
        },
        link: "up-revenue-inspector.html",
        urgent: false
    },
    {
        id: 115,
        title: "UP Home Guard",
        department: "उत्तर प्रदेश गृह रक्षा विभाग",
        type: "state",
        state: "up",
        vacancies: "10,000+",
        lastDate: "31 दिसंबर 2024",
        qualification: {
            main: "8वीं/10वीं पास",
            details: [
                "ऊँचाई: पुरुष - 165 सेमी, महिला - 150 सेमी",
                "आयु: 18-30 वर्ष",
                "शारीरिक परीक्षण अनिवार्य",
                "UP Domicile"
            ]
        },
        link: "up-homeguard.html",
        urgent: true
    },

    // मध्य प्रदेश (15 जॉब्स)
    {
        id: 201,
        title: "MP Police Constable 2024",
        department: "मध्य प्रदेश पुलिस",
        type: "state",
        state: "mp",
        vacancies: "4000+",
        lastDate: "20 दिसंबर 2024",
        qualification: {
            main: "12वीं पास",
            details: [
                "मध्य प्रदेश के मूल निवासी",
                "ऊँचाई: पुरुष - 168 सेमी, महिला - 155 सेमी",
                "आयु: 18-28 वर्ष",
                "शारीरिक परीक्षण अनिवार्य"
            ]
        },
        link: "mp-police.html",
        urgent: true
    },
    // मध्य प्रदेश के लिए 14 और जॉब्स जोड़ें...
    {
        id: 202,
        title: "MP Patwari Bharti 2024",
        department: "मध्य प्रदेश राजस्व विभाग",
        type: "state",
        state: "mp",
        vacancies: "2,500+",
        lastDate: "15 जनवरी 2025",
        qualification: {
            main: "स्नातक + कंप्यूटर ज्ञान",
            details: [
                "MP Domicile",
                "आयु: 18-40 वर्ष",
                "लेखन परीक्षा अनिवार्य",
                "टाइपिंग स्पीड: 30 WPM"
            ]
        },
        link: "mp-patwari.html",
        urgent: false
    },
    // अन्य राज्यों के लिए इसी तरह जॉब्स जोड़ें...

    // बिहार (15 जॉब्स)
    {
        id: 301,
        title: "बिहार शिक्षक भर्ती 2024",
        department: "बिहार शिक्षा विभाग",
        type: "state",
        state: "bh",
        vacancies: "1,20,000",
        lastDate: "31 दिसंबर 2024",
        qualification: {
            main: "B.Ed/D.El.Ed + TET पास",
            details: [
                "प्राथमिक शिक्षक के लिए D.El.Ed + CTET/BTET",
                "माध्यमिक शिक्षक के लिए B.Ed + विषय योग्यता",
                "आयु सीमा: 21-37 वर्ष",
                "बिहार के मूल निवासी होने चाहिए"
            ]
        },
        link: "bihar-teacher.html",
        urgent: true
    },
    // बिहार के लिए 14 और जॉब्स जोड़ें...

    // राजस्थान (15 जॉब्स)
    {
        id: 401,
        title: "राजस्थान पटवारी भर्ती 2024",
        department: "राजस्थान राजस्व विभाग",
        type: "state",
        state: "rj",
        vacancies: "5000+",
        lastDate: "15 जनवरी 2025",
        qualification: {
            main: "12वीं पास + कंप्यूटर ज्ञान",
            details: [
                "राजस्थान के मूल निवासी",
                "आयु: 18-40 वर्ष",
                "कंप्यूटर डिप्लोमा धारकों को प्राथमिकता",
                "लेखन परीक्षा और टाइपिंग टेस्ट अनिवार्य"
            ]
        },
        link: "rajasthan-patwari.html",
        urgent: false
    },
    // राजस्थान के लिए 14 और जॉब्स जोड़ें...

    // महाराष्ट्र (15 जॉब्स)
    {
        id: 501,
        title: "महाराष्ट्र स्टाफ नर्स भर्ती",
        department: "महाराष्ट्र स्वास्थ्य विभाग",
        type: "state",
        state: "mh",
        vacancies: "2500+",
        lastDate: "10 जनवरी 2025",
        qualification: {
            main: "GNM/B.Sc Nursing",
            details: [
                "भारतीय नर्सिंग काउंसिल से मान्यता प्राप्त डिग्री",
                "न्यूनतम 1 वर्ष का अनुभव",
                "आयु सीमा: 21-38 वर्ष",
                "महाराष्ट्र डोमिसाइल अनिवार्य"
            ]
        },
        link: "maharashtra-nurse.html",
        urgent: true
    }
    // महाराष्ट्र के लिए 14 और जॉब्स जोड़ें...
    // अन्य सभी राज्यों के लिए इसी तरह जॉब्स जोड़ें...
];

// Theme toggle functionality
const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');

// Check for saved theme preference or use preferred color scheme
const savedTheme = localStorage.getItem('theme') || 
                  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

// Apply the saved theme
root.setAttribute('data-theme', savedTheme);
themeToggle.checked = savedTheme === 'dark';

// Toggle theme when switch is clicked
themeToggle.addEventListener('change', e => {
    const theme = e.target.checked ? 'dark' : 'light';
    root.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
});

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.getElementById('navMenu');

mobileMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

// Language switcher
const languageBtn = document.getElementById('languageBtn');
const languageDropdown = document.getElementById('languageDropdown');

languageBtn.addEventListener('click', () => {
    languageDropdown.classList.toggle('show');
});

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.language-switcher')) {
        languageDropdown.classList.remove('show');
    }
    
    if (!e.target.closest('.mobile-menu-btn') && !e.target.closest('.nav-menu')) {
        navMenu.classList.remove('show');
    }
});

// Language translation function (simplified example)
document.querySelectorAll('.language-dropdown a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const lang = this.dataset.lang;
        
        // Change button text
        const langText = this.textContent;
        languageBtn.innerHTML = `<i class="fas fa-language"></i> ${langText} <i class="fas fa-chevron-down"></i>`;
        
        // Close dropdown
        languageDropdown.classList.remove('show');
        
        // In a real implementation, you would:
        // 1. Load translations from a JSON file or API
        // 2. Update all text content on the page
        // 3. Possibly change the HTML lang attribute
        // 4. Save user preference
        
        console.log(`Language changed to: ${lang}`);
        // For demo, we'll just show an alert
        alert(`Language will be changed to ${langText}. In a real implementation, this would translate all content.`);
    });
});

// जॉब लिस्ट रेंडर करें
function renderJobs(filter = "all") {
    const jobList = document.getElementById('jobList');
    jobList.innerHTML = '';
    
    const filteredJobs = filter === "all" ? jobs : jobs.filter(job => job.type === filter);
    
    filteredJobs.forEach(job => {
        const jobCard = document.createElement('div');
        jobCard.className = 'job-card';
        jobCard.innerHTML = `
            <h3 class="job-title">${job.title}</h3>
            <p class="job-department">${job.department}</p>
            <div class="job-meta">
                <span class="meta-item"><i class="fas fa-user-plus"></i> ${job.vacancies} रिक्तियाँ</span>
                <span class="meta-item"><i class="far fa-calendar-alt"></i> अंतिम तिथि: ${job.lastDate}</span>
                <span class="meta-item"><i class="fas fa-graduation-cap"></i> ${job.qualification}</span>
            </div>
            <a href="${job.link}" class="apply-btn">आवेदन करें</a>
        `;
        jobList.appendChild(jobCard);
    });
}

// राज्य नौकरियाँ रेंडर करें
function renderStateJobs(state = "all") {
    const stateJobList = document.getElementById('stateJobList');
    stateJobList.innerHTML = '';
    
    const filteredJobs = state === "all" ? stateJobs : stateJobs.filter(job => job.state === state);
    
    filteredJobs.forEach(job => {
        const jobCard = document.createElement('div');
        jobCard.className = 'job-card';
        jobCard.innerHTML = `
            <h3 class="job-title">${job.title} ${job.urgent ? '<span class="urgent-badge">तुरंत आवेदन करें</span>' : ''}</h3>
            <p class="job-department">${job.department}</p>
            <div class="job-meta">
                <span class="meta-item"><i class="fas fa-user-plus"></i> ${job.vacancies} रिक्तियाँ</span>
                <span class="meta-item"><i class="far fa-calendar-alt"></i> अंतिम तिथि: ${job.lastDate}</span>
                <span class="meta-item"><i class="fas fa-graduation-cap"></i> ${job.qualification.main}</span>
            </div>
            
            <div class="qualification-details">
                <h4>योग्यता विवरण:</h4>
                <ul class="qualification-list">
                    ${job.qualification.details.map(detail => `<li>${detail}</li>`).join('')}
                </ul>
            </div>
            
            <a href="${job.link}" class="apply-btn">आवेदन करें</a>
        `;
        stateJobList.appendChild(jobCard);
    });
}

// फिल्टर बटन इवेंट
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        renderJobs(this.dataset.filter);
    });
});

// राज्य फिल्टर बटन इवेंट
document.querySelectorAll('.state-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.state-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        renderStateJobs(this.dataset.state);
    });
});

// सर्च फंक्शनैलिटी
document.getElementById('searchInput').addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const jobCards = document.querySelectorAll('.job-card');
    
    jobCards.forEach(card => {
        const text = card.textContent.toLowerCase();
        if (text.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

// पेज लोड पर जॉब्स रेंडर करें
document.addEventListener('DOMContentLoaded', function() {
    renderJobs();
    renderStateJobs();
});