import { SiAmd } from "react-icons/si";

function VPSServer(props)
{
    return(
    <>
        <div className="server">
                <div className="server-icon"><SiAmd size={100} color="red"/></div>
                <h1>{props.name}</h1>

                <div className="chara">
                  <p>Вирт. ядра</p>
                  <h4>{props.cores}</h4>
                </div>

                <div className="chara">
                  <p>ОЗУ</p>
                  <h4>{props.ram}</h4>
                </div>

                <div className="chara">
                  <p>ДИСК</p>
                  <h4>{props.disk}</h4>
                </div>

                <div className="chara">
                  <p>ПОРТ</p>
                  <h4>{props.port}</h4>
                </div>

                <h2> {props.price}₽ / месяц</h2>

                <button>ЗАКАЗАТЬ</button>
              </div>
    </>
    );
}

export default VPSServer;