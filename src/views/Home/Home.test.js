import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';
import { setupServer } from 'msw/node';
import { rest } from 'msw';

const mockResponse = [
  {
    id: 1,
    'file-name': 'ant00',
    name: {
      'name-USen': 'Cyrano',
      'name-EUen': 'Cyrano',
      'name-EUde': 'Theo',
      'name-EUes': 'Cirano',
      'name-USes': 'Cirano',
      'name-EUfr': 'Cyrano',
      'name-USfr': 'Cyrano',
      'name-EUit': 'Cirano',
      'name-EUnl': 'Cyrano',
      'name-CNzh': '阳明',
      'name-TWzh': '陽明',
      'name-JPja': 'さくらじま',
      'name-KRko': '사지마',
      'name-EUru': 'Сирано',
    },
    personality: 'Cranky',
    'birthday-string': 'March 9th',
    birthday: '9/3',
    species: 'Anteater',
    gender: 'Male',
    subtype: 'B',
    hobby: 'Education',
    'catch-phrase': 'ah-CHOO',
    icon_uri: 'https://acnhapi.com/v1/icons/villagers/1',
    image_uri: 'https://acnhapi.com/v1/images/villagers/1',
    'bubble-color': '#194c89',
    'text-color': '#fffad4',
    saying: "Don't punch your nose to spite your face.",
    'catch-translations': {
      'catch-USen': 'ah-CHOO',
      'catch-EUen': 'ah-CHOO',
      'catch-EUde': 'schneuf',
      'catch-EUes': 'achús',
      'catch-USes': 'achús',
      'catch-EUfr': 'ATCHOUM',
      'catch-USfr': 'ATCHOUM',
      'catch-EUit': 'ett-CCIÙ',
      'catch-EUnl': 'ha-TSJOE',
      'catch-CNzh': '有的',
      'catch-TWzh': '有的',
      'catch-JPja': 'でごわす',
      'catch-KRko': '임돠',
      'catch-EUru': 'апчхи',
    },
  },
  {
    id: 2,
    'file-name': 'ant01',
    name: {
      'name-USen': 'Antonio',
      'name-EUen': 'Antonio',
      'name-EUde': 'Siggi',
      'name-EUes': 'Antonio',
      'name-USes': 'Antonio',
      'name-EUfr': 'Antonio',
      'name-USfr': 'Antonio',
      'name-EUit': 'Antonio',
      'name-EUnl': 'Antonio',
      'name-CNzh': '阿诚',
      'name-TWzh': '阿誠',
      'name-JPja': 'マコト',
      'name-KRko': '퍼머거',
      'name-EUru': 'Антонио',
    },
    personality: 'Jock',
    'birthday-string': 'October 20th',
    birthday: '20/10',
    species: 'Anteater',
    gender: 'Male',
    subtype: 'B',
    hobby: 'Fitness',
    'catch-phrase': 'honk',
    icon_uri: 'https://acnhapi.com/v1/icons/villagers/2',
    image_uri: 'https://acnhapi.com/v1/images/villagers/2',
    'bubble-color': '#fff98f',
    'text-color': '#879b96',
    saying: 'Always go for the burn!',
    'catch-translations': {
      'catch-USen': 'honk',
      'catch-EUen': 'honk',
      'catch-EUde': 'schlürrrf',
      'catch-EUes': 'fufuf',
      'catch-USes': 'fufuf',
      'catch-EUfr': 'pouet',
      'catch-USfr': 'pouet',
      'catch-EUit': 'honk',
      'catch-EUnl': 'snuit',
      'catch-CNzh': '真诚',
      'catch-TWzh': '真誠',
      'catch-JPja': 'ホントに',
      'catch-KRko': '진짜로',
      'catch-EUru': 'го-го-го',
    },
  },
];

const server = setupServer(
  rest.get('http://acnhapi.com/v1a/villagers', (req, res, ctx) => {
    return res(ctx.json(mockResponse));
  })
);

beforeAll(() => server.listen());

afterAll(() => server.close());

test('should render list of villagers', async () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );
  const img = await screen.findAllByRole('img');
  expect(img).toHaveLength(2);
});

// http://acnhapi.com/v1a/villagers
