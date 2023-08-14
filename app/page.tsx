import Script from "next/script"
import Image from "next/image"
export default function Home() {
  return (
    <div>
      <metadata>
        <title>helllo form no</title>
      </metadata> 
      {/* <Script src="./app.js" strategy="lazyOnload"></Script> */}
        <div className="container mx-5">
            <h1 className="underline text-5xl">Blog Website fdsfsd fdgf</h1>
        </div>
        <Image src={"/1.jpg"} width={500} height={300} />
    </div>
  )
}
