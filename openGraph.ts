export interface OPEN_GRAPH_PROPS {
  title: string;
  description: string;
  image: string;
  urlParams?: string;
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
    image: 'https://shop-cdn.stagefive.io/z-web/ad/z-max/z_max_220714_og.png'
  },
  '/ad/z-mini': {
    title: '핀다이렉트 (pindirect)',
    description: 'Z Mini 요금제를 만나보세요',
    image: 'https://shop-cdn.stagefive.io/z-web/ad/z-mini/z_mini_220714_og.png',
  },
  DEFAULT: {
    title: '핀다이렉트 (pindirect)',
    description: '통신을 바꾸다. 우리만의 시각으로',
    image: 'https://shop-cdn.stagefive.io/z-web/common/pindirectshop_og.png'
  },
}
