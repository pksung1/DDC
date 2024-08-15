const url = new URL(location.href);

const time = url.searchParams.get('time') ?? "2024-08-20T00:00:00Z";

const dateTime = new Date(time);

window.addEventListener('DOMContentLoaded', () => {

    const timer = document.getElementById('timer');

    setInterval(() => {
        const now = new Date();
        
        const diff = dateTime.getTime() - now.getTime();

        const seconds = Math.trunc(diff / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);

        console.log(dateTime.getTime(), now.getTime());
        if (timer) {
            timer.innerHTML = `${padNumber(days)}:${padNumber(hours % 24)}:${padNumber(minutes % 60)}:${padNumber(seconds % 60)}`;
        }
    }, 1000);


});

function padNumber(num: number): string {
    return num.toString().padStart(2, "0");
}
