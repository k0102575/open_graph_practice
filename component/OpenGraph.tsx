import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { OPEN_GRAPH } from '../openGraph';
import _ from 'lodash';
import Head from 'next/head';

const OpenGraph = () => {
  const { asPath } = useRouter();

  const openGraphData = useMemo(() => {
    const url = asPath.split('?')[0];

    console.log(_.has(OPEN_GRAPH, url))

    if (_.has(OPEN_GRAPH, url)) {
      return {...OPEN_GRAPH[url], url};
    }

    return {...OPEN_GRAPH.DEFAULT, url};
  }, [asPath]);

  return (
    <Head>
      {/* 페이스북 */}
      <meta property="og:title" content={openGraphData.title} />
      <meta property="og:description" content={openGraphData.description} />
      <meta property="og:image" content={openGraphData.image} />
      <meta property="og:url" content={`https://www.pindirectshop.com/${openGraphData.url}`} />
      <meta property="og:site_name" content="Pindirect" />
      <meta property="og:type" content="website" />
      <meta property="og:image:width" content="800" />
      <meta property="og:image:height" content="400" />

      {/* 트위터 */}
      <meta name="twitter:title" content={openGraphData.title} />
      <meta name="twitter:description" content={openGraphData.description} />
      <meta name="twitter:image" content={openGraphData.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={`https://www.pindirectshop.com/${openGraphData.url}`} />
      <meta property="twitter:domain" content="pindirectshop.com" />
    </Head>
  );
};

export default OpenGraph;
