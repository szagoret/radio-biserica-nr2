export type CalendarType = {
    title: string,
    program: DayOfWeek[]
}

type DayOfWeek = {
    title: string,
    events: Event[]
}

type Event = {
    title: string,
    time: string
}