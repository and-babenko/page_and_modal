const callApi = async (endpoint) => {
  const app = useNuxtApp();

  try {
    const res = await app.$nfts_API.get(endpoint);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

const collectionData = {
  eucId: "kadena-friends@kadena",
  name: "Kadena Friends",
  description:
    "2000 KadenaFriends vibing on the KDA blockchain. NFT holders can earn royalties and staking rewards.",
  supply: 2000,
  numScrapedNFTs: 57,
  uniqueOwnersCount: 29,
  bannerImageUrl: "/kadena-friends@kadena.png",
  collectionImages: [
    {
      id: 636,
      imageUrl:
        "https://d1jec3ket2xx63.cloudfront.net/nft/kadena-friends@kadena/636.webp?t=1687181796526",
      infoUrl: "",
      accountName:
        "k:f5f25a2903a192f082c262d3373057aa5978636d0a9b939b93d2a4e2369db3cc",
    },
    {
      id: 637,
      imageUrl:
        "https://d1jec3ket2xx63.cloudfront.net/nft/kadena-friends@kadena/637.webp?t=1687181796531",
      infoUrl: "",
      accountName:
        "k:f5f25a2903a192f082c262d3373057aa5978636d0a9b939b93d2a4e2369db3cc",
    },
    {
      id: 638,
      imageUrl:
        "https://d1jec3ket2xx63.cloudfront.net/nft/kadena-friends@kadena/638.webp?t=1687181796536",
      infoUrl: "",
      accountName:
        "k:d6ff662f8a4828611c80d43029f59fd5902ff8b87a2ccb8908f6323dd671501a",
    },
    {
      id: 639,
      imageUrl:
        "https://d1jec3ket2xx63.cloudfront.net/nft/kadena-friends@kadena/639.webp?t=1687181796540",
      infoUrl: "",
      accountName:
        "k:f5f25a2903a192f082c262d3373057aa5978636d0a9b939b93d2a4e2369db3cc",
    },
    {
      id: 640,
      imageUrl:
        "https://d1jec3ket2xx63.cloudfront.net/nft/kadena-friends@kadena/640.webp?t=1687181796543",
      infoUrl: "",
      accountName:
        "k:d6ff662f8a4828611c80d43029f59fd5902ff8b87a2ccb8908f6323dd671501a",
    },
    {
      id: 641,
      imageUrl:
        "https://d1jec3ket2xx63.cloudfront.net/nft/kadena-friends@kadena/641.webp?t=1687181796546",
      infoUrl: "",
      accountName:
        "k:afe002eb61bb9e7958c307a8dc9579bd032f8c72f8c777207fc9108ac93a1e2b",
    },
    {
      id: 642,
      imageUrl:
        "https://d1jec3ket2xx63.cloudfront.net/nft/kadena-friends@kadena/642.webp?t=1687181796549",
      infoUrl: "",
      accountName:
        "k:afe002eb61bb9e7958c307a8dc9579bd032f8c72f8c777207fc9108ac93a1e2b",
    },
    {
      id: 643,
      imageUrl:
        "https://d1jec3ket2xx63.cloudfront.net/nft/kadena-friends@kadena/643.webp?t=1687181796552",
      infoUrl: "",
      accountName:
        "k:15c0c7baf107943633dc8cca6c285288ffc0daecacf41173facedb2df888933b",
    },
    {
      id: 644,
      imageUrl:
        "https://d1jec3ket2xx63.cloudfront.net/nft/kadena-friends@kadena/644.webp?t=1687181796554",
      infoUrl: "",
      accountName:
        "k:c07d4002cab93047a195a397293020cb40594ba137558a99d794cc9e70416f3f",
    },
    {
      id: 645,
      imageUrl:
        "https://d1jec3ket2xx63.cloudfront.net/nft/kadena-friends@kadena/645.webp?t=1687181796557",
      infoUrl: "",
      accountName:
        "k:c07d4002cab93047a195a397293020cb40594ba137558a99d794cc9e70416f3f",
    },
  ],
  links: {
    website: "",
    marketplace: "",
    nftInfo: "",
    twitter: "/",
    discord: "/",
  },
};

export const getNFTCollectionImages = async (eucId, pageId = "0", pageSize) => {
  // const endpoint = `someUrl/${encodeURIComponent(
  //   eucId,
  // )}?pageId=${pageId}&pageSize=${pageSize}`;
  // const res = await callApi(endpoint);
  return collectionData;
};
