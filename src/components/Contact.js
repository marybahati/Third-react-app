import React from 'react';

class Contact extends React.Component {
  render() {
    return (
      <footer id="footer">
      <div className="inner">
        {/* <ul className="icons">
          <li><a href="#" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
          <li><a href="#" className="icon brands fa-github"><span className="label">Facebbok</span></a></li>
          <li><a href="#" className="icon brands fa-dribbble"><span className="label">Instagram</span></a></li>
        </ul> */}
        <ul class="copyright">
          <li>&copy; kenyaRowing</li><li>Coded In: <a href="http://html5up.net">Rowing</a></li>
        </ul>
      </div>
    </footer>

    )
  }
}
export default Contact;
