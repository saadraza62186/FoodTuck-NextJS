import Image from "next/image";
const RecipieCard = ({name,imageSrc,price} : any) => {
    return (
      <div className="w-[248px] h-[67px] flex border rounded-lg overflow-hidden shadow-md">
        {/* Image Section */}
        <Image
        width={100}
        height ={100}
          src={imageSrc} // Replace with your image path
          alt="Pizza"
          className="h-full w-[67px] object-cover"
        />
  
        {/* Content Section */}
        <div className="flex flex-col justify-center ml-3">
          <p className="text-sm font-semibold">{name}</p>
          <p className="text-xs text-gray-500">⭐ 4.5</p>
          <p className="text-sm font-medium text-green-600">{price}</p>
        </div>
      </div>
    );
  };
  
  export default RecipieCard;
  