function Contact() {
    return ( 
        <>
        <div className="contact">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-md-7">
        <div className="form">
          <form action="" method="">
            <div className="form-row">
              <div className="form-group col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                />
              </div>
              <div className="form-group col-md-6">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your Email"
                />
              </div>
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Subject"
              />
            </div>
            <div className="form-group">
              <textarea
                className="form-control"
                rows={5}
                placeholder="Message"
                defaultValue={""}
              />
            </div>
            <div>
              <button type="submit">Send Message</button>
            </div>
          </form>
        </div>
      </div>
      <div className="col-md-5">
        <div className="contact-info">
          <div className="section-header">
            <h3>Get in Touch</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              condimentum quam ac mi viverra dictum. In efficitur ipsum diam, at
              dignissim lorem tempor in. Vivamus tempor hendrerit finibus.
            </p>
          </div>
          <h4>
            <i className="fa fa-map-marker" />
            123 E Shop, Los Angeles, CA, USA
          </h4>
          <h4>
            <i className="fa fa-envelope" />
            email@example.com
          </h4>
          <h4>
            <i className="fa fa-phone" />
            +123-456-7890
          </h4>
          <div className="social">
            <a href="">
              <i className="fa fa-twitter" />
            </a>
            <a href="">
              <i className="fa fa-facebook" />
            </a>
            <a href="">
              <i className="fa fa-linkedin" />
            </a>
            <a href="">
              <i className="fa fa-instagram" />
            </a>
            <a href="">
              <i className="fa fa-youtube" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        </>
     );
}

export default Contact;