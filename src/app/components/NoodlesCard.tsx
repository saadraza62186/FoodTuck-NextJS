import Image from "next/image";
const NoodlesCard = ({imageSrc} : any) => {
    return (
      <div className="w-[324px] h-[512px] rounded-lg">
        {/* Image Section */}
        <Image
        width={100}
        height={100}
          src={imageSrc} // Replace with your image path
          alt="Product"
          className="w-[324px] h-[358px] object-cover"
          quality={100}
          priority
        />
  
        {/* Content Section */}
        <div className="p-4">
          <p className="text-lg font-semibold">Bolognese Pasta</p>
          <p className="text-xl font-bold text-[13px] text-[#FF9F0D]">$49.99</p>
        </div>
      </div>
    );
  };
  
  export default NoodlesCard;
  