"use client";

import React, { useCallback, useEffect, useState } from "react";
import "./carousel.css";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";

import PackingApexBar from "../PackingApexBar";
import PickingApexBar from "../PickingApexBar";
import RecepcionApexBar from "../RecepcionApexBar";
import ReportePedidosUsuario from "../ReportePedidosUsuario_chart";
import ReporteDocumentoERP from "../ReporteDocumentoERP_chart";

const EmblaCarousel = (props) => {
  const { options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: false, delay: 5000 }),
  ]);
  const [isPlaying, setIsPlaying] = useState(false);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const onButtonAutoplayClick = useCallback(
    (callback) => {
      const autoplay = emblaApi?.plugins()?.autoplay;
      if (!autoplay) return;

      const resetOrStop =
        autoplay.options.stopOnInteraction === false
          ? autoplay.reset
          : autoplay.stop;

      resetOrStop();
      callback();
    },
    [emblaApi]
  );

  const toggleAutoplay = useCallback(() => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    console.log("Autoplay is currently playing:", autoplay.isPlaying());
    const playOrStop = autoplay.isPlaying() ? autoplay.stop : autoplay.play;
    playOrStop();
  }, [emblaApi]);

  useEffect(() => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    setIsPlaying(autoplay.isPlaying());
    emblaApi
      .on("autoplay:play", () => setIsPlaying(true))
      .on("autoplay:stop", () => setIsPlaying(false))
      .on("reInit", () => setIsPlaying(autoplay.isPlaying()));
  }, [emblaApi]);

  return (
    <div>
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
          <div className="embla__slide">
            <ReportePedidosUsuario />
          </div>
          <div className="embla__slide">
            <ReporteDocumentoERP />
          </div>
        </div>
        <div className="embla__controls">
          <div className="embla__buttons">
            <PrevButton
              onClick={() => onButtonAutoplayClick(onPrevButtonClick)}
              disabled={prevBtnDisabled}
            />
            <NextButton
              onClick={() => onButtonAutoplayClick(onNextButtonClick)}
              disabled={nextBtnDisabled}
            />
          </div>
          <button
            className="embla__play"
            onClick={toggleAutoplay}
            type="button"
          >
            {isPlaying ? "Parar" : "Iniciar"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
