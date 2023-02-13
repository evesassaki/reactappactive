import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";

function Social() {
    return ( <div className="social-media-icon">
<a className="facebook-icon" href="facebook.com/"><FontAwesomeIcon icon={faFacebook} /></a>
<a className="instagram-icon" href="instagram.com/"><FontAwesomeIcon icon={faInstagram} /></a>
<a className="whatsapp-icon" href="/"><FontAwesomeIcon icon={faWhatsapp} /></a>

</div>
    );
}

export default Social;