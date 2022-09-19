import PropTypes from "prop-types";
import "../styles/components/KeyData.css";
import calories from "../assets/icons/calories-icon.png";
import carbs from "../assets/icons/carbs-icon.png";
import protein from "../assets/icons/protein-icon.png";
import fat from "../assets/icons/fat-icon.png";
import { useState, useEffect } from "react";
import Loading from "./Loading";

/**
 * Component that build the user's key datas display
 * @param {Object} userKeyData
 * @returns {ReactElement}
 */

function KeyData(props) {
  const userKeyData = props.userKeyData;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  }, [isLoading]);

  if (isLoading) {
    return (
      <div className="key-data-container-loading">
        <Loading />
      </div>
    );
  }

  const arrayKeyData = [
    {
      name: "Calories",
      value: userKeyData.calories,
      unit: "kCal",
      logo: calories,
    },
    {
      name: "Proteines",
      value: userKeyData.protein,
      unit: "g",
      logo: protein,
    },
    {
      name: "Glucides",
      value: userKeyData.carbohydrate,
      unit: "g",
      logo: carbs,
    },
    {
      name: "Lipides",
      value: userKeyData.lipid,
      unit: "g",
      logo: fat,
    },
  ];

  return (
    <div className="key-data-container">
      {arrayKeyData.map((keyData, index) => {
        return (
          <div key={index} className="key-data-object">
            <img src={keyData.logo} alt="icones unité de mesure" />
            <div className="key-data-texts">
              <p className="key-data-value">
                {keyData.value + " " + keyData.unit}
              </p>
              <p className="key-data-name">{keyData.name}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

KeyData.propTypes = {
  userKeyData: PropTypes.object,
};

export default KeyData;
