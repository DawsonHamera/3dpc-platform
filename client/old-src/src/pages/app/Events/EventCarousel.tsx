import React from 'react';
import { IonImg } from '@ionic/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow, Parallax, Autoplay } from 'swiper/modules';
import { useGetEventsQuery } from '../../../features/crud/events/eventsApi';
import { Event } from '../../../features/crud/events/event.types';
import EventCard from './EventCard';

const EventCarousel: React.FC<{ events: Event[] }> = ({ events }) => {

    if (!events || events.length === 0) return;

    return (
        <div className="event-widget">
            <Swiper
                effect="coverflow"
                centeredSlides
                slidesPerView="auto"
                spaceBetween={32}
                speed={1500}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 150,
                    modifier: 1,
                    slideShadows: false,
                    scale: 0.75,
                }}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                // loop={true}
                parallax
                modules={[EffectCoverflow, Parallax, Autoplay]}
            >
                {events.map((event: Event) => (
                    <SwiperSlide key={event.id}>
                        <EventCard event={event} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default EventCarousel;