import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views";

const drawerWidth = 240;

export const JournalPage = () => {
  return (
    <JournalLayout>

      {/* <Typography variant='h1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid eos sunt hic pariatur, ex voluptas saepe reprehenderit quis ea aliquam placeat iste assumenda corrupti incidunt omnis blanditiis. Veniam, perferendis alias?</Typography> */}

      {/* <NothingSelectedView /> */}
      <NoteView />
      
    </JournalLayout>
  )
}
