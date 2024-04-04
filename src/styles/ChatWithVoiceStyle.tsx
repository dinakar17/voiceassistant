import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  messageInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#fff',
  },
  messageInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    padding: 10,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: '#007bff',
    borderRadius: 20,
    padding: 10,
  },
  sendButtonText: {
    color: '#fff',
  },
  buttonSend: {
    backgroundColor: '#007bff',
    borderRadius: 20,
    padding: 10,
  },
  buttonMicStyle: {
    backgroundColor: '#f0f0f0',
    borderRadius: 50,
    padding: 15,
  },
  buttonRecordingOff: {
    color: '#f00',
    fontSize: 24,
  },
  buttonRecordingOn: {
    color: '#0f0',
    fontSize: 24,
  },
});