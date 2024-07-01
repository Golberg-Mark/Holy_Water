import styled from 'styled-components';
import { FC, SVGProps, useEffect, useState } from 'react';

interface Props extends SVGProps<HTMLOrSVGElement> {
  loaderText: string;
}

const easeInOut = (t: number) => {
  return t < 0.5
    ? 2 * t * t
    : -1 + (4 - 2 * t) * t;
};

const ScreenLoader: FC<Props> = ({ loaderText, onAnimationEnd }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 5200; // 5 seconds
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const easedProgress = easeInOut(progress);

      setCount(Math.round(easedProgress * 100));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <Wrapper>
      <CircularProgress
        width="250"
        height="250"
        viewBox="0 0 250 250"
        onAnimationEnd={onAnimationEnd}
      >
        <BackgroundCircle></BackgroundCircle>
        <FillCircle></FillCircle>
        <Text x='50%' y='50%'>
          {count}%
        </Text>
      </CircularProgress>

      {loaderText}
    </Wrapper>
  );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    grid-gap: 40px;
    text-align: center;
    animation: opacity-animation 0.3s ease-in-out 5.5s forwards;

    @keyframes opacity-animation {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }
`;

const CircularProgress = styled.svg`
    --size: 250px;
    --half-size: calc(var(--size) / 2);
    --stroke-width: 12px;
    --radius: calc((var(--size) - var(--stroke-width)) / 2);
    --circumference: calc(var(--radius) * pi * 2);
    --dash: calc((var(--progress) * var(--circumference)) / 100);
    animation: progress-animation 5s ease-in-out forwards, opacity-animation 0.3s ease-in-out 5.5s forwards;
    
    @property --progress {
      syntax: "<number>";
      inherits: false;
      initial-value: 0;
    }

    @keyframes progress-animation {
        from {
            --progress: 0;
        }
        to {
            --progress: 100;
        }
    }
`;

const Circle = styled.circle`
    cx: var(--half-size);
    cy: var(--half-size);
    r: var(--radius);
    stroke-width: var(--stroke-width);
    fill: none;
    stroke-linecap: round;
`;

const BackgroundCircle = styled(Circle)`
    stroke: #ddd;
`;

const FillCircle = styled(Circle)`
    transform: rotate(-90deg);
    transform-origin: var(--half-size) var(--half-size);
    stroke-dasharray: var(--dash) calc(var(--circumference) - var(--dash));
    transition: stroke-dasharray 0.3s linear 0s;
    stroke: rgb(228, 34, 156);
`;

const Text = styled.text`
    font-size: 52px;
    font-weight: 800;
    fill: white;
    dominant-baseline: middle;
    text-anchor: middle;
`;

export default ScreenLoader;
