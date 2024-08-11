// "use client";
// import { useRouter, useParams } from "next/navigation";

// const PropertyPage = () => {
//   const router = useRouter();
//   const params = useParams();
//   return (
//     <div>
//       <div>Property Page {params.id}</div>
//       <button onClick={() => router.replace("/")}>Go Home</button>
//     </div>
//   );
// };

// export default PropertyPage;

const PropertyPage = ({ params }) => {
  return <div>Property Page {params.id}</div>;
};

export default PropertyPage;
