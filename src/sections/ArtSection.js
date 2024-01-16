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
import worm_walk from "../images/art/worm_walk.gif";

export default function ArtSection() {
  return (
    <div>
      <h2 id="art">05. and lastly, some art of mine!</h2>
      <Section>
        <ArtGallery />
      </Section>
    </div>
  );
}

function ArtGallery() {
  const galleryImages = [
    {
      id: 0,
      date: "December 2023",
      medium: "digital pixelart",
      img: medusa_walk,
      alt: "pixelart of a jellyfish monster swimming",
    },
    {
      id: 1,
      date: "December 2023",
      medium: "digital art",
      img: remi,
      alt: "drawing of a green-haired guy doing the peace sign",
    },
    {
      id: 2,
      date: "December 2023",
      medium: "digital art",
      img: december_2023,
      alt: "drawing of a pink bedroom in perspective view",
    },
    {
      id: 3,
      date: "November 2023",
      medium: "digital art",
      img: november_2023,
      alt: "drawing of a boy with crows in his hair",
    },
    {
      id: 4,
      date: "August 2023",
      medium: "digital painting",
      img: august_2023_2,
      alt: "painting of a pond-side view of trees and flowers",
    },
    {
      id: 5,
      date: "November 2023",
      medium: "digital pixelart",
      img: worm_attack,
      alt: "pixelart of a sci-fi worm creature attacking",
    },
    {
      id: 6,
      date: "March 2023",
      medium: "digital art",
      img: march_2023,
      alt: "drawing of a girl in a school uniform wearing a baseball cap",
    },
    {
      id: 7,
      date: "August 2023",
      medium: "digital art",
      img: august_2023,
      alt: "drawing of a person with brown and blonde hair and wearing a cyan flannel",
    },

    {
      id: 9,
      date: "April 2023",
      medium: "digital painting",
      img: april_2023,
      alt: "painting of a lake on a winter day",
    },
  ];

  const evenImages = galleryImages.filter((image) => image.id % 2 == 0);
  const oddImages = galleryImages.filter((image) => image.id % 2 == 1);

  const evenItems = evenImages.map((piece) => (
    <li>
      <img src={piece.img} alt={piece.alt}></img>
      <div>
        <p>
          {piece.date}, {piece.medium}
        </p>
      </div>
    </li>
  ));

  const oddItems = oddImages.map((piece) => (
    <li>
      <img src={piece.img} alt={piece.alt}></img>
      <div>
        <p>
          {piece.date}, {piece.medium}
        </p>
      </div>
    </li>
  ));

  return (
    <div>
      <div className="ArtGallery">
        <ul className="GalleryColumn">{evenItems}</ul>
        <ul className="GalleryColumn">{oddItems}</ul>
      </div>
    </div>
  );
}
