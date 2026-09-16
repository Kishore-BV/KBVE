import { LandscapeScene } from "@designcodeio/threeui";
import "@designcodeio/threeui/style.css";

interface SceneProps {
  className?: string;
}

export function Scene({ className }: SceneProps = {}) {
  return (
    <div className={`shader-frame${className ? ` ${className}` : ""}`}>
      <LandscapeScene
        variant="snow"
      />
    </div>
  );
}

export default Scene;
