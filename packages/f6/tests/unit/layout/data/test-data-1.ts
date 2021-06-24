export default {
  nodes: [
    {
      id: 'Argentina',
      name: 'Argentina',
    },
    {
      id: 'Australia',
      name: 'Australia',
    },
    {
      id: 'Belgium',
      name: 'Belgium',
    },
    {
      id: 'Brazil',
      name: 'Brazil',
    },
    {
      id: 'Colombia',
      name: 'Colombia',
    },
    {
      id: 'Costa Rica',
      name: 'Costa Rica',
    },
    {
      id: 'Croatia',
      name: 'Croatia',
    },
    {
      id: 'Denmark',
      name: 'Denmark',
    },
    {
      id: 'Egypt',
      name: 'Egypt',
    },
    {
      id: 'England',
      name: 'England',
    },
    {
      id: 'France',
      name: 'France',
    },
    {
      id: 'Germany',
      name: 'Germany',
    },
    {
      id: 'Iceland',
      name: 'Iceland',
    },
    {
      id: 'IR Iran',
      name: 'IR Iran',
    },
    {
      id: 'Japan',
      name: 'Japan',
    },
    {
      id: 'Korea Republic',
      name: 'Korea Republic',
    },
    {
      id: 'Mexico',
      name: 'Mexico',
    },
    {
      id: 'Morocco',
      name: 'Morocco',
    },
    {
      id: 'Nigeria',
      name: 'Nigeria',
    },
    {
      id: 'Panama',
      name: 'Panama',
    },
    {
      id: 'Peru',
      name: 'Peru',
    },
    {
      id: 'Poland',
      name: 'Poland',
    },
    {
      id: 'Portugal',
      name: 'Portugal',
    },
    {
      id: 'Russia',
      name: 'Russia',
    },
    {
      id: 'Saudi Arabia',
      name: 'Saudi Arabia',
    },
    {
      id: 'Senegal',
      name: 'Senegal',
    },
    {
      id: 'Serbia',
      name: 'Serbia',
    },
    {
      id: 'Spain',
      name: 'Spain',
    },
    {
      id: 'Sweden',
      name: 'Sweden',
    },
    {
      id: 'Switzerland',
      name: 'Switzerland',
    },
    {
      id: 'Tunisia',
      name: 'Tunisia',
    },
    {
      id: 'Uruguay',
      name: 'Uruguay',
    },
  ],
  edges: [
    {
      id: '0',
      target: 'Russia',
      source: 'Saudi Arabia',
      target_score: 5,
      source_score: 0,
      directed: true,
    },
    {
      id: '1',
      target: 'Uruguay',
      source: 'Egypt',
      target_score: 1,
      source_score: 0,
      directed: true,
    },
    {
      id: '2',
      target: 'Russia',
      source: 'Egypt',
      target_score: 3,
      source_score: 1,
      directed: true,
    },
    {
      id: '3',
      target: 'Uruguay',
      source: 'Saudi Arabia',
      target_score: 1,
      source_score: 0,
      directed: true,
    },
    {
      id: '4',
      target: 'Uruguay',
      source: 'Russia',
      target_score: 3,
      source_score: 0,
      directed: true,
    },
    {
      id: '5',
      target: 'Saudi Arabia',
      source: 'Egypt',
      target_score: 2,
      source_score: 1,
      directed: true,
    },
    {
      id: '6',
      target: 'IR Iran',
      source: 'Morocco',
      target_score: 1,
      source_score: 0,
      directed: true,
    },
    {
      id: '7',
      target: 'Portugal',
      source: 'Spain',
      target_score: 3,
      source_score: 3,
      directed: false,
    },
    {
      id: '8',
      target: 'Portugal',
      source: 'Morocco',
      target_score: 1,
      source_score: 0,
      directed: true,
    },
    {
      id: '9',
      target: 'Spain',
      source: 'IR Iran',
      target_score: 1,
      source_score: 0,
      directed: true,
    },
    {
      id: '10',
      target: 'IR Iran',
      source: 'Portugal',
      target_score: 1,
      source_score: 1,
      directed: false,
    },
    {
      id: '11',
      target: 'Spain',
      source: 'Morocco',
      target_score: 2,
      source_score: 2,
      directed: false,
    },
    {
      id: '12',
      target: 'France',
      source: 'Australia',
      target_score: 2,
      source_score: 1,
      directed: true,
    },
    {
      id: '13',
      target: 'Denmark',
      source: 'Peru',
      target_score: 1,
      source_score: 0,
      directed: true,
    },
    {
      id: '14',
      target: 'Denmark',
      source: 'Australia',
      target_score: 1,
      source_score: 1,
      directed: false,
    },
    {
      id: '15',
      target: 'France',
      source: 'Peru',
      target_score: 1,
      source_score: 0,
      directed: true,
    },
    {
      id: '16',
      target: 'Denmark',
      source: 'France',
      target_score: 0,
      source_score: 0,
      directed: false,
    },
    {
      id: '17',
      target: 'Peru',
      source: 'Australia',
      target_score: 2,
      source_score: 0,
      directed: true,
    },
    {
      id: '18',
      target: 'Argentina',
      source: 'Iceland',
      target_score: 1,
      source_score: 1,
    },
    {
      id: '19',
      target: 'Croatia',
      source: 'Nigeria',
      target_score: 2,
      source_score: 0,
      directed: true,
    },
    {
      id: '20',
      target: 'Croatia',
      source: 'Argentina',
      target_score: 3,
      source_score: 0,
      directed: true,
    },
    {
      id: '21',
      target: 'Nigeria',
      source: 'Iceland',
      target_score: 2,
      source_score: 0,
      directed: true,
    },
    {
      id: '22',
      target: 'Argentina',
      source: 'Nigeria',
      target_score: 2,
      source_score: 1,
      directed: true,
    },
    {
      id: '23',
      target: 'Croatia',
      source: 'Iceland',
      target_score: 2,
      source_score: 1,
      directed: true,
    },
    {
      id: '24',
      target: 'Serbia',
      source: 'Costa Rica',
      target_score: 1,
      source_score: 0,
      directed: true,
    },
    {
      id: '25',
      target: 'Brazil',
      source: 'Switzerland',
      target_score: 1,
      source_score: 1,
      directed: false,
    },
    {
      id: '26',
      target: 'Brazil',
      source: 'Costa Rica',
      target_score: 2,
      source_score: 0,
      directed: true,
    },
    {
      id: '27',
      target: 'Switzerland',
      source: 'Serbia',
      target_score: 2,
      source_score: 1,
      directed: true,
    },
    {
      id: '28',
      target: 'Brazil',
      source: 'Serbia',
      target_score: 2,
      source_score: 0,
      directed: true,
    },
    {
      id: '29',
      target: 'Switzerland',
      source: 'Costa Rica',
      target_score: 2,
      source_score: 2,
      directed: false,
    },
    {
      id: '30',
      target: 'Mexico',
      source: 'Germany',
      target_score: 1,
      source_score: 0,
      directed: true,
    },
    {
      id: '31',
      target: 'Sweden',
      source: 'Korea Republic',
      target_score: 1,
      source_score: 0,
      directed: true,
    },
    {
      id: '32',
      target: 'Mexico',
      source: 'Korea Republic',
      target_score: 1,
      source_score: 0,
      directed: true,
    },
    {
      id: '33',
      target: 'Germany',
      source: 'Sweden',
      target_score: 2,
      source_score: 1,
      directed: true,
    },
    {
      id: '34',
      target: 'Korea Republic',
      source: 'Germany',
      target_score: 2,
      source_score: 0,
      directed: true,
    },
    {
      id: '35',
      target: 'Sweden',
      source: 'Mexico',
      target_score: 3,
      source_score: 0,
      directed: true,
    },
    {
      id: '36',
      target: 'Belgium',
      source: 'Panama',
      target_score: 3,
      source_score: 0,
      directed: true,
    },
    {
      id: '37',
      target: 'England',
      source: 'Tunisia',
      target_score: 2,
      source_score: 1,
      directed: true,
    },
    {
      id: '38',
      target: 'Belgium',
      source: 'Tunisia',
      target_score: 5,
      source_score: 2,
      directed: true,
    },
    {
      id: '39',
      target: 'England',
      source: 'Panama',
      target_score: 6,
      source_score: 1,
      directed: true,
    },
    {
      id: '40',
      target: 'Belgium',
      source: 'England',
      target_score: 1,
      source_score: 0,
      directed: true,
    },
    {
      id: '41',
      target: 'Tunisia',
      source: 'Panama',
      target_score: 2,
      source_score: 1,
      directed: true,
    },
    {
      id: '42',
      target: 'Japan',
      source: 'Colombia',
      target_score: 2,
      source_score: 1,
      directed: true,
    },
    {
      id: '43',
      target: 'Senegal',
      source: 'Poland',
      target_score: 2,
      source_score: 1,
      directed: true,
    },
    {
      id: '44',
      target: 'Japan',
      source: 'Senegal',
      target_score: 2,
      source_score: 2,
      directed: false,
    },
    {
      id: '45',
      target: 'Colombia',
      source: 'Poland',
      target_score: 3,
      source_score: 0,
      directed: true,
    },
    {
      id: '46',
      target: 'Poland',
      source: 'Japan',
      target_score: 1,
      source_score: 0,
      directed: true,
    },
    {
      id: '47',
      target: 'Colombia',
      source: 'Senegal',
      target_score: 1,
      source_score: 0,
      directed: true,
    },
    {
      id: '48',
      target: 'Uruguay',
      source: 'Portugal',
      target_score: 2,
      source_score: 1,
      directed: true,
    },
    {
      id: '49',
      target: 'France',
      source: 'Argentina',
      target_score: 4,
      source_score: 3,
      directed: true,
    },
    {
      id: '50',
      target: 'Russia',
      source: 'Spain',
      target_score: 5,
      source_score: 4,
      directed: true,
    },
    {
      id: '51',
      target: 'Croatia',
      source: 'Denmark',
      target_score: 4,
      source_score: 3,
      directed: true,
    },
    {
      id: '52',
      target: 'Brazil',
      source: 'Mexico',
      target_score: 2,
      source_score: 0,
      directed: true,
    },
    {
      id: '53',
      target: 'Belgium',
      source: 'Japan',
      target_score: 3,
      source_score: 2,
      directed: true,
    },
    {
      id: '54',
      target: 'Sweden',
      source: 'Switzerland',
      target_score: 1,
      source_score: 0,
      directed: true,
    },
    {
      id: '55',
      target: 'England',
      source: 'Colombia',
      target_score: 4,
      source_score: 3,
      directed: true,
    },
    {
      id: '56',
      target: 'France',
      source: 'Uruguay',
      target_score: 2,
      source_score: 0,
      directed: true,
    },
    {
      id: '57',
      target: 'Belgium',
      source: 'Brazil',
      target_score: 2,
      source_score: 1,
      directed: true,
    },
    {
      id: '58',
      target: 'Croatia',
      source: 'Russia',
      target_score: 6,
      source_score: 5,
      directed: true,
    },
    {
      id: '59',
      target: 'England',
      source: 'Sweden',
      target_score: 2,
      source_score: 0,
      directed: true,
    },
    {
      id: '60',
      target: 'France',
      source: 'Belgium',
      target_score: 1,
      source_score: 0,
      directed: true,
    },
    {
      id: '61',
      target: 'Croatia',
      source: 'England',
      target_score: 2,
      source_score: 1,
      directed: true,
    },
    {
      id: '62',
      target: 'Belgium',
      source: 'England',
      target_score: 2,
      source_score: 0,
      directed: true,
    },
    {
      id: '63',
      target: 'France',
      source: 'Croatia',
      target_score: 4,
      source_score: 2,
      directed: true,
    },
  ],
};
