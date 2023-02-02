import Image from "next/future/image";

const Guitars = ( { guitar } ) => {

  const {name, description, price, url, image} = guitar;

  
  return (
    <p>{name}</p>
  )
}

export default Guitars