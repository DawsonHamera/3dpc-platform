import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Event, useGetEventsQuery } from "../../../member-app";
import EventCard from "./EventCard/EventCard";
import "./EventSlider.css";


type EventSliderProps = {
    filter?: "upcoming" | "ongoing" | "past";
    title?: string;
};

const EventSlider: React.FC<EventSliderProps> = ({ filter, title }) => {
    const { data: events, isLoading, isError } = useGetEventsQuery();

    const filterEvents = (events: Event[], filter: string | undefined) => {
        if (!filter) return events;
        const now = new Date();

        switch (filter) {
            case "upcoming":
                return events.filter(
                    (event: Event) => new Date(event.end_time) > now
                );
            case "ongoing":
                return events.filter(
                    (event: Event) =>
                        new Date(event.start_time) <= now &&
                        new Date(event.end_time) >= now
                );
            case "past":
                return events.filter(
                    (event: Event) => new Date(event.end_time) < now
                );
            default:
                return events;
        }
    };

    const getInitials = (name: string) => {
        const names = name.split(" ");
        const initials = names.map((n) => n.charAt(0).toUpperCase());
        return initials.join("");
    };

    if (isLoading) {
        return <div>Loading events...</div>;
    }

    if (isError || !events) {
        return <div>Error loading events.</div>;
    }

    return (
        <div className="event-slider">
            {title && filterEvents(events, filter).length > 0 && (
                <h2 className="slider-title">{title}</h2>
            )}
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
                                <EventCard event={event} />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};
export default EventSlider;
