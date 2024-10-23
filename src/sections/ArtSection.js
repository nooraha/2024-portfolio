import { Section } from "../CommonComponents.js";
import medusa_walk from "../images/art/medusa_walk.gif";
import remi from "../images/art/remi.png";
import april_2023 from "../images/art/april_2023.png";
import august_2023_2 from "../images/art/august_2023_2.png";
import august_2023 from "../images/art/august_2023.png";
import december_2023 from "../images/art/december_2023.png";
import march_2023 from "../images/art/march_2023.png";
import november_2023 from "../images/art/november_2023.png";
import worm_attack from "../images/art/worm_attack.gif";
import old_self_portrait from "../images/art/selfportraitart.png";
import may_2022 from "../images/art/may_2022.jpg";
import self_portrait_2024 from "../images/art/self_portrait_2024.png";

import { models } from "../data/modelEmbedData.js";

export default function ArtSection() {
  return (
    <Section>
      <h2 id="art">05. and lastly, some art of mine!</h2>
      <ArtGallery />
    </Section>
  );
}

function ArtGallery() {
  const galleryImages = [
    {
      id: 0,
      date: "December 2022",
      medium: "digital art",
      img: old_self_portrait,
      alt: "digital self-portrait of Noora Halla-aho",
    },
    {
      id: 1,
      date: "May 2022",
      medium: "digital art",
      img: may_2022,
      alt: "drawing of a girl laying on a bed in a messy room",
    },

    {
      id: 3,
      date: "April 2023",
      medium: "digital painting",
      img: april_2023,
      alt: "painting of a lake on a winter day",
    },

    {
      id: 2,
      date: "November 2023",
      medium: "digital art",
      img: november_2023,
      alt: "drawing of a boy with crows in his hair",
    },

    {
      id: 4,
      date: "August 2023",
      medium: "digital art",
      img: august_2023,
      alt: "drawing of a person with brown and blonde hair and wearing a cyan flannel",
    },
    {
      id: 5,
      date: "March 2023",
      medium: "digital art",
      img: march_2023,
      alt: "drawing of a girl in a school uniform wearing a baseball cap",
    },
    {
      id: 6,
      date: "August 2023",
      medium: "digital painting",
      img: august_2023_2,
      alt: "painting of a pond-side view of trees and flowers",
    },
    {
      id: 7,
      date: "November 2023",
      medium: "digital pixelart",
      img: worm_attack,
      alt: "pixelart of a sci-fi worm creature attacking",
    },
    {
      id: 8,
      date: "December 2023",
      medium: "digital art",
      img: remi,
      alt: "drawing of a green-haired guy doing the peace sign",
    },
    {
      id: 9,
      date: "December 2023",
      medium: "digital art",
      img: december_2023,
      alt: "drawing of a pink bedroom in perspective view",
    },
    {
      id: 10,
      date: "December 2023",
      medium: "digital pixelart",
      img: medusa_walk,
      alt: "pixelart of a jellyfish monster swimming",
    },
    {
      id: 11,
      date: "January 2024",
      medium: "digital art",
      img: self_portrait_2024,
      alt: "digital self-portrait of Noora Halla-aho",
    },
  ];

  const newestArtFirst = galleryImages.sort(function (a, b) {
    return b.id - a.id;
  });

  const evenImages = newestArtFirst.filter((image) => image.id % 2 === 0);
  const oddImages = newestArtFirst.filter((image) => image.id % 2 === 1);

  const evenItems = evenImages.map((piece) => <Piece piece={piece} />);
  const oddItems = oddImages.map((piece) => <Piece piece={piece} />);

  const evenModels = models.filter((model) => model.id % 2 === 0);
  const oddModels = models.filter((model) => model.id % 2 === 1);

  const evenModelItems = evenModels.map((model) => (
    <ModelShowcase model={model} />
  ));
  const oddModelItems = oddModels.map((model) => (
    <ModelShowcase model={model} />
  ));

  return (
    <div>
      <div className="ArtGallery">
        <ul className="GalleryColumn">
          {evenItems}
          {evenModelItems}
        </ul>
        <ul className="GalleryColumn">
          {oddItems}
          {oddModelItems}
        </ul>
      </div>
    </div>
  );
}

function Piece({ piece }) {
  return (
    <li>
      <img src={piece.img} alt={piece.alt}></img>
      <div>
        <p>
          {piece.date}, {piece.medium}
        </p>
        <div className="ScreenOverlay">
          <img src={piece.img} alt={piece.alt}></img>
        </div>
      </div>
    </li>
  );
}

function ModelShowcase({ model }) {
  return (
    <li>
      {model.embed}
      <div>
        <p>
          {model.date}, {model.medium}
        </p>
      </div>
    </li>
  );
}
