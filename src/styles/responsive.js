// import mediaHelper from "styled-media-helper";
// export const media = mediaHelper({
//   sm: 575,
//   md: 768,
//   lg: 1024,
//   xl: 1240,
// });

// export function df(
//   $d = "flex",
//   $ai = "flex-start",
//   $ac = "flex-start",
//   $jc = "flex-start",
//   $fw = "wrap"
// ) {
//   return `
//     display: ${$d};
//     justify-content: ${$jc};
//     align-items: ${$ai};
//     align-content: ${$ac};
//     flex-wrap: ${$fw};
//   `;
// }

const breakPoint = {
  sm: 575,
  md: 768,
  lg: 1024,
  xl: 1240,
};

export const media = {
  up: function (bpn) {
    return `
      @media screen and (min-width: ${breakPoint[bpn]}px)
    `;
  },
  down: function (bpn) {
    return `
      @media screen and (max-width: ${breakPoint[bpn]}px)
    `;
  },
};

// export function media(bpn) {
//   return `
//     @media screen and (min-width: ${breakPoint[bpn]}px)
//   `;
// }
