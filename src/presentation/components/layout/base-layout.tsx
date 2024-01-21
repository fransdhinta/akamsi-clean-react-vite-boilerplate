import DefaultSideContent from "./default-side-content/default-side-content"
import Headers from "./header"
import Sidebar from "./sidebar"

interface ILayout {
  sideContent?: JSX.Element
  mainContent?: JSX.Element
}

function BaseLayout({sideContent, mainContent}: ILayout) {
  return (
    <div className='flex flex-row'>
      <Sidebar />
      <div className='flex flex-col w-[70%]' style={{background: '#E5E5E5'}}>
        <Headers />
        <div className="p-6">
          {mainContent}
        </div>
      </div>
      <div className="w-[30%]" style={{background: "#ffffff"}}>
          {sideContent ?? <DefaultSideContent />}
      </div>
    </div>
  )
}

export default BaseLayout