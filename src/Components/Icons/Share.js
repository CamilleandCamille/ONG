import React from "react";

function Share({ size, color }) {
  const defaultColor = "currentColor";
  const fillColor = color || defaultColor;

  return (
    <svg
      width={size}
      height={size}
      fill={fillColor}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.5903 9.66188C23.4401 8.89754 23.208 8.16051 22.9077 7.45076C22.6074 6.74103 22.2388 6.07223 21.8157 5.44438C21.3925 4.81653 20.9147 4.24328 20.3824 3.71097C19.85 3.17867 19.263 2.68731 18.6351 2.2642C18.0072 1.84108 17.3246 1.48621 16.6285 1.18594C15.9186 0.885658 15.1815 0.65363 14.4171 0.503492C13.6526 0.339706 12.8473 0.257812 12.0555 0.257812H12.0419C11.2502 0.27146 10.4448 0.339706 9.66669 0.503492C8.91591 0.667278 8.16512 0.885658 7.4553 1.18594C6.75912 1.48621 6.09024 1.85473 5.44866 2.27784C4.83439 2.70096 4.24742 3.17867 3.70139 3.71097C3.16902 4.24328 2.69125 4.83018 2.26809 5.44438C1.84492 6.07223 1.47635 6.75467 1.17604 7.43711C0.87573 8.14685 0.64367 8.89754 0.493513 9.64823C0.32971 10.4126 0.247803 11.2179 0.247803 12.0095C0.247803 12.8148 0.32971 13.62 0.493513 14.398C0.64367 15.1624 0.875731 15.9131 1.18969 16.6228C1.47635 17.3189 1.84492 18.0013 2.28174 18.6292C2.7049 19.257 3.19632 19.8439 3.72869 20.3762C4.26107 20.9085 4.84804 21.3862 5.47597 21.8094C6.11754 22.2325 6.78642 22.601 7.49625 22.8876C8.20608 23.1879 8.95686 23.4199 9.72129 23.5701C10.4857 23.7202 11.2775 23.8021 12.0828 23.8021C12.0828 23.8021 12.0965 23.8021 12.1101 23.8021C12.9019 23.8021 13.6936 23.7202 14.4717 23.5564C15.2225 23.4063 15.9596 23.1742 16.6694 22.8603C17.3656 22.5737 18.0345 22.2052 18.6624 21.7821C19.2903 21.359 19.8773 20.8676 20.396 20.3353C20.9284 19.803 21.4198 19.2161 21.8293 18.5882C22.2661 17.9604 22.6211 17.2916 22.9214 16.5955C23.2217 15.8858 23.4537 15.1487 23.6039 14.398C23.7541 13.62 23.836 12.8284 23.836 12.0368C23.836 11.2315 23.7541 10.4262 23.5903 9.66188ZM12.0692 22.3007C6.41786 22.3007 1.77666 17.7557 1.74936 12.1596C1.72206 9.3616 2.80046 6.74102 4.76614 4.78923C6.70451 2.86474 9.33907 1.75919 12.0146 1.75919C12.0282 1.75919 12.0282 1.75919 12.0419 1.75919C17.7069 1.77284 22.3207 6.38615 22.3481 12.0368C22.3481 14.7666 21.2833 17.3325 19.3313 19.2843C17.3929 21.2225 14.8266 22.3007 12.0965 22.3007C12.0828 22.3007 12.0828 22.3007 12.0692 22.3007Z"
        fill="#231F20"
      />
      <path
        d="M18.1983 6.48192C18.0755 6.46827 17.939 6.48192 17.8434 6.50922C16.3964 6.93233 14.8676 7.38274 13.1476 7.88775C10.4175 8.70669 7.16866 9.67575 3.86523 10.6721C3.63317 10.7404 3.36016 10.9587 3.27825 11.2317C3.21 11.4774 3.27826 11.7094 3.46936 11.8732C3.57857 11.9688 3.71507 12.0097 3.82428 12.0507C4.32935 12.2417 4.83442 12.4192 5.32584 12.5966C6.40423 12.9788 7.50993 13.3746 8.60197 13.7704C8.56102 14.057 8.53372 14.3437 8.49277 14.6439C8.43817 15.1353 8.41087 15.381 8.39721 15.5448C8.28801 16.5138 8.31531 16.9642 8.31531 17.1553C8.35626 17.947 8.49277 18.0425 8.54737 18.0835C8.79308 18.2336 9.1753 18.0425 9.44831 17.906C9.57116 17.8378 9.72132 17.7559 10.6769 16.9369C10.7315 16.9096 10.7588 16.8687 10.7861 16.8551C10.8816 17.0052 10.9772 17.169 11.0864 17.3191C11.4276 17.8514 11.7689 18.411 12.1238 18.9433C12.1784 19.0252 12.4105 19.3664 12.7654 19.3664C12.779 19.3664 12.779 19.3664 12.7927 19.3664C13.1613 19.3391 13.366 18.9433 13.407 18.8614C13.8028 18.0289 14.1851 17.1963 14.5673 16.3773C14.7857 15.9269 14.9904 15.4629 15.2088 15.0125C15.5228 14.33 15.8504 13.6339 16.1644 12.9515C16.9971 11.1771 17.857 9.33453 18.7034 7.53288C18.8126 7.30085 18.8399 6.95963 18.6897 6.71395C18.6215 6.61841 18.485 6.49557 18.1983 6.48192ZM16.5329 9.06155L12.6698 17.3328L10.2127 13.4974L16.5329 9.06155ZM9.13434 12.5284C8.11055 12.1598 7.07311 11.7913 6.06297 11.4228L14.3762 8.95236C12.6971 10.1262 10.9772 11.3273 9.2845 12.5147C9.22989 12.542 9.21625 12.5557 9.21625 12.5557C9.21625 12.5557 9.18895 12.5557 9.13434 12.5284ZM9.66672 16.0498L9.74862 15.2308L10.0489 15.7085L9.66672 16.0498Z"
        fill="#231F20"
      />
    </svg>
  );
}
export default Share;
