import { Drawer, List, ListItem, ListItemText } from '@mui/material';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const Cart: React.FC<Props> = ({ isOpen, onClose }) => {
  return (
    <Drawer anchor="right" open={isOpen} onClose={onClose}>
      <div className="bg-white h-full w-96">
        <List>
          <ListItem>
            <ListItemText primary="Item 1" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Item 2" />
          </ListItem>
        </List>
      </div>
    </Drawer>
  );
};

export default Cart;