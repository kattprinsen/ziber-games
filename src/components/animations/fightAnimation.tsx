import React, { useState, useEffect } from "react";
import { Text, Box, render } from "ink";

const FRAMES = [
    "⚔   Fighting   ",
    "⚔   Fighting.  ",
    "⚔   Fighting.. ",
    "⚔   Fighting...",
];

function FightAnimation() {
    const [frame, setFrame] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => setFrame((f) => (f + 1) % FRAMES.length), 150);
        return () => clearInterval(timer);
    }, []);

    return (
        <Box borderStyle="round" borderColor="yellow" paddingX={1}>
            <Text bold color="yellow">
                {FRAMES[frame]}
            </Text>
        </Box>
    );
}

export async function animateFight(durationMs = 1200): Promise<void> {
    const { unmount } = render(<FightAnimation />);
    await new Promise<void>((resolve) => setTimeout(resolve, durationMs));
    unmount();
}
