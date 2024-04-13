import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 22,
    backgroundColor: '#101010'
  },
  eventDetails: {
    paddingVertical: 32,
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
    paddingHorizontal: 4
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
  },
  listTitle: {
    marginTop: 38,
    marginBottom: 10,
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold'
  },
  emptyListDescription: {
    color: '#8c8c8c',
    fontSize: 16,
    marginTop: 32,
    alignSelf: 'center',
    marginHorizontal: 16
  }
  
})