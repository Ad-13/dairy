import { Item } from '../interfaces/item';

export let items: Item[] = [
  {
    id: 1,
    title: 'First item with custom name',
    comments: [
      {
        text: 'A variation of the ordinary lorem ipsum text has been'
      },
      {
        text: 'ordinary lorem ipsum text has been used in typesetting since'
      }
    ]
  },
  {
    id: 2,
    title: 'Second item is active',
    comments: [
      {
        // tslint:disable-next-line:max-line-length
        text: 'A variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s or earlier, when it was popularized by advertisements for Letraset transfer sheets. It was introduced to the Information Age in the mid-1980s'
      },
      {
        // tslint:disable-next-line:max-line-length
        text: 'A variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s or earlier, when it was popularized by advertisements for Letraset transfer sheets. It was introduced to the Information Age in the mid-1980s'
      },
      {
        // tslint:disable-next-line:max-line-length
        text: 'A variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s or earlier, when it was popularized by advertisements for Letraset transfer sheets. It was introduced to the Information Age in the mid-1980sA variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s or earlier, when it was popularized by advertisements for Letraset transfer sheets. It was introduced to the Information Age in the mid-1980sA variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s or earlier, when it was popularized by advertisements for Letraset transfer sheets. It was introduced to the Information Age in the mid-1980s'
      }
    ]
  }
];
