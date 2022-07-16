import Image from "next/image";

const ReadSingleItem=(props)=>{
console.log(props)
    return(
       <div>
         <h1>個別の記事ページ</h1>
        <Image src={props.singleItem.image} width="640px" height="427px" />
        <h2>{props.singleItem.price}</h2>
        <h3>{props.singleItem.title}</h3>
        <p>{props.singleItem.description}</p>
       </div>
    )
}

export const getServerSideProps = async (context) => {
 
    const response = await fetch(`http://localhost:3000/api/item/${context.query.id}`);
    const singleitem = await response.json();
    return {
      props: singleitem,
    };
  };
  

export default ReadSingleItem