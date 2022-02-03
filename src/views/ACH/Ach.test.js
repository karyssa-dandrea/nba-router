import React from 'react';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import AchDetail from './AchDetail';
import { MemoryRouter, Route } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

const mockResponse = {
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
};

const server = setupServer(
  rest.get('https://acnhapi.com/v1a/villagers/1', (req, res, ctx) => {
    return res(ctx.json(mockResponse));
  })
);

beforeAll(() => server.listen());

afterAll(() => server.close());

test.only('should render villager details', async () => {
  render(
    <MemoryRouter initialEntries={['/villagers/1']}>
      <Route path="/villagers/:villagerID">
        <AchDetail />
      </Route>
    </MemoryRouter>
  );
  const loading = screen.getByRole('heading');
  expect(loading).toBeInTheDocument();
  const paragraph = await screen.findByText(/cranky/i);
  expect(paragraph).toBeInTheDocument();
});
