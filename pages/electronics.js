import Image from "next/image";

export default function ElectronicsPage() {
  return (
    <div>
      {["1", "2", "3", "4"].map((path) => (
        <div key={path}>
          {/* <img
            src={`/images/${path}.jpg`}
            height={300}
            width={300}
            alt={"electronics"}
          /> */}
          <Image
            src={`/images/${path}.jpg`}
            height={300}
            width={300}
            alt={"electronics"}
          />
        </div>
      ))}
    </div>
  );
}
