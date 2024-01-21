import BaseLayout from "../../components/layout/base-layout"
import MainContent from "./view/main"

function Inventory() {
  return (
    <div>
      <BaseLayout mainContent={<MainContent />} />
    </div>
  )
}

export default Inventory
