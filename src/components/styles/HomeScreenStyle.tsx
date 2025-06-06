import { StyleSheet, Platform, Dimensions } from 'react-native';
import { Theme } from '../types/index';

const { width } = Dimensions.get('window');

export const getHomeStyles = (theme: Theme) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme === 'light' ? '#f8f9fa' : '#121212',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme === 'light' ? '#f8f9fa' : '#121212',
  },
  loadingText: {
    marginTop: 18,
    fontSize: 16,
    color: theme === 'light' ? '#666' : '#aaa',
    fontWeight: '500',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  emptyText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme === 'light' ? '#555' : '#ddd',
    marginTop: 24,
    letterSpacing: 0.5,
  },
  emptySubText: {
    fontSize: 16,
    color: theme === 'light' ? '#888' : '#888',
    marginTop: 10,
    marginBottom: 36,
    letterSpacing: 0.3,
  },
  listContent: {
    padding: 16,
    paddingTop: 20,
    paddingBottom: 90,
  },
  entryContainer: {
    position: 'relative',
    borderRadius: 16,
    marginBottom: 20,
    overflow: 'hidden',
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    height: 220,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.35)',
    backgroundGradient: {
      colors: ['rgba(0,0,0,0)', 'rgba(0,0,0,0.8)'],
      start: { x: 0, y: 0 },
      end: { x: 0, y: 1 },
    },
  },
  detailsContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 18,
    paddingBottom: 20,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  addressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  dateRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  coordinatesRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    alignSelf: 'flex-start',
    marginTop: 2,
  },
  icon: {
    marginRight: 8,
  },
  address: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    flex: 1,
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
    letterSpacing: 0.3,
  },
  date: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.9)',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  coordinates: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.8)',
    fontFamily: Platform.select({ ios: 'Menlo', android: 'monospace' }),
  },
  addEntryButton: {
    backgroundColor: '#6200ee',
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 24,
    flexDirection: 'row',
    justifyContent: 'center',
    width: '75%',
    elevation: 6,
    shadowColor: '#6200ee',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  addEntryButtonText: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  fab: {
    position: 'absolute',
    bottom: 28,
    right: 24,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#6200ee',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
    shadowColor: '#6200ee',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  deleteButton: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: 'rgba(244, 67, 54, 0.9)',
    width: 42,
    height: 42,
    borderRadius: 21,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalBackdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'black',
  },
  modalContent: {
    backgroundColor: theme === 'light' ? 'white' : '#1e1e1e',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    height: '85%',
    paddingTop: 10,
    overflow: 'hidden',
    elevation: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -10 },
    shadowOpacity: 0.35,
    shadowRadius: 12,
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: theme === 'light' ? '#eee' : '#333',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme === 'light' ? '#333' : '#eee',
    letterSpacing: 0.3,
  },
  closeButton: {
    position: 'absolute',
    left: 16,
    padding: 8,
    backgroundColor: theme === 'light' ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.1)',
    borderRadius: 20,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalImage: {
    width: '100%',
    height: 280,
  },
  detailSection: {
    padding: 20,
  },
  detailTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: theme === 'light' ? '#333' : '#eee',
    marginBottom: 14,
    letterSpacing: 0.5,
  },
  detailDescription: {
    fontSize: 16,
    lineHeight: 24,
    color: theme === 'light' ? '#555' : '#ccc',
    marginBottom: 24,
    letterSpacing: 0.2,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 18,
  },
  detailIcon: {
    marginRight: 14,
    marginTop: 2,
  },
  detailText: {
    fontSize: 16,
    color: theme === 'light' ? '#444' : '#ddd',
    flex: 1,
    lineHeight: 22,
  },
  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16,
  },
  tag: {
    backgroundColor: theme === 'light' ? '#e0e0e0' : '#333',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
    marginBottom: 10,
  },
  tagText: {
    color: theme === 'light' ? '#555' : '#ddd',
    fontSize: 14,
    fontWeight: '500',
  },
  modalFooter: {
    padding: 18,
    borderTopWidth: 1,
    borderTopColor: theme === 'light' ? '#eee' : '#333',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme === 'light' ? 'white' : '#1e1e1e',
  },
  modalDeleteButton: {
    backgroundColor: '#f44336',
    paddingVertical: 14,
    paddingHorizontal: 36,
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    elevation: 4,
    shadowColor: '#f44336',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  modalCloseButton: {
    backgroundColor: theme === 'light' ? '#6200ee' : '#bb86fc',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginLeft: 8,
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
    letterSpacing: 0.5,
  },
  modalButtonIcon: {
    color: 'white',
  },
  buttonIcon: {
    marginRight: 8,
  },
});