import Image from "next/image";

interface LabelProps {
  name: string;
  imageSrc: string;  // Renaming 'Image' prop to 'imageSrc' to avoid conflict with 'Image' component
}

const Label = ({ name, imageSrc }: LabelProps) => {
  return (
    <div className="flex items-center p-4 rounded-md gap-4 ml-[40px] mt-[40px]">
      {/* Use the Image component from Next.js */}
      <Image
        src={imageSrc}   // Ensure this is the path or URL to the image
        alt={name}       // Use the name as alt text
        width={40}        // Set a width for the image
        height={80}       // Set a height for the image
        className="object-contain mb-2"
      />
      <h2 className="text-lg font-bold">{name}</h2>
    </div>
  );
};

export default Label;
