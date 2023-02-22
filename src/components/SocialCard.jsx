import "../styles/SocialCard.css";
import Location from "./Location";
import PhoneNumber from "./PhoneNumber";

const SocialCard = ({ user }) => {
  return (
    <div className="card">
      <div className="cardTitle">
        {user.name.first} {user.name.last}
      </div>
      <div className="cardBody">
        <Location location={user.location} />
        <PhoneNumber type="Home" number={user.phone} />
        <div className="cardImage">
          <img src={user.picture.medium} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SocialCard;
