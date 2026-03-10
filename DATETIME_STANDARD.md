# DateTime System Standard

## Overview

This document describes the datetime handling standard implemented across the 3DPC Platform application.

## Core Principle

**Server stores and works with UTC. Client displays in local time.**

## System Architecture

### Server (API) - NestJS/Prisma

- **Storage**: All datetime values are stored in UTC in the MySQL database
- **Processing**: All datetime comparisons and operations use UTC
- **API Responses**: Date objects are automatically serialized to UTC ISO strings by NestJS
- **API Requests**: Expects datetime values as UTC ISO strings

### Client (React/Ionic)

- **Display**: Converts UTC datetimes to user's local timezone for display
- **Input**: User inputs datetime in their local timezone
- **Submission**: Converts local datetime to UTC before sending to API
- **Storage**: Stores datetime as UTC ISO strings in state

## Implementation Details

### Utility Functions (`client/src/shared/utility/datetime.ts`)

#### Conversion Functions

- `toUTC(localDateTime)` - Converts local datetime to UTC ISO string for API submission
- `toLocalISOString(utcDateTime)` - Converts UTC datetime to local ISO string for IonDatetime
- `formatLocalDate(utcDateTime, options)` - Formats UTC to localized date string
- `formatLocalTime(utcDateTime, options)` - Formats UTC to localized time string
- `formatLocalDateTime(utcDateTime, options)` - Formats UTC to localized datetime string

#### Comparison Functions

- `compareDateTimes(dateTime1, dateTime2)` - Compares two datetimes
- `isTimeBetween(start, end, reference?)` - Checks if time is between two datetimes
- `isPast(dateTime, reference?)` - Checks if datetime is in the past
- `isFuture(dateTime, reference?)` - Checks if datetime is in the future
- `nowUTC()` - Returns current UTC ISO string

### Database Schema

All datetime fields in Prisma schema use `DateTime` type:

- `event.start_time` - Event start time (UTC)
- `event.end_time` - Event end time (UTC)
- `attendance.arrival_time` - User arrival time (UTC)
- `task.scheduled_date` - Task scheduled date (UTC)
- `user.last_active` - Last activity timestamp (UTC)
- `*_log.logged_at` - Log timestamp (UTC)
- `*.created_at` - Creation timestamp (UTC)
- `*.updated_at` - Update timestamp (UTC)
- `*.deleted_at` - Soft delete timestamp (UTC)

### API Services

All API services that handle datetime fields include documentation comments:

- `events.service.ts` - Handles event datetime conversions
- `tasks.service.ts` - Handles task datetime conversions
- All services parse incoming UTC ISO strings to Date objects for Prisma

### Client Components

#### Form Components (Input)

Forms that collect datetime input convert to UTC before submission:

- `EventForm.tsx` - Event creation/editing form
    - Displays UTC times in local timezone using `toLocalISOString()`
    - Stores user input as local ISO strings
    - Parent component converts to UTC using `toUTC()` before API call

- `CreateTaskModal.tsx` - Task creation form
    - Initializes with `toUTC(new Date())`
    - Converts to UTC using `toUTC()` before submission

- `CreatePrintTask.tsx` - Print task creation form
    - Initializes with `toUTC(new Date())`
    - Converts to UTC using `toUTC()` before submission

#### Display Components (Output)

Components that display datetime values use formatting functions:

- `EventCard.tsx` / `EventCardSmall.tsx` - Display event dates
    - Uses `formatLocalDate()` and `formatLocalTime()`

- `EventHeader.tsx` - Event header display
    - Uses `formatLocalDate()` and `formatLocalTime()`

- `EventHero.tsx` - Event hero section
    - Uses `formatLocalTime()` and `isFuture()`

- `EventDetailsPage.tsx` - Event details and attendance
    - Uses `isFuture()`, `isPast()`, `isTimeBetween()`

- `HomePage.tsx` (landing) - Event filtering
    - Uses `isPast()` and `compareDateTimes()`

## Migration Guide

### Converting Existing Code

#### Before (❌ Incorrect)

```typescript
// Display
<p>{new Date(event.start_time).toLocaleDateString()}</p>

// Comparison
if (new Date() > new Date(event.start_time)) { ... }

// Submission
const data = { start_time: someLocalDateTime };
createEvent(data);
```

#### After (✅ Correct)

```typescript
// Import utilities
import { formatLocalDate, isFuture, toUTC } from '../shared/utility/datetime';

// Display
<p>{formatLocalDate(event.start_time)}</p>

// Comparison
if (isFuture(event.start_time)) { ... }

// Submission
const data = { start_time: toUTC(someLocalDateTime) };
createEvent(data);
```

## Common Patterns

### Event Time Display

```typescript
import { formatLocalDate, formatLocalTime } from '../utility/datetime';

const EventDisplay = ({ event }) => (
  <div>
    <p>Date: {formatLocalDate(event.start_time, { weekday: 'long', month: 'long', day: 'numeric' })}</p>
    <p>Time: {formatLocalTime(event.start_time)} - {formatLocalTime(event.end_time)}</p>
  </div>
);
```

### Event Status Check

```typescript
import { isFuture, isPast, isTimeBetween } from "../utility/datetime";

const getEventStatus = (event) => {
    if (isFuture(event.start_time)) return "upcoming";
    if (isPast(event.end_time)) return "past";
    if (isTimeBetween(event.start_time, event.end_time)) return "current";
};
```

### Form Handling

```typescript
import { toUTC, toLocalISOString } from "../utility/datetime";

// Display UTC datetime in form (for editing)
const localTime = toLocalISOString(event.start_time);

// Convert local input to UTC for submission
const handleSubmit = (formData) => {
    const data = {
        ...formData,
        start_time: toUTC(formData.start_time),
        end_time: toUTC(formData.end_time),
    };
    createEvent(data);
};
```

## Testing Considerations

### Timezone Testing

When testing datetime functionality:

1. Test in different timezones (UTC, EST, PST, etc.)
2. Test across daylight saving time boundaries
3. Test with events that span midnight local time
4. Verify database stores UTC regardless of client timezone

### API Testing

When testing API endpoints:

- Send UTC ISO strings: `"2024-03-09T19:30:00.000Z"`
- Verify response contains UTC ISO strings
- Verify database contains UTC values

## Troubleshooting

### Common Issues

**Issue**: Times display incorrectly

- **Cause**: Not converting UTC to local for display
- **Fix**: Use `formatLocalTime()` or `formatLocalDate()`

**Issue**: Times save with wrong timezone

- **Cause**: Not converting local to UTC before API call
- **Fix**: Use `toUTC()` before sending to API

**Issue**: Event status shows incorrectly

- **Cause**: Comparing local time to UTC or vice versa
- **Fix**: Use comparison utilities (`isFuture()`, `isPast()`, etc.) which handle UTC correctly

**Issue**: IonDatetime shows wrong time when editing

- **Cause**: Passing UTC ISO string directly to IonDatetime
- **Fix**: Use `toLocalISOString()` to convert before passing to IonDatetime

## Benefits

1. **Consistency**: All times stored in single timezone (UTC)
2. **No Ambiguity**: Clear when conversion happens
3. **Global Support**: Users see times in their local timezone automatically
4. **Maintainability**: Centralized utility functions
5. **Type Safety**: Functions accept both string and Date types
6. **Developer Experience**: Clear naming conventions and documentation

## References

- Utility Functions: `client/src/shared/utility/datetime.ts`
- API Events Service: `api/src/modules/events/events.service.ts`
- API Tasks Service: `api/src/modules/tasks/tasks.service.ts`
- Prisma Schema: `api/prisma/schema.prisma`
