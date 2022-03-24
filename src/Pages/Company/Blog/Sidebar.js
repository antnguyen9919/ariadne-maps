import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">Ariadne Maps Blog</span>
        <img
          src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
          alt=""
        />
        <p>
        In this blog, you can find the latest updates, press releases and resources about our company and topics

that matter to us, such as indoor localisation, monitoring and tracking in physical spaces and more.
        </p>
      </div>
      {/* <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Life">
              Life
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Music">
              Music
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Sport">
              Sport
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Style">
              Style
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Tech">
              Tech
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Cinema">
              Cinema
            </Link>
          </li>
        </ul>
      </div> */}
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
        <a className= 'mx-3' href='https://www.youtube.com/channel/UCetG3dxFlJrFno0ChaJ5VXQ'><i className='fab fa-youtube' /></a>
        <a style={{marginRight:'15px'}} href='https://www.facebook.com/ariadnemaps/'><i className='fab fa-facebook-f' /></a>
        <a className= 'mx-3' href='https://twitter.com/ariadne_maps'><i className='fab fa-twitter' /></a>
        <a className= 'mx-3' href='https://www.linkedin.com/company/ariadne-maps'><i className='fab fa-linkedin' /></a>
        </div>
      </div>
    </div>
  );
}
