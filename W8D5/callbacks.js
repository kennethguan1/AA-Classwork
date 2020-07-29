class Clock {
    constructor() {
        // 1. Create a Date object.
        const dateObj = new Date();

        // 2. Store the hours, minutes, and seconds.
        // const hours = dateObj.getHours();
        this.hours = dateObj.getHours();
        this.minutes = dateObj.getMinutes();
        this.seconds = dateObj.getSeconds();

        // 3. Call printTime.
        this.printTime();

        // 4. Schedule the tick at 1 second intervals.
        setInterval(this._tick.bind(this), 1000);
    }

    printTime() {
        // Format the time in HH:MM:SS
        // Use console.log to print it.
        console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
    }

    _tick() {
        if (this.seconds === 60) {
            this.seconds = 0;
            this.minutes += 1;
                if (this.minutes === 60) {
                    this.minutes = 0;
                    this.hours += 1;
                        if (this.hours === 24) {
                            this.hours = 0;
                        }
                }
        } else {
            this.seconds += 1;
        }

        this.printTime();
        // 1. Increment the time by one second.
        // 2. Call printTime.
    }
}

const clock = new Clock();
