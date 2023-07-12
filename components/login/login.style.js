import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 75,
    position: 'relative',
  },
  input: {
    width: 300,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 15,
    borderRadius: 5
  },
  header: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    color: COLORS.primary,
    marginTop: 30,
    marginBottom: 50,
    color: '#0A4481',
  },
  container_header: {
   alignItems: 'center'
  },
  errorText: {
    height: 30,
    textAlign: 'center',
    color: COLORS.tertiary
  },
  btn_login: {
    width: 'auto',
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0A4481",
  },
  loginText: {
    color: "#ffffff",
  },
  text: { 
    textAlign: "center",
    marginTop: 25,
    color: COLORS.text,
    fontSize: SIZES.medium,
    cursor: "pointer",
  },
  loadingIndicator: {
    position: 'absolute',
    bottom: 0,
    left: '50%'
  }
  });

export default styles;