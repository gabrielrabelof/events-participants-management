import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101010'
  },
  eventDetails: {
    padding: 32,
    marginTop: 12
  },
  eventName: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold'
  },
  eventDate: {
    color: '#8c8c8c',
    fontSize: 16
  },
  form: { 
    flexDirection: 'row',
    marginHorizontal: 28
  },
  nameField: {
    flex: 1,
    backgroundColor: '#222222',
    color: '#fff',
    marginRight: 12,
    borderRadius: 5,
    paddingLeft: 10
  },
  addButton: {
    backgroundColor: 'green',
    height: 52,
    width: 52,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  }
})