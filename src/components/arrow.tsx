export default function Arrow(props: {
  left?: boolean
  onClick: (e: any) => void
}) {
  return props.left === true ? (
    <svg
      onClick={props.onClick}
      className="arrow arrow--left"
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.0607 7.93934C30.4749 7.35355 29.5251 7.35355 28.9393 7.93934L13.9393 22.9393C13.3536 23.5251 13.3536 24.4749 13.9393 25.0607L28.9393 40.0607C29.5251 40.6464 30.4749 40.6464 31.0607 40.0607C31.6464 39.4749 31.6464 38.5251 31.0607 37.9393L17.1213 24L31.0607 10.0607C31.6464 9.47487 31.6464 8.52513 31.0607 7.93934Z"
        fill="#ffffff"
      />
    </svg>
  ) : (
    <svg
      onClick={props.onClick}
      className="arrow arrow--right"
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.9393 7.93934C17.5251 7.35355 18.4749 7.35355 19.0607 7.93934L34.0607 22.9393C34.6464 23.5251 34.6464 24.4749 34.0607 25.0607L19.0607 40.0607C18.4749 40.6464 17.5251 40.6464 16.9393 40.0607C16.3536 39.4749 16.3536 38.5251 16.9393 37.9393L30.8787 24L16.9393 10.0607C16.3536 9.47487 16.3536 8.52513 16.9393 7.93934Z"
        fill="#ffffff"
      />
    </svg>
  )
}
