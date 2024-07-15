import { ReactNode } from "react";
import { X } from "lucide-react";
import { useAppSelector, useAppDispatch } from "@/store/store";
import { hideFrame } from "@/store/feature/FrameSlice";

interface FrameProps {
  children: ReactNode;
}

export default function Frame({ children }: FrameProps) {
  const FrameState = useAppSelector((state) => state.frame.value);
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(hideFrame());
  };

  return (
    <div className={`fixed inset-0 overflow-hidden transition-transform z-30 duration-300 transform ${FrameState ? 'translate-x-0' : 'translate-x-[100%]'}`}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
          <div className="pointer-events-auto flex w-screen max-w-md flex-col bg-white shadow-xl">
            <div className="flex-shrink-0 p-4 bg-white shadow">
              <div className="flex justify-between">
                <button
                  type="button"
                  className="relative -m-1 p-2 text-gray-400 hover:text-gray-500"
                  onClick={handleClose}
                >
                  <span className="sr-only">Close panel</span>
                  <X aria-hidden="true" className="h-6 w-6" />
                </button>
              </div>
            </div>
            <div className="flex-1 overflow-hidden px-4 py-6 sm:px-6">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
