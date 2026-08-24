function VideoSection() {
  return (
    <section className="video-section">
      <video
        className="planet-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/planet-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="video-overlay">
        <h2>Explore Our Solar System</h2>
        <p>
          Discover the incredible worlds that orbit our Sun.
        </p>
      </div>
    </section>
  )
}

export default VideoSection