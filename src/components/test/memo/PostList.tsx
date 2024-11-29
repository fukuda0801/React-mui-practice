import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from '@mui/material';
import { Post, PostListProps } from '../../../types/apiType';
import CommentIcon from '@mui/icons-material/Comment';

// 投稿リストコンポーネント
const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <>
      {posts.length > 0 ? (
        <>
          <Paper elevation={3}>
            <List disablePadding>
              {posts.map((post: Post) => {
                return (
                  <ListItem key={post.id} divider>
                    <ListItemIcon>
                      <CommentIcon />
                    </ListItemIcon>
                    <ListItemText primary={post.title} secondary={post.body} />
                  </ListItem>
                );
              })}
            </List>
          </Paper>
        </>
      ) : (
        <>
          <Typography color="error" variant="h6">
            投稿リストが見つかりませんでした
          </Typography>
        </>
      )}
    </>
  );
};

export default PostList;
