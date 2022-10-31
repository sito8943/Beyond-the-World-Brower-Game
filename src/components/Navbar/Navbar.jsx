// sito components
import SitoContainer from "sito-container";

// context
import { useUser } from "../../context/UserProvider";

// for test
import { NationsEnum } from "../../models/Nations";

const Navbar = () => {
  const { userState } = useUser();

  const test = NationsEnum.R2FyZGVuIFBhcmsncyBCYW5kaXQgQm95cw.Currencies;

  return (
    <SitoContainer
      alignItems="center"
      sx={{
        height: "100px",
        width: "100%",
        marginBottom: "10px",
        marginTop: "10px",
      }}
    >
      <SitoContainer
        sx={{
          width: "48px",
          height: "48px",

          borderRadius: "100%",
          background: "red",
          marginRight: "10px",
          marginLeft: "10px",
        }}
      ></SitoContainer>
      <SitoContainer
        justifyContent="flex-end"
        alignItems="center"
        className="navbar"
        sx={{ width: "100%", padding: "10px 20px", gap: "30px" }}
      >
        {test.map((item, i) => (
          <SitoContainer
            flexDirection="column"
            alignItems="center"
            key={item.Id}
            sx={{ h5: { margin: 0 } }}
          >
            <h5>{item.Name}</h5>
            <span>{userState.resources[i]}</span>
          </SitoContainer>
        ))}
      </SitoContainer>
    </SitoContainer>
  );
};

export default Navbar;
