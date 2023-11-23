import { Paper } from "@mui/material";
import Carousel from "react-material-ui-carousel";

const CustomCarousel = () => {
  var items = [
    {
      img: "asset/images/hero_bg_1.png",
    },
    {
      img: "asset/images/hero_bg_2.png",
    },
  ];
  return (
    <div className=" flex justify-center">
      <Carousel className="w-full" navButtonsAlwaysVisible={true}>
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </div>
  );
};

type ItemProps = {
  item: {
    img: string;
  };
};

function Item(props: ItemProps) {
  return (
    <Paper>
      <img className="h-[600px] w-full" src={props.item.img} />
    </Paper>
  );
}
export default CustomCarousel;
