import { Text, useAnimation } from "ink"

export const Spinner = () => {
    const { frame } = useAnimation({ interval: 80 });
    const chars = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];
    return <Text>{chars[frame % chars.length]}</Text>
}