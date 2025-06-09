import React, { useRef } from 'react';
import { Button, Stack } from 'react-bootstrap';
import { ChevronLeft, ChevronRight } from 'react-feather';

interface SlidesProps {
    slides: {
        url: string;
        image: string;
        name?: string;
    }[];
}

const Slides: SlidesProps = ({slides}) => {
    const scroller = useRef<HTMLDivElement>(null);
    const controls = ['left', 'right'];

    const handleClick = (direction: 'left' | 'right') => {
        if (!scroller.current) return;
        const scrollerEl = scroller.current;
        let scrollAmount = scrollerEl.firstChild.clientWidth;
        if (direction === 'left') {
            scrollAmount = scrollAmount * -1;
        }
        scrollerEl.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    };
    
    return (
        <div className="slides">
            {slides.length > 3 && (
                <React.Fragment>
                    {controls.map((control, i) =>
                        <div className="slide-button" key={i}>
                            <Button
                                variant="close"
                                onClick={() => handleClick(control)}
                            >
                                {control === 'left' ? (
                                    <ChevronLeft />
                                ) : (
                                    <ChevronRight />
                                )}
                            </Button>
                        </div>
                    )}
                </React.Fragment>
            )}
            <div ref={scroller} className="slide-scroller">
                {slides.map((slide, i) =>
                    <Stack
                        as="a"
                        href={slide.url}
                        gap={3}
                        className="slide"
                        key={i}
                    >
                        <img src={slide.image} />
                        {!!slide.name && (
                            <span className="h4">
                                {slide.name}
                            </span>
                        )}
                    </Stack>
                )}
            </div>
        </div>
    );
}

export default Slides;
