import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import EventCard from "../../../member-app/pages/Events/EventCard/EventCard";
import { Event, useGetEventsQuery } from "../../features";
import "./EventSlider.css";
import EventCardSmall from "../../../member-app/pages/Events/EventCardSmall";

type EventSliderProps = {
    filter?: "upcoming" | "ongoing" | "past";
};

const EventSlider: React.FC<EventSliderProps> = ({ filter }) => {
    const { data: events, isLoading, isError } = useGetEventsQuery();

    const filterEvents = (events: Event[], filter: string | undefined) => {
        if (!filter) return events;
        const now = new Date();

        switch (filter) {
            case "upcoming":
                return events.filter(
                    (event: Event) => new Date(event.end_time) > now,
                );
            case "ongoing":
                return events.filter(
                    (event: Event) =>
                        new Date(event.start_time) <= now &&
                        new Date(event.end_time) >= now,
                );
            case "past":
                return events.filter(
                    (event: Event) => new Date(event.end_time) < now,
                );
            default:
                return events;
        }
    };

    if (isLoading) {
        return <div>Loading events...</div>;
    }

    if (isError || !events) {
        return <div>Error loading events.</div>;
    }
    return (
        <div className="event-slider">
            <div className="slider-container">
                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={1}
                    speed={1000}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    // breakpoints={{
                    //     640: { slidesPerView: 1.2 },
                    //     768: { slidesPerView: 2 },
                    //     1024: { slidesPerView: 3 },
                    // }}
                >
                    {filterEvents(events, filter).map((event) => (
                        <SwiperSlide key={event.id}>
                            <div className="slide-content">
                                <EventCardSmall event={event} />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};
export default EventSlider;
