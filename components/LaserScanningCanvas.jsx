
import "./LaserScanningStyles.css"

const LaserScanning = () => {
  return (
    <>
      <div class="wrapper">
        {" "}
        <iframe
          className="laser_scanning_video"
          title="3D Modeling thought Laser Scanner."
          frameBorder="0"
          allowFullScreen
          mozAllowFullScreen="true"
          webkitAllowFullScreen="true"
          allow="autoplay; fullscreen; xr-spatial-tracking"
          xr-spatial-tracking
          execution-while-out-of-viewport
          execution-while-not-rendered
          web-share
          src="https://sketchfab.com/models/049ec92c48fa4fefb2048f4f770884f4/embed?autospin=1&transparent=1&autostart=1&preload=1&ui_theme=dark&transparent=1"
        >
          {" "}
        </iframe>{" "}
        <iframe
          className="laser_scanning_video"
          title="Faro Laser Scanner Focus X330"
          frameborder="0"
          allowfullscreen
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
          allow="autoplay; fullscreen; xr-spatial-tracking"
          xr-spatial-tracking
          execution-while-out-of-viewport
          execution-while-not-rendered
          web-share
          src="https://sketchfab.com/models/8c66641afedf4fcd95ec13ce1b50390b/embed?autospin=1&autostart=1&preload=1&transparent=1"
        >
          {" "}
        </iframe>{" "}
      </div>
    </>
  );
}

export default LaserScanning
