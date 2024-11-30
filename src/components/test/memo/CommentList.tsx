import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from '@mui/material';
import { Comment, CommentListProps } from '../../../types/apiType';
import CommentIcon from '@mui/icons-material/Comment';

// コメントリストコンポーネント
const CommentList: React.FC<CommentListProps> = ({ comments }) => {
  return (
    <>
      {comments.length > 0 ? (
        <>
          <Paper elevation={3}>
            <List disablePadding>
              {comments.map((comment: Comment) => {
                return (
                  <ListItem key={comment.id} divider>
                    <ListItemIcon
                      sx={{ fontSize: '2rem', marginRight: '2rem' }}
                    >
                      <CommentIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary={comment.name}
                      secondary={comment.body}
                    />
                  </ListItem>
                );
              })}
            </List>
          </Paper>
        </>
      ) : (
        <>
          <Typography color="error" variant="h6">
            コメントが取得できませんでした
          </Typography>
        </>
      )}
    </>
  );
};

export default CommentList;
