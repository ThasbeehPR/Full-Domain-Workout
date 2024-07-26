const user = {
    name: "Thasbii",
    address: {
      street: "123 Main St",
      city: "New York"
    }
  };


  const country = user?.address?.country?.name;
  console.log(country);