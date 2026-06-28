
export const KNOWN_FUNDS = {
    "avanza global": {
        name: "Avanza Global",
        fee: 0.10,
        distribution: {
            "us": 72.56,
            "japan": 6.18,
            "canada": 2.87,
            "australia": 1.51,
            "europe": 14.00,
            "asia_em": 2.88
        }
    },
    "storebrand global": {
        name: "Storebrand Global All Countries A SEK",
        fee: 0.31,
        distribution: {
            "us": 63.34,
            "japan": 5.44,
            "europe": 6.46,
            "asia_em": 11.75,
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
        fee: 0.20,
        distribution: {
            "europe": 100.0
        }
    },
    "storebrand japan": {
        name: "Storebrand Japan",
        fee: 0.21,
        distribution: {
            "japan": 100.0
        }
    },
    "nordnet sverige": {
        name: "Nordnet Sverige",
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
        fee: 0.00,
        distribution: {
            "nordic": 100.0
        }
    },
    "plus mikrobolag sverige": {
        name: "PLUS Mikrobolag Sverige",
        fee: 0.00,
        distribution: {
            "nordic": 100.0
        }
    },
    "swedbank robur access asien": {
        name: "Swedbank Robur Access Asien",
        fee: 0.21,
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
        fee: 0.61,
        distribution: {
            "us": 66.72,
            "japan": 6.45,
            "europe": 17.7,
            "canada": 4.0,
            "australia": 2.4,
            "asia_em": 2.73
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
    "other": "Other"
};

export const REGIONS = [
    "us",
    "canada",
    "australia",
    "japan",
    "asia_em",
    "europe",
    "nordic",
    "gold",
    "bond",
    "cash",
    "other"
];
