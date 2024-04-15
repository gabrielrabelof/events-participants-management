import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 22,
    backgroundColor: '#131016'
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
    color: '#6B6B6B',
    fontSize: 16
  },
  form: { 
    flexDirection: 'row',
    paddingHorizontal: 4
  },
  input: {
    flex: 1,
    backgroundColor: '#1F1E25',
    color: '#fff',
    marginRight: 12,
    borderRadius: 5,
    paddingLeft: 10
  },
  addButton: {
    backgroundColor: '#31CF67',
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