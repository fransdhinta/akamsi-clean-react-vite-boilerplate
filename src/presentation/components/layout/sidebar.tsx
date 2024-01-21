import { Link } from "@tanstack/router"
import {
  FaAlignLeft,
  FaBuffer,
  FaCog,
  FaFileAlt,
  FaList,
  FaShoppingCart,
} from "react-icons/fa"
import { Paper } from "@mantine/core"
import { useGetCurrentPath } from "../../../common/hooks/use-get-current-path"
import { router } from "../../../common/routes"

function Sidebar() {
  const path = useGetCurrentPath()

  const icons = {
    order: <FaShoppingCart />,
    transactions: <FaList />,
    inventory: <FaBuffer />,
    reports: <FaFileAlt />,
    settings: <FaCog />,
  }
  return (
    <div
      className="flex flex-col w-[5%] h-screen"
      style={{ background: "#00b6ff", alignItems: "center" }}
    >
      <div className="p-6 h-[88px]" style={{ alignItems: "center" }}>
        <FaAlignLeft size={40} />
      </div>
      {Object.keys(icons).map((route, index) => {
        return (
          <div className="p-4" key={index}>
            <Paper
              p={"md"}
              style={{ width: "72px", height: "72px", background: "none" }}
            >
              <Link to={router.flatRoutes.find((rt) => rt.path === route)?.to}>
                <div
                  className="flex flex-col"
                  style={{
                    alignItems: "center",
                    color: path === route ? "#ffffff" : "#000000",
                    fontSize: 40,
                  }}
                >
                  {icons[route as keyof typeof icons]}
                </div>
              </Link>
            </Paper>
          </div>
        )
      })}
    </div>
  )
}

export default Sidebar
