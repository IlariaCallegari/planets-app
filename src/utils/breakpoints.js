const sizes = {
  up() {},
  down(size) {
    const sizes = {
      laptopSm: "1024px",
      tablet: "800px",
      mobileLg: "427px",
      mobileMd: "375px",
      mobileSm: "343px",
    };
    return `@media(max-width: ${sizes[size]})`;
  },
};

export default sizes;
