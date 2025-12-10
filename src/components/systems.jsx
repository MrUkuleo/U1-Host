import { FaLinux, FaUbuntu, FaWindows, FaCentos, FaFreebsd } from "react-icons/fa";
import { SiAlmalinux, SiOracle, SiRockylinux } from "react-icons/si";
import { BiSolidAlbum } from "react-icons/bi";

import OS from "./subcomponents/os";

function Systems() {
    const OSData = [
      {
        icon: FaLinux,
        OSName: "Debian",
        version: "11 (Bullseye), 12 (Bookworm)"
      },
      {
        icon: FaUbuntu,
        OSName: "Ubuntu",
        version: "20.04 (Focal), 22.04 (Noble)"
      },
      {
        icon: FaWindows,
        OSName: "Windows",
        version: "10, 11, Server 2016, Server 2019, Server 2022"
      },
      {
        icon: SiAlmalinux,
        OSName: "Alma Linux",
        version: "8, 9"
      },
      {
        icon: FaCentos,
        OSName: "CentOS",
        version: "Stream 9"
      },
      {
        icon: FaFreebsd,
        OSName: "FreeBSD",
        version: "13, 14"
      },
      {
        icon: SiOracle,
        OSName: "Oracle Linux",
        version: "8, 9"
      },
      {
        icon: SiRockylinux,
        OSName: "Rocky Linux",
        version: "8, 9"
      },
      {
        icon: BiSolidAlbum,
        OSName: "Свой ISO",
        version: "до 10 ГБ"
      }      
    ];
    return(
        <>
            <div className="systems">
            <h1 className="heading-text">Доступные операционные системы</h1>
            <div className="os-s">
              {OSData.map((os, index) => (
                <OS 
                    key={index} 
                    icon={os.icon}
                    OSName={os.OSName}
                    version={os.version}
                />
            ))}
            </div>
            </div>
        </>
    )
}

export default Systems;