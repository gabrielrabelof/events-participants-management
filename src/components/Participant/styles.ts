import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#222222',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10,
    marginHorizontal: 4
  },
  name: {
    fontSize: 16,
    color: '#fff',
    marginLeft: 10
  },
  removeButton: {
    backgroundColor: 'red',
    height: 52,
    width: 52,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  }
})