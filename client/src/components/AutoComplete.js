import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function AutoComplete() {
  const [term, setTerm] = React.useState("");
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    const timeoutId = setTimeout(async () => {
      if (term) {
        const resData = await fetch(`http://localhost:5000/products/search?name=${term}`)
        const res = await resData.json()
        console.log(res);
        // fullTextSearch(term).then(
        //   (res) => {
            setData(res);
        //   },
        //   (err) => {
        //     console.log(err);
        //   }
        // );
      } else setData([]);
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [term]);

  return (
    <Autocomplete
    
    sx={{px:2}}
      freeSolo
      id="free-solo-2-demo"
      disableClearable
      value={term}
      onKeyUp={(e) => setTerm(e.target.value)}
      options={data.map((option) => option.name)}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search Your Products"
          variant="standard"
          InputProps={{
            ...params.InputProps,
            type: "search",
          }}
        
        />
      )}
    />
  );
}