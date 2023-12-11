

import MainHeader from './component/buss/mainHeader'
import NewPost from './component/buss/NewPost'

import PostList from './component/buss/postList'
import ModalProvider from './component/context/cardProvider'
import Modal from './component/UI/Modal'
function App() {

  return (
      <>
      <ModalProvider>
      <Modal>
          <NewPost/>
        </Modal>
        <MainHeader />
        <PostList />
      </ModalProvider>
      
     </>
  )
    }

export default App
