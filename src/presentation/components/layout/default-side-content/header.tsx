import { Paper } from "@mantine/core"
import { FaUserPlus } from "react-icons/fa"
import moment from "moment"

function Header() {
  return (
    <div
      className="flex felx-row p-6 h-[88px]"
      style={{ alignItems: "center", justifyContent: "flex-end" }}
    >
      <span style={{ fontSize: "20px", fontWeight: 700 }}>
        {moment().format("ddd, DD/MM/YYYY")}
      </span>
    </div>
  )
}

export default Header
