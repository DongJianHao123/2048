import { IBoard, IGrid, ITile } from '../../types/index';

export const baseConfig: IBaseConfig = {
  board: {
    bgColor: '#999',
    rowNum: 4,
    colNum: 4,
  },
  grid: {
    bgColor: '#d3d3d3',
    size: {
      width: '80px',
      height: '80px',
    },
  },
  tile: {
    exterior: [
      {
        val: 2,
        bgColor: '#fef4f2',
        valColor: '#333',
      },
      {
        val: 4,
        bgColor: '#fed9a2',
        valColor: '#333',
      },
      {
        val: 8,
        bgColor: '#fc8c5e',
        valColor: '#fff',
      },
      {
        val: 16,
        bgColor: '#f8692f',
        valColor: '#fff',
      },
      {
        val: 32,
        bgColor: '#f8563d',
        valColor: '#fff',
      },
      {
        val: 64,
        bgColor: '#ff3936',
        valColor: '#fff',
      },
      {
        val: 128,
        bgColor: '#00c3dd',
        valColor: '#fff',
      },
      {
        val: 256,
        bgColor: '#00a4be',
        valColor: '#fff',
      },
      {
        val: 512,
        bgColor: '#00abcb',
        valColor: '#fff',
      },
      {
        val: 1024,
        bgColor: '#00abcb',
        valColor: '#fff',
      },
      {
        val: 2048,
        bgColor: '#00abcb',
        valColor: '#fff',
      },
    ],
    generateRule: [
      {
        val: 2,
        randomWeight: 50,
      },
      {
        val: 4,
        randomWeight: 15,
      },
    ],
  },
};

interface IBaseConfig {
  board: {
    bgColor: IBoard['bgColor'];
    rowNum: number;
    colNum: number;
  };
  grid: {
    bgColor: IGrid['bgColor'];
    size: {
      width: string;
      height: string;
    };
  };
  tile: {
    exterior: Array<{ val: ITile['val']; bgColor: ITile['bgColor']; valColor: ITile['valColor'] }>;
    generateRule: Array<{ val: ITile['val']; randomWeight: number }>;
  };
}
