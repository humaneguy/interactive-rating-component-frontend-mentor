import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { StarIcon } from "@heroicons/react/24/solid";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="grid h-screen place-items-center">
          <div className="bg-gradient-to-r from-blue-500 rounded w-1/2">
            <div className="w-12 bg-gray-100 ml-4 mt-4 rounded-full p-2">
              <div>
                <StarIcon className="text-orange-500" />
              </div>
            </div>
            <div className="ml-4 mt-4">
              <h4 className="text-xl tracking-light">How did we do?</h4>
              <p>
                Please let us know how we did with your support request. All
                feedback is appreciated to help us improve our offering!
              </p>
            </div>
            <div className="space-x-4 ml-4 mt-4">
              <div className="bg-gray-500 w-12 h-12 rounded-full inline-flex items-center justify-center">1</div>
              <div className="bg-gray-500 w-12 h-12 rounded-full inline-flex items-center justify-center">2</div>
              <div className="bg-gray-500 w-12 h-12 rounded-full inline-flex items-center justify-center">3</div>
              <div className="bg-gray-500 w-12 h-12 rounded-full inline-flex items-center justify-center">4</div>
              <div className="bg-gray-500 w-12 h-12 rounded-full inline-flex items-center justify-center">5</div>
            </div>

              <button className="uppercase place-items-center grid block w-full tracking-wide font-bold bg-orange-500 rounded-3xl text-white p-3 flex m-4">Submit</button>
          </div>
        </div>
      </main>
    </>
  );
}
