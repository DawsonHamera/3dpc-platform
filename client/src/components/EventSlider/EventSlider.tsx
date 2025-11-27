import { IonButton, IonIcon } from "@ionic/react";
import { useGetEventsQuery } from "../../features/events/eventsApi";
import { location } from "ionicons/icons";
import "./EventSlider.css";
import { attendanceResultType, eventResultType } from "../../types/zod/schemas";
import EventCard from "./EventCard/EventCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
import Card from "../Card/Card";

type EventSliderProps = {
    filter?: "upcoming" | "ongoing" | "past";
};

const EventSlider: React.FC<EventSliderProps> = ({ filter }) => {
    const { data: events, isLoading, isError } = useGetEventsQuery();

    const filterEvents = (
        events: eventResultType[],
        filter: string | undefined
    ) => {
        if (!filter) return events;
        const now = new Date();

        switch (filter) {
            case "upcoming":
                return events.filter(
                    (event: eventResultType) => new Date(event.end_time) > now
                );
            case "ongoing":
                return events.filter(
                    (event: eventResultType) =>
                        new Date(event.start_time) <= now &&
                        new Date(event.end_time) >= now
                );
            case "past":
                return events.filter(
                    (event: eventResultType) => new Date(event.end_time) < now
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
