import React from "react";
import { Text, render, useAnimation } from "ink"

export const Spinner = () => {
    const { frame } = useAnimation({ interval: 80 });
    const chars = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];
    return <Text>{chars[frame % chars.length]}</Text>
}

export async function spinnerAnimation(durationMs = 600): Promise<void> {
    const { unmount } = render(<Spinner />);
    await new Promise<void>((resolve) => setTimeout(resolve, durationMs));
    unmount();
}