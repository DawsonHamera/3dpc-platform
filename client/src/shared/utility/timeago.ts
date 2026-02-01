export function timeAgo(date: Date | string | number): string {
    const now = new Date();
    const past = new Date(date);
    const seconds = Math.floor((now.getTime() - past.getTime()) / 1000);

    if (isNaN(seconds) || seconds < 0) return "just now";

    const intervals: [number, string][] = [
        [60, "second"],
        [60, "minute"],
        [24, "hour"],
        [30, "day"],
        [12, "month"],
        [Number.POSITIVE_INFINITY, "year"],
    ];

    let unitIndex = 0;
    let count = seconds;

    for (; unitIndex < intervals.length; unitIndex++) {
        if (count < intervals[unitIndex][0]) break;
        count = Math.floor(count / intervals[unitIndex][0]);
    }

    const unit = intervals[unitIndex][1];
    const plural = count === 1 ? "" : "s";

    if (count <= 0) return "just now";
    return `${count} ${unit}${plural} ago`;
}
