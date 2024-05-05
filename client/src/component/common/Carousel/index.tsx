import styled from "@emotion/styled";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { useEffect, useState } from "react";

export interface CarouselSlide {
  id: number;
  imgSrc: string;
  subtitle?: string;
  title?: string;
  href: string;
}

interface CarouselProps {
  slides: CarouselSlide[];
}

export function Carousel({ slides }: CarouselProps) {
  const [curSlideIdx, setCurSlidIdx] = useState<number>(0);

  useEffect(() => {
    if (curSlideIdx === slides.length - 1) {
      //TODO:fix 캐러셀 마지막 slide 에서 transform을 어떻게 처리해주어야할지
      const timer = setTimeout(() => {
        setCurSlidIdx(0);
      }, 2000);
      return () => clearTimeout(timer);
    }
    const timer = setTimeout(() => {
      const idx = (curSlideIdx + 1) % slides.length;
      setCurSlidIdx(idx);
    }, 2000);
    return () => clearTimeout(timer);
  }, [curSlideIdx]);

  return (
    <Container>
      <Button
        left="50px"
        onClick={() =>
          setCurSlidIdx((prev) => (prev - 1 + slides.length) % slides.length)
        }
      >
        <IconChevronLeft color={"white"} />
      </Button>
      {slides.map(({ imgSrc }, key) => (
        <Slide
          style={{
            transform: `translateX(${-100 * curSlideIdx}%)`,
            transition: `1s`,
          }}
          src={imgSrc}
          alt="banner"
          key={key.toString() + "Slide"}
        />
      ))}
      <Button
        right="50px"
        onClick={() => setCurSlidIdx((prev) => (prev + 1) % slides.length)}
      >
        <IconChevronRight color={"white"} />
      </Button>
    </Container>
  );
}

const Container = styled.div`
  min-width: 1280px;
  cursor: pointer;
  width: 100vw;
  height: 300px;
  min-height: 300px;
  background-color: black;
  border: none;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
  list-style: none;
  padding: 0;
  z-index: 1;
  display: flex;
`;

const Slide = styled.img`
  width: 100%;
  min-height: 300px;
  height: 100%;
`;

const Button = styled.button<{ left?: string; right?: string }>`
  position: absolute;
  cursor: pointer;
  left: ${({ left }) => left ?? "auto"};
  right: ${({ right }) => right ?? "auto"};
  top: 125px;
  z-index: 10;
  width: 50px;
  height: 50px;
  border: 1px solid rgba(255, 255, 255, 0.23);
  border-radius: 50px;
  background-color: rgba(255, 255, 255, 0.3);
  box-shadow: 0 2px 4px 2px rgba(0, 0, 0, 0.04);
  box-sizing: border-box;
  &:hover {
    background-color: rgba(255, 255, 255, 0.6);
  }
`;
