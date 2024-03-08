import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="h-screen w-screen flex justify-center items-center">
      <div className="h-96 w-56 flex flex-col gap-4 m-10 justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-3d-cube-sphere"
          width="100"
          height="100"
          viewBox="0 0 24 24"
          stroke-width="1"
          stroke="#6f32be"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M6 17.6l-2 -1.1v-2.5" />
          <path d="M4 10v-2.5l2 -1.1" />
          <path d="M10 4.1l2 -1.1l2 1.1" />
          <path d="M18 6.4l2 1.1v2.5" />
          <path d="M20 14v2.5l-2 1.12" />
          <path d="M14 19.9l-2 1.1l-2 -1.1" />
          <path d="M12 12l2 -1.1" />
          <path d="M18 8.6l2 -1.1" />
          <path d="M12 12l0 2.5" />
          <path d="M12 18.5l0 2.5" />
          <path d="M12 12l-2 -1.12" />
          <path d="M6 8.6l-2 -1.1" />
        </svg>
        <form className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-sm text-slate-600 font-medium"
            >
              E-mail:
            </label>
            <input
              type="email"
              placeholder=" admin@clinicals.com"
              className="w-full rounded-md border-2 "
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="password"
              className="text-sm text-slate-600 font-medium"
            >
              Password:
            </ label>
            <input
              type="password"
              placeholder=" **********"
              className="w-full rounded-md border-2"
            />
          </div>

          <Button className="w-full text-slate-200 font-medium h-7 bg-violet-700">
            Login
          </Button>
        </form>
      </div>
    </main>
  );
}
