const sizes = {
  up(size) {
    const sizes = {
      mobileLg: "430px",
    };
    return `@media(min-width: ${sizes[size]})`;
  },
  down(size) {
    const sizes = {
      laptopSm: "1024px",
      tablet: "800px",
      mobileLg: "430px",
      mobileMd: "375px",
      mobileSm: "343px",
    };
    return `@media(max-width: ${sizes[size]})`;
  },
};

export default sizes;
