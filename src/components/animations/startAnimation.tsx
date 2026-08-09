import { Text, Box, render } from "ink";
import { useState, useEffect } from "react";

const FRAMES = [
    "Welcome",
    "Welcome.",
    "Welcome..",
    "Welcome...",
]

function StartAnimation() {
    const [frame, setFrame] = useState(0);
    
        useEffect(() => {
            const timer = setInterval(() => setFrame((f) => (f + 1) % FRAMES.length), 150);
            return () => clearInterval(timer);
        }, []);
        
    return (
        <Box borderStyle="round" borderColor="magenta" paddingX={1}>
            <Text bold color="white">
                {FRAMES[frame]}
            </Text>
        </Box>
    )
}

export async function startAnimation(durationMs = 1200): Promise<void> {
    const { unmount } = render(<StartAnimation />);
    await new Promise<void>((resolve) => setTimeout(resolve, durationMs));
    unmount();
}