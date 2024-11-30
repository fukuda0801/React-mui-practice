import { List, ListItem, ListItemText, Paper, Typography } from '@mui/material';
import { User, UserListProps } from '../../../types/apiType';
import { Link } from 'react-router-dom';

// ユーザーリストコンポーネント
const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <>
      {users.length > 0 ? (
        <Paper elevation={3}>
          <List disablePadding>
            {users.map((user: User) => {
              return (
                <ListItem
                  divider
                  component={Link}
                  to={`/memo-users/${user.id}`}
                  key={user.id}
                  sx={{
                    textDecoration: 'none',
                    color: 'inherit',
                    '&:hover': {
                      backgroundColor: '#d5d5d58b',
                    },
                  }}
                >
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
