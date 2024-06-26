import React from "react";
import "./admin-navbar.css";
import { Link, NavLink } from "react-router-dom";

const AdminNavbar = () => {
  return (
    <div className="navbar-container">
      <div className="nav-left">
        <Link to={"/admin-home"}>
          {" "}
          <div className="home-svg">
            <svg
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#ffffff"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.6139 7.45047C16.6234 7.40706 16.6336 7.35846 16.6455 7.30183C16.6604 7.23105 16.6779 7.14772 16.7001 7.04627C16.8036 6.57247 16.9736 5.87993 17.3256 5.20856C17.6836 4.52572 18.2504 3.82618 19.1573 3.39922C20.063 2.97285 21.1863 2.87562 22.551 3.16758C22.8638 3.2345 23.2807 3.30198 23.7694 3.3811C25.2713 3.62423 27.452 3.97725 29.3789 4.76169C32.0293 5.84061 34.5566 7.85483 34.8312 11.7402C35.0461 14.7816 35.0587 16.4423 34.8521 17.6094C34.6753 18.6077 34.3261 19.2568 33.9503 19.9553C33.867 20.1102 33.7823 20.2676 33.6979 20.4317C33.632 20.56 33.4201 20.9004 32.9595 20.9836C32.5118 21.0645 32.2001 20.8329 32.1013 20.7491C31.9086 20.5857 31.8031 20.3747 31.7694 20.3073L31.7672 20.3029C31.6666 20.1021 31.5676 19.8291 31.4772 19.5566C31.2888 18.988 31.0676 18.2009 30.8596 17.4203C30.6503 16.6344 30.4493 15.8352 30.3008 15.2337C30.2855 15.1715 30.2707 15.1114 30.2565 15.0536C30.2298 15.0544 30.2025 15.0552 30.1747 15.0559C29.5601 15.0707 28.6884 15.0449 27.6245 14.8877C25.5597 14.5825 22.7769 13.783 19.7563 11.8352C19.5007 11.9045 19.1619 12.1366 18.749 12.7109C18.2373 13.4227 17.7809 14.4375 17.3979 15.5301C17.0197 16.6093 16.7341 17.7026 16.5425 18.5317C16.4471 18.9447 16.3758 19.2887 16.3285 19.5282C16.3049 19.6478 16.2874 19.7412 16.2759 19.8038L16.2632 19.8741L16.2602 19.8908L16.2596 19.8944L15.8022 22.5541L14.416 20.2389L15.274 19.7252C14.416 20.2389 14.4158 20.2385 14.4155 20.238L14.4148 20.2369L14.4133 20.2343L14.4091 20.2272L14.3965 20.2057C14.3864 20.1881 14.3727 20.1641 14.356 20.1339C14.3225 20.0735 14.2767 19.9883 14.2221 19.8804C14.113 19.6647 13.9681 19.3569 13.8164 18.9734C13.5142 18.2097 13.1778 17.1284 13.0515 15.8676C12.7999 13.3542 13.3963 10.1599 16.6139 7.45047ZM15.1019 16.1404C15.078 15.9866 15.0577 15.8291 15.0416 15.6684C14.8408 13.6625 15.2883 11.1243 18.0096 8.89099C18.2637 8.71764 18.3741 8.47942 18.4002 8.42318C18.401 8.42149 18.4017 8.41997 18.4023 8.41862C18.4617 8.29136 18.4983 8.16165 18.5205 8.07644C18.5513 7.95817 18.5849 7.79875 18.6165 7.64915C18.6294 7.58763 18.6421 7.52776 18.654 7.4731C18.7493 7.03706 18.8745 6.56148 19.0969 6.13732C19.3133 5.72464 19.6003 5.40124 20.0092 5.20874C20.4193 5.01565 21.0742 4.89689 22.1326 5.12332C22.588 5.22075 23.1104 5.30543 23.6779 5.3974C25.1529 5.63648 26.9316 5.92476 28.6248 6.61408C30.8732 7.52935 32.6351 9.03612 32.8361 11.8812C33.0519 14.9342 33.0403 16.3592 32.8847 17.2494C32.8539 17.136 32.8231 17.0212 32.7923 16.9056C32.5873 16.1359 32.3894 15.3496 32.2425 14.7544C32.1692 14.4572 32.1087 14.2083 32.0666 14.0339L32.018 13.8316L32.0013 13.7619L31.0281 13.9919L32.0011 13.7609L31.7864 12.8565L30.8725 13.0041C30.8726 13.0041 30.8732 13.004 30.8725 13.0041C30.872 13.0041 30.8703 13.0044 30.8692 13.0045L30.8416 13.0083C30.8139 13.0119 30.768 13.0174 30.7048 13.0235C30.5784 13.0357 30.383 13.0502 30.1264 13.0564C29.613 13.0689 28.8561 13.048 27.9169 12.9092C26.0415 12.632 23.4331 11.884 20.5761 9.9813L20.3507 9.83119L20.0804 9.81532C18.7552 9.73753 17.7773 10.6363 17.1251 11.5435C16.4482 12.4851 15.9166 13.7099 15.5105 14.8686C15.3601 15.2977 15.2239 15.7265 15.1019 16.1404ZM33.5554 19.4072C33.5696 19.4355 33.5699 19.4305 33.5549 19.4061C33.5551 19.4065 33.5553 19.4069 33.5554 19.4072Z"
                  fill="#f8f7f7"
                ></path>{" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18.1254 28.6282C17.8971 28.1604 17.3814 27.9076 16.8786 28.0312C11.4745 29.3592 6 32.0671 6 36.1407V41V43H8H40H42V41V36.1407C42 32.0671 36.5255 29.3592 31.1214 28.0312C30.6186 27.9076 30.1029 28.1604 29.8746 28.6282L25.8105 28.6282C24.9218 28.6284 24.4693 28.6284 24.0248 28.6284C23.5637 28.6283 23.1112 28.6283 22.1893 28.6285L18.1254 28.6282ZM25.8109 30.6282C25.8107 30.6282 25.8106 30.6282 25.8105 30.6282C24.9162 30.6284 24.466 30.6284 24.024 30.6284C23.5658 30.6283 23.1162 30.6283 22.1898 30.6285L22.1892 30.6285L18.1252 30.6282L16.8758 30.6281L16.6456 30.1564C14.3233 30.7829 12.1328 31.655 10.5162 32.7244C8.69262 33.9307 8 35.0995 8 36.1407V41H40V36.1407C40 35.0995 39.3074 33.9307 37.4838 32.7244C35.8672 31.655 33.6767 30.7829 31.3544 30.1564L31.1242 30.6282L29.8746 30.6282L25.8109 30.6282Z"
                  fill="#f8f7f7"
                ></path>{" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16 35.9038C16.5384 35.9038 17 35.4601 17 34.8816C17 34.3031 16.5384 33.8594 16 33.8594C15.4616 33.8594 15 34.3031 15 34.8816C15 35.4601 15.4616 35.9038 16 35.9038ZM16 37.9038C17.6569 37.9038 19 36.5507 19 34.8816C19 33.2125 17.6569 31.8594 16 31.8594C14.3431 31.8594 13 33.2125 13 34.8816C13 36.5507 14.3431 37.9038 16 37.9038Z"
                  fill="#f8f7f7"
                ></path>{" "}
                <path
                  d="M15.6354 29.6117C15.4178 30.3461 15.4391 31.25 15.8901 32.3606L14.0371 33.1131C13.5935 32.0208 13.4293 30.9763 13.5293 29.9999C13.5627 29.6732 13.6258 29.3541 13.7178 29.0435L15.6354 29.6117Z"
                  fill="#f8f7f7"
                ></path>{" "}
                <path
                  d="M32.5348 32.496L34.476 32.9777C34.7266 31.9679 34.7789 31.0189 34.65 30.1395L32.4114 29.4784C32.743 30.284 32.8379 31.2747 32.5348 32.496Z"
                  fill="#f8f7f7"
                ></path>{" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M31.4268 32.225C31.6053 32.0795 31.8285 32 32.0588 32H34.9412C35.1715 32 35.3947 32.0795 35.5732 32.225L37.632 33.904C37.8649 34.094 38 34.3785 38 34.679V39.0444C38 39.5967 37.5523 40.0444 37 40.0444H34.9412V38.0444H36V35.1539L34.5851 34H32.4149L31 35.1539V38.0444H32.0588V40.0444H30C29.4477 40.0444 29 39.5967 29 39.0444V34.679C29 34.3785 29.1351 34.094 29.368 33.904L31.4268 32.225Z"
                  fill="#f8f7f7"
                ></path>{" "}
              </g>
            </svg>
          </div>
        </Link>
      <Link to={"/admin/doctor-requests"}>  <div className="request-svg">
          <svg
            fill="#f2e8e8"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#f2e8e8"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g>
                {" "}
                <circle cx="41.37" cy="26.44" r="6.32"></circle>{" "}
                <circle cx="58.63" cy="26.43" r="6.32"></circle>{" "}
                <circle cx="28.4" cy="41.16" r="8"></circle>{" "}
                <circle cx="71.81" cy="41.16" r="8"></circle>{" "}
                <circle cx="50.11" cy="45.73" r="8"></circle>{" "}
                <path d="m59.14 80a4.18 4.18 0 0 0 3.2-1.37 4.57 4.57 0 0 0 1.37-3.2v-10.28a6.88 6.88 0 0 0 -6.86-6.86h-13.7a6.88 6.88 0 0 0 -6.86 6.86v10.28a4.68 4.68 0 0 0 4.57 4.57z"></path>{" "}
                <path d="m29.32 75.43v-10.28a13.41 13.41 0 0 1 3.89-9.48 1.18 1.18 0 0 0 0-1.67 1.15 1.15 0 0 0 -.77-.33h-11a6.88 6.88 0 0 0 -6.86 6.86v10.33a4.68 4.68 0 0 0 4.57 4.57z"></path>{" "}
                <path d="m80.85 75.43a4.18 4.18 0 0 0 3.2-1.37 4.57 4.57 0 0 0 1.37-3.2v-10.28a6.88 6.88 0 0 0 -6.86-6.86h-11a1.14 1.14 0 0 0 -.8 2 13.68 13.68 0 0 1 3.89 9.48v10.23z"></path>{" "}
              </g>{" "}
            </g>
          </svg>
        </div></Link>
    <Link to={"/admin/add-medicine"}>    <div className="add-medicine-svg">
          <svg
            width=""
            height=""
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#000000"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="#edeef3"
                stroke-width="2.4"
              ></circle>{" "}
              <path
                d="M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15"
                stroke="#edeef3"
                stroke-width="2.4"
                stroke-linecap="round"
              ></path>{" "}
            </g>
          </svg>
        </div></Link>
    <Link to={"/admin/medicine-orders"}>    <div className="orders-svg">
          <svg
            width=""
            height=""
            viewBox="0 0 1024 1024"
            fill="#ffffff"
            className="icon"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#ffffff"
            stroke-width="39.408"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M53.6 1023.2c-6.4 0-12.8-2.4-17.6-8-4.8-4.8-7.2-11.2-6.4-18.4L80 222.4c0.8-12.8 11.2-22.4 24-22.4h211.2v-3.2c0-52.8 20.8-101.6 57.6-139.2C410.4 21.6 459.2 0.8 512 0.8c108 0 196.8 88 196.8 196.8 0 0.8-0.8 1.6-0.8 2.4v0.8H920c12.8 0 23.2 9.6 24 22.4l49.6 768.8c0.8 2.4 0.8 4 0.8 6.4-0.8 13.6-11.2 24.8-24.8 24.8H53.6z m25.6-48H944l-46.4-726.4H708v57.6h0.8c12.8 8.8 20 21.6 20 36 0 24.8-20 44.8-44.8 44.8s-44.8-20-44.8-44.8c0-14.4 7.2-27.2 20-36h0.8v-57.6H363.2v57.6h0.8c12.8 8.8 20 21.6 20 36 0 24.8-20 44.8-44.8 44.8-24.8 0-44.8-20-44.8-44.8 0-14.4 7.2-27.2 20-36h0.8v-57.6H125.6l-46.4 726.4zM512 49.6c-81.6 0-148.8 66.4-148.8 148.8v3.2h298.4l-0.8-1.6v-1.6c0-82.4-67.2-148.8-148.8-148.8z"
                fill=""
              ></path>
            </g>
          </svg>
        </div></Link>
      </div>
      <div className="nav-right">
        <div className="logout-svg">
          <svg
            viewBox="0 -0.5 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#f2eded"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M11.75 9.874C11.75 10.2882 12.0858 10.624 12.5 10.624C12.9142 10.624 13.25 10.2882 13.25 9.874H11.75ZM13.25 4C13.25 3.58579 12.9142 3.25 12.5 3.25C12.0858 3.25 11.75 3.58579 11.75 4H13.25ZM9.81082 6.66156C10.1878 6.48991 10.3542 6.04515 10.1826 5.66818C10.0109 5.29121 9.56615 5.12478 9.18918 5.29644L9.81082 6.66156ZM5.5 12.16L4.7499 12.1561L4.75005 12.1687L5.5 12.16ZM12.5 19L12.5086 18.25C12.5029 18.25 12.4971 18.25 12.4914 18.25L12.5 19ZM19.5 12.16L20.2501 12.1687L20.25 12.1561L19.5 12.16ZM15.8108 5.29644C15.4338 5.12478 14.9891 5.29121 14.8174 5.66818C14.6458 6.04515 14.8122 6.48991 15.1892 6.66156L15.8108 5.29644ZM13.25 9.874V4H11.75V9.874H13.25ZM9.18918 5.29644C6.49843 6.52171 4.7655 9.19951 4.75001 12.1561L6.24999 12.1639C6.26242 9.79237 7.65246 7.6444 9.81082 6.66156L9.18918 5.29644ZM4.75005 12.1687C4.79935 16.4046 8.27278 19.7986 12.5086 19.75L12.4914 18.25C9.08384 18.2892 6.28961 15.5588 6.24995 12.1513L4.75005 12.1687ZM12.4914 19.75C16.7272 19.7986 20.2007 16.4046 20.2499 12.1687L18.7501 12.1513C18.7104 15.5588 15.9162 18.2892 12.5086 18.25L12.4914 19.75ZM20.25 12.1561C20.2345 9.19951 18.5016 6.52171 15.8108 5.29644L15.1892 6.66156C17.3475 7.6444 18.7376 9.79237 18.75 12.1639L20.25 12.1561Z"
                fill="#efe6e6"
              ></path>{" "}
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default AdminNavbar;
