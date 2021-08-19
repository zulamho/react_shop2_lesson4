import React from "react";
const arr = [
  {
    id: 1,
    name: "MacBook",
    price: 97000  ,
    discount: 100000,
    image: "https://items.s1.citilink.ru/1390439_v01_b.jpg",
  },
  {
    id: 2,
    name: "Galaxy",
    price: 35999  ,
    discount: "",
    image: "https://images.samsung.com/is/image/samsung/p6pim/ru/galaxy-a52/gallery/ru-galaxy-a72-a725-sm-a725fzkhser-399168100?$720_576_PNG$",
  },
  {
    id: 3,
    name: "Скутер",
    price: 58950  ,
    discount: 65500,
    image: "https://images.ru.prom.st/50270940_skuter-racer-rc50qt-3.jpg",
  },
  {
    id: 4,
    name: "Монитор Samsung",
    price: 12000  ,
    discount: 65500,
    image: "https://images.samsung.com/is/image/samsung/ru-sr35-ls27r350fhixci-frontblack-226281339?$720_576_PNG$",
  },
  {
    id: 5,
    name: "Респераторная маска",
    price: 500  ,
    discount: "",
    image: "https://xn--80abwmlfh7b4c.xn--p1ai/wa-data/public/shop/products/00/webp/81/43/4381/images/5161/5161.970.webp",
  },
  {
    id: 6,
    name: "Стиральная машина",
    price: 75000  ,
    discount: 100000,
    image: "https://img.mvideo.ru/Pdb/20066235b.jpg",
  },
  {
    id: 7,
    name: "Белый холодильник",
    price: 21550  ,
    discount: 43100,
    image: "https://images.samsung.com/is/image/samsung/p6pim/ru/galaxy-a52/gallery/ru-galaxy-a72-a725-sm-a725fzkhser-399168100?$720_576_PNG$",
  },
  {
    id: 8,
    name: "Колонка",
    price: 3000  ,
    discount: "",
    image: "http://kickgoods.ru/upload/iblock/a5c/jbl_go_2_plus_portable_speaker_front_1.jpg",
  },
  {
    id: 9,
    name: "Наушники",
    price: 1275  ,
    discount: 1500,
    image: "https://audeze.su/wp-content/uploads/2018/05/Audeze-Mobius-Product-Shots-Oct-2018-Carbon3Q_Mic_2000x.jpg",
  }
];

function Products(props) {
  return (
    <div className="productsBlocks">
      {arr.map((item) => {
        return (
          <div className="products-block">
      <div className="imgBlock">
        <img src={item.image} alt="" className="imgProduct" />
      </div>
      <div className="infoBlock">
        <div className="discount">
          <h3>
            <b>{item.price}</b>
          </h3>
        </div>
        <div className="price">
          <strike>{item.discount}</strike>
        </div>
      </div>
      <h3 className = "nameProduct">{item.name}</h3>
      <button>Купить</button>
    </div>
        )
      })}
    </div>
  );
}

export default Products;
