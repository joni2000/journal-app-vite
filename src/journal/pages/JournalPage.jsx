import { AddOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views";

const drawerWidth = 240;

export const JournalPage = () => {
  return (
    <JournalLayout>

      {/* <Typography variant='h1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid eos sunt hic pariatur, ex voluptas saepe reprehenderit quis ea aliquam placeat iste assumenda corrupti incidunt omnis blanditiis. Veniam, perferendis alias?</Typography> */}

      <NothingSelectedView />
      {/* <NoteView /> */}

      <IconButton
        size="large"
        sx={{
          color: "white",
          backgroundColor: "error.main",
          ':hover': { backgroundColor: "error.main", opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      >

          <AddOutlined sx={{ fontSize: 30 }}/>

      </IconButton>
      
    </JournalLayout>
  )
}
