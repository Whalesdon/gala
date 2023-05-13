import Image from "next/image";
import React, { FC } from "react";
import "swiper/css";

interface lLatestProps {}

const Latest: FC<lLatestProps> = ({}) => {
  return (
    <div
      className="bg-[#020712] px-5 py-20 md:px-0 relative"
      data-v-4a204ef8=""
    >
      <div className="container mx-auto" data-v-4a204ef8="">
        <div className="flex justify-between pb-[60px]" data-v-4a204ef8="">
          <h4
            className="text-white text-3xl font-medium m-0"
            data-v-4a204ef8=""
          >
            Latest News
          </h4>
        </div>
      </div>
      <div className="w-full mb-8" data-aos="fade-left" data-v-4a204ef8="">
        <div
          className="swiper swiper-initialized swiper-horizontal items-stretch justify-right swiper-backface-hidden"
          data-v-4a204ef8=""
        >
          <div className="swiper-wrapper transform translate-x-0 translate-y-0 translate-z-0">
            <div
              className="swiper-slide swiper-slide-active w-96 mr-5"
              data-v-4a204ef8=" "
            >
              <a
                href="https://www.marketwatch.com/press-release/town-star-wins-best-blockchain-game-2022-06-13"
                className="block"
                target="_blank"
                data-v-4a204ef8=""
                rel="noopener"
              >
                <Image
                  width={400}
                  height={400}
                  loading="lazy"
                  src="https://cdn.sanity.io/images/g9ns5zhx/production/710e037a7c57df68e9281bdd029a9d9b2d492f69-1226x655.jpg?rect=36,0,1155,655&amp;w=342&amp;h=194"
                  alt="{{ item.category }}"
                  className="object-cover object-center news-img"
                  data-v-4a204ef8=""
                />

                <div className="text-left contain-text py-2" data-v-4a204ef8="">
                  <span
                    className="text-[#6A6A6A] text-[16px] uppercase block"
                    data-v-4a204ef8=""
                  >
                    Town Star
                  </span>
                  <span className="text-white text-lg block" data-v-4a204ef8="">
                    Town Star Wins Best Blockchain Game!
                  </span>
                </div>
              </a>
            </div>
            <div
              className="swiper-slide swiper-slide-next w-96 mr-20"
              data-v-4a204ef8=""
            >
              <a
                href="https://aibc.world/news/galaverse-malta-the-web3-future-of-entertainment/"
                className="block"
                target="_blank"
                data-v-4a204ef8=""
                rel="noopener"
              >
                <Image
                  fill
                  loading="lazy"
                  src="https://cdn.sanity.io/images/g9ns5zhx/production/21f8f3bbae2480792a21d1a3a6a243e79b8a3b5a-795x435.jpg?rect=15,0,767,435&amp;w=342&amp;h=194"
                  alt="{{ item.category }}"
                  className="object-cover object-center news-img"
                  data-v-4a204ef8=""
                />
                <div className="text-left contain-text py-2" data-v-4a204ef8="">
                  <span
                    className="text-[#6A6A6A] text-[16px] uppercase block"
                    data-v-4a204ef8=""
                  >
                    Galaverse
                  </span>
                  <span className="text-white text-lg block" data-v-4a204ef8="">
                    Galaverse Malta: The Web3 future of Entertainment
                  </span>
                </div>
              </a>
            </div>
            <div className="swiper-slide w-[768px] mr-20" data-v-4a204ef8="">
              <a
                href="https://www.marketwatch.com/press-release/gala-games-is-paving-the-future-for-blockchain-games-with-grit-2022-06-06?mod=search_headline"
                className="block"
                target="_blank"
                data-v-4a204ef8=""
                rel="noopener"
              >
                <Image
                  fill
                  loading="lazy"
                  src="https://cdn.sanity.io/images/g9ns5zhx/production/de5b452dd7075d676edbfb76c4112362785309b3-490x273.png?rect=5,0,481,273&amp;w=342&amp;h=194"
                  alt="{{ item.category }}"
                  className="object-cover object-center news-img"
                  data-v-4a204ef8=""
                />
                <div className="text-left contain-text py-2" data-v-4a204ef8="">
                  <span
                    className="text-[#6A6A6A] text-[16px] uppercase block"
                    data-v-4a204ef8=""
                  >
                    GRIT
                  </span>
                  <span className="text-white text-lg block" data-v-4a204ef8="">
                    Gala Games is Paving the Future for Blockchain Games with
                    GRIT
                  </span>
                </div>
              </a>
            </div>
            <div className="swiper-slide w-[768px] mr-20" data-v-4a204ef8="">
              <a
                href="https://www.billboard.com/business/streaming/snoop-dogg-death-row-why-pull-streaming-1235060577/"
                className="block"
                target="_blank"
                data-v-4a204ef8=""
                rel="noopener"
              >
                <Image
                  fill
                  loading="lazy"
                  src="https://cdn.sanity.io/images/g9ns5zhx/production/838b987569a56211acab701015ed8ab81e6eeac0-681x383.webp?rect=4,0,675,383&amp;w=342&amp;h=194"
                  alt="{{ item.category }}"
                  className="object-cover object-center news-img"
                  data-v-4a204ef8=""
                />
                <div className="text-left contain-text py-2" data-v-4a204ef8="">
                  <span
                    className="text-[#6A6A6A] text-[16px] uppercase block"
                    data-v-4a204ef8=""
                  >
                    Music
                  </span>
                  <span className="text-white text-lg block" data-v-4a204ef8="">
                    Here’s Why Snoop Dogg Says He Pulled Death Row’s Catalog
                    From Streaming
                  </span>
                </div>
              </a>
            </div>
            <div className="swiper-slide w-[768px] mr-20" data-v-4a204ef8="">
              <a
                href="https://venturebeat.com/2022/06/06/gala-games-blockchain-game-grit-will-debut-on-the-epic-games-store/"
                className="block"
                target="_blank"
                data-v-4a204ef8=""
                rel="noopener"
              >
                <Image
                  fill
                  loading="lazy"
                  src="https://cdn.sanity.io/images/g9ns5zhx/production/2021240d178eb902b17e3c43f9b5f2de48f67bae-490x273.png?rect=5,0,481,273&amp;w=342&amp;h=194"
                  alt="{{ item.category }}"
                  className="object-cover object-center news-img"
                  data-v-4a204ef8=""
                />

                <div className="text-left contain-text py-2" data-v-4a204ef8="">
                  <span
                    className="text-[#6A6A6A] text-[16px] uppercase block"
                    data-v-4a204ef8=""
                  >
                    GRIT
                  </span>
                  <span className="text-white text-lg block" data-v-4a204ef8="">
                    Gala Games’ blockchain game GRIT will debut on the Epic
                    Games Store
                  </span>
                </div>
              </a>
            </div>
            <div className="swiper-slide w-[768px] mr-20" data-v-4a204ef8="">
              <a
                href="https://venturebeat.com/2021/12/13/gala-games-and-c%C2%B2-ventures-launch-100m-fund-for-blockchain-games/"
                className="block"
                target="_blank"
                data-v-4a204ef8=""
                rel="noopener"
              >
                <Image
                  fill
                  loading="lazy"
                  src="https://cdn.sanity.io/images/g9ns5zhx/production/fdc259098954125e9fd2ec7a8e51a145a2216f67-750x500.png?rect=0,38,750,425&amp;w=342&amp;h=194"
                  alt="{{ item.category }}"
                  className="object-cover object-center news-img"
                  data-v-4a204ef8=""
                />
                <div className="text-left contain-text py-2" data-v-4a204ef8="">
                  <span
                    className="text-[#1f1f1f] text-[16px] uppercase block"
                    data-v-4a204ef8=""
                  >
                    Galaverse
                  </span>
                  <span className="text-white text-lg block" data-v-4a204ef8="">
                    Gala Games and C² Ventures launch $100M fund for blockchain
                    games
                  </span>
                </div>
              </a>
            </div>
            <div className="swiper-slide w-[768px] mr-20" data-v-4a204ef8="">
              <a
                href="https://www.rollingstone.com/music/music-news/for-a-coosnoop-dogg-b-o-d-r-bacc-on-death-row-nft-1297638/"
                className="block"
                target="_blank"
                data-v-4a204ef8=""
                rel="noopener"
              >
                <Image
                  fill
                  loading="lazy"
                  src="https://cdn.sanity.io/images/g9ns5zhx/production/182934fcd9033ff681eb349bc8ff4bff76b0673f-1200x800.png?rect=0,60,1200,681&amp;w=342&amp;h=194"
                  alt="{{ item.category }}"
                  className="object-cover object-center news-img"
                  data-v-4a204ef8=""
                />
                <div className="text-left contain-text py-2" data-v-4a204ef8="">
                  <span
                    className="text-[#6A6A6A] text-[16px] uppercase block"
                    data-v-4a204ef8=""
                  >
                    Music
                  </span>
                  <span className="text-white text-lg block" data-v-4a204ef8="">
                    For Just $5,000 You Can Own One Snoop Dogg Song on the
                    Blockchain
                  </span>
                </div>
              </a>
            </div>
            <div className="swiper-slide w-[768px] mr-20" data-v-4a204ef8="">
              <a
                rel="noopener"
                href="https://www.wsj.com/articles/nfts-are-spurring-a-digital-land-grabin-videogame-worlds-11616414401"
                className="block"
                target="_blank"
                data-v-4a204ef8=""
              >
                <Image
                  fill
                  loading="lazy"
                  src="https://cdn.sanity.io/images/g9ns5zhx/production/f9235fc3fc2a34a5ead4599940260eabd4520912-1290x859.jpg?rect=0,64,1290,732&amp;w=342&amp;h=194"
                  alt="{{ item.category }}"
                  className="object-cover object-center news-img"
                  data-v-4a204ef8=""
                />
                <div className="text-left contain-text py-2" data-v-4a204ef8="">
                  <span
                    className="text-[#6A6A6A] text-[16px] uppercase block"
                    data-v-4a204ef8=""
                  >
                    Games
                  </span>
                  <span className="text-white text-lg block" data-v-4a204ef8="">
                    NFTs Are Spurring a Digital Land Grab—in Videogame Worlds
                  </span>
                </div>
              </a>
            </div>
            <div className="swiper-slide w-[768px] mr-20" data-v-4a204ef8="">
              <a
                rel="noopener"
                href="https://www.prnewswire.com/news-releases/gala-games-ushers-in-blockchain-generation-of-gaming-with-galaverse-301442842.html"
                className="block"
                target="_blank"
                data-v-4a204ef8=""
              >
                <Image
                  fill
                  loading="lazy"
                  src="https://cdn.sanity.io/images/g9ns5zhx/production/fdc259098954125e9fd2ec7a8e51a145a2216f67-750x500.png?rect=0,38,750,425&amp;w=342&amp;h=194"
                  alt="{{ item.category }}"
                  className="object-cover object-center news-img"
                  data-v-4a204ef8=""
                />
                <div className="text-left contain-text py-2" data-v-4a204ef8="">
                  <span
                    className="text-[#6A6A6A] text-[16px] uppercase block"
                    data-v-4a204ef8=""
                  >
                    Galaverse
                  </span>
                  <span className="text-white text-lg block" data-v-4a204ef8="">
                    Gala Games Ushers in Blockchain Generation of Gaming with
                    Galaverse
                  </span>
                </div>
              </a>
            </div>
            <div className="swiper-slide" data-v-4a204ef8="w-[768px] mr-20">
              <a
                rel="noopener"
                href="https://www.theverge.com/22832188/peter-molyneux-22cans-gala-nft-blockchain-business-simulator-game-interview"
                className="block"
                target="_blank"
                data-v-4a204ef8=""
              >
                <Image
                  fill
                  loading="lazy"
                  src="https://cdn.sanity.io/images/g9ns5zhx/production/94560940f4bde3f2d90ac12b64978b3996310fb0-1675x1675.webp?rect=0,363,1675,950&amp;w=342&amp;h=194"
                  alt="{{ item.category }}"
                  className="object-cover object-center news-img"
                  data-v-4a204ef8=""
                />
                <div className="text-left contain-text py-2" data-v-4a204ef8="">
                  <span
                    className="text-[#6A6A6A] text-[16px] uppercase block"
                    data-v-4a204ef8=""
                  >
                    Games
                  </span>
                  <span className="text-white text-lg block" data-v-4a204ef8="">
                    Peter Molyneuxs NFT game will make being nice cost real
                    money
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-10" data-v-4a204ef8="">
        <div
          className="flex flex-row items-center justify-center md:justify-start gap-4"
          data-v-4a204ef8=""
        >
          <button
            title="button"
            type="button"
            className="latest-news-swiper-button-prev swiper-nav-button text-white swiper-button-disabled"
            data-v-4a204ef8=""
            disabled
          >
            <Image
              src="/prev-arrow.svg"
              alt="Prev"
              data-v-4a204ef8=""
              height={40}
              width={40}
            />
          </button>
          <button
            title="button"
            type="button"
            className="latest-news-swiper-button-next swiper-slide-next swiper-nav-button text-white"
            data-v-4a204ef8=""
          >
            <Image
              src="/next-arrow.svg"
              alt="Next"
              data-v-4a204ef8=""
              height={40}
              width={40}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Latest;
