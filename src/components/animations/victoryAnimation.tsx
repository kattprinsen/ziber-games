import React, { useState, useEffect } from "react";
import { Text, Box, render } from "ink";

const FRAMES = [
    "🏆  Victory!        ✨",
    "✨  Victory!        🏆",
    "🌟  Victory!        ⭐",
    "⭐  Victory!        🌟",
];

function VictoryAnimation({ name }: { name: string }) {
    const [frame, setFrame] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => setFrame((f) => (f + 1) % FRAMES.length), 200);
        return () => clearInterval(timer);
    }, []);

    return (
        <Box borderStyle="double" borderColor="green" paddingX={1} flexDirection="column" alignItems="center">
            <Text bold color="green">
                {FRAMES[frame]}
            </Text>
            <Text bold color="yellow">
                {name} is victorious!
            </Text>
        </Box>
    );
}

export async function victoryAnimation(name: string, durationMs = 2000): Promise<void> {
    const { unmount } = render(<VictoryAnimation name={name} />);
    await new Promise<void>((resolve) => setTimeout(resolve, durationMs));
    unmount();
}
