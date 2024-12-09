import Image from "next/image";
const Broast = ({name,imageSrc,price} : any) => {
    return (
      <div className="w-[300px] h-[67px] flex rounded-lg overflow-hidden shadow-md">
        {/* Image Section */}
        <Image
        width={100}
        height ={100}
          src={imageSrc} // Replace with your image path
          alt="Pizza"
          className="h-full w-[67px] object-cover"
        />
        {/* Content Section */}
        <div className="flex flex-col justify-center ml-3 mb-4">
          <p className="text-sm font-semibold">{name}</p>
          <p className="font-medium text-white text-xs">{price}</p>
        </div>
      </div>
    );
  };
  
  export default Broast;
  