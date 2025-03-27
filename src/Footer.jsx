import { useNavigate, useLocation } from "react-router-dom";
import FooterDesign from "./FooterDesign";
import habitWhite from "./assets/habit_white.png";
import habitGray from "./assets/habit_gray.png";
import hojeWhite from "./assets/hoje_white.png";
import hojeGray from "./assets/hoje_gray.png";
import { useEffect, useState } from "react";
export default function Footer(){

  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("");
  useEffect(() => {
    if (location.pathname === "/habitos") {
        setActiveTab("habitos");
    } else if (location.pathname === "/hoje") {
        setActiveTab("hoje");
    }
}, [location.pathname]);

const handleClick = (tab) => {
    setActiveTab(tab);
    navigate(`/${tab}`);
};
    return(
        <FooterDesign>
            <div className="footer-container">
              <button  onClick={() => handleClick("habitos")}
                    className={activeTab === "habitos" ? "active" : ""}>
              <img src={activeTab === "habitos" ? habitWhite : habitGray} alt="Hábitos" />
               Hábitos
              </button>
              <button  onClick={() => handleClick("hoje")}
                    className={activeTab === "hoje" ? "active" : ""}>
                <img src={activeTab === "hoje" ? hojeWhite : hojeGray} alt="Hoje" />      
                Hoje
            </button>
            </div>
        </FooterDesign>
    )
}