import { List, ListItem, ListItemText, Paper, Typography } from '@mui/material';
import { User, UserListProps } from '../../../types/apiType';

// ユーザーリストコンポーネント
const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <>
      {users.length > 0 ? (
        <Paper elevation={3}>
          <List disablePadding>
            {users.map((user: User) => {
              return (
                <ListItem key={user.id} divider>
                  <ListItemText primary={user.name} secondary={user.email} />
                </ListItem>
              );
            })}
          </List>
        </Paper>
      ) : (
        <>
          <Typography variant="h6" color="error" align="inherit">
            ユーザーが見つかりませんでした
          </Typography>
        </>
      )}
    </>
  );
};

export default UserList;
