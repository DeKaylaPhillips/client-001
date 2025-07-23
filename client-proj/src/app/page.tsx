import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div>
        'The Janae Edit' is currently under construction as of 07/2025. Thank
        you for your patience.
      </div>
      <div>
        <h1>The Janae Edit</h1>
      </div>
      <div>
        <Image src="/logo.png" width={300} height={300} alt="Company Logo" />
      </div>
    </div>
  );
}
