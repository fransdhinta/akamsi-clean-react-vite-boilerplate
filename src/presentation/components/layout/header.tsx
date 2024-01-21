import { Paper } from "@mantine/core"
import { useGetCurrentPath } from "../../../common/hooks/use-get-current-path"
import { FaRegQuestionCircle } from "react-icons/fa"

function Headers() {
  const path = useGetCurrentPath()
  const title = {
    order: "Orders",
    transactions: "Transactions",
    inventory: "Inventory",
    reports: "Reports",
    settings: "Settings",
  }
  return (
    <div className="flex flex-row h-[88px]" style={{ background: "#FFFFFF" }}>
      <div
        className="flex flex-row w-screen px-6"
        style={{ background: "#FFFFFF", justifyContent: "space-between" }}
      >
        <span className="py-6" style={{ fontSize: "30px", fontWeight: 700 }}>
          {title[path as keyof typeof title]}
        </span>
      </div>
    </div>
  )
}

export default Headers
