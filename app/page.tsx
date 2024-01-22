import Image from "next/image";

export default function Home() {
  return (
    <main className="flex w-full min-h-screen flex-col items-center justify-between p-24">
      <div className="flex-1 w-full space-y-6 overflow-y-auto rounded-xl bg-slate-200 p-4 text-sm leading-6 text-slate-900 shadow-sm dark:bg-slate-900 dark:text-slate-300 sm:text-base sm:leading-7">
        <div className="flex items-start">
          <img
            className="mr-2 h-8 w-8 rounded-full"
            src="https://dummyimage.com/128x128/363536/ffffff&text=J"
          />
          <div className="flex rounded-b-xl rounded-tr-xl bg-slate-50 p-4 dark:bg-slate-800 sm:max-w-md md:max-w-2xl">
            <p>Explain quantum computing in simple terms</p>
          </div>
        </div>
        <div className="flex flex-row-reverse items-start">
          <img
            className="ml-2 h-8 w-8 rounded-full"
            src="https://dummyimage.com/128x128/354ea1/ffffff&text=G"
          />

          <div className="flex min-h-[85px] rounded-b-xl rounded-tl-xl bg-slate-50 p-4 dark:bg-slate-800 sm:min-h-0 sm:max-w-md md:max-w-2xl">
            <p>
              Certainly! Quantum computing is a new type of computing that
              relies on the principles of quantum physics. Traditional
              computers, like the one you might be using right now, use bits to
              store and process information. These bits can represent either a 0
              or a 1. In contrast, quantum computers use quantum bits, or
              qubits.
              <br />
              <br />
              Unlike bits, qubits can represent not only a 0 or a 1 but also a
              superposition of both states simultaneously. This means that a
              qubit can be in multiple states at once, which allows quantum
              computers to perform certain calculations much faster and more
              efficiently
            </p>
          </div>
        </div>
        <div className="flex items-start">
          <img
            className="mr-2 h-8 w-8 rounded-full"
            src="https://dummyimage.com/128x128/363536/ffffff&text=J"
          />
          <div className="flex rounded-b-xl rounded-tr-xl bg-slate-50 p-4 dark:bg-slate-800 sm:max-w-md md:max-w-2xl">
            <p>What are three great applications of quantum computing?</p>
          </div>
        </div>
        <div className="flex flex-row-reverse items-start">
          <img
            className="ml-2 h-8 w-8 rounded-full"
            src="https://dummyimage.com/128x128/354ea1/ffffff&text=G"
          />
          <div className="flex min-h-[85px] rounded-b-xl rounded-tl-xl bg-slate-50 p-4 dark:bg-slate-800 sm:min-h-0 sm:max-w-md md:max-w-2xl">
            <p>
              Three great applications of quantum computing are: Optimization of
              complex problems, Drug Discovery and Cryptography.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
