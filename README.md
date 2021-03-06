# akelius-scraper
Web scraper for the [Akelius apartment listing](https://www.akelius.de/en/search/apartments).

## Installation
```
npm install akelius-scraper --save
```

## Usage

```
const akeliusScraper = require('akelius-scraper');
```

#### Cities
You can get the available cities:
```
akeliusScraper.cities
```

Output:
```
[ 'Berlin',
  'Hamburg',
  'Düsseldorf',
  'Köln',
  'Wiesbaden',
  'Frankfurt',
  'Mainz',
  'München' ]
```

#### Scrap city
You can get all listed apartments for a specific city:
```
akeliusScraper.scrapCity('Düsseldorf')
```
This will return a `Promise` that resolves in an array of apartment objects.

Output:
```
[
  {
    address:'Flügelstr. 2',
    postalCode:'40227',
    city:'Düsseldorf',
    url:'https://www.akelius.de/en/search/apartments/westen/düsseldorf/1.7274.5',
    description:'hellsanierte Dreizimmerwohnung mit Balkon und Einbauküche',
    rentTotal:1090,
    area:76.34,
    availableFrom:2017-02-01T00:00:00.000Z,
    rentBase:900
  },
  {
    address:'Münsterstraße 44',
    postalCode:'40476',
    city:'Düsseldorf',
    url:'https://www.akelius.de/en/search/apartments/westen/düsseldorf/55.7565.258',
    description:'hellsanierte Erdgeschosswohnung mit Einbauküche',
    rentTotal:890,
    area:55,
    availableFrom:2017-02-16T00:00:00.000Z,
    rentBase:740
  },
  {
    address:'Rethelstraße 99',
    postalCode:'40237',
    city:'Düsseldorf',
    url:'https://www.akelius.de/en/search/apartments/westen/düsseldorf/1.7507.8',
    description:'hellsaniertes Appartement mit Balkon und Einbauküche',
    rentTotal:710,
    area:48.2,
    availableFrom:2017-02-16T00:00:00.000Z,
    rentBase:620
  }
]
```
