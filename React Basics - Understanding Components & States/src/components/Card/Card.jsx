export function Card({ content, heading, btnTitle }) {
  return (
    <>
      <div class="col-lg-4">
        <svg
          aria-label="Placeholder"
          class="bd-placeholder-img rounded-circle"
          height="140"
          preserveAspectRatio="xMidYMid slice"
          role="img"
          width="140"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Placeholder</title>
          <rect
            width="100%"
            height="100%"
            fill="var(--bs-secondary-color)"
          ></rect>
        </svg>
        <h2 class="fw-normal">{heading}</h2>
        <p>{content}</p>
        <p>
          <a class="btn btn-secondary" href="#">
            {btnTitle}
          </a>
        </p>
      </div>
    </>
  );
}
