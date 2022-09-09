import icon from "/src/assets/img/notification-icon.svg";
import "./styles.css";
import { BASE_URL } from "../../utils/request";
import axios from "axios";

type Props = {
  saleId: number;
};

function handleClick(id: number) {
  axios(`${BASE_URL}/sales/${id}/notification`).then((response) => {
    console.log("SUCESSO");
  });
}

function NotificationButton({ saleId }: Props) {
  return (
    <>
      <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
        <img src={icon} alt="notificar" />
      </div>
    </>
  );
}

export default NotificationButton;
