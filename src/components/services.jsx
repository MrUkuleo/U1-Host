import VPSServer from "./subcomponents/vps-server";

function Services()
{
    const serversData = [
        {
            name: "DE-7950X3D-1",
            cores: "1 vCPU",
            ram: "2 ГБ",
            disk: "30 GB NVMe",
            port: "1 ГБит/с",
            price: "409"
        },
        {
            name: "DE-7950X3D-2",
            cores: "2 vCPU",
            ram: "4 ГБ",
            disk: "60 GB NVMe",
            port: "1 ГБит/с",
            price: "819"
        },
        {
            name: "DE-7950X3D-3",
            cores: "3 vCPU",
            ram: "6 ГБ",
            disk: "90 GB NVMe",
            port: "1 ГБит/с",
            price: "1199"
        },
        {
            name: "DE-7950X3D-4",
            cores: "4 vCPU",
            ram: "8 ГБ",
            disk: "120 GB NVMe",
            port: "1 ГБит/с",
            price: "1649"
        },
        {
            name: "DE-props7950X3D-5",
            cores: "8 vCPU",
            ram: "16 ГБ",
            disk: "240 GB NVMe",
            port: "1 ГБит/с",
            price: "3299"
        },
        {
            name: "DE-7950X3D-6",
            cores: "16 vCPU",
            ram: "32 ГБ",
            disk: "500 GB NVMe",
            port: "1 ГБит/с",
            price: "6589"
        }
    ];

    return (
        <>
            <div className="services">
                <h1 className="heading-text" id="vps-servers">Промо-тариф</h1>
                  <div className="selector" style={{ marginLeft: "240px", marginBottom: "50px"}}>
                      <label>Страна</label>
                      <select>
                          <option selected>Германия</option>
                          <option>Нидерланды</option>
                          <option>Финляндия</option>
                      </select>
                  </div>
                  <VPSServer 
                            name="DE-PROMO"
                            cores="1 vCPU"
                            ram="1 GB"
                            disk="10 GB NVMe"
                            port="100 МБит/с"
                            price="149"
                    />

                <h1 className="heading-text" id="vps-servers">Облачные VPS серверы</h1>

                <div className="selectors">
                    <div className="country-cpu">
                        <div className="selector">
                            <label>Страна</label>
                            <select>
                                <option selected>Германия</option>
                                <option>Нидерланды</option>
                                <option>Финляндия</option>
                            </select>
                        </div>

                        <div className="selector">
                            <label>Процессор</label>
                            <select>
                                <option selected>AMD Ryzen 9 7950X3D</option>
                                <option>AMD Ryzen 9 5950X</option>
                            </select>
                        </div>
                    </div>

                    <div className="selector">
                        <label>Показывать цену за</label>
                        <select>
                            <option selected>Месяц</option>
                            <option>День</option>
                        </select>
                    </div>
                </div>

                <div className="servers">
                    {serversData.map((server, index) => (
                        <VPSServer 
                            key={index} 
                            name={server.name}
                            cores={server.cores}
                            ram={server.ram}
                            disk={server.disk}
                            port={server.port}
                            price={server.price}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Services;