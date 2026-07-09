
export const KNOWN_FUNDS = {
    "avanza global": {
        name: "Avanza Global",
        fee: 0.10,
        distribution: {
            "us": 71.78,
            "japan": 6.11,
            "canada": 2.84,
            "australia": 1.51,
            "europe": 11.46,
            "other": 6.30
        }
    },
    "storebrand global all countries a sek": {
        name: "Storebrand Global All Countries A SEK",
        fee: 0.32,
        distribution: {
            "us": 63.30,
            "japan": 5.44,
            "canada": 0.0,
            "australia": 0.0,
            "europe": 6.45,
            "asia_em": 11.85,
            "other": 12.96
        }
    },
    "spiltan räntefond": {
        name: "Spiltan Räntefond",
        fee: 0.10,
        distribution: {
            "bond": 100.0
        }
    },
    "avanza emerging markets": {
        name: "Avanza Emerging Markets",
        fee: 0.30,
        distribution: {
            "asia_em": 100.0
        }
    },
    "storebrand europe": {
        name: "Storebrand Europe",
        fee: 0.24,
        distribution: {
            "europe": 100.0
        }
    },
    "länförsäkringar japan": {
        name: "Länförsäkringar Japan",
        fee: 0.21,
        distribution: {
            "japan": 100.0
        }
    },
    "handelsbanken europa": {
        name: "Handelsbanken Europa",
        fee: 0.30,
        distribution: {
            "europe": 100.0
        }
    },
    "storebrand japan": {
        name: "Storebrand Japan",
        fee: 0.22,
        distribution: {
            "japan": 100.0
        }
    },
    "nordnet tech": {
        name: "Nordnet Tech",
        fee: 0.40,
        distribution: {
            "us": 89.25,
            "japan": 3.63,
            "canada": 1.15,
            "australia": 0.0,
            "europe": 4.50,
            "asia_em": 0.35,
            "other": 1.12
        }
    },
    "nordnet sverige": {
        name: "Nordnet Sverige",
        fee: 0.00,
        distribution: {
            "nordic": 100.0
        }
    },
    "avanza zero": {
        name: "Avanza Zero",
        fee: 0.00,
        distribution: {
            "nordic": 100.0
        }
    },
    "nordnet norge": {
        name: "Nordnet Norge",
        fee: 0.00,
        distribution: {
            "nordic": 100.0
        }
    },
    "nordnet suomi": {
        name: "Nordnet Suomi",
        fee: 0.00,
        distribution: {
            "nordic": 100.0
        }
    },
    "plus småbolag sverige": {
        name: "PLUS Småbolag Sverige",
        fee: 0.42,
        distribution: {
            "nordic": 100.0
        }
    },
    "plus mikrobolag sverige": {
        name: "PLUS Mikrobolag Sverige",
        fee: 0.44,
        distribution: {
            "nordic": 100.0
        }
    },
    "swedbank robur access asien": {
        name: "Swedbank Robur Access Asien",
        fee: 0.28,
        distribution: {
            "asia_em": 100.0
        }
    },
    "xtrackers nasdaq 100": {
        name: "Xtrackers NASDAQ 100",
        fee: 0.28,
        distribution: {
            "us": 100.0
        }
    },
    "handelsbanken global småbolag": {
        name: "Handelsbanken Global Småbolag",
        fee: 0.67,
        distribution: {
            "us_s": 66.26,
            "japan_s": 6.41,
            "europe_s": 17.48,
            "canada_s": 4.0,
            "australia_s": 2.4,
            "asia_em_s": 2.73,
            "other_s": 0.72
        }
    },
};

export const CATEGORY_MAPPING = {
    "us": "North America",
    "canada": "North America",
    "australia": "Asia Pacific & Emerging Markets",
    "japan": "Japan",
    "asia_em": "Asia Pacific & Emerging Markets",
    "europe": "Europe",
    "nordic": "Europe Nordic",
    "gold": "Raw Materials",
    "bond": "Fixed Income",
    "cash": "Cash",
    "other": "Other",
    "us_s": "North America (Small Cap)",
    "japan_s": "Japan (Small Cap)",
    "europe_s": "Europe (Small Cap)",
    "canada_s": "North America (Small Cap)",
    "australia_s": "Asia Pacific & Emerging Markets (Small Cap)",
    "asia_em_s": "Asia Pacific & Emerging Markets (Small Cap)",
    "other_s": "Other (Small Cap)"
};

export const REGIONS = [
    "us",
    "us_s",
    "canada",
    "canada_s",
    "australia",
    "australia_s",
    "japan",
    "japan_s",
    "asia_em",
    "asia_em_s",
    "europe",
    "europe_s",
    "nordic",
    "gold",
    "bond",
    "cash",
    "other",
    "other_s",
];
