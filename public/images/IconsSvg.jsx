

export const IconMoon = () => (
    <svg viewBox="0 0 24 24" color="#8abbef" fill="currentColor" width="24" height="24" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <path strokeWidth="2" stroke="currentColor" strokeLinejoin="round" fill="#365068" d="M21.4053 15.4053C20.3424 15.7901 19.1957 16 18 16 12.4772 16 8 11.5228 8 6 8 4.8043 8.2099 3.6576 8.5947 2.5947 4.7484 3.9876 2 7.6729 2 12c0 5.5228 4.4772 10 10 10 4.3271 0 8.0124-2.7484 9.4053-6.5947z" />
    </svg>
);

export const IconSun = () => (
    <svg viewBox="0 0 24 24" color="#8abbef" strokeWidth="2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" fill="none" width="24" height="24" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <circle fill="#365068" cx="12" cy="12" r="5" />
        <line x1="12" x2="12" y1="1" y2="3" />
        <line transform="rotate(45 12 12)" x1="12" x2="12" y1="1" y2="3" />
        <line transform="rotate(90 12 12)" x1="12" x2="12" y1="1" y2="3" />
        <line transform="rotate(135 12 12)" x1="12" x2="12" y1="1" y2="3" />
        <line transform="rotate(180 12 12)" x1="12" x2="12" y1="1" y2="3" />
        <line transform="rotate(-135 12 12)" x1="12" x2="12" y1="1" y2="3" />
        <line transform="rotate(-90 12 12)" x1="12" x2="12" y1="1" y2="3" />
        <line transform="rotate(-45 12 12)" x1="12" x2="12" y1="1" y2="3" />
    </svg>
);


export const IconSearch = () => {
    return (
        <svg
            viewBox="0 0 1024 1024"
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M622.4 682.453333l60.330667-60.309333 256.405333 256.405333-60.330667 60.309334z" fill="#616161" />
            <path d="M426.666667 426.666667m-341.333334 0a341.333333 341.333333 0 1 0 682.666667 0 341.333333 341.333333 0 1 0-682.666667 0Z" fill="#616161" />
            <path d="M692.266667 753.92l60.309333-60.330667 185.514667 185.514667-60.330667 60.330667z" fill="#37474F" />
            <path d="M426.666667 426.666667m-277.333334 0a277.333333 277.333333 0 1 0 554.666667 0 277.333333 277.333333 0 1 0-554.666667 0Z" fill="#64B5F6" />
            <path d="M573.866667 302.933333c-36.266667-42.666667-89.6-68.266667-147.2-68.266666s-110.933333 25.6-147.2 68.266666c-8.533333 8.533333-6.4 23.466667 2.133333 29.866667 8.533333 8.533333 23.466667 6.4 29.866667-2.133333C341.333333 296.533333 381.866667 277.333333 426.666667 277.333333s85.333333 19.2 115.2 53.333334c4.266667 4.266667 10.666667 8.533333 17.066666 8.533333 4.266667 0 10.666667-2.133333 12.8-4.266667 8.533333-8.533333 8.533333-23.466667 2.133334-32z" fill="#BBDEFB" />
        </svg>
    );
};

export const IconFilter = ({ open }) => (
    <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`size-8 transition-transform duration-200 ${open ? "rotate-x-180" : "rotate-0"}`}
    >
        <polyline points="6 9 12 15 18 9" />
    </svg>
);
// style = {{
//     transform: open ? "rotate(180deg)" : "rotate(0deg)",
//         transition: "transform 0.25s ease",
//         }}

