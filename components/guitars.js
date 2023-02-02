import Image from "next/image";

const Guitars = ( { guitar } ) => {

  const {name, description, price, url, image } = guitar;
  const { imageGuitar } = image.data.attributes.formats.medium.url

  
  return (
    <div>
      <p>{name}</p>
      <Image src={image.data.attributes.formats.medium.url} width={600} height={400} alt={`guitar ${name} image`}/>

    </div>
  )
}

export default Guitars