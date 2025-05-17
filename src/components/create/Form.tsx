export default function Form() {
  return (
    <form>
      <div className="flex flex-col gap-7">
        <div className="flex flex-col gap-2 lg:gap-3">
          <label
            htmlFor="title"
            className="block text-lg font-bold leading-6 uppercase text-black"
          >
            Title
          </label>
          <input
            type="text"
            placeholder="JSM Academy Masterclasss|"
            className="block w-full outline-0 border-[3px] px-[18px] py-4 lg:py-6 rounded-full bg-white text-black text-base lg:text-lg font-semibold leading-normal placeholder:text-[#7D8087]"
          />
          <p className="text-base font-medium text-red-500 leading-normal">
            Title is required.
          </p>
        </div>
        <div className="flex flex-col gap-2 lg:gap-3">
          <label
            htmlFor="title"
            className="block text-lg font-bold leading-6 uppercase text-black"
          >
            Description
          </label>
          <textarea
            placeholder="JSM Academy Masterclasss|"
            className="block w-full outline-0 border-[3px] px-[18px] py-4 lg:py-6 rounded-[20px] bg-white text-black text-base lg:text-lg font-semibold leading-normal placeholder:text-[#7D8087]"
            rows={4}
          ></textarea>
          <p className="text-base font-medium text-red-500 leading-normal">
            Description is required.
          </p>
        </div>
        <button
          className="bg-primary w-full inline-flex py-4 lg:py-6 px-5 lg:px-8 rounded-full border-[4px] border-solid border-black justify-center items-center gap-3 text-white text-base lg:text-lg font-bold uppercase tracking-[0.5px] 
          cursor-pointer
          disabled:text-gray-100 disabled:cursor-not-allowed disabled:bg-primary/80 disabled:border-black/50"
          disabled
        >
          <span>Submit Your Pitch</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
          >
            <g clipPath="url(#clip0_62001_5063)">
              <path
                d="M15.964 1.18605C16.0004 1.09519 16.0093 0.995646 15.9896 0.89977C15.97 0.803893 15.9226 0.715897 15.8534 0.646691C15.7842 0.577484 15.6962 0.530111 15.6003 0.510443C15.5044 0.490776 15.4049 0.49968 15.314 0.53605L0.767017 6.35505H0.766017L0.314017 6.53505C0.228408 6.5692 0.153903 6.62635 0.098733 6.70018C0.0435631 6.77401 0.00987534 6.86166 0.0013908 6.95344C-0.00709374 7.04522 0.00995519 7.13755 0.0506543 7.22025C0.0913535 7.30295 0.154119 7.37279 0.232017 7.42205L0.642017 7.68205L0.643017 7.68405L5.63802 10.8621L8.81602 15.8571L8.81802 15.8591L9.07802 16.2691C9.12744 16.3466 9.19732 16.4091 9.27995 16.4495C9.36259 16.49 9.45478 16.5068 9.54638 16.4983C9.63798 16.4897 9.72543 16.456 9.79912 16.4009C9.87281 16.3458 9.92987 16.2715 9.96402 16.1861L15.964 1.18605ZM14.131 3.07605L6.63702 10.5701L6.42202 10.2321C6.38262 10.17 6.33004 10.1174 6.26802 10.0781L5.93002 9.86305L13.424 2.36905L14.602 1.89805L14.131 3.07605Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_62001_5063">
                <rect
                  width="16"
                  height="16"
                  fill="white"
                  transform="translate(0 0.5)"
                />
              </clipPath>
            </defs>
          </svg>
          <svg
            className="mr-3 -ml-1 size-5 animate-spin text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </button>
      </div>
    </form>
  );
}
