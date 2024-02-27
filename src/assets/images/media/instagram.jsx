import * as React from "react"
const SvgComponent = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={23}
        height={23}
        fill="none"
        {...props}
    >
        <g filter="url(#a)">
            <path
                fill="#CA3C3D"
                fillRule="evenodd"
                d="M7.358 1.568c1.076-.05 1.419-.06 4.16-.06 2.74 0 3.083.012 4.158.06 1.075.049 1.809.22 2.45.469a4.963 4.963 0 0 1 1.787 1.165c.514.503.91 1.112 1.163 1.786.25.642.42 1.375.47 2.449.05 1.077.06 1.42.06 4.16s-.012 3.084-.06 4.16c-.049 1.072-.22 1.806-.47 2.448a4.947 4.947 0 0 1-1.163 1.788 4.945 4.945 0 0 1-1.786 1.163c-.642.25-1.376.42-2.45.47-1.076.049-1.42.06-4.16.06s-3.083-.012-4.16-.06c-1.072-.05-1.806-.22-2.448-.47a4.95 4.95 0 0 1-1.788-1.163 4.945 4.945 0 0 1-1.164-1.787c-.248-.642-.419-1.376-.468-2.449-.05-1.077-.06-1.42-.06-4.16s.011-3.084.06-4.159c.048-1.075.22-1.808.468-2.45A4.95 4.95 0 0 1 3.122 3.2a4.945 4.945 0 0 1 1.786-1.164c.642-.249 1.376-.42 2.449-.469Zm8.236 1.816c-1.064-.048-1.383-.058-4.077-.058-2.693 0-3.013.01-4.077.058-.984.045-1.518.21-1.873.348-.47.183-.808.4-1.16.754a3.13 3.13 0 0 0-.755 1.16c-.138.356-.302.89-.347 1.874-.049 1.064-.059 1.383-.059 4.077s.01 3.013.059 4.077c.045.984.209 1.518.347 1.874.162.437.42.834.754 1.16.326.335.723.592 1.16.754.356.138.89.303 1.874.347 1.064.049 1.383.06 4.077.06 2.695 0 3.013-.011 4.077-.06.984-.044 1.518-.209 1.874-.347.47-.184.807-.401 1.16-.754.335-.326.593-.723.754-1.16.139-.356.303-.89.348-1.874.048-1.064.058-1.383.058-4.077s-.01-3.013-.058-4.077c-.045-.984-.21-1.518-.348-1.874-.183-.47-.4-.807-.754-1.16a3.13 3.13 0 0 0-1.16-.754c-.356-.139-.89-.303-1.874-.348ZM10.23 14.707a3.365 3.365 0 1 0 2.422-6.279 3.366 3.366 0 0 0-2.422 6.28ZM7.85 7.93a5.186 5.186 0 1 1 7.334 7.334A5.186 5.186 0 0 1 7.85 7.93Zm10.003-.747A1.226 1.226 0 1 0 16.172 5.4a1.226 1.226 0 0 0 1.681 1.783Z"
                clipRule="evenodd"
            />
        </g>
        <defs>
            <filter
                id="a"
                width={22.013}
                height={26.012}
                x={0.511}
                y={0.59}
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
            >
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy={4} />
                <feGaussianBlur stdDeviation={7.5} />
                <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
                <feBlend in2="shape" result="effect1_innerShadow_590_3047" />
            </filter>
        </defs>
    </svg>
)
export default SvgComponent