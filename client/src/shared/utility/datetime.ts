/**
 * DateTime Utility Functions
 *
 * SYSTEM STANDARD:
 * - Server (API) always stores and works with UTC datetime
 * - Client converts UTC to local time for display
 * - Client converts local time to UTC before sending to API
 * - All string-to-Date conversions happen in components, not in utility functions
 */

/**
 * Converts a local datetime string (from IonDatetime or user input) to UTC ISO string
 * for sending to the API
 *
 * @param localDateTimeString - ISO string in local timezone or Date object
 * @returns UTC ISO string suitable for API submission
 *
 * @example
 * // User selects "2024-03-09T14:30:00" in their local timezone (EST, UTC-5)
 * toUTC("2024-03-09T14:30:00")
 * // Returns: "2024-03-09T19:30:00.000Z" (converted to UTC)
 */
export function toUTC(localDateTimeString: string | Date): string {
    const date =
        typeof localDateTimeString === "string"
            ? new Date(localDateTimeString)
            : localDateTimeString;

    return date.toISOString();
}

/**
 * Converts a UTC datetime from the API to a local ISO string
 * for use with IonDatetime component
 *
 * @param utcDateTimeString - UTC ISO string from API
 * @returns Local ISO string for IonDatetime value
 *
 * @example
 * // API returns "2024-03-09T19:30:00.000Z" (UTC)
 * toLocalISOString("2024-03-09T19:30:00.000Z")
 * // Returns: "2024-03-09T14:30:00" in EST (UTC-5)
 */
export function toLocalISOString(utcDateTimeString: string | Date): string {
    const date =
        typeof utcDateTimeString === "string"
            ? new Date(utcDateTimeString)
            : utcDateTimeString;

    // Get local date components
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
}

/**
 * Formats a UTC datetime from API to a localized date string for display
 *
 * @param utcDateTimeString - UTC ISO string or Date from API
 * @param options - Intl.DateTimeFormat options
 * @returns Formatted date string in user's locale
 *
 * @example
 * formatLocalDate("2024-03-09T19:30:00.000Z")
 * // Returns: "3/9/2024" (in US locale)
 *
 * formatLocalDate("2024-03-09T19:30:00.000Z", {
 *   weekday: 'short',
 *   month: 'short',
 *   day: 'numeric'
 * })
 * // Returns: "Sat, Mar 9"
 */
export function formatLocalDate(
    utcDateTimeString: string | Date,
    options?: Intl.DateTimeFormatOptions,
): string {
    const date =
        typeof utcDateTimeString === "string"
            ? new Date(utcDateTimeString)
            : utcDateTimeString;

    return date.toLocaleDateString(undefined, options);
}

/**
 * Formats a UTC datetime from API to a localized time string for display
 *
 * @param utcDateTimeString - UTC ISO string or Date from API
 * @param options - Intl.DateTimeFormat options
 * @returns Formatted time string in user's locale
 *
 * @example
 * formatLocalTime("2024-03-09T19:30:00.000Z")
 * // Returns: "2:30 PM" (in EST timezone)
 *
 * formatLocalTime("2024-03-09T19:30:00.000Z", {
 *   hour: '2-digit',
 *   minute: '2-digit',
 *   hour12: false
 * })
 * // Returns: "14:30"
 */
export function formatLocalTime(
    utcDateTimeString: string | Date,
    options?: Intl.DateTimeFormatOptions,
): string {
    const date =
        typeof utcDateTimeString === "string"
            ? new Date(utcDateTimeString)
            : utcDateTimeString;

    return date.toLocaleTimeString(undefined, options);
}

/**
 * Formats a UTC datetime from API to a complete localized datetime string
 *
 * @param utcDateTimeString - UTC ISO string or Date from API
 * @param options - Intl.DateTimeFormat options
 * @returns Formatted datetime string in user's locale
 *
 * @example
 * formatLocalDateTime("2024-03-09T19:30:00.000Z")
 * // Returns: "3/9/2024, 2:30:00 PM" (in EST)
 */
export function formatLocalDateTime(
    utcDateTimeString: string | Date,
    options?: Intl.DateTimeFormatOptions,
): string {
    const date =
        typeof utcDateTimeString === "string"
            ? new Date(utcDateTimeString)
            : utcDateTimeString;

    return date.toLocaleString(undefined, options);
}

/**
 * Compares two datetime values (handles both UTC strings and Date objects)
 * Useful for determining if an event is upcoming, current, or past
 *
 * @param dateTime1 - First datetime (UTC string or Date)
 * @param dateTime2 - Second datetime (UTC string or Date, defaults to now)
 * @returns Comparison result: -1 if dateTime1 < dateTime2, 0 if equal, 1 if dateTime1 > dateTime2
 *
 * @example
 * const eventStart = "2024-03-09T19:30:00.000Z";
 * if (compareDateTimes(eventStart, new Date()) > 0) {
 *   console.log("Event is in the future");
 * }
 */
export function compareDateTimes(
    dateTime1: string | Date,
    dateTime2: string | Date = new Date(),
): number {
    const date1 =
        typeof dateTime1 === "string" ? new Date(dateTime1) : dateTime1;
    const date2 =
        typeof dateTime2 === "string" ? new Date(dateTime2) : dateTime2;

    const time1 = date1.getTime();
    const time2 = date2.getTime();

    if (time1 < time2) return -1;
    if (time1 > time2) return 1;
    return 0;
}

/**
 * Checks if the current time is between two datetimes
 * Useful for determining if an event is currently happening
 *
 * @param startDateTime - Start datetime (UTC string or Date)
 * @param endDateTime - End datetime (UTC string or Date)
 * @param referenceTime - Time to check against (defaults to now)
 * @returns true if referenceTime is between start and end
 *
 * @example
 * const event = { start_time: "2024-03-09T19:00:00.000Z", end_time: "2024-03-09T21:00:00.000Z" };
 * if (isTimeBetween(event.start_time, event.end_time)) {
 *   console.log("Event is currently happening");
 * }
 */
export function isTimeBetween(
    startDateTime: string | Date,
    endDateTime: string | Date,
    referenceTime: Date = new Date(),
): boolean {
    return (
        compareDateTimes(startDateTime, referenceTime) <= 0 &&
        compareDateTimes(endDateTime, referenceTime) >= 0
    );
}

/**
 * Checks if a datetime is in the past
 *
 * @param dateTime - DateTime to check (UTC string or Date)
 * @param referenceTime - Time to check against (defaults to now)
 * @returns true if dateTime is before referenceTime
 */
export function isPast(
    dateTime: string | Date,
    referenceTime: Date = new Date(),
): boolean {
    return compareDateTimes(dateTime, referenceTime) < 0;
}

/**
 * Checks if a datetime is in the future
 *
 * @param dateTime - DateTime to check (UTC string or Date)
 * @param referenceTime - Time to check against (defaults to now)
 * @returns true if dateTime is after referenceTime
 */
export function isFuture(
    dateTime: string | Date,
    referenceTime: Date = new Date(),
): boolean {
    return compareDateTimes(dateTime, referenceTime) > 0;
}

/**
 * Gets the current UTC ISO string
 * Useful for creating timestamps to send to API
 *
 * @returns Current time as UTC ISO string
 */
export function nowUTC(): string {
    return new Date().toISOString();
}
