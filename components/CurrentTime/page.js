export async function getCurrentTime() {
    const time = new Date().toLocaleTimeString();
    return { props: { time } };
}

export default function CurrentTime({ time }) {
    return (
        <span>2022.22.22</span>
    )
}

