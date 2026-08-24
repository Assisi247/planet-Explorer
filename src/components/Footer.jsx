function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        {/* About the Team */}
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            We are a collaborative team of developers working together
            to build Planet Explorer as part of our capstone project.
          </p>
          <p>
            Our team is committed to creating a responsive, accessible,
            and user-friendly web experience.
          </p>
        </div>

        {/* Team & Resources */}
        <div className="footer-section">
          <h3>Team & Resources</h3>
          <ul>
            <li>
              <a
                href="https://amakandukwu.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Amaka
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/ifeomaokocha"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ifeoma
              </a>
            </li>

            <li>
              <a
                href="https://tsacademyonline.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                TS Academy
              </a>
            </li>
          </ul>
        </div>

        {/* Project */}
        <div className="footer-section">
          <h3>Project</h3>
          <p>
            <a
              href="YOUR_GITHUB_REPOSITORY_LINK"
              target="_blank"
              rel="noopener noreferrer"
            >
              Planet Explorer
            </a>
          </p>
          <p>React Capstone Project</p>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <p>© 2026 Planet Explorer. All rights reserved.</p>

        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  )
}

export default Footer