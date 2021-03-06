import React from 'react';
import './ContactPage.scss'

export default class ContactPage extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
        <div id="contactSlide">
          <div id="contactHeader"><div>Contact</div></div>
          <div id="contactContainer">
            <div id="contactLinks">
              <a href="https://www.facebook.com/aptArtista/"><img src="https://upload.wikimedia.org/wikipedia/commons/c/c2/F_icon.svg" alt="Facebook" width="50"/></a>
              <a href="https://www.linkedin.com/in/aptdroid/"><img src="http://www.theredbrickroad.com/wp-content/uploads/2017/05/linkedin-logo-copy.png" alt="Linkedin" width="50"/></a>
              <a href="https://www.deviantart.com/aptdroid/gallery/"><img src="https://www.shareicon.net/data/128x128/2016/04/12/748660_logo_512x512.png" alt="DeviantArt" width="50"/></a>
            </div>
            <div id="contactInfo">
              <label><span>&#9990;</span> +91 95352-49800</label>
              <br/>
              <label><span>&#9993;</span> apt.sharp@gmail.com</label>
            </div>
          </div>
        </div>
      );
  }
}
