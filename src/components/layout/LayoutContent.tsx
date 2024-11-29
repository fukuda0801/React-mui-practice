import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SvgIconProps,
} from '@mui/material';
import { Link } from 'react-router-dom';

interface ChildComponentProps extends SvgIconProps {
  icon: React.ElementType<SvgIconProps>;
  label: string;
  link: string;
}

const LayoutContent: React.FC<ChildComponentProps> = ({
  icon: Icon,
  label,
  link,
}) => {
  return (
    <>
      <List sx={{ cursor: 'pointer' }}>
        <ListItem disablePadding>
          <ListItemButton component={Link} to={link}>
            <ListItemIcon>
              <Icon />
            </ListItemIcon>
            <ListItemText primary={label} />
          </ListItemButton>
        </ListItem>
      </List>
    </>
  );
};

export default LayoutContent;
