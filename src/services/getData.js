const getData = async () =>
  await fetch("data.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }).then((res) => {
    if (!res.ok) throw new Error("Network response error");
    return res.json();
  });

export default getData;
