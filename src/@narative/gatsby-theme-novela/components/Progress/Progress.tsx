import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import throttle from "lodash/throttle";

import { clamp } from "@utils";

export interface IProgress {
  contentHeight: number;
}

function Progress({ contentHeight }: IProgress) {
  const [progress, setProgress] = useState<number>(0);
  const [glowSize, setGlowSize] = useState(0);

  // setInterval(() => setGlowSize(Math.floor(Math.random() * 10)), 50);

  useEffect(() => {
    const handleScroll = throttle(() => {
      const percentComplete = (window.scrollY / contentHeight) * 100;

      setProgress(clamp(+percentComplete.toFixed(2), -2, 104));
    }, 20);

    if (contentHeight) {
      window.addEventListener("scroll", handleScroll);
      window.addEventListener("resize", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleScroll);
      };
    }
  }, [contentHeight]);

  return (
    <ProgressContainer tabIndex={-1}>
      <Trackline aria-hidden="true">
        <ProgressLine height={progress} size={glowSize} />
      </Trackline>
    </ProgressContainer>
  );
}

export default Progress;

const ProgressContainer = styled.div`
  position: relative;
  outline: none;
  user-select: none;
`;

const Trackline = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: calc(88vh - 40px);
  max-height: 425px;
  width: 1px;
  background-color: ${p => p.theme.colors.track};
  box-shadow: 0 0 ${p => p.size}px 0px #61FF00;
`;

const ProgressLine = styled.div`
  height: ${p => p.height}%;
  width: 1px;
  background-color: ${p => p.theme.colors.progress};
  left: 0;
  box-shadow: 0 0 ${p => p.size * 1.5}px 0px #61FF00;
`;