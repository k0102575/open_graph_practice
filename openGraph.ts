export interface OPEN_GRAPH_PROPS {
  title: string;
  description: string;
  image: string;
  url?: string;
}

type openGraphTpye = {
  [index: string]: OPEN_GRAPH_PROPS;
  '/ad/z': OPEN_GRAPH_PROPS;
  '/ad/z-mini': OPEN_GRAPH_PROPS;
  DEFAULT: OPEN_GRAPH_PROPS;
}


export const OPEN_GRAPH: openGraphTpye = {
  '/ad/z' : {
    title: '핀다이렉트 (pindirect)',
    description: '핀다이렉트Z 요금제를 만나보세요',
    image: `${process.env.NEXT_PUBLIC_CDN}/ad/z/z_220714_og.png`
  },
  '/ad/z-mini': {
    title: '핀다이렉트 (pindirect)',
    description: 'Z Mini 요금제를 만나보세요',
    image: `${process.env.NEXT_PUBLIC_CDN}/ad/z-mini/z_mini_220714_og.png`,
  },
  '/brand/k': {
    title: '핀다이렉트 (pindirect)',
    description: 'K 요금제를 만나보세요',
    image: `${process.env.NEXT_PUBLIC_CDN}/brand/k/k_220714_og.png`,
  },
  DEFAULT: {
    title: '핀다이렉트 (pindirect)',
    description: '통신을 바꾸다. 우리만의 시각으로',
    image: `${process.env.NEXT_PUBLIC_CDN}/common/pindirectshop_og.png`
  },
}
