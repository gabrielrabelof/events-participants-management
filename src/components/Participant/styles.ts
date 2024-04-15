import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#1F1E25',
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
    backgroundColor: '#E23C44',
    height: 52,
    width: 52,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  }
})