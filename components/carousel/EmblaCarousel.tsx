import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import "./carousel.css";

import PackingApexBar from "../PackingApexBar";
import PickingApexBar from "../PickingApexBar";
import RecepcionApexBar from "../RecepcionApexBar";

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ playOnInit: false, delay: 2000 }),
  ]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
          <PackingApexBar />
        </div>
        <div className="embla__slide">
          <PickingApexBar />
        </div>
        <div className="embla__slide">
          <RecepcionApexBar />
        </div>
      </div>
    </div>
  );
}
