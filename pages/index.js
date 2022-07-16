import LINK from "next/link";
import Image from "next/image";

const ReadAllItems = (props) => {
  
  return (
    <div>
      <h1>こんにちは！</h1>
      {props.allItems.map((item) => (
   
          <LINK href={`/item/${item._id}`} key={item._id}>
            <a>
              <Image src={item.image} width="640px" height="427px" />
              <h2>{item.price}</h2>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </a>
          </LINK>
   
      ))}
    </div>
  );
};

//
export const getServerSideProps = async () => {
  const response = await fetch("http://localhost:3000/api/item/readall");
  const allitems = await response.json();
  return {
    props: allitems,
  };
};

export default ReadAllItems;
