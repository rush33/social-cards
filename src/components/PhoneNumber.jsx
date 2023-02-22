import "../styles/PhoneNumber.css";

const PhoneNumber = ({type, number}) => {
  return (
    <div className="phoneNumber">
      <p>
        {type}: {number}
      </p>
    </div>
  );
};

export default PhoneNumber;
