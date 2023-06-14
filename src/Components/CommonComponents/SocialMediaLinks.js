import React from "react";
import styles from "./socialMediaLinks.module.scss"
import {FaFacebook} from "react-icons/fa";
import {AiFillTwitterCircle} from "react-icons/ai";
import {AiOutlineInstagram} from "react-icons/ai";
import {AiFillPlayCircle} from "react-icons/ai";
import {AiFillGithub} from "react-icons/ai";




const SocialMediaLinks = ({contacts}) => {
  
  return (
    <div className={styles.socialMediaLinks}>
      {Object.values(contacts).every((value) => value === "" || value === null) ?
              <div>
              No Social Media Linked
              </div>
              :
            <ul>
              {contacts.facebook &&  <li className={styles.fa}><a href={contacts.facebook} target="_blank"><FaFacebook/></a></li> }
              {contacts.twitter &&  <li className={styles.tw}><a href={contacts.twitter} target="_blank"><AiFillTwitterCircle/></a></li> }
              {contacts.instagram &&  <li className={styles.ins}><a href={contacts.instagram} target="_blank"><AiOutlineInstagram/></a></li>}
              {contacts.youtube &&  <li className={styles.yo}><a href={contacts.youtube} target="_blank"><AiFillPlayCircle/></a></li> }
              {contacts.github &&   <li className={styles.git}><a href={contacts.github} target="_blank"><AiFillGithub/></a></li> }
            </ul>
          }
    </div>
  );
}

export default SocialMediaLinks;