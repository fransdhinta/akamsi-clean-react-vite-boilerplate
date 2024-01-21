import Header from './header'
import { Divider } from '@mantine/core'
import Content from './content'

function DefaultSideContent() {
  return (
    <div className='flex flex-col'>
      <Header />
      <Divider />
      <Content />
    </div>
  )
}

export default DefaultSideContent