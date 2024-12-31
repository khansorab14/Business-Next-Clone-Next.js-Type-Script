// import Image from "next/image";

// interface SliderImageProps {
//   images: { src: string; alt: string }[];
//   activeIndex: number;
//   imageStyle?: React.CSSProperties;
// }

// export const SliderImage: React.FC<SliderImageProps> = ({
//   images,
//   activeIndex,
//   imageStyle,
// }) => {
//   return (
//     <div className="h-full w-full  flex justify-center items-center relative">
//       {images.map((image, index) => (
//         <Image
//           key={index}
//           src={image.src}
//           alt={image.alt}
//           style={{
//             ...imageStyle,
//             position: "absolute", // Positions the active image to center
//             top: 0,
//             left: 0,
//             width: "100%",
//             height: "100%",
//             objectFit: "contain", // Ensures the image covers the entire area
//             display: activeIndex === index ? "block" : "none",
//           }}
//         />
//       ))}
//     </div>
//   );
// };
